import { createHash } from 'node:crypto'

const BLOCK = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

// Parseur volontairement minimal : le frontmatter de ce dépôt n'utilise que des
// scalaires sur une ligne. Une valeur multi-ligne ou une liste imbriquée serait
// ignorée silencieusement — check-translations la signale via les slugs manquants.
export function parseFrontmatter(raw) {
  const match = raw.match(BLOCK)
  if (!match) return { data: {}, body: raw }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const pair = line.match(/^([A-Za-z_][\w.-]*):\s*(.*)$/)
    if (!pair) continue
    let value = pair[2].trim()
    if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1)
    }
    data[pair[1]] = value
  }
  return { data, body: raw.slice(match[0].length) }
}

export function contentHash(raw) {
  return createHash('sha256').update(raw.replace(/\r\n|\r/g, '\n'), 'utf8').digest('hex')
}
