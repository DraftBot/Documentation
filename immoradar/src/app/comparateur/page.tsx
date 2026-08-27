import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { listingWithRelations } from "@/lib/listingAdapter";
import { toGenericResultItem } from "@/lib/searchEngine";
import { amenityIcon, amenityLabel } from "@/lib/amenities";

export const metadata: Metadata = { title: "Comparateur de logements" };

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  APARTMENT: "Appartement",
  HOUSE: "Maison",
  STUDIO: "Studio",
  DUPLEX: "Duplex",
  LOFT: "Loft",
  OTHER: "Bien",
};

export default async function ComparateurPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const idsParam = typeof searchParams.ids === "string" ? searchParams.ids : "";
  const ids = idsParam.split(",").filter(Boolean).slice(0, 4);

  if (ids.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
        <h1 className="text-xl font-semibold text-ink-900">Comparateur</h1>
        <p className="mt-2 text-ink-500">
          Sélectionnez jusqu'à 4 logements depuis la recherche ou vos favoris pour les comparer.
        </p>
        <Link href="/recherche" className="btn-primary mt-4 inline-flex">
          Lancer une recherche
        </Link>
      </div>
    );
  }

  const rows = await prisma.listing.findMany({ where: { id: { in: ids } }, ...listingWithRelations });
  const items = await Promise.all(
    rows.map(async (row) => {
      const siblings = await prisma.listingSource.findMany({ where: { listing: { dedupGroupId: row.dedupGroupId } } });
      return toGenericResultItem(row, Array.from(new Set(siblings.map((s) => s.sourceName))));
    }),
  );

  const allAmenities = Array.from(new Set(items.flatMap((i) => i.listing.amenities)));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink-900">Comparateur</h1>
      <p className="mt-1 text-ink-500">{items.length} logement(s) comparé(s).</p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-xl2 border border-ink-100 bg-white">
          <thead>
            <tr>
              <th className="w-40 border-b border-ink-100 bg-ink-50 p-3 text-left text-xs font-medium uppercase text-ink-400">
                Critère
              </th>
              {items.map((item) => (
                <th key={item.listing.id} className="border-b border-ink-100 p-3 text-left">
                  <Link href={`/annonce/${item.listing.id}`} className="font-semibold text-brand-700 hover:underline">
                    {PROPERTY_TYPE_LABELS[item.listing.propertyType]} {item.listing.rooms ? `T${item.listing.rooms}` : ""}
                  </Link>
                  <p className="text-xs text-ink-400">{item.listing.city}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Row label="Score ImmoRadar" cells={items.map((i) => `⭐ ${i.score}/100`)} />
            <Row label="Prix" cells={items.map((i) => `${Math.round(i.listing.price)} €`)} />
            <Row label="Surface" cells={items.map((i) => `${i.listing.surface} m²`)} />
            <Row label="Pièces" cells={items.map((i) => String(i.listing.rooms ?? "—"))} />
            <Row label="Chambres" cells={items.map((i) => String(i.listing.bedrooms ?? "—"))} />
            <Row label="DPE" cells={items.map((i) => i.listing.energyRating ?? "—")} />
            <Row label="Distance" cells={items.map((i) => `${i.distanceKm} km`)} />
            <tr>
              <td className="border-b border-ink-50 p-3 text-sm font-medium text-ink-600">Équipements</td>
              {items.map((item) => (
                <td key={item.listing.id} className="border-b border-ink-50 p-3">
                  <div className="flex flex-wrap gap-1">
                    {allAmenities.map((a) =>
                      item.listing.amenities.includes(a) ? (
                        <span key={a} className="badge bg-good/10 text-good" title={amenityLabel(a)}>
                          {amenityIcon(a)}
                        </span>
                      ) : (
                        <span key={a} className="badge bg-ink-50 text-ink-300" title={amenityLabel(a)}>
                          {amenityIcon(a)}
                        </span>
                      ),
                    )}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 text-sm font-medium text-ink-600">Annonce</td>
              {items.map((item) => (
                <td key={item.listing.id} className="p-3">
                  <Link href={`/annonce/${item.listing.id}`} className="btn-secondary !px-3 !py-1.5 text-xs">
                    Voir
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Row({ label, cells }: { label: string; cells: string[] }) {
  return (
    <tr>
      <td className="border-b border-ink-50 p-3 text-sm font-medium text-ink-600">{label}</td>
      {cells.map((c, i) => (
        <td key={i} className="border-b border-ink-50 p-3 text-sm text-ink-800">
          {c}
        </td>
      ))}
    </tr>
  );
}
