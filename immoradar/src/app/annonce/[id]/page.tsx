import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { listingWithRelations, toNormalizedListing } from "@/lib/listingAdapter";
import { getPriceAnalysis } from "@/lib/priceAnalysis";
import { getNeighborhoodAnalysis, environmentScoreFrom } from "@/lib/neighborhood";
import { computeScore } from "@/lib/scoring";
import { computeProsCons } from "@/lib/prosCons";
import { amenityIcon, amenityLabel } from "@/lib/amenities";
import { DEFAULT_FILTERS, DEFAULT_WEIGHTS } from "@/types/listing";
import { Gallery } from "@/components/listing/Gallery";
import { ContactModule } from "@/components/listing/ContactModule";
import { PriceAnalysisCard } from "@/components/listing/PriceAnalysisCard";
import { NeighborhoodSummary } from "@/components/listing/NeighborhoodSummary";
import { ScoreBreakdownCard } from "@/components/listing/ScoreBreakdownCard";
import { TravelTimeModule } from "@/components/listing/TravelTimeModule";
import { FavoriteButton } from "@/components/listing/FavoriteButton";

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  APARTMENT: "Appartement",
  HOUSE: "Maison",
  STUDIO: "Studio",
  DUPLEX: "Duplex",
  LOFT: "Loft",
  OTHER: "Bien",
};

const SOURCE_LABELS: Record<string, string> = {
  demo: "Démonstration",
  "demo-siteA": "Démonstration · Site A",
  "demo-siteB": "Démonstration · Site B",
  "demo-siteC": "Démonstration · Site C",
  leboncoin: "Leboncoin",
  seloger: "SeLoger",
  bienici: "Bien'ici",
  pap: "PAP",
  logicimmo: "Logic-Immo",
};

async function loadListing(id: string) {
  const listing = await prisma.listing.findUnique({ where: { id }, ...listingWithRelations });
  if (!listing) return null;
  const siblings = await prisma.listing.findMany({
    where: { dedupGroupId: listing.dedupGroupId, id: { not: id } },
    ...listingWithRelations,
  });
  return { listing, siblings };
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = await loadListing(params.id);
  if (!data) return { title: "Annonce introuvable" };
  const { listing } = data;
  const title = `${PROPERTY_TYPE_LABELS[listing.propertyType] ?? "Logement"} ${listing.rooms ? `T${listing.rooms}` : ""} à ${listing.city}`;
  return {
    title,
    description: `${listing.surface} m² · ${Math.round(listing.price)} €/mois · ${listing.city}. ${listing.description?.slice(0, 140) ?? ""}`,
  };
}

