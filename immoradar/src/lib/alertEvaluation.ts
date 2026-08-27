import { prisma } from "./prisma";
import { runSearch } from "./searchEngine";
import type { FilterSet, ScoreWeights } from "@/types/listing";

// ─────────────────────────────────────────────────────────────────────────
// Évaluation des alertes (§20). Conçu pour être appelé par une tâche
// planifiée (cron) plutôt qu'à chaque requête utilisateur (§30 : pas de
// recherche externe/coûteuse à chaque affichage de page). Voir
// /api/cron/alerts et le README pour le déclenchement en production
// (Vercel Cron, GitHub Actions cron, ou tout scheduler externe appelant
// cette route avec CRON_SECRET).
// ─────────────────────────────────────────────────────────────────────────

export interface AlertRunResult {
  alertId: string;
  newMatches: number;
  notified: boolean;
  notificationReason?: string;
}

export async function evaluateAlert(alertId: string): Promise<AlertRunResult> {
  const alert = await prisma.alert.findUnique({ where: { id: alertId }, include: { savedSearch: true } });
  if (!alert || !alert.active) return { alertId, newMatches: 0, notified: false, notificationReason: "Alerte inactive." };

  const search = alert.savedSearch;
  const response = await runSearch({
    latitude: search.latitude,
    longitude: search.longitude,
    radiusKm: search.radiusKm,
    filters: search.filters as unknown as FilterSet,
    weights: search.weights as unknown as ScoreWeights,
    sort: "recent",
    page: 1,
    pageSize: 50,
  });

  const since = alert.lastCheckedAt ?? new Date(0);
  const newMatches = response.results.filter(
    (r) => r.listing.publishedAt && new Date(r.listing.publishedAt) > since,
  );

  await prisma.alert.update({ where: { id: alertId }, data: { lastCheckedAt: new Date() } });

  if (newMatches.length === 0) {
    return { alertId, newMatches: 0, notified: false };
  }

  const sent = await sendAlertNotification(alert.userId, search.name, newMatches.length);
  if (sent) {
    await prisma.alert.update({ where: { id: alertId }, data: { lastNotifiedAt: new Date() } });
  }

  return {
    alertId,
    newMatches: newMatches.length,
    notified: sent,
    notificationReason: sent ? undefined : "RESEND_API_KEY non configurée : notification mise en file d'attente logique, non envoyée.",
  };
}

async function sendAlertNotification(userId: string, searchName: string, count: number): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return false;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ALERTS_FROM_EMAIL ?? "alertes@immoradar.example",
        to: user.email,
        subject: `ImmoRadar — ${count} nouveau(x) logement(s) pour "${searchName}"`,
        text: `${count} nouvelle(s) annonce(s) correspondent à votre alerte "${searchName}". Consultez-les sur ImmoRadar.`,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function evaluateAllActiveAlerts(): Promise<AlertRunResult[]> {
  const alerts = await prisma.alert.findMany({ where: { active: true }, select: { id: true } });
  const results: AlertRunResult[] = [];
  for (const a of alerts) {
    results.push(await evaluateAlert(a.id));
  }
  return results;
}
