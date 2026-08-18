import { readFile, readdir } from 'node:fs/promises'
import { dirname, join, posix } from 'node:path'
import { contentHash, parseFrontmatter } from './frontmatter.mjs'

const LOCALES = ['fr', 'en']
const DEFAULT_LOCALE = 'fr'

export function slugFromPath(relPath) {
  const segments = relPath.split('/').map(segment => segment.replace(/^\d+\./, ''))
  const last = segments.pop().replace(/\.(md|yml)$/, '')
  return '/' + [...segments, last].join('/')
}

async function walk(dir, base = dir) {
  const out = []
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch (error) {
    // Un dossier de locale absent est normal (docs/en avant sa creation) ;
    // toute autre erreur doit remonter plutot que de rendre une liste vide.
    if (error.code !== 'ENOENT') throw error
    return out
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'assets') continue
      out.push(...(await walk(full, base)))
    } else if (/\.(md|yml)$/.test(entry.name)) {
      out.push(posix.join(...full.slice(base.length + 1).split(/[/\\]/)))
    }
  }
  return out
}

export async function listPages(docsDir, locale) {
  const localeDir = join(docsDir, locale)
  const relPaths = (await walk(localeDir)).sort()
  return Promise.all(
    relPaths.map(async relPath => {
      const absPath = join(localeDir, relPath)
      const raw = await readFile(absPath, 'utf8')
      const { data } = relPath.endsWith('.yml')
        ? parseFrontmatter(`---\n${raw}\n---\n`)
        : parseFrontmatter(raw)
      return { relPath, absPath, raw, data }
    }),
  )
}

export async function findIssues(docsDir) {
  const targetLocale = LOCALES.find(l => l !== DEFAULT_LOCALE)
  const source = await listPages(docsDir, DEFAULT_LOCALE)
  const target = await listPages(docsDir, targetLocale)
  const byRelPath = new Map(target.map(page => [page.relPath, page]))

  const untranslated = []
  const stale = []
  const orphaned = []
  const slugErrors = []

  const dirSlugs = new Map()
  for (const page of [...source, ...target]) {
    if (page.relPath.endsWith('_dir.yml') && page.data.slug) {
      dirSlugs.set(dirname(page.absPath), page.data.slug.replace(/\/_dir$/, ''))
    }
  }

  for (const [locale, pages] of [
    [DEFAULT_LOCALE, source],
    [targetLocale, target],
  ]) {
    // Deux locales peuvent declarer le meme slug sans collision : le plugin
    // prefixe l'URL finale par /docs/<locale>. L'unicite se controle donc par
    // locale, pas sur l'ensemble des pages.
    const relPathBySlug = new Map()
    for (const page of pages) {
      if (!page.data.slug) {
        slugErrors.push(`${locale}/${page.relPath} : slug manquant`)
        continue
      }
      const parentSlug = dirSlugs.get(dirname(page.absPath))
      // Le _dir.yml racine a pour slug "/_dir", donc un parentSlug vide : la
      // comparaison se reduit alors au "/" initial, qu'un slug racine malforme
      // n'a pas. Tester la presence de la cle et non sa verite, sinon ce cas
      // sort de la verification.
      if (parentSlug !== undefined && !page.data.slug.startsWith(parentSlug + '/')) {
        slugErrors.push(
          `${locale}/${page.relPath} : slug "${page.data.slug}" ne commence pas par "${parentSlug}/"`,
        )
      }
      const twin = relPathBySlug.get(page.data.slug)
      if (twin) {
        slugErrors.push(
          `${locale}/${page.relPath} : slug "${page.data.slug}" deja declare par ${twin}`,
        )
      } else {
        relPathBySlug.set(page.data.slug, page.relPath)
      }
    }
  }

  for (const page of source) {
    if (page.relPath.endsWith('_dir.yml')) continue
    // Le frontmatter est parse en chaines : `translate: false` arrive en "false".
    // Un _dir.yml qui la porte ne couvre que lui-meme, aucune cascade n'existe
    // ici : la cle doit etre posee sur chaque page a exclure.
    if (page.data.translate?.trim() === 'false') continue
    const translated = byRelPath.get(page.relPath)
    if (!translated) {
      untranslated.push(page.relPath)
    } else if (translated.data.sourceHash !== contentHash(page.raw)) {
      stale.push(page.relPath)
    }
  }

  // Une page francaise renommee laisse sa traduction en place : sans ce
  // controle, l'ancienne page anglaise resterait servie indefiniment.
  const sourceRelPaths = new Set(source.map(page => page.relPath))
  for (const page of target) {
    if (!sourceRelPaths.has(page.relPath)) orphaned.push(page.relPath)
  }

  return { untranslated, stale, orphaned, slugErrors }
}
