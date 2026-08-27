"use client";

import { useEffect, useRef, useState } from "react";
import type { GeocodeResult } from "@/lib/geocode";

export interface LocationValue {
  label: string;
  latitude: number;
  longitude: number;
}

export function LocationAutocomplete({
  value,
  onChange,
  placeholder = "Ville, code postal, adresse, quartier…",
}: {
  value: LocationValue | null;
  onChange: (value: LocationValue | null) => void;
  placeholder?: string;
}) {
  const [query, setQuery] = useState(value?.label ?? "");
  const [results, setResults] = useState<GeocodeResult[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setQuery(value?.label ?? "");
  }, [value?.label]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (query.trim().length < 2 || query === value?.label) {
      setResults([]);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results ?? []);
        setOpen(true);
      } finally {
        setLoading(false);
      }
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-3 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
        <span aria-hidden="true">📍</span>
        <input
          className="w-full text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(null);
          }}
          onFocus={() => results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder={placeholder}
          aria-label="Localisation"
        />
        {loading && <span className="text-xs text-ink-400">…</span>}
      </div>
      {open && results.length > 0 && (
        <ul className="absolute z-20 mt-1 max-h-72 w-full overflow-auto rounded-xl border border-ink-100 bg-white py-1 shadow-pop">
          {results.map((r, i) => (
            <li key={i}>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-sm text-ink-700 hover:bg-brand-50"
                onMouseDown={() => {
                  onChange({ label: r.label, latitude: r.latitude, longitude: r.longitude });
                  setQuery(r.label);
                  setOpen(false);
                }}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
