"use client";

import { AMENITY_DEFS } from "@/lib/amenities";
import type { AmenityFilter, AmenityKey, CriterionMode, FilterSet, PropertyType } from "@/types/listing";

const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: "APARTMENT", label: "Appartement" },
  { value: "HOUSE", label: "Maison" },
  { value: "STUDIO", label: "Studio" },
  { value: "DUPLEX", label: "Duplex" },
  { value: "LOFT", label: "Loft" },
  { value: "OTHER", label: "Autre" },
];

function NumberField({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: number | undefined;
  onChange: (v: number | undefined) => void;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-ink-500">{label}</span>
      <div className="relative">
        <input
          type="number"
          className="input"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value === "" ? undefined : Number(e.target.value))}
        />
        {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-400">{suffix}</span>}
      </div>
    </label>
  );
}

function cycleMode(mode: CriterionMode): CriterionMode {
  if (mode === "off") return "preferred";
  if (mode === "preferred") return "required";
  return "off";
}

function AmenityToggle({ filter, onChange }: { filter: AmenityFilter; onChange: (mode: CriterionMode) => void }) {
  const def = AMENITY_DEFS.find((a) => a.key === filter.key)!;
  const styles: Record<CriterionMode, string> = {
    off: "border-ink-200 text-ink-500 bg-white",
    preferred: "border-brand-300 bg-brand-50 text-brand-700",
    required: "border-ink-900 bg-ink-900 text-white",
  };
  const labels: Record<CriterionMode, string> = { off: "", preferred: "souhaité", required: "obligatoire" };
  return (
    <button
      type="button"
      onClick={() => onChange(cycleMode(filter.mode))}
      className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${styles[filter.mode]}`}
    >
      <span>
        {def.icon} {def.label}
      </span>
      {labels[filter.mode] && <span className="text-[10px] font-semibold uppercase tracking-wide">{labels[filter.mode]}</span>}
    </button>
  );
}

export function FilterPanel({ filters, onChange }: { filters: FilterSet; onChange: (f: FilterSet) => void }) {
  function set<K extends keyof FilterSet>(key: K, value: FilterSet[K]) {
    onChange({ ...filters, [key]: value });
  }

  function amenityMode(key: AmenityKey): CriterionMode {
    return filters.amenities.find((a) => a.key === key)?.mode ?? "off";
  }

  function setAmenityMode(key: AmenityKey, mode: CriterionMode) {
    const rest = filters.amenities.filter((a) => a.key !== key);
    onChange({ ...filters, amenities: mode === "off" ? rest : [...rest, { key, mode }] });
  }

  function toggleType(type: PropertyType) {
    const has = filters.propertyTypes.includes(type);
    set("propertyTypes", has ? filters.propertyTypes.filter((t) => t !== type) : [...filters.propertyTypes, type]);
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-semibold text-ink-900">Type de bien</h3>
        <div className="flex flex-wrap gap-2">
          {PROPERTY_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => toggleType(t.value)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                filters.propertyTypes.includes(t.value)
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-ink-200 text-ink-500"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-ink-900">Prix (€/mois)</h3>
        <div className="grid grid-cols-2 gap-2">
          <NumberField label="Minimum" value={filters.priceMin} onChange={(v) => set("priceMin", v)} suffix="€" />
          <NumberField label="Maximum" value={filters.priceMax} onChange={(v) => set("priceMax", v)} suffix="€" />
        </div>
        <label className="mt-2 flex items-center gap-2 text-xs text-ink-500">
          <input
            type="checkbox"
            checked={filters.chargesIncluded ?? false}
            onChange={(e) => set("chargesIncluded", e.target.checked)}
          />
          Charges comprises uniquement
        </label>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-ink-900">Surface</h3>
        <div className="grid grid-cols-2 gap-2">
          <NumberField label="Minimum" value={filters.surfaceMin} onChange={(v) => set("surfaceMin", v)} suffix="m²" />
          <NumberField label="Maximum" value={filters.surfaceMax} onChange={(v) => set("surfaceMax", v)} suffix="m²" />
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-ink-900">Pièces / chambres</h3>
        <div className="grid grid-cols-2 gap-2">
          <NumberField label="Pièces min." value={filters.roomsMin} onChange={(v) => set("roomsMin", v)} />
          <NumberField label="Pièces max." value={filters.roomsMax} onChange={(v) => set("roomsMax", v)} />
          <NumberField label="Chambres min." value={filters.bedroomsMin} onChange={(v) => set("bedroomsMin", v)} />
          <NumberField label="Chambres max." value={filters.bedroomsMax} onChange={(v) => set("bedroomsMax", v)} />
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-ink-900">Étage</h3>
        <select
          className="input"
          value={filters.floorMode ?? "any"}
          onChange={(e) => set("floorMode", e.target.value as FilterSet["floorMode"])}
        >
          <option value="any">Indifférent</option>
          <option value="ground">Rez-de-chaussée</option>
          <option value="top">Dernier étage</option>
          <option value="min">Étage minimum</option>
          <option value="max">Étage maximum</option>
        </select>
        {(filters.floorMode === "min" || filters.floorMode === "max") && (
          <div className="mt-2">
            <NumberField
              label={filters.floorMode === "min" ? "Étage minimum" : "Étage maximum"}
              value={filters.floorMode === "min" ? filters.floorMin : filters.floorMax}
              onChange={(v) => set(filters.floorMode === "min" ? "floorMin" : "floorMax", v)}
            />
          </div>
        )}
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-ink-900">Équipements</h3>
        <p className="mb-2 text-xs text-ink-400">Touchez pour faire défiler : indifférent → souhaité → obligatoire.</p>
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {AMENITY_DEFS.map((def) => (
            <AmenityToggle
              key={def.key}
              filter={{ key: def.key, mode: amenityMode(def.key) }}
              onChange={(mode) => setAmenityMode(def.key, mode)}
            />
          ))}
        </div>
      </div>

      <label className="flex items-center gap-2 rounded-lg border border-ink-200 px-3 py-2.5 text-sm">
        <input
          type="checkbox"
          checked={filters.goodDealsOnly ?? false}
          onChange={(e) => set("goodDealsOnly", e.target.checked)}
        />
        🔥 Bonnes affaires uniquement
      </label>
    </div>
  );
}
