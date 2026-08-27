import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { prisma } from "@/lib/prisma";
import { getNeighborhoodAnalysis, POI_CATEGORY_LABELS, type PoiCategory } from "@/lib/neighborhood";

const NeighborhoodMap = dynamic(() => import("@/components/map/NeighborhoodMap"), { ssr: false });

export const metadata: Metadata = { title: "Analyse du quartier" };

export default async function QuartierPage({ params }: { params: { id: string } }) {
  const listing = await prisma.listing.findUnique({ where: { id: params.id } });
  if (!listing) notFound();

  const analysis = await getNeighborhoodAnalysis(listing.latitude, listing.longitude);
  const categories = Object.keys(analysis.byCategory) as PoiCategory[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link href={`/annonce/${listing.id}`} className="text-sm text-brand-600 hover:underline">
        ← Retour à l'annonce
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-ink-900">📍 Le quartier — {listing.city}</h1>
      <p className="mt-1 text-ink-500">
        {listing.address ? `${listing.address}, ` : ""}
        {listing.city} {listing.postalCode}
      </p>

      {!analysis.sufficientData ? (
        <div className="card mt-6 p-6 text-sm text-ink-500">
          Impossible de récupérer les données du quartier pour le moment
          {analysis.error ? ` (${analysis.error})` : ""}.
        </div>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="h-[60vh] overflow-hidden rounded-xl2 border border-ink-100 lg:h-[75vh]">
            <NeighborhoodMap center={[listing.latitude, listing.longitude]} analysis={analysis} />
          </div>
          <div className="space-y-4">
            {categories.map((cat) => {
              const items = analysis.byCategory[cat];
              const { icon, label } = POI_CATEGORY_LABELS[cat];
              return (
                <div key={cat} className="card p-4">
                  <h2 className="font-semibold text-ink-900">
                    {icon} {label}
                  </h2>
                  {items.length === 0 ? (
                    <p className="mt-1 text-sm text-ink-400">Aucun élément recensé dans le rayon de recherche.</p>
                  ) : (
                    <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
                      {items.map((poi, i) => (
                        <li key={i} className="flex justify-between gap-2">
                          <span className="truncate">{poi.name}</span>
                          <span className="shrink-0 text-ink-400">
                            {poi.distanceKm < 1 ? `${Math.round(poi.distanceKm * 1000)} m` : `${poi.distanceKm.toFixed(1)} km`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <p className="text-xs text-ink-400">
              Données OpenStreetMap (Overpass API) dans un rayon de {analysis.radiusKm} km autour du
              logement. Mise à jour du {new Date(analysis.fetchedAt).toLocaleString("fr-FR")}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
