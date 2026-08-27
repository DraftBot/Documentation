import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { listingWithRelations } from "@/lib/listingAdapter";
import { toGenericResultItem } from "@/lib/searchEngine";
import { FavoritesGrid } from "@/components/favorites/FavoritesGrid";

export const metadata: Metadata = { title: "Mes favoris" };

export default async function FavorisPage() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string } | undefined)?.id;

  if (!userId) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
        <h1 className="text-xl font-semibold text-ink-900">Connectez-vous pour voir vos favoris</h1>
        <Link href="/connexion" className="btn-primary mt-4 inline-flex">
          Connexion
        </Link>
      </div>
    );
  }

  const favorites = await prisma.favorite.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { listing: listingWithRelations },
  });

  const items = await Promise.all(
    favorites.map(async (fav) => {
      const siblings = await prisma.listingSource.findMany({ where: { listing: { dedupGroupId: fav.listing.dedupGroupId } } });
      const duplicateSources = Array.from(new Set(siblings.map((s) => s.sourceName)));
      return toGenericResultItem(fav.listing, duplicateSources);
    }),
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink-900">❤️ Mes favoris</h1>
      <p className="mt-1 text-ink-500">{items.length} logement(s) sauvegardé(s).</p>

      {items.length === 0 ? (
        <div className="card mt-6 p-8 text-center text-sm text-ink-500">
          Aucun favori pour le moment.{" "}
          <Link href="/recherche" className="text-brand-600 underline">
            Lancer une recherche
          </Link>
        </div>
      ) : (
        <div className="mt-6">
          <FavoritesGrid items={items} />
        </div>
      )}
    </div>
  );
}