export default async function AnnonceDetailPage({ params }: { params: { id: string } }) {
  const data = await loadListing(params.id);
  if (!data) notFound();
  const { listing, siblings } = data;

  const normalized = toNormalizedListing(listing);
  const allSources = [listing, ...siblings].flatMap((l) => l.sources.map((s) => ({ ...s, city: l.city })));
  const uniqueSourceNames = Array.from(new Set(allSources.map((s) => s.sourceName)));

  const [priceAnalysis, neighborhood] = await Promise.all([
    getPriceAnalysis({
      listingId: listing.id,
      city: listing.city,
      propertyType: listing.propertyType,
      transactionType: listing.transactionType,
      surface: listing.surface,
      price: listing.price,
    }),
    getNeighborhoodAnalysis(listing.latitude, listing.longitude),
  ]);

  const scored = computeScore(normalized, {
    searchLat: listing.latitude,
    searchLon: listing.longitude,
    radiusKm: 5,
    filters: DEFAULT_FILTERS,
    weights: DEFAULT_WEIGHTS,
    environment: { score: environmentScoreFrom(neighborhood), sufficientData: neighborhood.sufficientData },
  });

  const prosCons = computeProsCons(normalized, priceAnalysis, neighborhood);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {listing.isDemo && (
        <div className="mb-4 rounded-lg bg-warn/10 px-4 py-2 text-xs font-medium text-warn">
          🧪 DONNÉES DE DÉMONSTRATION — ce logement est fictif.
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <Gallery images={normalized.images} title={normalized.title} />

          <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-ink-900">
                {PROPERTY_TYPE_LABELS[listing.propertyType] ?? listing.propertyType}
                {listing.rooms ? ` T${listing.rooms}` : ""} — {listing.city}
              </h1>
              <p className="mt-1 text-ink-500">
                {listing.address ? `${listing.address}, ` : ""}
                {listing.city} {listing.postalCode}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-ink-900">{Math.round(listing.price)} €</p>
              <p className="text-sm text-ink-400">
                {listing.transactionType === "RENT" ? "par mois" : "prix de vente"}
                {listing.charges ? ` + ${Math.round(listing.charges)} € de charges` : ""}
                {listing.chargesIncluded ? " (charges comprises)" : ""}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <FavoriteButton listingId={listing.id} />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <InfoTile label="Surface" value={`${listing.surface} m²`} />
            <InfoTile label="Pièces" value={listing.rooms != null ? String(listing.rooms) : "—"} />
            <InfoTile label="Chambres" value={listing.bedrooms != null ? String(listing.bedrooms) : "—"} />
            <InfoTile label="Étage" value={listing.floor != null ? `${listing.floor}${listing.totalFloors ? ` / ${listing.totalFloors}` : ""}` : "—"} />
            <InfoTile label="DPE" value={listing.energyRating ?? "N/A"} />
            <InfoTile label="GES" value={listing.greenhouseGasRating ?? "N/A"} />
            <InfoTile label="Chauffage" value={listing.heatingType ?? "—"} />
            <InfoTile label="Année" value={listing.constructionYear ? String(listing.constructionYear) : "—"} />
          </div>

          {normalized.amenities.length > 0 && (
            <div className="mt-6">
              <h2 className="mb-2 font-semibold text-ink-900">Équipements</h2>
              <div className="flex flex-wrap gap-2">
                {normalized.amenities.map((a) => (
                  <span key={a} className="badge bg-ink-100 text-ink-600">
                    {amenityIcon(a)} {amenityLabel(a)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {normalized.description && (
            <div className="mt-6">
              <h2 className="mb-2 font-semibold text-ink-900">Description</h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-ink-600">{normalized.description}</p>
              <p className="mt-2 text-xs text-ink-400">
                Source : {SOURCE_LABELS[normalized.source] ?? normalized.source}
                {uniqueSourceNames.length > 1 && ` · également disponible sur ${uniqueSourceNames.length} sources`}
              </p>
            </div>
          )}

          {uniqueSourceNames.length > 1 && (
            <div className="mt-4 rounded-xl border border-ink-100 bg-ink-50 p-4 text-sm">
              <p className="font-medium text-ink-700">🔗 Cette annonce est disponible sur {uniqueSourceNames.length} sources.</p>
              <ul className="mt-2 space-y-1">
                {[listing, ...siblings].flatMap((l) =>
                  l.sources.map((s) => (
                    <li key={s.id}>
                      <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                        {SOURCE_LABELS[s.sourceName] ?? s.sourceName} →
                      </a>
                    </li>
                  )),
                )}
              </ul>
            </div>
          )}

          {(prosCons.pros.length > 0 || prosCons.cons.length > 0) && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card p-4">
                <h3 className="font-semibold text-good">👍 Les avantages</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
                  {prosCons.pros.length > 0 ? prosCons.pros.map((p, i) => <li key={i}>• {p}</li>) : <li className="text-ink-400">Aucun signal fort identifié.</li>}
                </ul>
              </div>
              <div className="card p-4">
                <h3 className="font-semibold text-bad">👎 Les inconvénients</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
                  {prosCons.cons.length > 0 ? prosCons.cons.map((c, i) => <li key={i}>• {c}</li>) : <li className="text-ink-400">Aucun signal négatif identifié.</li>}
                </ul>
              </div>
            </div>
          )}

          <p className="mt-4 text-xs text-ink-400">
            Les avantages/inconvénients sont générés algorithmiquement à partir de données vérifiables
            (prix, quartier, équipements, DPE) — ce ne sont pas des garanties.
          </p>

          <div className="mt-6">
            <TravelTimeModule origin={{ lat: listing.latitude, lon: listing.longitude }} />
          </div>
        </div>

        <div className="space-y-6">
          <ScoreBreakdownCard score={scored.score} breakdown={scored.breakdown} />
          <PriceAnalysisCard analysis={priceAnalysis} />
          <NeighborhoodSummary analysis={neighborhood} listingId={listing.id} />
          <ContactModule listing={normalized} />
        </div>
      </div>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-ink-50 p-3">
      <p className="text-xs text-ink-400">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-ink-800">{value}</p>
    </div>
  );
}
