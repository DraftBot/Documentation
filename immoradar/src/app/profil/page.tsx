import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DeleteAccountButton } from "@/components/profile/DeleteAccountButton";

export const metadata: Metadata = { title: "Mon profil" };

export default async function ProfilPage() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string } | undefined)?.id;

  if (!userId) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
        <h1 className="text-xl font-semibold text-ink-900">Connectez-vous pour accéder à votre profil</h1>
        <Link href="/connexion" className="btn-primary mt-4 inline-flex">
          Connexion
        </Link>
      </div>
    );
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const [favoritesCount, alertsCount, searchesCount] = await Promise.all([
    prisma.favorite.count({ where: { userId } }),
    prisma.alert.count({ where: { userId } }),
    prisma.savedSearch.count({ where: { userId } }),
  ]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink-900">Mon profil</h1>

      <div className="card mt-6 p-5">
        <p className="text-sm text-ink-400">Nom</p>
        <p className="font-medium text-ink-900">{user?.name ?? "—"}</p>
        <p className="mt-3 text-sm text-ink-400">E-mail</p>
        <p className="font-medium text-ink-900">{user?.email}</p>
        <p className="mt-3 text-sm text-ink-400">Membre depuis</p>
        <p className="font-medium text-ink-900">{user?.createdAt.toLocaleDateString("fr-FR")}</p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="card p-4">
          <p className="text-2xl font-bold text-ink-900">{favoritesCount}</p>
          <p className="text-xs text-ink-400">Favoris</p>
        </div>
        <div className="card p-4">
          <p className="text-2xl font-bold text-ink-900">{alertsCount}</p>
          <p className="text-xs text-ink-400">Alertes</p>
        </div>
        <div className="card p-4">
          <p className="text-2xl font-bold text-ink-900">{searchesCount}</p>
          <p className="text-xs text-ink-400">Recherches sauvegardées</p>
        </div>
      </div>

      <div className="card mt-6 p-5">
        <h2 className="font-semibold text-ink-900">Vos données (RGPD)</h2>
        <p className="mt-1 text-sm text-ink-500">
          Conformément au RGPD, vous pouvez exporter l'intégralité de vos données ou supprimer
          définitivement votre compte à tout moment.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/api/account/export" className="btn-secondary">
            📥 Exporter mes données
          </a>
          <DeleteAccountButton />
        </div>
      </div>
    </div>
  );
}
