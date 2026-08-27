import { haversineKm } from "./geo";
import type { NormalizedListing } from "@/types/listing";

// ─────────────────────────────────────────────────────────────────────────
// Détection de doublons (§10) : la même annonce réelle peut apparaître sur
// plusieurs sources. On calcule un score de similarité entre une nouvelle
// annonce entrante et les annonces déjà connues ; au-delà d'un seuil, elles
// sont regroupées sous le même `dedupGroupId` et présentées comme une seule
// fiche avec "disponible sur N sources".
// ─────────────────────────────────────────────────────────────────────────

export interface DedupCandidate {
  id: string;
  dedupGroupId: string;
  latitude: number;
  longitude: number;
  price: number;
  surface: number;
  rooms: number | null;
  city: string;
  description: string | null;
}

const WEIGHTS = {
  location: 0.35,
  price: 0.25,
  surface: 0.2,
  rooms: 0.1,
  text: 0.1,
};

const MATCH_THRESHOLD = 0.82;
// Au-delà de cette distance, deux annonces ne peuvent structurellement pas
// être le même logement — on ne calcule même pas le reste du score.
const MAX_LOCATION_DISTANCE_KM = 0.15;

function locationScore(a: DedupCandidate, b: DedupCandidate): number {
  const distanceKm = haversineKm(a.latitude, a.longitude, b.latitude, b.longitude);
  if (distanceKm > MAX_LOCATION_DISTANCE_KM) return 0;
  return 1 - distanceKm / MAX_LOCATION_DISTANCE_KM;
}

function closeness(a: number, b: number, tolerance: number): number {
  const diff = Math.abs(a - b) / Math.max(a, b, 1);
  return Math.max(0, 1 - diff / tolerance);
}

function textSimilarity(a: string | null, b: string | null): number {
  if (!a || !b) return 0.5; // ni pénalisant ni décisif si l'un manque
  const wordsA = new Set(normalizeWords(a));
  const wordsB = new Set(normalizeWords(b));
  if (wordsA.size === 0 || wordsB.size === 0) return 0.5;
  let intersection = 0;
  for (const w of wordsA) if (wordsB.has(w)) intersection++;
  const union = new Set([...wordsA, ...wordsB]).size;
  return union === 0 ? 0 : intersection / union;
}

function normalizeWords(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3);
}

export function similarityScore(a: DedupCandidate, b: DedupCandidate): number {
  const loc = locationScore(a, b);
  if (loc === 0) return 0;
  const price = closeness(a.price, b.price, 0.08);
  const surface = closeness(a.surface, b.surface, 0.1);
  const rooms = a.rooms != null && b.rooms != null ? (a.rooms === b.rooms ? 1 : 0) : 0.5;
  const text = textSimilarity(a.description, b.description);

  return (
    loc * WEIGHTS.location +
    price * WEIGHTS.price +
    surface * WEIGHTS.surface +
    rooms * WEIGHTS.rooms +
    text * WEIGHTS.text
  );
}

/**
 * Trouve, parmi les annonces déjà en base, celle qui correspond le mieux à
 * `candidate`. Renvoie son `dedupGroupId` si le score dépasse le seuil,
 * sinon `null` (nouvelle annonce = nouveau groupe).
 */
export function findMatchingGroup(
  candidate: DedupCandidate,
  existing: DedupCandidate[],
): { dedupGroupId: string; score: number } | null {
  let best: { dedupGroupId: string; score: number } | null = null;
  for (const other of existing) {
    if (other.id === candidate.id) continue;
    const score = similarityScore(candidate, other);
    if (score >= MATCH_THRESHOLD && (!best || score > best.score)) {
      best = { dedupGroupId: other.dedupGroupId, score };
    }
  }
  return best;
}

export function toDedupCandidate(listing: NormalizedListing, groupId: string): DedupCandidate {
  return {
    id: listing.id,
    dedupGroupId: groupId,
    latitude: listing.latitude,
    longitude: listing.longitude,
    price: listing.price,
    surface: listing.surface,
    rooms: listing.rooms ?? null,
    city: listing.city,
    description: listing.description ?? null,
  };
}
