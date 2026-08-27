import type { Metadata } from "next";
import { SearchExperience } from "@/components/search/SearchExperience";

export const metadata: Metadata = {
  title: "Rechercher un logement",
  description: "Définissez vos critères précis et laissez ImmoRadar comparer les logements disponibles.",
};

const DEFAULT_CENTER = { label: "Pontarlier, Doubs", latitude: 46.9061, longitude: 6.3548 };

export default function RecherchePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const lat = parseFloat(String(searchParams.lat ?? ""));
  const lon = parseFloat(String(searchParams.lon ?? ""));
  const label = typeof searchParams.label === "string" ? searchParams.label : undefined;
  const radius = parseFloat(String(searchParams.radius ?? "5"));
  const transaction = searchParams.transaction === "BUY" ? "BUY" : "RENT";
  const types = typeof searchParams.types === "string" ? searchParams.types.split(",") : [];

  const location =
    Number.isFinite(lat) && Number.isFinite(lon)
      ? { label: label ?? "Localisation choisie", latitude: lat, longitude: lon }
      : DEFAULT_CENTER;

  return (
    <SearchExperience
      initial={{
        location,
        radiusKm: Number.isFinite(radius) ? radius : 5,
        transactionType: transaction,
        propertyTypes: types.filter((t): t is "APARTMENT" | "HOUSE" => t === "APARTMENT" || t === "HOUSE"),
      }}
    />
  );
}
