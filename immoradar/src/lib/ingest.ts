import { prisma } from "./prisma";
import { boundingBox } from "./geo";
import { findMatchingGroup, toDedupCandidate, type DedupCandidate } from "./dedup";
import type { NormalizedListing } from "@/types/listing";
import { randomUUID } from "crypto";

// ─────────────────────────────────────────────────────────────────────────
// Pipeline d'ingestion : transforme des NormalizedListing (sortie d'un
// SourceAdapter) en lignes de base de données, en leur assignant un groupe
// de doublons via le moteur de détection (lib/dedup.ts). Utilisé par le
// script de seed pour les données de démonstration, et conçu pour être
// réutilisé par une tâche d'arrière-plan lorsque de vraies sources seront
// branchées (voir §21, §30 : jamais de recherche externe synchrone).
// ─────────────────────────────────────────────────────────────────────────

export async function ingestNormalizedListings(
  items: NormalizedListing[],
  options: { isDemo: boolean },
): Promise<{ created: number; groups: Set<string> }> {
  let created = 0;
  const groups = new Set<string>();

  for (const item of items) {
    const box = boundingBox(item.latitude, item.longitude, 0.2);
    const nearby = await prisma.listing.findMany({
      where: {
        latitude: { gte: box.minLat, lte: box.maxLat },
        longitude: { gte: box.minLon, lte: box.maxLon },
      },
      select: {
        id: true,
        dedupGroupId: true,
        latitude: true,
        longitude: true,
        price: true,
        surface: true,
        rooms: true,
        city: true,
        description: true,
      },
    });

    const candidates: DedupCandidate[] = nearby.map((l) => ({
      id: l.id,
      dedupGroupId: l.dedupGroupId,
      latitude: l.latitude,
      longitude: l.longitude,
      price: l.price,
      surface: l.surface,
      rooms: l.rooms,
      city: l.city,
      description: l.description,
    }));

    const probe = toDedupCandidate(item, "pending");
    const match = findMatchingGroup(probe, candidates);
    const dedupGroupId = match?.dedupGroupId ?? randomUUID();
    groups.add(dedupGroupId);

    let contactId: string | undefined;
    if (item.contact && (item.contact.agencyName || item.contact.phone || item.contact.isPrivateOwner)) {
      const contact = await prisma.contact.create({
        data: {
          agencyName: item.contact.agencyName ?? null,
          phone: item.contact.phone ?? null,
          contactFormUrl: item.contact.contactFormUrl ?? null,
          isPrivateOwner: item.contact.isPrivateOwner ?? false,
        },
      });
      contactId = contact.id;
    }

    const listing = await prisma.listing.create({
      data: {
        dedupGroupId,
        isDemo: options.isDemo,
        title: item.title,
        description: item.description,
        transactionType: item.transactionType,
        propertyType: item.propertyType,
        price: item.price,
        charges: item.charges,
        chargesIncluded: item.chargesIncluded ?? false,
        surface: item.surface,
        rooms: item.rooms,
        bedrooms: item.bedrooms,
        floor: item.floor,
        totalFloors: item.totalFloors,
        isTopFloor: item.isTopFloor ?? false,
        isGroundFloor: item.isGroundFloor ?? false,
        constructionYear: item.constructionYear,
        energyRating: item.energyRating,
        greenhouseGasRating: item.greenhouseGasRating,
        heatingType: item.heatingType,
        kitchenType: item.kitchenType,
        furnished: item.furnished,
        address: item.address,
        city: item.city,
        postalCode: item.postalCode,
        latitude: item.latitude,
        longitude: item.longitude,
        availableFrom: item.availableFrom ? new Date(item.availableFrom) : null,
        publishedAt: item.publishedAt ? new Date(item.publishedAt) : null,
        images: {
          create: item.images.map((url, position) => ({ url, position })),
        },
        sources: {
          create: [
            {
              sourceName: item.source,
              sourceUrl: item.sourceUrl,
              externalId: item.externalId,
              rawSourceData: item.rawSourceData as never,
              contactId,
            },
          ],
        },
      },
    });

    if (item.amenities.length > 0) {
      const amenities = await prisma.amenity.findMany({ where: { key: { in: item.amenities } } });
      await prisma.listingAmenity.createMany({
        data: amenities.map((a) => ({ listingId: listing.id, amenityId: a.id })),
        skipDuplicates: true,
      });
    }

    created++;
  }

  return { created, groups };
}
