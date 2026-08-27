import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getTravelTime } from "@/lib/travelTime";
import { checkRateLimit, clientKeyFromRequest } from "@/lib/rateLimit";

const schema = z.object({
  originLat: z.number(),
  originLon: z.number(),
  destLat: z.number(),
  destLon: z.number(),
  mode: z.enum(["driving-car", "cycling-regular", "foot-walking"]),
});

export async function POST(req: NextRequest) {
  const { allowed } = checkRateLimit(`travel:${clientKeyFromRequest(req)}`, { limit: 30, windowMs: 60_000 });
  if (!allowed) return NextResponse.json({ error: "Trop de requêtes." }, { status: 429 });

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Requête invalide." }, { status: 400 });

  const result = await getTravelTime(
    { lat: parsed.data.originLat, lon: parsed.data.originLon },
    { lat: parsed.data.destLat, lon: parsed.data.destLon },
    parsed.data.mode,
  );
  return NextResponse.json(result);
}
