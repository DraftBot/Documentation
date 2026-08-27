import Link from "next/link";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Produit",
    links: [
      { href: "/recherche", label: "Rechercher un logement" },
      { href: "/comparateur", label: "Comparateur" },
      { href: "/alertes", label: "Alertes" },
      { href: "/favoris", label: "Mes favoris" },
    ],
  },
  {
    title: "À propos",
    links: [
      { href: "/comment-ca-marche", label: "Comment ça marche" },
      { href: "/donnees", label: "Nos données" },
      { href: "/a-propos", label: "À propos d'ImmoRadar" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/confidentialite", label: "Confidentialité & RGPD" },
      { href: "/profil", label: "Gérer mes données" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-ink-500">
              Le moteur de recherche immobilier qui centralise, analyse et compare les logements
              pour vous.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink-900">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-500 hover:text-ink-800">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-ink-100 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ImmoRadar. Projet de démonstration — pas de personne morale associée.</p>
          <p>Les annonces affichées peuvent être des données de démonstration. Voir « Nos données ».</p>
        </div>
      </div>
    </footer>
  );
}
