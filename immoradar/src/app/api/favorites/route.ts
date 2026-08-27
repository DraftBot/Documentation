import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function requireUserId() {
  const session = await getServerSession(authOptions);
  const id = (session?.user as { id?: string } | undefined)?.id;
  return id ?? null;
}

export async function GET() {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "Connexion requise." }, { status: 401 });

  const favorites = await prisma.favorite.findMany({
    where: { userId },
    select: { listingId: true },
  });
  return NextResponse.json({ listingIds: favorites.map((f) => f.listingId) });
}

const toggleSchema = z.object({ listingId: z.string().min(1) });

export async function POST(req: NextRequest) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "Connexion requise." }, { status: 401 });

  const parsed = toggleSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Requête invalide." }, { status: 400 });

  const existing = await prisma.favorite.findUnique({
    where: { userId_listingId: { userId, listingId: parsed.data.listingId } },
  });

  if (existing) {
    await prisma.favorite.delete({ where: { id: existing.id } });
    return NextResponse.json({ favorited: false });
  }

  await prisma.favorite.create({ data: { userId, listingId: parsed.data.listingId } });
  return NextResponse.json({ favorited: true });
}
