// scripts/lib/links.mjs
import { access } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { listPages } from './pages.mjs'

const IMAGE = /!\[[^\]]*\]\(([^)]+)\)/g
const DOCS_LINK = /\]\((\/docs[^)]*)\)/g

// Un bloc de code montre de la syntaxe, pas une reference : le guide de
// redaction cite des chemins d'exemple qui n'ont pas vocation a exister.
// Le suivi se fait ligne a ligne : un delimiteur Markdown ouvre ou ferme un
// bloc uniquement en debut de ligne, alors qu'un ``` cite en pleine phrase
// n'est que du texte. Les lignes retirees sont remplacees par du vide plutot
// que supprimees, pour ne pas decaler ce qui suit.
function stripCode(body) {
  let inFence = false
  return body
    .split('\n')
    .map(line => {
      const fence = line.match(/^\s*`{3,}(.*)$/)
      if (fence) {
        // Une fence fermante ne porte pas d'info-string (CommonMark) : ```js ouvre
        // un bloc, ``` seul le ferme. Sans cette regle, un bloc citant la syntaxe
        // d'un autre bloc — la page Markdown le fait — desynchronise le suivi.
        if (!inFence) inFence = true
        else if (fence[1].trim() === '') inFence = false
        return ''
      }
      return inFence ? '' : line.replace(/`[^`\n]*`/g, '')
    })
    .join('\n')
}

export function extractImagePaths(body) {
  const out = []
  for (const match of stripCode(body).matchAll(IMAGE)) {
    const path = match[1].trim()
    if (/^(https?:)?\/\//.test(path)) continue
    out.push(path)
  }
  return out
}

export function extractDocsLinks(body) {
  const out = []
  for (const match of stripCode(body).matchAll(DOCS_LINK)) {
    // Un titre de lien suit la cible apres une espace : [texte](/docs/x "titre").
    out.push(match[1].trim().split(/\s+/)[0])
  }
  return out
}

export async function findBrokenLinks(docsDir) {
  const broken = []
  const pagesByLocale = new Map()
  // Les URLs publiques ne portent pas de segment de locale : draftbot.fr sert le
  // francais et draftbot.gg l'anglais sur des chemins independants. Un lien
  // /docs/<slug> est donc valide des qu'une locale declare ce slug.
  const slugs = new Set()
  for (const locale of ['fr', 'en']) {
    const pages = await listPages(docsDir, locale)
    pagesByLocale.set(locale, pages)
    for (const page of pages) if (page.data.slug) slugs.add(page.data.slug)
  }

  for (const [locale, pages] of pagesByLocale) {
    for (const page of pages) {
      if (!page.relPath.endsWith('.md')) continue
      for (const ref of extractImagePaths(page.raw)) {
        const target = resolve(dirname(page.absPath), ref.split('#')[0])
        try {
          await access(target)
        } catch {
          broken.push(`image ${locale}/${page.relPath} -> ${ref}`)
        }
      }
      for (const ref of extractDocsLinks(page.raw)) {
        const target = ref.replace(/[#?].*$/, '').replace(/\/$/, '')
        // La racine de la documentation n'est la page d'aucun slug.
        if (target === '/docs') continue
        if (!slugs.has(target.slice('/docs'.length))) {
          broken.push(`lien ${locale}/${page.relPath} -> ${ref}`)
        }
      }
    }
  }
  return broken
}
