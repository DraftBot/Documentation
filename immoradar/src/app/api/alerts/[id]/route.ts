import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function requireUserId() {
  const session = await getServerSession(authOptions);
  return (session?.user as { id?: string } | undefined)?.id ?? null;
}

const patchSchema = z.object({ active: z.boolean() });

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "Connexion requise." }, { status: 401 });

  const parsed = patchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Requête invalide." }, { status: 400 });

  const alert = await prisma.alert.findUnique({ where: { id: params.id } });
  if (!alert || alert.userId !== userId) return NextResponse.json({ error: "Alerte introuvable." }, { status: 404 });

  const updated = await prisma.alert.update({ where: { id: params.id }, data: { active: parsed.data.active } });
  return NextResponse.json({ alert: updated });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "Connexion requise." }, { status: 401 });

  const alert = await prisma.alert.findUnique({ where: { id: params.id } });
  if (!alert || alert.userId !== userId) return NextResponse.json({ error: "Alerte introuvable." }, { status: 404 });

  await prisma.savedSearch.delete({ where: { id: alert.savedSearchId } }); // cascade supprime l'alerte
  return NextResponse.json({ ok: true });
}
