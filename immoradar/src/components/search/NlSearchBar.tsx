"use client";

import { useState } from "react";
import { amenityLabel } from "@/lib/amenities";
import type { NlParseResult } from "@/lib/nlParser";

export function NlSearchBar({ onApply }: { onApply: (result: NlParseResult) => void }) {
  const [text, setText] = useState("");
  const [pending, setPending] = useState<NlParseResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function analyze() {
    if (text.trim().length < 3) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/nl-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("Analyse impossible pour le moment.");
      const data: NlParseResult = await res.json();
      setPending(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card p-4">
      <label className="mb-1.5 block text-sm font-medium text-ink-700">💬 Décrivez votre logement idéal…</label>
      <div className="flex gap-2">
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ex : appartement 65 m² minimum, max 950 €, garage obligatoire, balcon souhaité"
          onKeyDown={(e) => e.key === "Enter" && analyze()}
        />
        <button type="button" onClick={analyze} disabled={loading} className="btn-secondary shrink-0">
          {loading ? "…" : "Analyser"}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-bad">{error}</p>}

      {pending && (
        <div className="mt-3 rounded-xl border border-brand-200 bg-brand-50 p-3 text-sm">
          <p className="font-medium text-brand-800">
            {pending.confidence === "low" ? "Interprétation incertaine — merci de vérifier :" : "Voici ce qu'ImmoRadar a compris :"}
          </p>
          <ul className="mt-1.5 space-y-0.5 text-brand-900">
            {pending.locationLabel && <li>📍 Localisation : {pending.locationLabel}</li>}
            {pending.radiusKm && <li>📏 Rayon : {pending.radiusKm} km</li>}
            {pending.filters.surfaceMin && <li>📐 Surface minimum : {pending.filters.surfaceMin} m²</li>}
            {pending.filters.priceMax && <li>💰 Prix maximum : {pending.filters.priceMax} €</li>}
            {pending.requiredAmenities.length > 0 && (
              <li>✅ Obligatoire : {pending.requiredAmenities.map(amenityLabel).join(", ")}</li>
            )}
            {pending.preferredAmenities.length > 0 && (
              <li>➕ Souhaité : {pending.preferredAmenities.map(amenityLabel).join(", ")}</li>
            )}
          </ul>
          {pending.notes.length > 0 && (
            <ul className="mt-1.5 list-disc pl-4 text-xs text-brand-700">
              {pending.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          )}
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              className="btn-primary !px-4 !py-2 text-xs"
              onClick={() => {
                onApply(pending);
                setPending(null);
              }}
            >
              Appliquer ces critères
            </button>
            <button type="button" className="btn-secondary !px-4 !py-2 text-xs" onClick={() => setPending(null)}>
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
