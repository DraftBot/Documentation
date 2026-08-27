import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { parseNaturalLanguageQuery } from "@/lib/nlParser";
import { checkRateLimit, clientKeyFromRequest } from "@/lib/rateLimit";

const schema = z.object({ text: z.string().min(3).max(500) });

export async function POST(req: NextRequest) {
  const { allowed } = checkRateLimit(`nl:${clientKeyFromRequest(req)}`, { limit: 15, windowMs: 60_000 });
  if (!allowed) return NextResponse.json({ error: "Trop de requêtes." }, { status: 429 });

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Texte invalide." }, { status: 400 });

  const result = await parseNaturalLanguageQuery(parsed.data.text);
  return NextResponse.json(result);
}
