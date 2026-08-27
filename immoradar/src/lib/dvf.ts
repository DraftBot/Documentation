import { createGunzip } from "zlib";
import { Readable } from "stream";
import type { PrismaClient, PropertyType } from "@prisma/client";

// ─────────────────────────────────────────────────────────────────────────
// Import DVF (Demandes de Valeurs Foncières) — jeu de données public et
// gratuit du gouvernement français (DGFiP/Etalab), distribué sous forme de
// fichiers CSV géolocalisés par département ("geo-dvf"). Contient les
// transactions immobilières RÉELLEMENT réalisées (vente déjà conclue), pas
// des annonces en cours. Utilisé ici uniquement pour alimenter l'analyse de
// prix (§13) avec des statistiques réelles et vérifiables, sur l'ensemble
// du territoire — jamais pour fabriquer de fausses annonces.
//
// Méthodologie (documentée aussi dans /donnees) : DVF répète le prix total
// d'une mutation sur chacune de ses lignes (une mutation peut regrouper
// plusieurs lots : logement + cave + parking...). Pour éviter de fausser le
// prix au m², on ne retient que les mutations "Vente" ne comportant qu'une
// seule ligne de type Maison ou Appartement avec une surface bâtie connue.
// ─────────────────────────────────────────────────────────────────────────

const BASE_URL = process.env.DVF_DATASET_URL ?? "https://files.data.gouv.fr/geo-dvf/latest/csv";

interface DvfRow {
  id_mutation: string;
  nature_mutation: string;
  valeur_fonciere: string;
  code_postal: string;
  code_commune: string;
  nom_commune: string;
  type_local: string;
  surface_reelle_bati: string;
  latitude: string;
  longitude: string;
}

const DVF_TYPE_TO_PROPERTY_TYPE: Record<string, PropertyType> = {
  Maison: "HOUSE",
  Appartement: "APARTMENT",
};

/** Parseur CSV minimal mais correct (gère les champs entre guillemets). */
function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        cur += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      fields.push(cur);
      cur = "";
    } else {
      cur += c;
    }
  }
  fields.push(cur);
  return fields;
}

async function* streamDvfRows(department: string, year: number): AsyncGenerator<DvfRow> {
  const url = `${BASE_URL}/${year}/departements/${department}.csv.gz`;
  const res = await fetch(url);
  if (!res.ok || !res.body) {
    throw new Error(`Fichier DVF introuvable pour le département ${department} (${year}) : HTTP ${res.status}`);
  }

  const gunzip = createGunzip();
  const nodeStream = Readable.fromWeb(res.body as never);
  nodeStream.pipe(gunzip);

  let header: string[] | null = null;
  let buffer = "";

  for await (const chunk of gunzip) {
    buffer += (chunk as Buffer).toString("utf-8");
    let idx: number;
    while ((idx = buffer.indexOf("\n")) !== -1) {
      const line = buffer.slice(0, idx).replace(/\r$/, "");
      buffer = buffer.slice(idx + 1);
      if (!line) continue;

      const fields = parseCsvLine(line);
      if (!header) {
        header = fields;
        continue;
      }
      const row: Record<string, string> = {};
      header.forEach((key, i) => (row[key] = fields[i] ?? ""));
      yield row as unknown as DvfRow;
    }
  }
}

export interface DvfImportResult {
  department: string;
  year: number;
  mutationsProcessed: number;
  usableSales: number;
  communesUpdated: number;
}

export async function importDvfDepartment(
  prisma: PrismaClient,
  department: string,
  year: number,
): Promise<DvfImportResult> {
  // On regroupe par id_mutation pour ne garder que les ventes "propres"
  // (un seul lot Maison/Appartement avec surface connue).
  const mutations = new Map<string, DvfRow[]>();

  for await (const row of streamDvfRows(department, year)) {
    if (row.nature_mutation !== "Vente") continue;
    const arr = mutations.get(row.id_mutation) ?? [];
    arr.push(row);
    mutations.set(row.id_mutation, arr);
  }

  // commune+type -> échantillons de prix/m²
  const samples = new Map<
    string,
    { city: string; postalCode: string; propertyType: PropertyType; lat: number; lon: number; pricesPerSqm: number[] }
  >();

  let usableSales = 0;
  for (const rows of mutations.values()) {
    const dwellingRows = rows.filter((r) => r.type_local === "Maison" || r.type_local === "Appartement");
    if (dwellingRows.length !== 1) continue; // mutation multi-lots : on l'écarte (prix ambigu)
    const row = dwellingRows[0]!;

    const price = parseFloat(row.valeur_fonciere);
    const surface = parseFloat(row.surface_reelle_bati);
    const lat = parseFloat(row.latitude);
    const lon = parseFloat(row.longitude);
    if (!price || !surface || surface < 9 || !Number.isFinite(lat) || !Number.isFinite(lon)) continue;

    const propertyType = DVF_TYPE_TO_PROPERTY_TYPE[row.type_local];
    if (!propertyType) continue;

    const key = `${row.code_commune}::${propertyType}`;
    const bucket = samples.get(key) ?? {
      city: row.nom_commune,
      postalCode: row.code_postal,
      propertyType,
      lat,
      lon,
      pricesPerSqm: [],
    };
    bucket.pricesPerSqm.push(price / surface);
    samples.set(key, bucket);
    usableSales++;
  }

  let communesUpdated = 0;
  for (const bucket of samples.values()) {
    if (bucket.pricesPerSqm.length < 3) continue; // seuil minimal de fiabilité, cf. priceAnalysis.ts

    const sorted = [...bucket.pricesPerSqm].sort((a, b) => a - b);
    const avg = sorted.reduce((s, v) => s + v, 0) / sorted.length;

    const slug = bucket.city.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const location = await prisma.location.upsert({
      where: { slug },
      update: {},
      create: { slug, city: bucket.city, postalCode: bucket.postalCode, latitude: bucket.lat, longitude: bucket.lon },
    });

    await prisma.priceStatistic.upsert({
      where: {
        locationId_propertyType_transactionType: {
          locationId: location.id,
          propertyType: bucket.propertyType,
          transactionType: "BUY",
        },
      },
      update: {
        sampleSize: sorted.length,
        pricePerSqmMin: sorted[0]!,
        pricePerSqmAvg: avg,
        pricePerSqmMax: sorted[sorted.length - 1]!,
        source: `dvf-${year}`,
        computedAt: new Date(),
      },
      create: {
        locationId: location.id,
        propertyType: bucket.propertyType,
        transactionType: "BUY",
        sampleSize: sorted.length,
        pricePerSqmMin: sorted[0]!,
        pricePerSqmAvg: avg,
        pricePerSqmMax: sorted[sorted.length - 1]!,
        source: `dvf-${year}`,
      },
    });
    communesUpdated++;
  }

  return { department, year, mutationsProcessed: mutations.size, usableSales, communesUpdated };
}

// Départements métropolitains + Corse + DOM (codes INSEE à 2-3 caractères).
export const ALL_FRENCH_DEPARTMENTS: string[] = [
  ...Array.from({ length: 95 }, (_, i) => String(i + 1).padStart(2, "0")).filter((d) => d !== "20"),
  "2A",
  "2B",
  "971",
  "972",
  "973",
  "974",
  "976",
];
