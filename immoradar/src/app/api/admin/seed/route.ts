import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { seedDatabase } from "@/lib/seedData";

// Route protégée permettant de (re)charger les données de démonstration en
// production, utile lorsque la base n'est joignable qu'depuis
// l'environnement de déploiement (ex: Vercel + Neon, port Postgres non
// exposé à l'extérieur). Jamais appelée automatiquement — nécessite le
// secret partagé SEED_SECRET. Idempotente (peut être rejouée sans dupliquer
// les données).
export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-seed-secret");
  if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  try {
    const log = await seedDatabase(prisma);
    return NextResponse.json({ ok: true, log });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Erreur inconnue." },
      { status: 500 },
    );
  }
}
