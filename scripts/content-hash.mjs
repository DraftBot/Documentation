#!/usr/bin/env node
// Empreinte d'un fichier Markdown, telle que la definit le contrat partage
// avec le site : sha256 du fichier brut, fins de ligne normalisees.
import { readFile } from 'node:fs/promises'
import { contentHash } from './lib/frontmatter.mjs'

const [path] = process.argv.slice(2)
if (!path) {
  console.error('Usage : node scripts/content-hash.mjs <fichier>')
  process.exit(1)
}
console.log(contentHash(await readFile(path, 'utf8')))
