import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Suppression du compte et de toutes les données personnelles associées
// (RGPD, §37). Les relations (favoris, notes, recherches sauvegardées,
// alertes, comparaisons) sont en cascade dans le schéma Prisma.
export async function POST() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) return NextResponse.json({ error: "Connexion requise." }, { status: 401 });

  await prisma.user.delete({ where: { id: userId } });
  return NextResponse.json({ ok: true });
}
