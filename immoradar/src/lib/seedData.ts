import type { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AMENITY_DEFS } from "@/types/listing";
import { createDemoConnector } from "@/lib/connectors/demoConnector";
import { getConnectors } from "@/lib/connectors/registry";
import { ingestNormalizedListings } from "@/lib/ingest";

// Logique de seed partagée entre `prisma/seed.ts` (exécution locale/CI) et
// la route protégée `POST /api/admin/seed` (utile lorsque la base n'est
// joignable qu'depuis l'environnement de déploiement — ex: Vercel + Neon —
// et pas depuis la machine qui lance la commande). Idempotente : peut être
// rejouée sans dupliquer les données.
export async function seedDatabase(prisma: PrismaClient): Promise<string[]> {
  const log: string[] = [];

  for (const def of AMENITY_DEFS) {
    await prisma.amenity.upsert({
      where: { key: def.key },
      update: { label: def.label, icon: def.icon },
      create: { key: def.key, label: def.label, icon: def.icon },
    });
  }
  log.push(`✔ ${AMENITY_DEFS.length} équipements`);

  for (const connector of getConnectors()) {
    const info = connector.getInfo();
    await prisma.connectorStatus.upsert({
      where: { sourceName: info.sourceName },
      update: { status: info.state, notes: info.activationRequirements, lastError: info.lastError },
      create: {
        sourceName: info.sourceName,
        status: info.state,
        notes: info.activationRequirements,
        lastError: info.lastError,
      },
    });
  }
  log.push(`✔ État des connecteurs (${getConnectors().length})`);

  await prisma.listing.deleteMany({ where: { isDemo: true } });

  const demoConnector = createDemoConnector();
  const normalized = await demoConnector.search({
    area: { latitude: 46.9061, longitude: 6.3548, radiusKm: 30 },
    transactionType: "RENT",
  });
  const { created, groups } = await ingestNormalizedListings(normalized, { isDemo: true });
  log.push(`✔ ${created} annonces de démonstration ingérées, regroupées en ${groups.size} logements uniques`);

  await prisma.connectorStatus.update({
    where: { sourceName: "demo" },
    data: { listingCount: created, lastSyncAt: new Date() },
  });

  const cities = await prisma.listing.groupBy({
    by: ["city", "propertyType", "transactionType"],
    where: { isDemo: true },
    _count: true,
  });

  for (const group of cities) {
    if (group._count < 2) continue;
    const listingsForGroup = await prisma.listing.findMany({
      where: { city: group.city, propertyType: group.propertyType, transactionType: group.transactionType, isDemo: true },
      select: { price: true, surface: true, latitude: true, longitude: true, postalCode: true },
    });
    const perSqm = listingsForGroup.map((l) => l.price / l.surface).sort((a, b) => a - b);
    const avg = perSqm.reduce((s, v) => s + v, 0) / perSqm.length;

    const slug = group.city.toLowerCase().replace(/\s+/g, "-");
    const location = await prisma.location.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        city: group.city,
        postalCode: listingsForGroup[0]?.postalCode ?? null,
        latitude: listingsForGroup[0]?.latitude ?? 0,
        longitude: listingsForGroup[0]?.longitude ?? 0,
      },
    });

    await prisma.priceStatistic.upsert({
      where: {
        locationId_propertyType_transactionType: {
          locationId: location.id,
          propertyType: group.propertyType,
          transactionType: group.transactionType,
        },
      },
      update: {
        sampleSize: group._count,
        pricePerSqmMin: perSqm[0]!,
        pricePerSqmAvg: avg,
        pricePerSqmMax: perSqm[perSqm.length - 1]!,
        source: "demo-dataset",
        computedAt: new Date(),
      },
      create: {
        locationId: location.id,
        propertyType: group.propertyType,
        transactionType: group.transactionType,
        sampleSize: group._count,
        pricePerSqmMin: perSqm[0]!,
        pricePerSqmAvg: avg,
        pricePerSqmMax: perSqm[perSqm.length - 1]!,
        source: "demo-dataset",
      },
    });
  }
  log.push(`✔ Statistiques de prix calculées pour ${cities.length} segments ville/type`);

  const adminPassword = await bcrypt.hash("ImmoRadar2026!", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@immoradar.local" },
    update: {},
    create: {
      email: "admin@immoradar.local",
      name: "Administrateur ImmoRadar",
      passwordHash: adminPassword,
      role: "ADMIN",
      consentedAt: new Date(),
    },
  });

  const userPassword = await bcrypt.hash("Demo1234!", 10);
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@immoradar.local" },
    update: {},
    create: {
      email: "demo@immoradar.local",
      name: "Utilisateur Démo",
      passwordHash: userPassword,
      role: "USER",
      consentedAt: new Date(),
    },
  });

  const sampleListings = await prisma.listing.findMany({ where: { isDemo: true }, take: 3 });
  for (const listing of sampleListings) {
    await prisma.favorite.upsert({
      where: { userId_listingId: { userId: demoUser.id, listingId: listing.id } },
      update: {},
      create: { userId: demoUser.id, listingId: listing.id },
    });
  }

  const savedSearchName = "T3/T4 Pontarlier + 15km";
  const existingSavedSearch = await prisma.savedSearch.findFirst({
    where: { userId: demoUser.id, name: savedSearchName },
  });
  if (!existingSavedSearch) {
    const savedSearch = await prisma.savedSearch.create({
      data: {
        userId: demoUser.id,
        name: savedSearchName,
        locationLabel: "Pontarlier, Doubs",
        latitude: 46.9061,
        longitude: 6.3548,
        radiusKm: 15,
        filters: {
          transactionType: "RENT",
          propertyTypes: ["APARTMENT", "HOUSE"],
          priceMax: 950,
          surfaceMin: 65,
          amenities: [{ key: "garage", mode: "required" }, { key: "balcony", mode: "preferred" }],
        },
        weights: { price: 8, location: 8, surface: 6, amenities: 6, environment: 5, energyRating: 4 },
      },
    });
    await prisma.alert.create({
      data: { userId: demoUser.id, savedSearchId: savedSearch.id, channel: "EMAIL", active: true },
    });
  }

  log.push(`✔ Comptes de démonstration : ${admin.email} (mot de passe ImmoRadar2026!), ${demoUser.email} (mot de passe Demo1234!)`);
  return log;
}
