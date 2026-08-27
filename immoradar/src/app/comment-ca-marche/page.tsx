import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description: "Le fonctionnement d'ImmoRadar en 6 étapes, de la recherche à la mise en contact.",
};

const STEPS = [
  { icon: "🎯", title: "Définissez vos critères", text: "Localisation, rayon, type de bien, budget, équipements — précisez ce qui est obligatoire et ce qui est simplement souhaité." },
  { icon: "🔎", title: "ImmoRadar recherche les logements disponibles", text: "Les annonces compatibles sont collectées auprès des sources connectées (données de démonstration aujourd'hui, sources réelles au fur et à mesure de leur activation)." },
  { icon: "🔗", title: "Les annonces sont regroupées", text: "Une même annonce publiée sur plusieurs plateformes est détectée et fusionnée en une seule fiche." },
  { icon: "⭐", title: "Les logements sont analysés", text: "Chaque annonce reçoit un score sur 100, une analyse de prix et une analyse de quartier — jamais de donnée inventée." },
  { icon: "⚖️", title: "Comparez les meilleures opportunités", text: "Sélectionnez plusieurs logements et comparez-les côte à côte, ou sauvegardez vos favoris." },
  { icon: "📞", title: "Contactez le propriétaire ou l'agence", text: "Un message prérempli est proposé, mais rien n'est jamais envoyé automatiquement : c'est toujours vous qui décidez." },
];

export default function CommentCaMarchePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-ink-900">Comment ça marche</h1>
      <p className="mt-2 text-ink-500">ImmoRadar fonctionne comme un assistant immobilier personnel, en 6 étapes.</p>

      <ol className="mt-8 space-y-6">
        {STEPS.map((step, i) => (
          <li key={step.title} className="card flex gap-4 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-semibold text-brand-700">
              {i + 1}
            </div>
            <div>
              <h2 className="font-semibold text-ink-900">
                {step.icon} {step.title}
              </h2>
              <p className="mt-1 text-sm text-ink-600">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 text-center">
        <Link href="/recherche" className="btn-primary">
          🔎 Commencer une recherche
        </Link>
      </div>
    </div>
  );
}
