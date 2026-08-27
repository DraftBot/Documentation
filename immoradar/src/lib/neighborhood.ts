import { haversineKm } from "./geo";

// ─────────────────────────────────────────────────────────────────────────
// Analyse du quartier (§14) via Overpass API (données OpenStreetMap),
// gratuite et sans clé. On interroge les points d'intérêt réels autour du
// logement, catégorisés, puis on calcule leur distance exacte. Si l'appel
// échoue (réseau, quota Overpass), on renvoie explicitement
// `sufficientData: false` plutôt que d'inventer des distances.
// ─────────────────────────────────────────────────────────────────────────

export type PoiCategory =
  | "GROCERY"
  | "SHOP"
  | "HEALTH"
  | "EDUCATION"
  | "TRANSPORT"
  | "FOOD"
  | "LEISURE";

export const POI_CATEGORY_LABELS: Record<PoiCategory, { label: string; icon: string }> = {
  GROCERY: { label: "Commerces alimentaires", icon: "🛒" },
  SHOP: { label: "Commerces", icon: "🏬" },
  HEALTH: { label: "Santé", icon: "🏥" },
  EDUCATION: { label: "Éducation", icon: "🎓" },
  TRANSPORT: { label: "Transport", icon: "🚆" },
  FOOD: { label: "Vie quotidienne", icon: "🍽️" },
  LEISURE: { label: "Loisirs", icon: "🌳" },
};

// Filtres Overpass (clé=valeur OSM) associés à chaque catégorie du produit.
const OVERPASS_FILTERS: Record<PoiCategory, string[]> = {
  GROCERY: ['shop=supermarket', 'shop=bakery', 'shop=convenience'],
  SHOP: ['shop=mall', 'shop=department_store'],
  HEALTH: ['amenity=pharmacy', 'amenity=doctors', 'amenity=hospital', 'amenity=dentist'],
  EDUCATION: ['amenity=school', 'amenity=kindergarten', 'amenity=college'],
  TRANSPORT: ['railway=station', 'highway=bus_stop', 'amenity=bus_station'],
  FOOD: ['amenity=restaurant', 'amenity=cafe', 'amenity=bar'],
  LEISURE: ['leisure=park', 'leisure=fitness_centre', 'leisure=swimming_pool', 'amenity=cinema'],
};

export interface NearbyPoi {
  category: PoiCategory;
  name: string;
  distanceKm: number;
  latitude: number;
  longitude: number;
}

export interface NeighborhoodAnalysis {
  sufficientData: boolean;
  radiusKm: number;
  byCategory: Record<PoiCategory, NearbyPoi[]>;
  fetchedAt: string;
  source: "overpass";
  error?: string;
}

const OVERPASS_URL = process.env.OVERPASS_BASE_URL ?? "https://overpass-api.de/api/interpreter";
const SEARCH_RADIUS_M = 1500;

function buildQuery(lat: number, lon: number): string {
  const clauses = Object.values(OVERPASS_FILTERS)
    .flat()
    .map((filter) => {
      const [key, value] = filter.split("=");
      return `node["${key}"="${value}"](around:${SEARCH_RADIUS_M},${lat},${lon});`;
    })
    .join("\n");
  return `[out:json][timeout:15];(${clauses});out center 60;`;
}

function categoryFor(tags: Record<string, string>): PoiCategory | null {
  for (const [category, filters] of Object.entries(OVERPASS_FILTERS) as [PoiCategory, string[]][]) {
    for (const filter of filters) {
      const [key, value] = filter.split("=");
      if (key && tags[key] === value) return category;
    }
  }
  return null;
}

const emptyByCategory = (): Record<PoiCategory, NearbyPoi[]> => ({
  GROCERY: [],
  SHOP: [],
  HEALTH: [],
  EDUCATION: [],
  TRANSPORT: [],
  FOOD: [],
  LEISURE: [],
});

export async function getNeighborhoodAnalysis(
  latitude: number,
  longitude: number,
): Promise<NeighborhoodAnalysis> {
  try {
    const res = await fetch(OVERPASS_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: buildQuery(latitude, longitude),
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`Overpass a répondu ${res.status}`);
    const data = (await res.json()) as {
      elements: Array<{ lat: number; lon: number; tags?: Record<string, string> }>;
    };

    const byCategory = emptyByCategory();
    for (const el of data.elements) {
      if (!el.tags) continue;
      const category = categoryFor(el.tags);
      if (!category) continue;
      const name = el.tags.name ?? POI_CATEGORY_LABELS[category].label;
      const distanceKm = haversineKm(latitude, longitude, el.lat, el.lon);
      byCategory[category].push({ category, name, distanceKm, latitude: el.lat, longitude: el.lon });
    }
    for (const category of Object.keys(byCategory) as PoiCategory[]) {
      byCategory[category].sort((a, b) => a.distanceKm - b.distanceKm);
      byCategory[category] = byCategory[category].slice(0, 8);
    }

    return {
      sufficientData: true,
      radiusKm: SEARCH_RADIUS_M / 1000,
      byCategory,
      fetchedAt: new Date().toISOString(),
      source: "overpass",
    };
  } catch (err) {
    return {
      sufficientData: false,
      radiusKm: SEARCH_RADIUS_M / 1000,
      byCategory: emptyByCategory(),
      fetchedAt: new Date().toISOString(),
      source: "overpass",
      error: err instanceof Error ? err.message : "Erreur inconnue lors de l'appel à Overpass API.",
    };
  }
}

/** Score 0-100 dérivé de la densité/proximité des POI, pour le moteur de score. */
export function environmentScoreFrom(analysis: NeighborhoodAnalysis): number {
  if (!analysis.sufficientData) return 65;
  let score = 40;
  for (const category of Object.keys(analysis.byCategory) as PoiCategory[]) {
    const items = analysis.byCategory[category];
    if (items.length === 0) continue;
    const closest = items[0]!.distanceKm;
    const proximityBonus = Math.max(0, 10 - closest * 8);
    score += Math.min(10, proximityBonus);
  }
  return Math.max(0, Math.min(100, score));
}
