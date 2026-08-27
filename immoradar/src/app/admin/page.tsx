import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Administration" };

const STATE_UI: Record<string, { label: string; className: string }> = {
  ACTIVE: { label: "🟢 Actif", className: "bg-good/10 text-good" },
  ERROR: { label: "🟠 Erreur", className: "bg-warn/10 text-warn" },
  DISABLED: { label: "🔴 Désactivé", className: "bg-bad/10 text-bad" },
  PENDING: { label: "⚪ En attente", className: "bg-ink-100 text-ink-500" },
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (role !== "ADMIN") redirect("/connexion");

  const [
    userCount,
    searchCount,
    listingCount,
    dedupGroups,
    favoriteCount,
    alertCount,
    connectors,
    recentSearches,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.search.count(),
    prisma.listing.count(),
    prisma.listing.groupBy({ by: ["dedupGroupId"] }),
    prisma.favorite.count(),
    prisma.alert.count({ where: { active: true } }),
    prisma.connectorStatus.findMany({ orderBy: { sourceName: "asc" } }),
    prisma.search.findMany({ orderBy: { createdAt: "desc" }, take: 10 }),
  ]);

  const duplicateListings = listingCount - dedupGroups.length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink-900">Administration</h1>
      <p className="mt-1 text-ink-500">Vue d'ensemble de la plateforme ImmoRadar.</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Utilisateurs" value={userCount} />
        <Stat label="Recherches effectuées" value={searchCount} />
        <Stat label="Annonces (lignes source)" value={listingCount} />
        <Stat label="Logements uniques" value={dedupGroups.length} />
        <Stat label="Doublons regroupés" value={duplicateListings} />
        <Stat label="Favoris" value={favoriteCount} />
        <Stat label="Alertes actives" value={alertCount} />
      </div>

      <div className="mt-8">
        <h2 className="mb-3 font-semibold text-ink-900">Connecteurs de sources</h2>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-50 text-left text-xs uppercase text-ink-400">
              <tr>
                <th className="p-3">Source</th>
                <th className="p-3">État</th>
                <th className="p-3">Annonces</th>
                <th className="p-3">Dernière synchro</th>
                <th className="p-3">Détails</th>
              </tr>
            </thead>
            <tbody>
              {connectors.map((c) => {
                const ui = STATE_UI[c.status] ?? STATE_UI.PENDING!;
                return (
                  <tr key={c.id} className="border-t border-ink-50">
                    <td className="p-3 font-medium text-ink-800">{c.sourceName}</td>
                    <td className="p-3">
                      <span className={`badge ${ui.className}`}>{ui.label}</span>
                    </td>
                    <td className="p-3">{c.listingCount}</td>
                    <td className="p-3 text-ink-500">
                      {c.lastSyncAt ? new Date(c.lastSyncAt).toLocaleString("fr-FR") : "—"}
                    </td>
                    <td className="max-w-sm p-3 text-xs text-ink-400">{c.lastError ?? c.notes ?? "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-3 font-semibold text-ink-900">Recherches récentes</h2>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-50 text-left text-xs uppercase text-ink-400">
              <tr>
                <th className="p-3">Date</th>
                <th className="p-3">Localisation</th>
                <th className="p-3">Rayon</th>
              </tr>
            </thead>
            <tbody>
              {recentSearches.map((s) => (
                <tr key={s.id} className="border-t border-ink-50">
                  <td className="p-3 text-ink-500">{new Date(s.createdAt).toLocaleString("fr-FR")}</td>
                  <td className="p-3">{s.locationLabel}</td>
                  <td className="p-3">{s.radiusKm} km</td>
                </tr>
              ))}
              {recentSearches.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-4 text-center text-ink-400">
                    Aucune recherche enregistrée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="card p-4">
      <p className="text-2xl font-bold text-ink-900">{value}</p>
      <p className="text-xs text-ink-400">{label}</p>
    </div>
  );
}
