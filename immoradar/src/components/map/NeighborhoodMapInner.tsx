"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import type { NeighborhoodAnalysis, PoiCategory } from "@/lib/neighborhood";
import { POI_CATEGORY_LABELS } from "@/lib/neighborhood";

const CATEGORY_COLORS: Record<PoiCategory, string> = {
  GROCERY: "#1a9e63",
  SHOP: "#7c3aed",
  HEALTH: "#d13a3a",
  EDUCATION: "#155ceb",
  TRANSPORT: "#c8790a",
  FOOD: "#db2777",
  LEISURE: "#0d9488",
};

function poiIcon(category: PoiCategory) {
  const color = CATEGORY_COLORS[category];
  const icon = POI_CATEGORY_LABELS[category].icon;
  return L.divIcon({
    className: "",
    html: `<div style="background:${color};color:white;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;box-shadow:0 1px 4px rgba(0,0,0,.4)">${icon}</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

const homeIcon = L.divIcon({
  className: "",
  html: `<div style="background:#0d2148;color:white;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;box-shadow:0 2px 6px rgba(0,0,0,.5);border:2px solid white">🏠</div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

export default function NeighborhoodMapInner({
  center,
  analysis,
}: {
  center: [number, number];
  analysis: NeighborhoodAnalysis;
}) {
  return (
    <MapContainer center={center} zoom={15} className="h-full w-full" scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center} radius={analysis.radiusKm * 1000} pathOptions={{ color: "#0d2148", fillOpacity: 0.04 }} />
      <Marker position={center} icon={homeIcon}>
        <Popup>Logement</Popup>
      </Marker>
      {(Object.keys(analysis.byCategory) as PoiCategory[]).flatMap((category) =>
        analysis.byCategory[category].map((poi, i) => (
          <Marker key={`${category}-${i}`} position={[poi.latitude, poi.longitude]} icon={poiIcon(category)}>
            <Popup>
              <p className="font-medium">{poi.name}</p>
              <p className="text-xs">{POI_CATEGORY_LABELS[category].label} · {Math.round(poi.distanceKm * 1000)} m</p>
            </Popup>
          </Marker>
        )),
      )}
    </MapContainer>
  );
}
