import { NextRequest, NextResponse } from "next/server";
import { searchRequestSchema } from "@/lib/validation";
import { runSearch } from "@/lib/searchEngine";
import { checkRateLimit, clientKeyFromRequest } from "@/lib/rateLimit";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { allowed } = checkRateLimit(`search:${clientKeyFromRequest(req)}`, { limit: 60, windowMs: 60_000 });
  if (!allowed) {
    return NextResponse.json({ error: "Trop de requêtes, réessayez dans quelques instants." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const parsed = searchRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Paramètres de recherche invalides.", details: parsed.error.flatten() }, { status: 400 });
  }

  const session = await getServerSession(authOptions);

  const response = await runSearch(parsed.data);

  // Traçabilité anonyme/utilisateur de la recherche, utilisée pour les
  // statistiques admin et comme base des alertes. Best-effort : une erreur
  // ici ne doit jamais faire échouer la recherche elle-même.
  try {
    await prisma.search.create({
      data: {
        userId: (session?.user as { id?: string } | undefined)?.id,
        locationLabel: `${parsed.data.latitude.toFixed(4)}, ${parsed.data.longitude.toFixed(4)}`,
        latitude: parsed.data.latitude,
        longitude: parsed.data.longitude,
        radiusKm: parsed.data.radiusKm,
        filters: parsed.data.filters as never,
      },
    });
  } catch {
    // non bloquant
  }

  return NextResponse.json(response);
}
