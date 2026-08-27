import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Export des données personnelles (RGPD, §37) : renvoie l'ensemble des
// données liées au compte, dans un format exploitable (JSON).
export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) return NextResponse.json({ error: "Connexion requise." }, { status: 401 });

  const [user, favorites, notes, savedSearches, comparisons, searches] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId }, select: { id: true, email: true, name: true, role: true, createdAt: true, consentedAt: true } }),
    prisma.favorite.findMany({ where: { userId }, include: { listing: { select: { id: true, title: true, city: true } } } }),
    prisma.note.findMany({ where: { userId } }),
    prisma.savedSearch.findMany({ where: { userId }, include: { alert: true } }),
    prisma.comparisonSet.findMany({ where: { userId }, include: { items: true } }),
    prisma.search.findMany({ where: { userId }, take: 200, orderBy: { createdAt: "desc" } }),
  ]);

  const payload = {
    exportedAt: new Date().toISOString(),
    user,
    favorites,
    notes,
    savedSearches,
    comparisons,
    recentSearches: searches,
  };

  return new NextResponse(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": "attachment; filename=immoradar-donnees.json",
    },
  });
}
