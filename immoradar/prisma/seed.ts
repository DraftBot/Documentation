import { PrismaClient } from "@prisma/client";
import { seedDatabase } from "../src/lib/seedData";

const prisma = new PrismaClient();

seedDatabase(prisma)
  .then((log) => {
    console.log("🌱 Seed ImmoRadar");
    for (const line of log) console.log(line);
    console.log("🌱 Seed terminé.");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
