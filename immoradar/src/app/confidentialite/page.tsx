import type { Metadata } from "next";

export const metadata: Metadata = { title: "Confidentialité & RGPD" };

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-ink-900">Confidentialité & RGPD</h1>

      <section className="mt-6">
        <h2 className="font-semibold text-ink-900">Données collectées</h2>
        <p className="mt-2 text-sm text-ink-600">
          ImmoRadar collecte uniquement les données nécessaires au fonctionnement du service : e-mail et
          mot de passe (haché) pour votre compte, vos favoris, alertes et recherches sauvegardées.
          Les recherches anonymes sont enregistrées sans lien avec votre identité sauf si vous êtes
          connecté.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold text-ink-900">Cookies</h2>
        <p className="mt-2 text-sm text-ink-600">
          ImmoRadar utilise uniquement des cookies essentiels (session de connexion). Aucun cookie
          publicitaire ou de traçage tiers n'est déposé.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold text-ink-900">Vos droits</h2>
        <p className="mt-2 text-sm text-ink-600">
          Conformément au RGPD, vous pouvez à tout moment, depuis votre{" "}
          <a href="/profil" className="text-brand-600 underline">profil</a> :
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-600">
          <li>Exporter l'intégralité de vos données personnelles au format JSON.</li>
          <li>Supprimer définitivement votre compte et toutes les données associées.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold text-ink-900">Minimisation des données</h2>
        <p className="mt-2 text-sm text-ink-600">
          ImmoRadar ne stocke pas de données personnelles au-delà de ce qui est strictement nécessaire.
          Les mots de passe sont hachés (bcrypt) et ne sont jamais stockés en clair.
        </p>
      </section>
    </div>
  );
}
