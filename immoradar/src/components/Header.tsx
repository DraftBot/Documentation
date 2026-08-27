"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/recherche", label: "Rechercher" },
  { href: "/comparateur", label: "Comparateur" },
  { href: "/alertes", label: "Alertes" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/donnees", label: "Nos données" },
];

export function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-ink-600 hover:text-ink-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {session ? (
            <>
              <Link href="/favoris" className="text-sm font-medium text-ink-600 hover:text-ink-900">
                ❤️ Mes favoris
              </Link>
              <Link href="/profil" className="text-sm font-medium text-ink-600 hover:text-ink-900">
                {session.user?.name ?? "Profil"}
              </Link>
              <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-secondary !px-4 !py-2 text-sm">
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link href="/connexion" className="btn-secondary !px-4 !py-2 text-sm">
                Connexion
              </Link>
              <Link href="/recherche" className="btn-primary !px-4 !py-2 text-sm">
                Rechercher
              </Link>
            </>
          )}
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Ouvrir le menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-ink-100 pt-3">
              {session ? (
                <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-secondary flex-1 !py-2.5 text-sm">
                  Déconnexion
                </button>
              ) : (
                <Link href="/connexion" className="btn-secondary flex-1 !py-2.5 text-sm">
                  Connexion
                </Link>
              )}
              <Link href="/recherche" className="btn-primary flex-1 !py-2.5 text-sm">
                Rechercher
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
