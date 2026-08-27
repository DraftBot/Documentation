"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import Link from "next/link";
import type { SearchResultItem } from "@/lib/searchEngine";

const centerIcon = L.divIcon({
  className: "",
  html: `<div style="width:16px;height:16px;border-radius:50%;background:#155ceb;border:3px solid white;box-shadow:0 0 0 2px #155ceb"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

function markerIcon(score: number) {
  const color = score >= 80 ? "#1a9e63" : score >= 60 ? "#155ceb" : "#c8790a";
  return L.divIcon({
    className: "",
    html: `<div style="background:${color};color:white;font-size:11px;font-weight:600;padding:3px 7px;border-radius:999px;box-shadow:0 1px 4px rgba(0,0,0,.35);white-space:nowrap">${score}</div>`,
    iconSize: [40, 22],
    iconAnchor: [20, 11],
  });
}

function FitBounds({ center, radiusKm }: { center: [number, number]; radiusKm: number }) {
  const map = useMap();
  useEffect(() => {
    const latDelta = radiusKm / 111.32;
    const lonDelta = radiusKm / (111.32 * Math.cos((center[0] * Math.PI) / 180) || 1);
    map.fitBounds([
      [center[0] - latDelta, center[1] - lonDelta],
      [center[0] + latDelta, center[1] + lonDelta],
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center[0], center[1], radiusKm]);
  return null;
}

export default function ResultsMapInner({
  center,
  radiusKm,
  results,
}: {
  center: [number, number];
  radiusKm: number;
  results: SearchResultItem[];
}) {
  return (
    <MapContainer center={center} zoom={12} className="h-full w-full" scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds center={center} radiusKm={radiusKm} />
      <Circle center={center} radius={radiusKm * 1000} pathOptions={{ color: "#155ceb", fillOpacity: 0.05 }} />
      <Marker position={center} icon={centerIcon} />
      {results.map((item) => (
        <Marker
          key={item.listing.id}
          position={[item.listing.latitude, item.listing.longitude]}
          icon={markerIcon(item.score)}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">{item.listing.title}</p>
              <p>
                {Math.round(item.listing.price)} € · {item.listing.surface} m²
              </p>
              <p>⭐ {item.score}/100 · {item.distanceKm} km</p>
              <Link href={`/annonce/${item.listing.id}`} className="text-brand-600 underline">
                Voir l'annonce
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
