import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AlertsManager } from "@/components/alerts/AlertsManager";

export const metadata: Metadata = { title: "Mes alertes" };

export default async function AlertesPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
        <h1 className="text-xl font-semibold text-ink-900">Connectez-vous pour gérer vos alertes</h1>
        <Link href="/connexion" className="btn-primary mt-4 inline-flex">
          Connexion
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink-900">🔔 Mes alertes</h1>
      <p className="mt-1 text-ink-500">
        Enregistrez une recherche pour être notifié dès qu'un nouveau logement correspond à vos critères.
      </p>
      <div className="mt-6">
        <AlertsManager />
      </div>
    </div>
  );
}
