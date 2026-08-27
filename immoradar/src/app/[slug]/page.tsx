import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

// Pages SEO programmatiques du type /location-appartement-pontarlier
// (§38-39). Volontairement limitées aux villes réellement couvertes par des
// données ImmoRadar (table Location), plutôt que générées en masse pour
// des villes sans contenu réel.

const TYPE_LABELS: Record<string, { label: string; plural: string; enumValue: "APARTMENT" | "HOUSE" }> = {
  appartement: { label: "appartement", plural: "appartements", enumValue: "APARTMENT" },
  maison: { label: "maison", plural: "maisons", enumValue: "HOUSE" },
};

function parseSlug(slug: string) {
  const match = slug.match(/^location-(appartement|maison)-([a-z0-9-]+)$/);
  if (!match) return null;
  const [, type, citySlug] = match;
  return { type: type as keyof typeof TYPE_LABELS, citySlug: citySlug! };
}

async function loadData(slug: string) {
  const parsed = parseSlug(slug);
  if (!parsed) return null;
  const location = await prisma.location.findUnique({ where: { slug: parsed.citySlug } });
  if (!location) return null;
  const typeInfo = TYPE_LABELS[parsed.type]!;
  const stat = await prisma.priceStatistic.findUnique({
    where: {
      locationId_propertyType_transactionType: {
        locationId: location.id,
        propertyType: typeInfo.enumValue,
        transactionType: "RENT",
      },
    },
  });
  const count = await prisma.listing.count({ where: { city: location.city, propertyType: typeInfo.enumValue, transactionType: "RENT" } });
  return { location, typeInfo, stat, count };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await loadData(params.slug);
  if (!data) return {};
  return {
    title: `Location ${data.typeInfo.label} à ${data.location.city}`,
    description: `${data.count} annonce(s) de ${data.typeInfo.plural} à louer à ${data.location.city} et alentours, analysées par ImmoRadar.`,
  };
}

export default async function LocationSeoPage({ params }: { params: { slug: string } }) {
  const data = await loadData(params.slug);
  if (!data) notFound();
  const { location, typeInfo, stat, count } = data;

  const searchUrl = `/recherche?lat=${location.latitude}&lon=${location.longitude}&label=${encodeURIComponent(location.city)}&radius=10&transaction=RENT&types=${typeInfo.enumValue}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-ink-900">
        Location {typeInfo.label} à {location.city}
      </h1>
      <p className="mt-3 text-ink-600">
        ImmoRadar référence actuellement {count} annonce{count > 1 ? "s" : ""} de {typeInfo.plural} à louer
        à {location.city} et dans un rayon proche. Chaque annonce est analysée : score de correspondance,
        estimation de prix et analyse de quartier.
      </p>

      {stat && (
        <div className="card mt-6 p-5">
          <h2 className="font-semibold text-ink-900">Prix moyen constaté</h2>
          <p className="mt-2 text-2xl font-bold text-ink-900">{Math.round(stat.pricePerSqmAvg)} €/m²</p>
          <p className="text-sm text-ink-400">
            Basé sur {stat.sampleSize} annonce(s) comparable(s) — voir{" "}
            <Link href="/donnees" className="underline">
              méthodologie
            </Link>
            .
          </p>
        </div>
      )}

      <Link href={searchUrl} className="btn-primary mt-6 inline-flex">
        🔎 Voir les {typeInfo.plural} disponibles à {location.city}
      </Link>
    </div>
  );
}
