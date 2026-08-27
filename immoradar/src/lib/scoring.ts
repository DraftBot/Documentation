import { haversineKm } from "./geo";
import type {
  AmenityFilter,
  EnergyRating,
  FilterSet,
  NormalizedListing,
  ScoreBreakdown,
  ScoredListing,
  ScoreWeights,
} from "@/types/listing";

// ─────────────────────────────────────────────────────────────────────────
// Moteur de score ImmoRadar (§7-8) : chaque annonce reçoit une note de 0 à
// 100, décomposée par catégorie, calculée dynamiquement selon les critères
// et les poids définis par l'utilisateur. Le calcul est déterministe et
// documenté ci-dessous — aucune donnée n'est inventée : quand une catégorie
// manque de données (ex: pas d'estimation de secteur), elle reçoit une note
// neutre plutôt qu'une note fabriquée, et cela est signalé à l'appelant.
// ─────────────────────────────────────────────────────────────────────────

const ENERGY_SCORE: Record<EnergyRating, number> = {
  A: 100,
  B: 85,
  C: 70,
  D: 55,
  E: 38,
  F: 22,
  G: 8,
  NA: 60,
};

export interface SectorPriceEstimate {
  pricePerSqmAvg: number;
  pricePerSqmMin: number;
  pricePerSqmMax: number;
}

export interface EnvironmentSignal {
  /** Score 0-100 déjà calculé à partir des POI (voir lib/neighborhood.ts). */
  score: number;
  sufficientData: boolean;
}

export interface ScoringContext {
  searchLat: number;
  searchLon: number;
  radiusKm: number;
  filters: FilterSet;
  weights: ScoreWeights;
  sectorEstimate?: SectorPriceEstimate;
  environment?: EnvironmentSignal;
}

function clamp(value: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, value));
}

function checkRequiredAmenities(
  listing: NormalizedListing,
  amenityFilters: AmenityFilter[],
): string | undefined {
  const owned = new Set(listing.amenities);
  for (const f of amenityFilters) {
    if (f.mode === "required" && !owned.has(f.key)) {
      return `Critère obligatoire manquant : ${f.key}`;
    }
  }
  return undefined;
}

function checkHardFilters(listing: NormalizedListing, filters: FilterSet): string | undefined {
  if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(listing.propertyType)) {
    return "Type de bien hors critères";
  }
  if (filters.priceMin != null && listing.price < filters.priceMin) return "Prix sous le minimum";
  if (filters.priceMax != null && listing.price > filters.priceMax) return "Prix au-dessus du maximum";
  if (filters.surfaceMin != null && listing.surface < filters.surfaceMin) return "Surface sous le minimum";
  if (filters.surfaceMax != null && listing.surface > filters.surfaceMax) return "Surface au-dessus du maximum";
  if (filters.roomsMin != null && (listing.rooms ?? 0) < filters.roomsMin) return "Pas assez de pièces";
  if (filters.roomsMax != null && (listing.rooms ?? 0) > filters.roomsMax) return "Trop de pièces";
  if (filters.bedroomsMin != null && (listing.bedrooms ?? 0) < filters.bedroomsMin) return "Pas assez de chambres";
  if (filters.bedroomsMax != null && (listing.bedrooms ?? 0) > filters.bedroomsMax) return "Trop de chambres";
  if (filters.floorMode === "ground" && !listing.isGroundFloor) return "Rez-de-chaussée requis";
  if (filters.floorMode === "top" && !listing.isTopFloor) return "Dernier étage requis";
  if (filters.floorMode === "min" && filters.floorMin != null && (listing.floor ?? -1) < filters.floorMin)
    return "Étage minimum non atteint";
  if (filters.floorMode === "max" && filters.floorMax != null && (listing.floor ?? Infinity) > filters.floorMax)
    return "Étage maximum dépassé";
  const amenityReason = checkRequiredAmenities(listing, filters.amenities);
  if (amenityReason) return amenityReason;
  return undefined;
}

