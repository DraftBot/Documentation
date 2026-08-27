import Link from "next/link";
import { POI_CATEGORY_LABELS, type NeighborhoodAnalysis, type PoiCategory } from "@/lib/neighborhood";

export function NeighborhoodSummary({ analysis, listingId }: { analysis: NeighborhoodAnalysis; listingId: string }) {
  if (!analysis.sufficientData) {
    return (
      <div className="card p-5">
        <h2 className="font-semibold text-ink-900">📍 Le quartier</h2>
        <p className="mt-2 text-sm text-ink-500">
          Impossible de récupérer les données du quartier pour le moment
          {analysis.error ? ` (${analysis.error})` : ""}. Réessayez plus tard.
        </p>
      </div>
    );
  }

  const categories = Object.keys(analysis.byCategory) as PoiCategory[];

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-ink-900">📍 Le quartier</h2>
        <Link href={`/quartier/${listingId}`} className="text-xs font-medium text-brand-600 hover:underline">
          Voir l'analyse complète →
        </Link>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {categories.map((cat) => {
          const items = analysis.byCategory[cat];
          const closest = items[0];
          const { icon, label } = POI_CATEGORY_LABELS[cat];
          return (
            <div key={cat} className="rounded-lg bg-ink-50 p-3">
              <p className="text-xs text-ink-400">
                {icon} {label}
              </p>
              {closest ? (
                <p className="mt-0.5 text-sm font-medium text-ink-800">
                  {closest.distanceKm < 1 ? `${Math.round(closest.distanceKm * 1000)} m` : `${closest.distanceKm.toFixed(1)} km`}
                </p>
              ) : (
                <p className="mt-0.5 text-sm text-ink-400">Aucun recensé</p>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-ink-400">
        Données OpenStreetMap (Overpass API), rayon de {analysis.radiusKm} km — mise à jour du{" "}
        {new Date(analysis.fetchedAt).toLocaleDateString("fr-FR")}.
      </p>
    </div>
  );
}
