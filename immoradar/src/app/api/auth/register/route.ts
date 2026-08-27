import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { checkRateLimit, clientKeyFromRequest } from "@/lib/rateLimit";

const schema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(200),
  name: z.string().min(1).max(120).optional(),
  consent: z.literal(true),
});

export async function POST(req: NextRequest) {
  const { allowed } = checkRateLimit(`register:${clientKeyFromRequest(req)}`, { limit: 5, windowMs: 60_000 });
  if (!allowed) return NextResponse.json({ error: "Trop de tentatives, réessayez plus tard." }, { status: 429 });

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Formulaire invalide (mot de passe : 8 caractères minimum, consentement requis)." }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (existing) return NextResponse.json({ error: "Un compte existe déjà avec cet e-mail." }, { status: 409 });

  const passwordHash = await bcrypt.hash(parsed.data.password, 10);
  await prisma.user.create({
    data: {
      email: parsed.data.email,
      name: parsed.data.name,
      passwordHash,
      consentedAt: new Date(),
    },
  });

  return NextResponse.json({ ok: true });
}
