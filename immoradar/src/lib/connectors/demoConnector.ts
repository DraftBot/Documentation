import type { NormalizedListing, AmenityKey, PropertyType } from "@/types/listing";
import type { ConnectorInfo, SourceAdapter, SourceSearchParams } from "./types";

// ─────────────────────────────────────────────────────────────────────────
// DONNÉES DE DÉMONSTRATION — clairement identifiées comme fictives.
// Ces logements n'existent pas. Ils permettent de tester l'ensemble du
// produit (carte, filtres, tri, score, comparateur, favoris, doublons,
// analyse de prix, analyse de quartier) avant le branchement de sources
// réelles. Voir §31 du cahier des charges et la page /donnees.
// ─────────────────────────────────────────────────────────────────────────

interface DemoProperty {
  key: string;
  title: string;
  propertyType: PropertyType;
  price: number;
  charges: number;
  chargesIncluded: boolean;
  surface: number;
  rooms: number;
  bedrooms: number;
  floor: number | null;
  totalFloors: number | null;
  isTopFloor: boolean;
  isGroundFloor: boolean;
  constructionYear: number;
  energyRating: NormalizedListing["energyRating"];
  greenhouseGasRating: NormalizedListing["energyRating"];
  heatingType: string;
  kitchenType: string;
  furnished: boolean;
  city: string;
  postalCode: string;
  address: string;
  latitude: number;
  longitude: number;
  amenities: AmenityKey[];
  daysAgo: number;
  image: string;
  agencyName?: string;
  isPrivateOwner?: boolean;
  phone?: string;
}

