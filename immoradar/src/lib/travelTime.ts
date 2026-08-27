// ─────────────────────────────────────────────────────────────────────────
// Temps de trajet (§16). Sans ORS_API_KEY configurée, le module reste actif
// dans l'interface mais renvoie explicitement `available: false` plutôt que
// d'inventer une durée. Voir .env.example pour l'obtention d'une clé
// OpenRouteService (plan gratuit disponible).
// ─────────────────────────────────────────────────────────────────────────

export type TravelMode = "driving-car" | "cycling-regular" | "foot-walking";

export const TRAVEL_MODE_LABELS: Record<TravelMode, string> = {
  "driving-car": "🚗 Voiture",
  "cycling-regular": "🚲 Vélo",
  "foot-walking": "🚶 Marche",
};

export interface TravelTimeResult {
  available: boolean;
  durationMin?: number;
  distanceKm?: number;
  reason?: string;
}

export async function getTravelTime(
  origin: { lat: number; lon: number },
  destination: { lat: number; lon: number },
  mode: TravelMode,
): Promise<TravelTimeResult> {
  const apiKey = process.env.ORS_API_KEY;
  if (!apiKey) {
    return {
      available: false,
      reason:
        "Module non configuré : aucune clé ORS_API_KEY définie. Voir .env.example pour activer le calcul de temps de trajet (OpenRouteService).",
    };
  }

  try {
    const res = await fetch(`https://api.openrouteservice.org/v2/directions/${mode}`, {
      method: "POST",
      headers: { Authorization: apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ coordinates: [[origin.lon, origin.lat], [destination.lon, destination.lat]] }),
    });
    if (!res.ok) {
      return { available: false, reason: `Le service de calcul d'itinéraire a répondu une erreur (${res.status}).` };
    }
    const data = await res.json();
    const summary = data.routes?.[0]?.summary;
    if (!summary) return { available: false, reason: "Aucun itinéraire trouvé entre ces deux points." };
    return {
      available: true,
      durationMin: Math.round(summary.duration / 60),
      distanceKm: Math.round((summary.distance / 1000) * 10) / 10,
    };
  } catch (err) {
    return {
      available: false,
      reason: err instanceof Error ? err.message : "Erreur inconnue lors du calcul du temps de trajet.",
    };
  }
}
