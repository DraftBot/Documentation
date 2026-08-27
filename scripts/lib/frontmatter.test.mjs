import assert from 'node:assert/strict'
import { test } from 'node:test'
import { contentHash, parseFrontmatter } from './frontmatter.mjs'

test('parseFrontmatter extrait les paires clé/valeur', () => {
  const raw = '---\ntitle: Niveaux\nslug: /engagement/niveaux\n---\n\nDu contenu.\n'
  const { data, body } = parseFrontmatter(raw)
  assert.equal(data.title, 'Niveaux')
  assert.equal(data.slug, '/engagement/niveaux')
  assert.equal(body, '\nDu contenu.\n')
})

test('parseFrontmatter retire les guillemets encadrants', () => {
  const raw = "---\nnavigation.icon: 'twemoji:shield'\n---\n"
  assert.equal(parseFrontmatter(raw).data['navigation.icon'], 'twemoji:shield')
})

test('parseFrontmatter rend un objet vide sans frontmatter', () => {
  const { data, body } = parseFrontmatter('Juste du texte.\n')
  assert.deepEqual(data, {})
  assert.equal(body, 'Juste du texte.\n')
})

test('contentHash normalise les fins de ligne', () => {
  assert.equal(contentHash('a\r\nb'), contentHash('a\nb'))
})

test('contentHash rend 64 caracteres hexadecimaux', () => {
  assert.match(contentHash('contenu'), /^[0-9a-f]{64}$/)
})
