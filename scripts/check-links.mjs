#!/usr/bin/env node
// scripts/check-links.mjs
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { findBrokenLinks } from './lib/links.mjs'

const docsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs')
const broken = await findBrokenLinks(docsDir)

for (const entry of broken) console.error(`Cible introuvable : ${entry}`)
console.log(`${broken.length} reference(s) cassee(s)`)
process.exit(broken.length ? 1 : 0)
