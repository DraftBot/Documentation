#!/usr/bin/env node
// scripts/build-glossary.mjs
//
// Lit les fichiers de langue du bot et du panel, deja entierement traduits,
// et en tire les correspondances FR -> EN des termes d'interface.
//
// Usage : node scripts/build-glossary.mjs <chemin-bot> <chemin-panel>
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildGlossary, buildImplicitCommandNames, loadDirectory, mergeGlossaries } from './lib/glossary.mjs'

const [botDir, panelDir] = process.argv.slice(2)
if (!botDir || !panelDir) {
  console.error('Usage : node scripts/build-glossary.mjs <DraftBot-6.0> <DraftBot.fr>')
  process.exit(1)
}

const glossary = mergeGlossaries(
  buildGlossary(
    await loadDirectory(join(botDir, 'languages/fr')),
    await loadDirectory(join(botDir, 'languages/en')),
  ),
  await buildImplicitCommandNames(botDir),
  buildGlossary(
    JSON.parse(await readFile(join(panelDir, 'languages/fr.json'), 'utf8')),
    JSON.parse(await readFile(join(panelDir, 'languages/en.json'), 'utf8')),
  ),
)

const sorted = Object.fromEntries(Object.entries(glossary).sort(([a], [b]) => a.localeCompare(b)))
// Resolu depuis le script, comme les deux verificateurs : lance depuis un autre
// repertoire, l'ecriture relative deposait le glossaire hors du depot.
const outFile = join(dirname(fileURLToPath(import.meta.url)), '..', 'glossaire.json')
await writeFile(outFile, JSON.stringify(sorted, null, 2) + '\n')
console.log(`${Object.keys(sorted).length} termes`)
