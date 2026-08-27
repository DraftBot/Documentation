// Format de données immobilier standardisé (voir README §Architecture).
// Toute source (démo ou réelle) doit être normalisée vers ce format par
// son connecteur avant d'entrer dans le reste de l'application.

export type PropertyType = "APARTMENT" | "HOUSE" | "STUDIO" | "DUPLEX" | "LOFT" | "OTHER";
export type TransactionType = "RENT" | "BUY";
export type EnergyRating = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "NA";

export const AMENITY_KEYS = [
  "balcony",
  "terrace",
  "garden",
  "garage",
  "parking",
  "cellar",
  "elevator",
  "bikeRoom",
  "airConditioning",
  "fireplace",
  "equippedKitchen",
  "furnished",
  "unfurnished",
  "petsAllowed",
] as const;

export type AmenityKey = (typeof AMENITY_KEYS)[number];

export interface AmenityDef {
  key: AmenityKey;
  label: string;
  icon: string;
}

export const AMENITY_DEFS: AmenityDef[] = [
  { key: "balcony", label: "Balcon", icon: "🌞" },
  { key: "terrace", label: "Terrasse", icon: "🏝️" },
  { key: "garden", label: "Jardin", icon: "🌳" },
  { key: "garage", label: "Garage", icon: "🚗" },
  { key: "parking", label: "Parking", icon: "🅿️" },
  { key: "cellar", label: "Cave", icon: "📦" },
  { key: "elevator", label: "Ascenseur", icon: "🛗" },
  { key: "bikeRoom", label: "Local vélo", icon: "🚲" },
  { key: "airConditioning", label: "Climatisation", icon: "❄️" },
  { key: "fireplace", label: "Cheminée", icon: "🔥" },
  { key: "equippedKitchen", label: "Cuisine équipée", icon: "🍳" },
  { key: "furnished", label: "Meublé", icon: "🛋️" },
  { key: "unfurnished", label: "Non meublé", icon: "📭" },
  { key: "petsAllowed", label: "Animaux acceptés", icon: "🐾" },
];

export interface Contact {
  agencyName?: string | null;
  phone?: string | null;
  contactFormUrl?: string | null;
  isPrivateOwner?: boolean;
}

// Le format "pivot" que chaque SourceAdapter doit produire.
export interface NormalizedListing {
  id: string; // identifiant interne source+externalId, stable
  source: string;
  sourceUrl: string;
  externalId?: string;
  title: string;
  description?: string;
  price: number;
  charges?: number;
  chargesIncluded?: boolean;
  surface: number;
  rooms?: number;
  bedrooms?: number;
  floor?: number;
  totalFloors?: number;
  isTopFloor?: boolean;
  isGroundFloor?: boolean;
  constructionYear?: number;
  propertyType: PropertyType;
  transactionType: TransactionType;
  address?: string;
  city: string;
  postalCode?: string;
  latitude: number;
  longitude: number;
  images: string[];
  amenities: AmenityKey[];
  energyRating?: EnergyRating;
  greenhouseGasRating?: EnergyRating;
  heatingType?: string;
  kitchenType?: string;
  furnished?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  availableFrom?: string;
  contact?: Contact;
  rawSourceData?: unknown;
}

// Critère booléen: l'utilisateur peut marquer chaque filtre "à cocher"
// comme obligatoire (l'annonce est exclue si absent) ou comme préférence
// (l'annonce reste visible mais perd des points de score).
export type CriterionMode = "required" | "preferred" | "off";

export interface AmenityFilter {
  key: AmenityKey;
  mode: CriterionMode;
}

export interface FilterSet {
  transactionType: TransactionType;
  propertyTypes: PropertyType[];
  priceMin?: number;
  priceMax?: number;
  chargesIncluded?: boolean;
  surfaceMin?: number;
  surfaceMax?: number;
  roomsMin?: number;
  roomsMax?: number;
  bedroomsMin?: number;
  bedroomsMax?: number;
  floorMode?: "any" | "ground" | "min" | "max" | "top";
  floorMin?: number;
  floorMax?: number;
  amenities: AmenityFilter[];
  goodDealsOnly?: boolean;
}

export const DEFAULT_FILTERS: FilterSet = {
  transactionType: "RENT",
  propertyTypes: [],
  amenities: [],
};

// Poids des critères pour le calcul du score (0 à 10 chacun).
export interface ScoreWeights {
  price: number;
  location: number;
  surface: number;
  amenities: number;
  environment: number;
  energyRating: number;
}

export const DEFAULT_WEIGHTS: ScoreWeights = {
  price: 8,
  location: 8,
  surface: 6,
  amenities: 6,
  environment: 5,
  energyRating: 4,
};

export interface ScoreBreakdown {
  price: number;
  location: number;
  surface: number;
  amenities: number;
  environment: number;
  energyRating: number;
}

export interface ScoredListing {
  listing: NormalizedListing;
  score: number;
  breakdown: ScoreBreakdown;
  distanceKm: number;
  excludedReason?: string; // rempli si un critère obligatoire manque
  duplicateSources?: string[]; // autres sources du même logement
  goodDeal?: boolean;
}
