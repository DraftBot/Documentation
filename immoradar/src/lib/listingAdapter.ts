import type { Prisma } from "@prisma/client";
import type { AmenityKey, NormalizedListing } from "@/types/listing";

export const listingWithRelations = {
  include: {
    images: { orderBy: { position: "asc" as const } },
    amenities: { include: { amenity: true } },
    sources: { include: { contact: true } },
  },
} satisfies Prisma.ListingDefaultArgs;

export type ListingWithRelations = Prisma.ListingGetPayload<typeof listingWithRelations>;

/** Convertit une ligne Prisma (avec relations) vers le format pivot NormalizedListing. */
export function toNormalizedListing(listing: ListingWithRelations): NormalizedListing {
  const primarySource = listing.sources[0];
  return {
    id: listing.id,
    source: primarySource?.sourceName ?? "unknown",
    sourceUrl: primarySource?.sourceUrl ?? "",
    externalId: primarySource?.externalId ?? undefined,
    title: listing.title,
    description: listing.description ?? undefined,
    price: listing.price,
    charges: listing.charges ?? undefined,
    chargesIncluded: listing.chargesIncluded,
    surface: listing.surface,
    rooms: listing.rooms ?? undefined,
    bedrooms: listing.bedrooms ?? undefined,
    floor: listing.floor ?? undefined,
    totalFloors: listing.totalFloors ?? undefined,
    isTopFloor: listing.isTopFloor,
    isGroundFloor: listing.isGroundFloor,
    constructionYear: listing.constructionYear ?? undefined,
    propertyType: listing.propertyType,
    transactionType: listing.transactionType,
    address: listing.address ?? undefined,
    city: listing.city,
    postalCode: listing.postalCode ?? undefined,
    latitude: listing.latitude,
    longitude: listing.longitude,
    images: listing.images.map((i) => i.url),
    amenities: listing.amenities.map((a) => a.amenity.key as AmenityKey),
    energyRating: listing.energyRating ?? undefined,
    greenhouseGasRating: listing.greenhouseGasRating ?? undefined,
    heatingType: listing.heatingType ?? undefined,
    kitchenType: listing.kitchenType ?? undefined,
    furnished: listing.furnished ?? undefined,
    publishedAt: listing.publishedAt?.toISOString(),
    updatedAt: listing.updatedAt.toISOString(),
    availableFrom: listing.availableFrom?.toISOString(),
    contact: primarySource?.contact
      ? {
          agencyName: primarySource.contact.agencyName,
          phone: primarySource.contact.phone,
          contactFormUrl: primarySource.contact.contactFormUrl,
          isPrivateOwner: primarySource.contact.isPrivateOwner,
        }
      : undefined,
  };
}
