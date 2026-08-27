import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { importDvfDepartment } from "@/lib/dvf";

// Import protégé des transactions DVF pour un département donné. Conçu pour
// être appelé une fois par département (fichier officiel volumineux) plutôt
// que déclenché automatiquement à chaque requête utilisateur — voir README
// § "Statistiques de prix nationales (DVF)".
export const maxDuration = 60;

const schema = z.object({
  department: z.string().regex(/^(\d{2,3}|2A|2B)$/),
  year: z.number().int().min(2018).max(2030).default(2023),
});

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-seed-secret");
  if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Paramètres invalides (department, year).", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const result = await importDvfDepartment(prisma, parsed.data.department, parsed.data.year);
    return NextResponse.json({ ok: true, result });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Erreur inconnue." },
      { status: 500 },
    );
  }
}
