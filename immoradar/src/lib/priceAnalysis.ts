import { prisma } from "./prisma";
import type { PropertyType, TransactionType } from "@prisma/client";

// ─────────────────────────────────────────────────────────────────────────
// Analyse du prix (§13). Ne jamais inventer une estimation : si les données
// disponibles sont insuffisantes, on le dit explicitement plutôt que de
// produire un chiffre arbitraire.
// ─────────────────────────────────────────────────────────────────────────

export type PriceVerdict = "good" | "slightly_high" | "high" | "unknown";

export interface PriceAnalysisResult {
  sufficientData: boolean;
  askedPrice: number;
  estimatedPrice?: number;
  rangeMin?: number;
  rangeMax?: number;
  verdict: PriceVerdict;
  sampleSize?: number;
  methodology: string;
  source?: string;
  computedAt: string;
}

const MIN_SAMPLE_SIZE = 3;

export async function getPriceAnalysis(params: {
  listingId: string;
  city: string;
  propertyType: PropertyType;
  transactionType: TransactionType;
  surface: number;
  price: number;
}): Promise<PriceAnalysisResult> {
  const { listingId, city, propertyType, transactionType, surface, price } = params;

  // 1) Statistique de secteur pré-calculée si disponible (ex: dataset DVF,
  //    ou dataset de démonstration seedé).
  const location = await prisma.location.findFirst({ where: { city } });
  if (location) {
    const stat = await prisma.priceStatistic.findUnique({
      where: {
        locationId_propertyType_transactionType: {
          locationId: location.id,
          propertyType,
          transactionType,
        },
      },
    });
    if (stat && stat.sampleSize >= MIN_SAMPLE_SIZE) {
      return buildResult(price, surface, stat.pricePerSqmMin, stat.pricePerSqmAvg, stat.pricePerSqmMax, stat.sampleSize, stat.source);
    }
  }

  // 2) À défaut, agrégation directe sur les annonces comparables déjà
  //    connues d'ImmoRadar (même ville, même type de bien, même type de
  //    transaction), en excluant l'annonce elle-même.
  const comparables = await prisma.listing.findMany({
    where: {
      city,
      propertyType,
      transactionType,
      id: { not: listingId },
    },
    select: { price: true, surface: true },
    take: 200,
  });

  if (comparables.length < MIN_SAMPLE_SIZE) {
    return {
      sufficientData: false,
      askedPrice: price,
      verdict: "unknown",
      methodology:
        "Comparaison basée sur les annonces similaires (même ville, même type de bien) connues " +
        "d'ImmoRadar. Données insuffisantes pour établir une estimation fiable (minimum 3 annonces " +
        "comparables requises).",
      computedAt: new Date().toISOString(),
    };
  }

  const pricePerSqm = comparables.map((c) => c.price / c.surface).sort((a, b) => a - b);
  const avg = pricePerSqm.reduce((s, v) => s + v, 0) / pricePerSqm.length;
  const min = pricePerSqm[0]!;
  const max = pricePerSqm[pricePerSqm.length - 1]!;

  return buildResult(price, surface, min, avg, max, comparables.length, "listings-aggregate");
}

function buildResult(
  price: number,
  surface: number,
  min: number,
  avg: number,
  max: number,
  sampleSize: number,
  source: string,
): PriceAnalysisResult {
  const estimatedPrice = Math.round(avg * surface);
  const rangeMin = Math.round(min * surface);
  const rangeMax = Math.round(max * surface);
  const ratio = price / estimatedPrice;

  let verdict: PriceVerdict = "good";
  if (ratio > 1.15) verdict = "high";
  else if (ratio > 1.03) verdict = "slightly_high";

  const methodologyBySource: Record<string, string> = {
    "listings-aggregate": `Estimation calculée à partir de ${sampleSize} annonce(s) comparable(s) ` +
      `(même ville, même type de bien, même type de transaction) connues d'ImmoRadar. Cette méthode ` +
      `reflète le marché tel qu'observé sur les sources déjà connectées, pas l'ensemble du marché réel.`,
    "demo-dataset": `Estimation calculée à partir du jeu de données de démonstration (${sampleSize} ` +
      `échantillon(s)). Ces chiffres sont fictifs et ne reflètent pas le marché réel.`,
  };
  if (source.startsWith("dvf-")) {
    const year = source.replace("dvf-", "");
    methodologyBySource[source] =
      `Estimation calculée à partir de ${sampleSize} transaction(s) immobilière(s) réellement ` +
      `enregistrée(s) en ${year} sur cette commune (source : DVF, Demandes de Valeurs Foncières, ` +
      `data.gouv.fr/DGFiP — vente déjà conclue, pas une annonce en cours). Ne sont retenues que les ` +
      `mutations portant sur un seul logement avec surface connue, pour éviter de fausser le prix au m².`;
  }

  return {
    sufficientData: true,
    askedPrice: price,
    estimatedPrice,
    rangeMin,
    rangeMax,
    verdict,
    sampleSize,
    source,
    methodology: methodologyBySource[source] ?? `Estimation basée sur ${sampleSize} échantillon(s) (source : ${source}).`,
    computedAt: new Date().toISOString(),
  };
}
