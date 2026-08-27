"use client";

import { useEffect, useState } from "react";
import { LocationAutocomplete, type LocationValue } from "@/components/search/LocationAutocomplete";
import { FilterPanel } from "@/components/search/FilterPanel";
import { RADIUS_OPTIONS_KM } from "@/lib/geo";
import { DEFAULT_WEIGHTS, type FilterSet } from "@/types/listing";

interface AlertDto {
  id: string;
  active: boolean;
  channel: string;
  lastCheckedAt: string | null;
  lastNotifiedAt: string | null;
  savedSearch: {
    id: string;
    name: string;
    locationLabel: string;
    radiusKm: number;
    filters: FilterSet;
  };
}

export function AlertsManager() {
  const [alerts, setAlerts] = useState<AlertDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [location, setLocation] = useState<LocationValue | null>(null);
  const [radiusKm, setRadiusKm] = useState(15);
  const [filters, setFilters] = useState<FilterSet>({ transactionType: "RENT", propertyTypes: [], amenities: [] });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function load() {
    setLoading(true);
    fetch("/api/alerts")
      .then((r) => r.json())
      .then((d) => setAlerts(d.alerts ?? []))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function createAlert() {
    if (!location || !name.trim()) {
      setError("Merci de renseigner un nom et une localisation.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          locationLabel: location.label,
          latitude: location.latitude,
          longitude: location.longitude,
          radiusKm,
          filters,
          weights: DEFAULT_WEIGHTS,
          channel: "EMAIL",
        }),
      });
      if (!res.ok) throw new Error("Impossible de créer l'alerte.");
      setShowForm(false);
      setName("");
      setLocation(null);
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(alert: AlertDto) {
    await fetch(`/api/alerts/${alert.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !alert.active }),
    });
    load();
  }

  async function remove(alert: AlertDto) {
    await fetch(`/api/alerts/${alert.id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-ink-500">{loading ? "Chargement…" : `${alerts.length} alerte(s)`}</p>
        <button className="btn-primary" onClick={() => setShowForm((s) => !s)}>
          {showForm ? "Annuler" : "+ Nouvelle alerte"}
        </button>
      </div>

      {showForm && (
        <div className="card mt-4 space-y-4 p-5">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink-700">Nom de l'alerte</span>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Ex : "T3/T4 Pontarlier + 15km"' />
          </label>
          <div>
            <span className="mb-1 block text-sm font-medium text-ink-700">Localisation</span>
            <LocationAutocomplete value={location} onChange={setLocation} />
          </div>
          <label className="block max-w-xs">
            <span className="mb-1 block text-sm font-medium text-ink-700">Rayon</span>
            <select className="input" value={radiusKm} onChange={(e) => setRadiusKm(Number(e.target.value))}>
              {RADIUS_OPTIONS_KM.map((km) => (
                <option key={km} value={km}>
                  {km} km
                </option>
              ))}
            </select>
          </label>
          <FilterPanel filters={filters} onChange={setFilters} />
          {error && <p className="text-sm text-bad">{error}</p>}
          <button className="btn-primary w-full" onClick={createAlert} disabled={saving}>
            {saving ? "…" : "Créer l'alerte"}
          </button>
        </div>
      )}

      <div className="mt-6 space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="card flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <p className="font-medium text-ink-900">{alert.savedSearch.name}</p>
              <p className="text-sm text-ink-500">
                {alert.savedSearch.locationLabel} · rayon {alert.savedSearch.radiusKm} km
              </p>
              <p className="text-xs text-ink-400">
                {alert.lastNotifiedAt
                  ? `Dernière notification : ${new Date(alert.lastNotifiedAt).toLocaleDateString("fr-FR")}`
                  : "Aucune notification envoyée pour le moment"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-1.5 text-sm text-ink-600">
                <input type="checkbox" checked={alert.active} onChange={() => toggleActive(alert)} />
                Active
              </label>
              <button className="btn-secondary !px-3 !py-1.5 text-xs" onClick={() => remove(alert)}>
                Supprimer
              </button>
            </div>
          </div>
        ))}
        {!loading && alerts.length === 0 && (
          <div className="card p-8 text-center text-sm text-ink-500">
            Aucune alerte enregistrée. Créez-en une pour être informé des nouveaux logements correspondants.
          </div>
        )}
      </div>
    </div>
  );
}