const IMG = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1200&q=60`;

// 22 logements fictifs distincts autour de Pontarlier (Doubs) + Besançon,
// avec une diversité de types / prix / équipements / DPE.
const PROPERTIES: DemoProperty[] = [
  {
    key: "p01", title: "Appartement T3 avec garage", propertyType: "APARTMENT",
    price: 895, charges: 60, chargesIncluded: false, surface: 68, rooms: 3, bedrooms: 2,
    floor: 2, totalFloors: 4, isTopFloor: false, isGroundFloor: false, constructionYear: 1998,
    energyRating: "C", greenhouseGasRating: "C", heatingType: "Gaz collectif", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "12 rue de la République",
    latitude: 46.9061, longitude: 6.3548, amenities: ["garage", "balcony", "elevator", "cellar"],
    daysAgo: 2, image: IMG("photo-1502672260266-1c1ef2d93688"), agencyName: "Agence du Larmont",
  },
  {
    key: "p02", title: "Maison de village avec jardin", propertyType: "HOUSE",
    price: 1150, charges: 0, chargesIncluded: false, surface: 110, rooms: 5, bedrooms: 3,
    floor: null, totalFloors: 2, isTopFloor: false, isGroundFloor: true, constructionYear: 1975,
    energyRating: "D", greenhouseGasRating: "D", heatingType: "Fioul", kitchenType: "Ouverte",
    furnished: false, city: "Doubs", postalCode: "25300", address: "4 rue des Fontaines",
    latitude: 46.9235, longitude: 6.3327, amenities: ["garden", "garage", "cellar", "fireplace"],
    daysAgo: 5, image: IMG("photo-1568605114967-8130f3a36994"), isPrivateOwner: true, phone: "03 81 XX XX 01",
  },
  {
    key: "p03", title: "Studio meublé centre-ville", propertyType: "STUDIO",
    price: 420, charges: 40, chargesIncluded: true, surface: 24, rooms: 1, bedrooms: 0,
    floor: 3, totalFloors: 5, isTopFloor: false, isGroundFloor: false, constructionYear: 1965,
    energyRating: "E", greenhouseGasRating: "D", heatingType: "Électrique", kitchenType: "Kitchenette",
    furnished: true, city: "Pontarlier", postalCode: "25300", address: "8 Grande Rue",
    latitude: 46.9042, longitude: 6.3557, amenities: ["furnished", "bikeRoom"],
    daysAgo: 1, image: IMG("photo-1522708323590-d24dbb6b0267"), agencyName: "Immo Plus Pontarlier",
  },
  {
    key: "p04", title: "Duplex rénové avec terrasse", propertyType: "DUPLEX",
    price: 980, charges: 70, chargesIncluded: false, surface: 82, rooms: 4, bedrooms: 3,
    floor: 4, totalFloors: 4, isTopFloor: true, isGroundFloor: false, constructionYear: 2015,
    energyRating: "B", greenhouseGasRating: "B", heatingType: "Pompe à chaleur", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "22 rue de la Gare",
    latitude: 46.9013, longitude: 6.3502, amenities: ["terrace", "parking", "elevator", "airConditioning"],
    daysAgo: 8, image: IMG("photo-1522771739844-6a9f6d5f14af"), agencyName: "Century Immobilier",
  },
  {
    key: "p05", title: "T2 lumineux avec balcon", propertyType: "APARTMENT",
    price: 640, charges: 50, chargesIncluded: false, surface: 45, rooms: 2, bedrooms: 1,
    floor: 1, totalFloors: 3, isTopFloor: false, isGroundFloor: false, constructionYear: 2005,
    energyRating: "C", greenhouseGasRating: "C", heatingType: "Gaz individuel", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "5 avenue de la Gare",
    latitude: 46.9088, longitude: 6.3601, amenities: ["balcony", "cellar"],
    daysAgo: 3, image: IMG("photo-1493809842364-78817add7ffb"), agencyName: "Agence du Larmont",
  },
  {
    key: "p06", title: "Maison contemporaine avec garage double", propertyType: "HOUSE",
    price: 1450, charges: 0, chargesIncluded: false, surface: 130, rooms: 6, bedrooms: 4,
    floor: null, totalFloors: 2, isTopFloor: false, isGroundFloor: true, constructionYear: 2019,
    energyRating: "A", greenhouseGasRating: "A", heatingType: "Pompe à chaleur", kitchenType: "Équipée",
    furnished: false, city: "Houtaud", postalCode: "25300", address: "3 chemin des Sapins",
    latitude: 46.8825, longitude: 6.3392, amenities: ["garage", "garden", "terrace", "equippedKitchen"],
    daysAgo: 12, image: IMG("photo-1600585154340-be6161a56a0c"), agencyName: "Century Immobilier",
  },
  {
    key: "p07", title: "Loft atypique en centre-ville", propertyType: "LOFT",
    price: 1050, charges: 55, chargesIncluded: false, surface: 90, rooms: 3, bedrooms: 2,
    floor: 0, totalFloors: 3, isTopFloor: false, isGroundFloor: true, constructionYear: 1930,
    energyRating: "D", greenhouseGasRating: "D", heatingType: "Électrique", kitchenType: "Ouverte",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "18 rue Sylvestre Marguet",
    latitude: 46.9071, longitude: 6.3521, amenities: ["fireplace", "cellar"],
    daysAgo: 6, image: IMG("photo-1560448204-e02f11c3d0e2"), isPrivateOwner: true, phone: "03 81 XX XX 02",
  },
  {
    key: "p08", title: "T4 familial avec parking", propertyType: "APARTMENT",
    price: 820, charges: 65, chargesIncluded: false, surface: 78, rooms: 4, bedrooms: 3,
    floor: 2, totalFloors: 5, isTopFloor: false, isGroundFloor: false, constructionYear: 2001,
    energyRating: "C", greenhouseGasRating: "C", heatingType: "Gaz collectif", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "30 rue de Besançon",
    latitude: 46.9107, longitude: 6.3489, amenities: ["parking", "balcony", "elevator", "cellar"],
    daysAgo: 4, image: IMG("photo-1560184897-ae75f418493e"), agencyName: "Immo Plus Pontarlier",
  },
  {
    key: "p09", title: "Petite maison de bourg avec cave", propertyType: "HOUSE",
    price: 780, charges: 0, chargesIncluded: false, surface: 88, rooms: 4, bedrooms: 2,
    floor: null, totalFloors: 2, isTopFloor: false, isGroundFloor: true, constructionYear: 1960,
    energyRating: "E", greenhouseGasRating: "E", heatingType: "Fioul", kitchenType: "Standard",
    furnished: false, city: "Dommartin", postalCode: "25300", address: "2 rue du Lavoir",
    latitude: 46.9412, longitude: 6.3702, amenities: ["cellar", "garden"],
    daysAgo: 9, image: IMG("photo-1580587771525-78b9dba3b914"), isPrivateOwner: true, phone: "03 81 XX XX 03",
  },
  {
    key: "p10", title: "T3 avec balcon et cave", propertyType: "APARTMENT",
    price: 750, charges: 55, chargesIncluded: true, surface: 66, rooms: 3, bedrooms: 2,
    floor: 3, totalFloors: 4, isTopFloor: false, isGroundFloor: false, constructionYear: 1995,
    energyRating: "C", greenhouseGasRating: "C", heatingType: "Gaz collectif", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "9 rue du Vallon",
    latitude: 46.9025, longitude: 6.3480, amenities: ["balcony", "cellar", "elevator"],
    daysAgo: 7, image: IMG("photo-1484154218962-a197022b5858"), agencyName: "Agence du Larmont",
  },
  {
    key: "p11", title: "Chalet rénové avec terrasse et vue", propertyType: "HOUSE",
    price: 1290, charges: 0, chargesIncluded: false, surface: 105, rooms: 5, bedrooms: 3,
    floor: null, totalFloors: 2, isTopFloor: false, isGroundFloor: true, constructionYear: 1988,
    energyRating: "D", greenhouseGasRating: "D", heatingType: "Bois", kitchenType: "Équipée",
    furnished: false, city: "Les Fourgs", postalCode: "25300", address: "14 route des Chalets",
    latitude: 46.8531, longitude: 6.3785, amenities: ["terrace", "garden", "fireplace", "garage"],
    daysAgo: 15, image: IMG("photo-1518780664697-55e3ad937233"), agencyName: "Century Immobilier",
  },
  {
    key: "p12", title: "Studio étudiant proche gare", propertyType: "STUDIO",
    price: 380, charges: 35, chargesIncluded: true, surface: 20, rooms: 1, bedrooms: 0,
    floor: 1, totalFloors: 4, isTopFloor: false, isGroundFloor: false, constructionYear: 1970,
    energyRating: "E", greenhouseGasRating: "D", heatingType: "Électrique", kitchenType: "Kitchenette",
    furnished: true, city: "Pontarlier", postalCode: "25300", address: "1 place de la Gare",
    latitude: 46.9095, longitude: 6.3612, amenities: ["furnished"],
    daysAgo: 2, image: IMG("photo-1502672023488-70e25813eb80"), agencyName: "Immo Plus Pontarlier",
  },
  {
    key: "p13", title: "T3 avec garage et jardin", propertyType: "APARTMENT",
    price: 850, charges: 60, chargesIncluded: false, surface: 70, rooms: 3, bedrooms: 2,
    floor: 0, totalFloors: 2, isTopFloor: false, isGroundFloor: true, constructionYear: 2008,
    energyRating: "B", greenhouseGasRating: "B", heatingType: "Pompe à chaleur", kitchenType: "Équipée",
    furnished: false, city: "Vuillecin", postalCode: "25300", address: "6 rue du Stade",
    latitude: 46.8967, longitude: 6.2954, amenities: ["garage", "garden", "cellar"],
    daysAgo: 3, image: IMG("photo-1512917774080-9991f1c4c750"), isPrivateOwner: true, phone: "03 81 XX XX 04",
  },
  {
    key: "p14", title: "Appartement de standing avec climatisation", propertyType: "APARTMENT",
    price: 1180, charges: 90, chargesIncluded: false, surface: 95, rooms: 4, bedrooms: 3,
    floor: 5, totalFloors: 6, isTopFloor: true, isGroundFloor: false, constructionYear: 2020,
    energyRating: "A", greenhouseGasRating: "A", heatingType: "Pompe à chaleur", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "40 rue de la République",
    latitude: 46.9051, longitude: 6.3560, amenities: ["airConditioning", "balcony", "elevator", "parking"],
    daysAgo: 1, image: IMG("photo-1493809842364-78817add7ffb"), agencyName: "Century Immobilier",
  },
  {
    key: "p15", title: "Maison mitoyenne avec petit jardin", propertyType: "HOUSE",
    price: 690, charges: 0, chargesIncluded: false, surface: 75, rooms: 4, bedrooms: 2,
    floor: null, totalFloors: 2, isTopFloor: false, isGroundFloor: true, constructionYear: 1958,
    energyRating: "F", greenhouseGasRating: "E", heatingType: "Électrique", kitchenType: "Standard",
    furnished: false, city: "Sainte-Colombe", postalCode: "25300", address: "11 rue Basse",
    latitude: 46.8794, longitude: 6.2988, amenities: ["garden", "cellar"],
    daysAgo: 11, image: IMG("photo-1570129477492-45c003edd2be"), isPrivateOwner: true, phone: "03 81 XX XX 05",
  },
  {
    key: "p16", title: "T2 rénové avec cave et parking", propertyType: "APARTMENT",
    price: 590, charges: 45, chargesIncluded: false, surface: 42, rooms: 2, bedrooms: 1,
    floor: 2, totalFloors: 4, isTopFloor: false, isGroundFloor: false, constructionYear: 1992,
    energyRating: "C", greenhouseGasRating: "C", heatingType: "Gaz collectif", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "3 rue des Lavaux",
    latitude: 46.9118, longitude: 6.3555, amenities: ["parking", "cellar"],
    daysAgo: 4, image: IMG("photo-1502005229762-cf1b2da7c5d6"), agencyName: "Agence du Larmont",
  },
  {
    key: "p17", title: "Duplex avec garage et balcon", propertyType: "DUPLEX",
    price: 920, charges: 65, chargesIncluded: false, surface: 74, rooms: 4, bedrooms: 2,
    floor: 3, totalFloors: 4, isTopFloor: true, isGroundFloor: false, constructionYear: 2010,
    energyRating: "B", greenhouseGasRating: "B", heatingType: "Gaz individuel", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "27 rue Toussaint Louverture",
    latitude: 46.8998, longitude: 6.3467, amenities: ["garage", "balcony", "elevator"],
    daysAgo: 6, image: IMG("photo-1512918728675-ed5a9ecdebfd"), agencyName: "Immo Plus Pontarlier",
  },
  {
    key: "p18", title: "Maison de caractère avec cheminée", propertyType: "HOUSE",
    price: 1050, charges: 0, chargesIncluded: false, surface: 120, rooms: 6, bedrooms: 4,
    floor: null, totalFloors: 3, isTopFloor: false, isGroundFloor: true, constructionYear: 1900,
    energyRating: "E", greenhouseGasRating: "D", heatingType: "Bois + électrique", kitchenType: "Équipée",
    furnished: false, city: "Montbenoît", postalCode: "25650", address: "5 rue de l'Abbaye",
    latitude: 46.8577, longitude: 6.4025, amenities: ["fireplace", "garden", "cellar", "garage"],
    daysAgo: 18, image: IMG("photo-1576941089067-2de3c901e126"), agencyName: "Century Immobilier",
  },
  {
    key: "p19", title: "Studio meublé avec balcon", propertyType: "STUDIO",
    price: 460, charges: 40, chargesIncluded: true, surface: 26, rooms: 1, bedrooms: 0,
    floor: 4, totalFloors: 5, isTopFloor: true, isGroundFloor: false, constructionYear: 2003,
    energyRating: "C", greenhouseGasRating: "C", heatingType: "Électrique", kitchenType: "Kitchenette",
    furnished: true, city: "Pontarlier", postalCode: "25300", address: "15 rue de la Halle",
    latitude: 46.9066, longitude: 6.3543, amenities: ["furnished", "balcony"],
    daysAgo: 2, image: IMG("photo-1522708323590-d24dbb6b0267"), agencyName: "Agence du Larmont",
  },
  {
    key: "p20", title: "T4 avec grand jardin et garage", propertyType: "APARTMENT",
    price: 990, charges: 70, chargesIncluded: false, surface: 88, rooms: 4, bedrooms: 3,
    floor: 0, totalFloors: 2, isTopFloor: false, isGroundFloor: true, constructionYear: 2000,
    energyRating: "C", greenhouseGasRating: "C", heatingType: "Gaz individuel", kitchenType: "Équipée",
    furnished: false, city: "La Cluse-et-Mijoux", postalCode: "25300", address: "8 route du Fort",
    latitude: 46.8712, longitude: 6.3391, amenities: ["garage", "garden", "cellar"],
    daysAgo: 5, image: IMG("photo-1570129477492-45c003edd2be"), isPrivateOwner: true, phone: "03 81 XX XX 06",
  },
  {
    key: "p21", title: "Bel appartement T3 proche centre", propertyType: "APARTMENT",
    price: 830, charges: 55, chargesIncluded: false, surface: 71, rooms: 3, bedrooms: 2,
    floor: 1, totalFloors: 4, isTopFloor: false, isGroundFloor: false, constructionYear: 1999,
    energyRating: "C", greenhouseGasRating: "C", heatingType: "Gaz collectif", kitchenType: "Équipée",
    furnished: false, city: "Pontarlier", postalCode: "25300", address: "12 rue de la République",
    latitude: 46.9060, longitude: 6.3549, amenities: ["garage", "balcony", "cellar"],
    daysAgo: 2, image: IMG("photo-1502672260266-1c1ef2d93688"), agencyName: "Agence du Larmont",
  },
  {
    key: "p22", title: "Grand T5 avec terrasse — Besançon", propertyType: "APARTMENT",
    price: 1290, charges: 85, chargesIncluded: false, surface: 112, rooms: 5, bedrooms: 4,
    floor: 3, totalFloors: 6, isTopFloor: false, isGroundFloor: false, constructionYear: 2012,
    energyRating: "B", greenhouseGasRating: "B", heatingType: "Gaz collectif", kitchenType: "Équipée",
    furnished: false, city: "Besançon", postalCode: "25000", address: "22 rue de Belfort",
    latitude: 47.2378, longitude: 6.0241, amenities: ["terrace", "parking", "elevator", "cellar"],
    daysAgo: 3, image: IMG("photo-1502672260266-1c1ef2d93688"), agencyName: "Century Immobilier",
  },
];

// dedupGroupId partagé + sources multiples pour tester la détection de
// doublons : "p01" et "p21" sont volontairement le même logement réel
// (même adresse et coordonnées, prix/surface quasi identiques), publié
// sous 3 sources démo différentes.
const DUPLICATE_LINKS: Record<string, string> = {
  p21: "p01",
};

const SOURCES_FOR = (key: string): { source: string; suffix: string }[] => {
  if (key === "p01") {
    return [
      { source: "demo-siteA", suffix: "a" },
      { source: "demo-siteB", suffix: "b" },
    ];
  }
  if (key === "p21") {
    return [{ source: "demo-siteC", suffix: "c" }];
  }
  return [{ source: "demo", suffix: "" }];
};

function toNormalized(p: DemoProperty, source: string, suffix: string): NormalizedListing {
  const externalId = `${p.key}${suffix}`;
  const publishedAt = new Date(Date.now() - p.daysAgo * 86_400_000).toISOString();
  return {
    id: `${source}:${externalId}`,
    source,
    sourceUrl: `https://demo.immoradar.local/${source}/annonce/${externalId}`,
    externalId,
    title: p.title,
    description:
      `${p.title} situé à ${p.city}. Logement de ${p.surface} m² comprenant ${p.rooms} pièce(s) ` +
      `dont ${p.bedrooms} chambre(s). Chauffage : ${p.heatingType}. Cuisine : ${p.kitchenType}. ` +
      `Disponible ${p.daysAgo <= 3 ? "immédiatement" : "prochainement"}. [Donnée de démonstration]`,
    price: p.price,
    charges: p.charges,
    chargesIncluded: p.chargesIncluded,
    surface: p.surface,
    rooms: p.rooms,
    bedrooms: p.bedrooms,
    floor: p.floor ?? undefined,
    totalFloors: p.totalFloors ?? undefined,
    isTopFloor: p.isTopFloor,
    isGroundFloor: p.isGroundFloor,
    constructionYear: p.constructionYear,
    propertyType: p.propertyType,
    transactionType: "RENT",
    address: p.address,
    city: p.city,
    postalCode: p.postalCode,
    latitude: p.latitude,
    longitude: p.longitude,
    images: [p.image],
    amenities: p.amenities,
    energyRating: p.energyRating,
    greenhouseGasRating: p.greenhouseGasRating,
    heatingType: p.heatingType,
    kitchenType: p.kitchenType,
    furnished: p.furnished,
    publishedAt,
    updatedAt: publishedAt,
    contact: {
      agencyName: p.agencyName,
      phone: p.phone,
      isPrivateOwner: p.isPrivateOwner,
    },
    rawSourceData: { demoKey: p.key },
  };
}

export function generateDemoListings(): NormalizedListing[] {
  const out: NormalizedListing[] = [];
  for (const p of PROPERTIES) {
    for (const { source, suffix } of SOURCES_FOR(p.key)) {
      out.push(toNormalized(p, source, suffix));
    }
  }
  return out;
}

/** Regroupement "vérité terrain" pour le seed : dedupGroupId partagé. */
export function demoDedupGroupKey(demoKey: string): string {
  return DUPLICATE_LINKS[demoKey] ?? demoKey;
}

export function createDemoConnector(): SourceAdapter {
  return {
    sourceName: "demo",
    displayName: "Données de démonstration",

    getInfo(): ConnectorInfo {
      return {
        sourceName: "demo",
        displayName: "Données de démonstration",
        state: "ACTIVE",
      };
    },

    async search(_params: SourceSearchParams): Promise<NormalizedListing[]> {
      return generateDemoListings();
    },

    async getListing(externalId: string): Promise<NormalizedListing | null> {
      return generateDemoListings().find((l) => l.externalId === externalId) ?? null;
    },
  };
}
