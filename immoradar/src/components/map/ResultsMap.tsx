"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const ResultsMap = dynamic(() => import("./ResultsMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-ink-100 text-sm text-ink-400">
      Chargement de la carte…
    </div>
  ),
});

export default ResultsMap;
