"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

export function DeleteAccountButton() {
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);

  async function confirmDelete() {
    setLoading(true);
    await fetch("/api/account/delete", { method: "POST" });
    await signOut({ callbackUrl: "/" });
  }

  if (!confirming) {
    return (
      <button className="btn-secondary !border-bad !text-bad" onClick={() => setConfirming(true)}>
        Supprimer mon compte
      </button>
    );
  }

  return (
    <div className="rounded-lg border border-bad/30 bg-bad/5 p-4">
      <p className="text-sm text-bad">
        Cette action est définitive : votre compte, vos favoris, alertes et recherches seront supprimés.
        Confirmez-vous ?
      </p>
      <div className="mt-3 flex gap-2">
        <button className="btn-secondary !border-bad !text-bad" disabled={loading} onClick={confirmDelete}>
          {loading ? "Suppression…" : "Oui, supprimer définitivement"}
        </button>
        <button className="btn-secondary" onClick={() => setConfirming(false)}>
          Annuler
        </button>
      </div>
    </div>
  );
}
