// scripts/lib/glossary.mjs
import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

// Au-dela de cette longueur, une valeur est une phrase et non un terme
// d'interface : la traduire mot a mot nuirait plus qu'elle n'aiderait.
const MAX_TERM_LENGTH = 60

// Segments de cle dont la valeur est systematiquement un libelle d'interface
// (nom de commande, option, bouton) plutot qu'un message adresse au joueur.
// Mesure sur les locales du bot : `title`, `description` et `log` sont a plus
// de 55% des phrases completes (elles se terminent par un point) alors que
// ces trois-la n'en portent quasiment aucune.
const TERM_SEGMENTS = ['name', 'label', 'author']

// Un nom de commande, de sous-commande ou d'option Discord ne peut porter ni
// majuscule, ni espace, ni emoji. Le format distingue donc `couple` ou
// `secure-roles` des libelles affiches qui partagent la meme cle `name`
// (« Logs », « 🔧 Base ») parmi les fichiers de commandes du bot.
const COMMAND_ID = /^[\p{Ll}\p{N}_-]{1,32}$/u

function isCommandName(key, french, english) {
  return key.startsWith('commands/')
    && key.split('.').at(-1) === 'name'
    && COMMAND_ID.test(french)
    && COMMAND_ID.test(english)
}

export function flattenLocale(obj, prefix = '', out = new Map()) {
  for (const [key, value] of Object.entries(obj ?? {})) {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string') out.set(path, value)
    else if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenLocale(value, path, out)
    }
  }
  return out
}

export function buildGlossary(fr, en) {
  const flatFr = flattenLocale(fr)
  const flatEn = flattenLocale(en)
  const glossary = {}
  for (const [key, rawFrench] of flatFr) {
    const rawEnglish = flatEn.get(key)
    if (!rawEnglish) continue
    if (!TERM_SEGMENTS.includes(key.split('.').at(-1))) continue
    // Les fichiers de langue portent des espaces et des sauts de ligne de mise
    // en forme : sans trim, le glossaire retient « \nAbonnement » comme un
    // terme distinct, qu'aucune recherche dans une page ne retrouvera.
    const french = rawFrench.trim()
    const english = rawEnglish.trim()
    if (!french || !english) continue
    // Une commande dont le nom ne change pas de langue doit figurer au
    // glossaire : sans entree, le traducteur ne distingue pas « rien a
    // traduire » de « terme absent », et /couple — dont le fichier source
    // s'appelle love.json — invite a ecrire /love.
    if (french === english && !isCommandName(key, french, english)) continue
    // Un point, une exclamation ou une interrogation finale marque une phrase,
    // pas un terme d'interface.
    if (/[.!?]$/.test(french) || /[.!?]$/.test(english)) continue
    // Une accolade signale un gabarit d'interpolation ({count}, {{URL}}) : un
    // libelle d'interface n'en porte pas.
    if (french.includes('{') || english.includes('{')) continue
    if (french.split(/\s+/).length > 5) continue
    if (french.length > MAX_TERM_LENGTH || english.length > MAX_TERM_LENGTH) continue
    glossary[french] = english
  }
  return glossary
}

// Une quinzaine de commandes — dont /config, la plus citée de la
// documentation — n'ont pas de clé `name` dans leurs fichiers de langue.
// `framework/command/registry.ts` retombe alors sur le nom déclaré en code,
// le même dans toutes les langues, et `buildGlossary` ne les voit pas.
// L'existence d'un fichier source homonyme sous `src/commands-slash`
// distingue une vraie commande d'un espace de noms comme `suggest-context`,
// qui porte des libellés de menu contextuel et non une commande.
export async function buildImplicitCommandNames(botDir) {
  const sources = new Set()
  const collect = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) await collect(join(dir, entry.name))
      else if (entry.name.endsWith('.ts')) sources.add(entry.name.replace(/\.ts$/, ''))
    }
  }
  await collect(join(botDir, 'src/commands-slash'))

  const commandsDir = join(botDir, 'languages/fr/commands')
  const glossary = {}
  for (const entry of await readdir(commandsDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith('.json')) continue
    const name = entry.name.replace(/\.json$/, '')
    if (!sources.has(name)) continue
    const locale = JSON.parse(await readFile(join(commandsDir, entry.name), 'utf8'))
    if (typeof locale.name === 'string' && locale.name.trim()) continue
    glossary[name] = name
  }
  return glossary
}

// Deux sources peuvent traduire le même terme différemment (le bot dit
// « Infinite road », le panel dit « Counter »). Écraser l'une par l'autre
// impose un choix invisible : on expose les variantes à la place.
export function mergeGlossaries(...glossaries) {
  const merged = {}
  for (const glossary of glossaries) {
    for (const [french, english] of Object.entries(glossary)) {
      const known = merged[french]
      if (known === undefined) {
        merged[french] = english
        continue
      }
      const variants = new Set([known, english].flat())
      merged[french] = variants.size === 1 ? [...variants][0] : [...variants]
    }
  }
  return merged
}

export async function loadDirectory(dir, prefix = '') {
  const merged = {}
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const key = prefix ? `${prefix}/${entry.name}` : entry.name
    if (entry.isDirectory()) {
      Object.assign(merged, await loadDirectory(join(dir, entry.name), key))
    } else if (entry.name.endsWith('.json')) {
      merged[key.replace(/\.json$/, '')] = JSON.parse(await readFile(join(dir, entry.name), 'utf8'))
    }
  }
  return merged
}
