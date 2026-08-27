import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { filterSetSchema, scoreWeightsSchema } from "@/lib/validation";

async function requireUserId() {
  const session = await getServerSession(authOptions);
  return (session?.user as { id?: string } | undefined)?.id ?? null;
}

export async function GET() {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "Connexion requise." }, { status: 401 });

  const alerts = await prisma.alert.findMany({
    where: { userId },
    include: { savedSearch: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ alerts });
}

const createSchema = z.object({
  name: z.string().min(1).max(120),
  locationLabel: z.string().min(1).max(200),
  latitude: z.number(),
  longitude: z.number(),
  radiusKm: z.number().min(0.1).max(200),
  filters: filterSetSchema,
  weights: scoreWeightsSchema,
  channel: z.enum(["EMAIL", "WEB_PUSH", "MOBILE_PUSH"]).default("EMAIL"),
});

export async function POST(req: NextRequest) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "Connexion requise." }, { status: 401 });

  const parsed = createSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Formulaire d'alerte invalide." }, { status: 400 });

  const savedSearch = await prisma.savedSearch.create({
    data: {
      userId,
      name: parsed.data.name,
      locationLabel: parsed.data.locationLabel,
      latitude: parsed.data.latitude,
      longitude: parsed.data.longitude,
      radiusKm: parsed.data.radiusKm,
      filters: parsed.data.filters as never,
      weights: parsed.data.weights as never,
    },
  });

  const alert = await prisma.alert.create({
    data: { userId, savedSearchId: savedSearch.id, channel: parsed.data.channel, active: true },
    include: { savedSearch: true },
  });

  return NextResponse.json({ alert });
}
