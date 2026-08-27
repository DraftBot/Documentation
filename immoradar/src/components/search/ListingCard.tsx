"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { amenityIcon, amenityLabel } from "@/lib/amenities";
import type { SearchResultItem } from "@/lib/searchEngine";

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

function priceBadge(priceScore: number): { label: string; className: string } {
  if (priceScore >= 78) return { label: "🟢 Prix intéressant", className: "bg-good/10 text-good" };
  if (priceScore >= 55) return { label: "🟠 Prix dans la moyenne", className: "bg-warn/10 text-warn" };
  return { label: "🔴 Prix élevé", className: "bg-bad/10 text-bad" };
}

export function ListingCard({
  item,
  isFavorite = false,
  onToggleFavorite,
  selectable = false,
  selected = false,
  onToggleSelect,
}: {
  item: SearchResultItem;
  isFavorite?: boolean;
  onToggleFavorite?: (listingId: string) => void;
  selectable?: boolean;
  selected?: boolean;
  onToggleSelect?: (listingId: string) => void;
}) {
  const { listing } = item;
  const [imgError, setImgError] = useState(false);
  const badge = priceBadge(item.breakdown.price);
  const topAmenities = listing.amenities.slice(0, 3);

  return (
    <div className={`card overflow-hidden transition ${selected ? "ring-2 ring-brand-500" : ""}`}>
      <div className="flex gap-4 p-4">
        <div className="relative h-28 w-32 shrink-0 overflow-hidden rounded-lg bg-ink-100 sm:h-32 sm:w-40">
          {listing.images[0] && !imgError ? (
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              sizes="160px"
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-3xl">🏠</div>
          )}
          {item.goodDeal && (
            <span className="absolute left-1.5 top-1.5 badge bg-white/95 text-bad shadow">🔥 Opportunité</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <Link href={`/annonce/${listing.id}`} className="block truncate font-semibold text-ink-900 hover:text-brand-700">
                🏠 {PROPERTY_TYPE_LABELS[listing.propertyType] ?? listing.propertyType}
                {listing.rooms ? ` T${listing.rooms}` : ""}
              </Link>
              <p className="mt-0.5 text-sm text-ink-500">
                {listing.surface} m² · {listing.rooms ?? "?"} pièces
                {listing.bedrooms != null ? ` · ${listing.bedrooms} chambre${listing.bedrooms > 1 ? "s" : ""}` : ""}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-lg font-bold text-ink-900">
                {Math.round(listing.price)} €<span className="text-xs font-normal text-ink-400">/mois</span>
              </p>
              {selectable && (
                <button
                  type="button"
                  onClick={() => onToggleSelect?.(listing.id)}
                  className={`mt-1 rounded-full border px-2.5 py-1 text-xs font-medium ${
                    selected ? "border-brand-500 bg-brand-50 text-brand-700" : "border-ink-200 text-ink-500"
                  }`}
                >
                  {selected ? "Sélectionné" : "Comparer"}
                </button>
              )}
            </div>
          </div>

          <p className="mt-1.5 text-sm text-ink-600">
            📍 {listing.city} · {item.distanceKm} km
          </p>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {topAmenities.map((a) => (
              <span key={a} className="badge bg-ink-100 text-ink-600">
                {amenityIcon(a)} {amenityLabel(a)}
              </span>
            ))}
            {listing.energyRating && listing.energyRating !== "NA" && (
              <span className="badge bg-ink-100 text-ink-600">DPE {listing.energyRating}</span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="badge bg-brand-50 font-semibold text-brand-700">⭐ {item.score}/100</span>
            <span className={`badge ${badge.className}`}>{badge.label}</span>
            {item.duplicateSources.length > 1 && (
              <span className="badge bg-ink-100 text-ink-500">
                🔗 Disponible sur {item.duplicateSources.length} sources
              </span>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-ink-400">
              Source : {SOURCE_LABELS[listing.source] ?? listing.source}
              {listing.publishedAt && ` · publié il y a ${daysAgo(listing.publishedAt)} j`}
            </p>
            <div className="flex items-center gap-2">
              {onToggleFavorite && (
                <button
                  type="button"
                  onClick={() => onToggleFavorite(listing.id)}
                  aria-label="Ajouter aux favoris"
                  className={`text-lg ${isFavorite ? "" : "opacity-40 hover:opacity-100"}`}
                >
                  {isFavorite ? "❤️" : "🤍"}
                </button>
              )}
              <Link href={`/annonce/${listing.id}`} className="btn-secondary !px-3 !py-1.5 text-xs">
                Voir l'annonce
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function daysAgo(iso: string): number {
  return Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 86_400_000));
}
