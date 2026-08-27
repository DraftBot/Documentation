"use client";

import { useState } from "react";
import { LocationAutocomplete, type LocationValue } from "@/components/search/LocationAutocomplete";
import { TRAVEL_MODE_LABELS, type TravelMode, type TravelTimeResult } from "@/lib/travelTime";

interface Destination {
  id: string;
  label: string;
  location: LocationValue | null;
  mode: TravelMode;
  result?: TravelTimeResult;
  loading?: boolean;
}

const PRESETS = ["Travail", "École", "Gare", "Centre-ville", "Autre lieu"];

export function TravelTimeModule({ origin }: { origin: { lat: number; lon: number } }) {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  function addDestination(label: string) {
    setDestinations((prev) => [
      ...prev,
      { id: `${label}-${Date.now()}`, label, location: null, mode: "driving-car" },
    ]);
  }

  function updateDestination(id: string, patch: Partial<Destination>) {
    setDestinations((prev) => prev.map((d) => (d.id === id ? { ...d, ...patch } : d)));
  }

  async function compute(id: string) {
    const dest = destinations.find((d) => d.id === id);
    if (!dest?.location) return;
    updateDestination(id, { loading: true });
    const res = await fetch("/api/travel-time", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        originLat: origin.lat,
        originLon: origin.lon,
        destLat: dest.location.latitude,
        destLon: dest.location.longitude,
        mode: dest.mode,
      }),
    });
    const result: TravelTimeResult = await res.json();
    updateDestination(id, { result, loading: false });
  }

  return (
    <div className="card p-5">
      <h2 className="font-semibold text-ink-900">🚗 Temps de trajet</h2>
      <p className="mt-1 text-sm text-ink-500">
        Ajoutez les lieux qui comptent pour vous (travail, école, gare…) pour estimer le temps de trajet
        depuis ce logement.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button key={p} type="button" className="btn-secondary !px-3 !py-1.5 text-xs" onClick={() => addDestination(p)}>
            + {p}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        {destinations.map((d) => (
          <div key={d.id} className="rounded-xl border border-ink-100 p-3">
            <p className="mb-2 text-sm font-medium text-ink-800">{d.label}</p>
            <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto]">
              <LocationAutocomplete value={d.location} onChange={(loc) => updateDestination(d.id, { location: loc, result: undefined })} />
              <select
                className="input sm:w-40"
                value={d.mode}
                onChange={(e) => updateDestination(d.id, { mode: e.target.value as TravelMode, result: undefined })}
              >
                {Object.entries(TRAVEL_MODE_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <button type="button" className="btn-primary" disabled={!d.location || d.loading} onClick={() => compute(d.id)}>
                {d.loading ? "…" : "Calculer"}
              </button>
            </div>
            {d.result && (
              <p className="mt-2 text-sm">
                {d.result.available ? (
                  <span className="font-medium text-ink-800">
                    {d.result.durationMin} min · {d.result.distanceKm} km en {TRAVEL_MODE_LABELS[d.mode]}
                  </span>
                ) : (
                  <span className="text-ink-400">{d.result.reason}</span>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
