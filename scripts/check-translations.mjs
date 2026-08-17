#!/usr/bin/env node
import { appendFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { findIssues, listPages } from './lib/pages.mjs'

const docsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs')
const args = process.argv.slice(2)

if (args.includes('--print-paths')) {
  for (const locale of ['fr', 'en']) {
    for (const page of await listPages(docsDir, locale)) {
      if (page.data.slug) console.log(`/docs/${locale}${page.data.slug}`)
    }
  }
  process.exit(0)
}

const { untranslated, stale, orphaned, slugErrors } = await findIssues(docsDir)

if (slugErrors.length) {
  console.error('Slugs incoherents :')
  for (const error of slugErrors) console.error(`  ${error}`)
}
if (orphaned.length) {
  console.error('Pages anglaises sans source francaise (a renommer ou a supprimer) :')
  for (const relPath of orphaned) console.error(`  ${relPath}`)
}
if (untranslated.length) console.log(`Non traduites : ${untranslated.length}`)
if (stale.length) console.log(`Perimees : ${stale.join(' ')}`)

// Une execution de traduction est bornee en tours (--max-turns) : lui passer
// les 43 pages en attente, soit ~63 000 mots, ne peut pas aboutir. Le lot
// suivant part a la synchronisation suivante — le workflow se declenche sur
// tout push touchant docs/fr, et workflow_dispatch permet de resorber
// l'arriere sans attendre une modification francaise.
const BATCH_SIZE = 5

if (args.includes('--github-output') && process.env.GITHUB_OUTPUT) {
  const queue = [...stale, ...untranslated]
  const batch = queue.slice(0, BATCH_SIZE)
  await appendFile(process.env.GITHUB_OUTPUT, `pages=${batch.join(' ')}\n`)
  console.log(`Lot envoye : ${batch.length} page(s)`)
  // Sans ce compte, une synchronisation qui ne traite que son lot passerait
  // pour un travail termine.
  if (queue.length > batch.length) {
    console.log(`Reste en attente au-dela du lot : ${queue.length - batch.length} page(s)`)
  }
}

process.exit(slugErrors.length ? 1 : 0)