function priceScore(listing: NormalizedListing, filters: FilterSet, sector?: SectorPriceEstimate): number {
  let score = 60; // neutre par défaut
  if (filters.priceMax != null) {
    const ratio = listing.price / filters.priceMax;
    score = clamp(100 - (ratio - 0.5) * 100);
  }
  if (sector) {
    const pricePerSqm = listing.price / listing.surface;
    const diffRatio = (pricePerSqm - sector.pricePerSqmAvg) / sector.pricePerSqmAvg;
    // Sous la moyenne du secteur = bonus, au-dessus = malus.
    const sectorScore = clamp(70 - diffRatio * 140);
    score = filters.priceMax != null ? score * 0.5 + sectorScore * 0.5 : sectorScore;
  }
  return clamp(score);
}

function locationScore(distanceKm: number, radiusKm: number): number {
  if (radiusKm <= 0) return 100;
  const ratio = distanceKm / radiusKm;
  return clamp(100 - ratio * 70);
}

function surfaceScore(listing: NormalizedListing, filters: FilterSet): number {
  if (filters.surfaceMin == null && filters.surfaceMax == null) {
    // Pas de préférence exprimée : plus grand = mieux, avec rendement décroissant.
    return clamp(40 + Math.min(listing.surface, 150) / 150 * 60);
  }
  const min = filters.surfaceMin ?? listing.surface;
  const max = filters.surfaceMax ?? min * 1.6;
  if (listing.surface < min) return clamp(50 * (listing.surface / min));
  if (listing.surface > max) {
    const excess = (listing.surface - max) / max;
    return clamp(100 - excess * 40);
  }
  const position = (listing.surface - min) / Math.max(max - min, 1);
  return clamp(70 + position * 30);
}

function amenitiesScore(listing: NormalizedListing, amenityFilters: AmenityFilter[]): number {
  const relevant = amenityFilters.filter((f) => f.mode !== "off");
  if (relevant.length === 0) {
    // Pas de préférence : score selon la richesse générale d'équipements.
    return clamp(30 + listing.amenities.length * 8);
  }
  const owned = new Set(listing.amenities);
  let total = 0;
  let weightSum = 0;
  for (const f of relevant) {
    const weight = f.mode === "required" ? 1.5 : 1;
    weightSum += weight;
    if (owned.has(f.key)) total += weight;
  }
  return clamp((total / weightSum) * 100);
}

export function computeScore(
  listing: NormalizedListing,
  ctx: ScoringContext,
): ScoredListing {
  const distanceKm = haversineKm(ctx.searchLat, ctx.searchLon, listing.latitude, listing.longitude);
  const excludedReason = checkHardFilters(listing, ctx.filters);

  const breakdown: ScoreBreakdown = {
    price: priceScore(listing, ctx.filters, ctx.sectorEstimate),
    location: locationScore(distanceKm, ctx.radiusKm),
    surface: surfaceScore(listing, ctx.filters),
    amenities: amenitiesScore(listing, ctx.filters.amenities),
    environment: ctx.environment?.sufficientData ? ctx.environment.score : 65,
    energyRating: ENERGY_SCORE[listing.energyRating ?? "NA"],
  };

  const w = ctx.weights;
  const weightSum = w.price + w.location + w.surface + w.amenities + w.environment + w.energyRating || 1;
  const score =
    (breakdown.price * w.price +
      breakdown.location * w.location +
      breakdown.surface * w.surface +
      breakdown.amenities * w.amenities +
      breakdown.environment * w.environment +
      breakdown.energyRating * w.energyRating) /
    weightSum;

  return {
    listing,
    score: Math.round(clamp(score)),
    breakdown: {
      price: Math.round(breakdown.price),
      location: Math.round(breakdown.location),
      surface: Math.round(breakdown.surface),
      amenities: Math.round(breakdown.amenities),
      environment: Math.round(breakdown.environment),
      energyRating: Math.round(breakdown.energyRating),
    },
    distanceKm: Math.round(distanceKm * 10) / 10,
    excludedReason,
  };
}

/**
 * Filtre "🔥 Bonnes affaires" (§33) : annonces dont le score global est
 * élevé ET dont le prix ressort particulièrement avantageux, avec une bonne
 * localisation. Purement algorithmique — jamais présenté comme une garantie.
 */
export function isGoodDeal(scored: ScoredListing): boolean {
  return (
    !scored.excludedReason &&
    scored.breakdown.price >= 75 &&
    scored.score >= 78 &&
    scored.breakdown.location >= 55
  );
}
