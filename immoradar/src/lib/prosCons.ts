import type { PriceAnalysisResult } from "./priceAnalysis";
import type { NeighborhoodAnalysis } from "./neighborhood";
import type { NormalizedListing } from "@/types/listing";
import { amenityLabel } from "./amenities";

// ─────────────────────────────────────────────────────────────────────────
// Avantages / inconvénients (§15). Générés uniquement à partir de signaux
// vérifiables (prix, quartier, équipements, DPE) — jamais présentés comme
// une certitude lorsque la donnée sous-jacente est incertaine ou absente.
// ─────────────────────────────────────────────────────────────────────────

export interface ProsCons {
  pros: string[];
  cons: string[];
}

export function computeProsCons(
  listing: NormalizedListing,
  priceAnalysis: PriceAnalysisResult,
  neighborhood: NeighborhoodAnalysis,
): ProsCons {
  const pros: string[] = [];
  const cons: string[] = [];

  if (priceAnalysis.sufficientData) {
    if (priceAnalysis.verdict === "good") pros.push("Loyer inférieur ou conforme à la moyenne du secteur");
    if (priceAnalysis.verdict === "high") cons.push("Loyer supérieur à la moyenne du secteur");
  }

  if (neighborhood.sufficientData) {
    const grocery = neighborhood.byCategory.GROCERY[0];
    if (grocery && grocery.distanceKm <= 0.5) pros.push(`Commerce alimentaire à moins de 500 m (${grocery.name})`);
    const transport = neighborhood.byCategory.TRANSPORT[0];
    if (transport && transport.distanceKm <= 0.6) pros.push(`Transport en commun à proximité (${Math.round(transport.distanceKm * 1000)} m)`);
    else if (!transport) cons.push("Aucun arrêt de transport recensé à proximité immédiate");
    const education = neighborhood.byCategory.EDUCATION[0];
    if (education && education.distanceKm <= 0.8) pros.push(`École à proximité (${Math.round(education.distanceKm * 1000)} m)`);
    const leisure = neighborhood.byCategory.LEISURE[0];
    if (leisure && leisure.distanceKm <= 1) pros.push(`Espace vert ou loisir à proximité (${leisure.name})`);
    const totalPois = Object.values(neighborhood.byCategory).reduce((s, arr) => s + arr.length, 0);
    if (totalPois <= 2) cons.push("Peu de services recensés dans le voisinage immédiat");
  }

  for (const amenity of listing.amenities) {
    if (["balcony", "terrace", "garden", "garage", "parking", "elevator"].includes(amenity)) {
      pros.push(amenityLabel(amenity));
    }
  }

  if (listing.energyRating === "A" || listing.energyRating === "B") {
    pros.push(`Bonne performance énergétique (DPE ${listing.energyRating})`);
  }
  if (listing.energyRating === "F" || listing.energyRating === "G") {
    cons.push(`DPE faible (classe ${listing.energyRating}) — charges de chauffage potentiellement élevées`);
  }

  return { pros: dedupe(pros), cons: dedupe(cons) };
}

function dedupe(list: string[]): string[] {
  return Array.from(new Set(list));
}
