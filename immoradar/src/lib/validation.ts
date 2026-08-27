import { z } from "zod";
import { AMENITY_KEYS } from "@/types/listing";

export const amenityFilterSchema = z.object({
  key: z.enum(AMENITY_KEYS),
  mode: z.enum(["required", "preferred", "off"]),
});

export const filterSetSchema = z.object({
  transactionType: z.enum(["RENT", "BUY"]),
  propertyTypes: z.array(z.enum(["APARTMENT", "HOUSE", "STUDIO", "DUPLEX", "LOFT", "OTHER"])),
  priceMin: z.number().min(0).max(50_000_000).optional(),
  priceMax: z.number().min(0).max(50_000_000).optional(),
  chargesIncluded: z.boolean().optional(),
  surfaceMin: z.number().min(0).max(10_000).optional(),
  surfaceMax: z.number().min(0).max(10_000).optional(),
  roomsMin: z.number().int().min(0).max(50).optional(),
  roomsMax: z.number().int().min(0).max(50).optional(),
  bedroomsMin: z.number().int().min(0).max(50).optional(),
  bedroomsMax: z.number().int().min(0).max(50).optional(),
  floorMode: z.enum(["any", "ground", "min", "max", "top"]).optional(),
  floorMin: z.number().int().min(0).max(200).optional(),
  floorMax: z.number().int().min(0).max(200).optional(),
  amenities: z.array(amenityFilterSchema).max(30),
  goodDealsOnly: z.boolean().optional(),
});

export const scoreWeightsSchema = z.object({
  price: z.number().min(0).max(10),
  location: z.number().min(0).max(10),
  surface: z.number().min(0).max(10),
  amenities: z.number().min(0).max(10),
  environment: z.number().min(0).max(10),
  energyRating: z.number().min(0).max(10),
});

export const sortSchema = z
  .enum(["relevance", "price_asc", "price_desc", "surface", "distance", "recent", "value"])
  .default("relevance");

export const searchRequestSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  radiusKm: z.number().min(0.1).max(200),
  filters: filterSetSchema,
  weights: scoreWeightsSchema,
  sort: sortSchema.optional(),
  page: z.number().int().min(1).max(500).default(1),
  pageSize: z.number().int().min(1).max(50).default(20),
});

export type SearchRequest = z.infer<typeof searchRequestSchema>;
