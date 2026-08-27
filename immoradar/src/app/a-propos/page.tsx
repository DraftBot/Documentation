import type { Metadata } from "next";

export const metadata: Metadata = { title: "À propos", description: "À propos du projet ImmoRadar." };

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-ink-900">À propos d'ImmoRadar</h1>
      <p className="mt-4 text-ink-600">
        ImmoRadar est un projet de démonstration : un moteur de recherche immobilier qui centralise,
        dédoublonne et analyse les annonces disponibles selon des critères précis, plutôt que de se
        contenter de les lister.
      </p>
      <p className="mt-4 text-ink-600">
        Le produit est pensé comme un assistant immobilier personnel : score de correspondance,
        analyse de prix, analyse de quartier, temps de trajet, comparateur et alertes — le tout construit
        sur une architecture pensée pour connecter de vraies sources immobilières au fur et à mesure de
        leur disponibilité légale et technique.
      </p>
      <p className="mt-4 text-ink-600">
        Voir <a href="/donnees" className="text-brand-600 underline">Nos données</a> pour le détail des
        sources et des méthodes de calcul.
      </p>
    </div>
  );
}
