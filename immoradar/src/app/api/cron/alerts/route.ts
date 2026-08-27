import { NextRequest, NextResponse } from "next/server";
import { evaluateAllActiveAlerts } from "@/lib/alertEvaluation";

// Route destinée à être appelée par un scheduler externe (Vercel Cron,
// GitHub Actions cron, ou tout appel HTTP planifié), jamais par le
// navigateur. Protégée par un secret partagé — voir .env.example
// (CRON_SECRET) et README § Alertes.
export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-cron-secret");
  if (!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const results = await evaluateAllActiveAlerts();
  return NextResponse.json({ evaluated: results.length, results });
}
