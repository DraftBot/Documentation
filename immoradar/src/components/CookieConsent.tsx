"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "immoradar-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // stockage indisponible (mode privé...) : on n'affiche pas la bannière
    }
  }, []);

  function choose(value: "accepted" | "essential-only") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-200 bg-white p-4 shadow-pop">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-600">
          ImmoRadar utilise des cookies essentiels au fonctionnement du service (session, préférences).
          Aucun cookie publicitaire ou de traçage tiers n'est utilisé. Voir notre{" "}
          <a href="/confidentialite" className="underline">
            politique de confidentialité
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button className="btn-secondary !px-4 !py-2 text-sm" onClick={() => choose("essential-only")}>
            Essentiels uniquement
          </button>
          <button className="btn-primary !px-4 !py-2 text-sm" onClick={() => choose("accepted")}>
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
