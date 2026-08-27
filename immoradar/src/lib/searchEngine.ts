import { prisma } from "./prisma";
import { boundingBox, haversineKm } from "./geo";
import { toNormalizedListing, listingWithRelations, type ListingWithRelations } from "./listingAdapter";
import { computeScore, isGoodDeal, type SectorPriceEstimate } from "./scoring";
import type { SearchRequest } from "./validation";
import { DEFAULT_FILTERS, DEFAULT_WEIGHTS, type NormalizedListing, type ScoredListing } from "@/types/listing";

export interface SearchResultItem extends ScoredListing {
  listing: NormalizedListing & { id: string };
  dedupGroupId: string;
  duplicateSources: string[];
  goodDeal: boolean;
}

export interface SearchResponse {
  results: SearchResultItem[];
  total: number;
  page: number;
  pageSize: number;
}

const SORTERS: Record<string, (a: SearchResultItem, b: SearchResultItem) => number> = {
  relevance: (a, b) => b.score - a.score,
  price_asc: (a, b) => a.listing.price - b.listing.price,
  price_desc: (a, b) => b.listing.price - a.listing.price,
  surface: (a, b) => b.listing.surface - a.listing.surface,
  distance: (a, b) => a.distanceKm - b.distanceKm,
  recent: (a, b) =>
    new Date(b.listing.publishedAt ?? 0).getTime() - new Date(a.listing.publishedAt ?? 0).getTime(),
  value: (a, b) => b.breakdown.price + b.score - (a.breakdown.price + a.score),
};

/**
 * Choisit l'annonce "principale" d'un groupe de doublons : celle dont la
 * description est la plus complète (heuristique simple, sans inventer de
 * hiérarchie entre sources).
 */
function pickPrimary(group: ListingWithRelations[]): ListingWithRelations {
  return group.reduce((best, cur) =>
    (cur.description?.length ?? 0) > (best.description?.length ?? 0) ? cur : best,
  );
}

export async function runSearch(req: SearchRequest): Promise<SearchResponse> {
  const box = boundingBox(req.latitude, req.longitude, req.radiusKm);

  const dbFilters: Record<string, unknown> = {
    latitude: { gte: box.minLat, lte: box.maxLat },
    longitude: { gte: box.minLon, lte: box.maxLon },
    transactionType: req.filters.transactionType,
  };
  if (req.filters.propertyTypes.length > 0) dbFilters.propertyType = { in: req.filters.propertyTypes };

  const candidates = await prisma.listing.findMany({
    where: dbFilters,
    ...listingWithRelations,
    take: 500,
  });

  // Regroupement des doublons.
  const groups = new Map<string, ListingWithRelations[]>();
  for (const listing of candidates) {
    const arr = groups.get(listing.dedupGroupId) ?? [];
    arr.push(listing);
    groups.set(listing.dedupGroupId, arr);
  }

  // Estimations de secteur (prix), une requête groupée pour tous les segments présents.
  const segments = new Set(candidates.map((c) => `${c.city}::${c.propertyType}::${c.transactionType}`));
  const sectorEstimates = new Map<string, SectorPriceEstimate>();
  for (const segment of segments) {
    const [city, propertyType, transactionType] = segment.split("::");
    const location = await prisma.location.findFirst({ where: { city } });
    if (!location) continue;
    const stat = await prisma.priceStatistic.findUnique({
      where: {
        locationId_propertyType_transactionType: {
          locationId: location.id,
          propertyType: propertyType as never,
          transactionType: transactionType as never,
        },
      },
    });
    if (stat) {
      sectorEstimates.set(segment, {
        pricePerSqmMin: stat.pricePerSqmMin,
        pricePerSqmAvg: stat.pricePerSqmAvg,
        pricePerSqmMax: stat.pricePerSqmMax,
      });
    }
  }

  const results: SearchResultItem[] = [];

  for (const [dedupGroupId, group] of groups) {
    const primary = pickPrimary(group);
    const distanceKm = haversineKm(req.latitude, req.longitude, primary.latitude, primary.longitude);
    if (distanceKm > req.radiusKm) continue;

    const normalized = toNormalizedListing(primary);
    const segmentKey = `${primary.city}::${primary.propertyType}::${primary.transactionType}`;

    const scored = computeScore(normalized, {
      searchLat: req.latitude,
      searchLon: req.longitude,
      radiusKm: req.radiusKm,
      filters: req.filters,
      weights: req.weights,
      sectorEstimate: sectorEstimates.get(segmentKey),
    });

    if (scored.excludedReason) continue;

    const duplicateSources = Array.from(new Set(group.flatMap((l) => l.sources.map((s) => s.sourceName))));
    const goodDeal = isGoodDeal(scored);
    if (req.filters.goodDealsOnly && !goodDeal) continue;

    results.push({
      ...scored,
      listing: { ...normalized, id: primary.id },
      dedupGroupId,
      duplicateSources,
      goodDeal,
    });
  }

  const sorter = SORTERS[req.sort ?? "relevance"] ?? SORTERS.relevance!;
  results.sort(sorter);

  const total = results.length;
  const start = (req.page - 1) * req.pageSize;
  const page = results.slice(start, start + req.pageSize);

  return { results: page, total, page: req.page, pageSize: req.pageSize };
}

/**
 * Construit un `SearchResultItem` hors contexte de recherche active (pages
 * favoris / comparateur) : le score reflète alors une évaluation générale
 * du logement plutôt qu'une correspondance à des critères précis.
 */
export function toGenericResultItem(row: ListingWithRelations, duplicateSources: string[]): SearchResultItem {
  const normalized = toNormalizedListing(row);
  const scored = computeScore(normalized, {
    searchLat: row.latitude,
    searchLon: row.longitude,
    radiusKm: 5,
    filters: DEFAULT_FILTERS,
    weights: DEFAULT_WEIGHTS,
  });
  return {
    ...scored,
    listing: { ...normalized, id: row.id },
    dedupGroupId: row.dedupGroupId,
    duplicateSources,
    goodDeal: isGoodDeal(scored),
  };
}
