import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Nos données",
  description: "D'où viennent les données affichées par ImmoRadar, comment elles sont calculées, et leurs limites.",
};

export default async function DonneesPage() {
  const connectors = await prisma.connectorStatus.findMany({ orderBy: { sourceName: "asc" } });
  const lastListingUpdate = await prisma.listing.findFirst({ orderBy: { updatedAt: "desc" }, select: { updatedAt: true } });

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-ink-900">Nos données</h1>
      <p className="mt-2 text-ink-500">Transparence sur l'origine et le calcul des informations affichées.</p>

      <section className="card mt-8 p-6">
        <h2 className="font-semibold text-ink-900">🧪 Version de démonstration</h2>
        <p className="mt-2 text-sm text-ink-600">
          Dans cette version, l'intégralité des annonces affichées provient d'un jeu de données{" "}
          <strong>fictif</strong>, clairement identifié (bandeau « DONNÉES DE DÉMONSTRATION » sur chaque
          fiche). Aucune de ces annonces ne correspond à un logement réellement disponible.
        </p>
      </section>

      <section className="card mt-4 p-6">
        <h2 className="font-semibold text-ink-900">D'où viennent les annonces</h2>
        <p className="mt-2 text-sm text-ink-600">
          ImmoRadar ne collecte jamais de données en contournant les protections techniques d'un site
          (anti-bot, CAPTCHA, conditions d'utilisation). Chaque source est intégrée via une API officielle,
          un flux partenaire ou des données publiques autorisées. État actuel des connecteurs :
        </p>
        <div className="mt-3 space-y-2">
          {connectors.map((c) => (
            <div key={c.id} className="flex items-center justify-between rounded-lg bg-ink-50 px-3 py-2 text-sm">
              <span className="font-medium text-ink-800">{c.sourceName}</span>
              <span className="text-xs text-ink-500">
                {c.status === "ACTIVE" ? "🟢 actif" : c.status === "ERROR" ? "🟠 erreur" : c.status === "DISABLED" ? "🔴 désactivé" : "⚪ en attente d'activation"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="card mt-4 p-6">
        <h2 className="font-semibold text-ink-900">Quelles données sont calculées</h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-ink-600">
          <li><strong>Score ImmoRadar</strong> : calculé dynamiquement à partir de vos critères et de leur importance (poids). Formule déterministe, aucune part aléatoire.</li>
          <li><strong>Analyse du prix</strong> : comparaison au prix moyen au m² des annonces comparables connues (même ville, même type de bien). Si moins de 3 annonces comparables existent, ImmoRadar affiche explicitement « données insuffisantes » plutôt que d'inventer un chiffre.</li>
          <li><strong>Analyse du quartier</strong> : interroge en temps réel les données OpenStreetMap (Overpass API) autour du logement — commerces, écoles, santé, transports, loisirs.</li>
          <li><strong>Doublons</strong> : détectés par un algorithme de similarité (localisation, prix, surface, pièces, texte de description). Le seuil est volontairement prudent : deux annonces légèrement différentes peuvent parfois ne pas être fusionnées.</li>
          <li><strong>Avantages / inconvénients</strong> : dérivés des signaux ci-dessus, jamais présentés comme une certitude.</li>
        </ul>
      </section>

      <section className="card mt-4 p-6">
        <h2 className="font-semibold text-ink-900">Limites des estimations</h2>
        <p className="mt-2 text-sm text-ink-600">
          Les estimations de prix reflètent uniquement les annonces déjà connues d'ImmoRadar, pas
          l'ensemble du marché réel. L'analyse de quartier dépend de la complétude des données
          OpenStreetMap, qui peut varier selon les zones. Le filtre « Bonnes affaires » est une analyse
          algorithmique, pas une garantie.
        </p>
      </section>

      <p className="mt-6 text-center text-xs text-ink-400">
        Dernière mise à jour des données :{" "}
        {lastListingUpdate ? new Date(lastListingUpdate.updatedAt).toLocaleString("fr-FR") : "—"}
      </p>
    </div>
  );
}
