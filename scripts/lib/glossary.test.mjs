// scripts/lib/glossary.test.mjs
import assert from 'node:assert/strict'
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import {
  buildGlossary,
  buildImplicitCommandNames,
  flattenLocale,
  loadDirectory,
  mergeGlossaries,
} from './glossary.mjs'

test('flattenLocale aplatit les objets imbriques', () => {
  const flat = flattenLocale({ levels: { title: 'Niveaux', reward: 'Recompense' } })
  assert.equal(flat.get('levels.title'), 'Niveaux')
  assert.equal(flat.get('levels.reward'), 'Recompense')
})

test('flattenLocale ignore les valeurs non textuelles', () => {
  const flat = flattenLocale({ a: 'Texte', b: 42, c: null, d: ['x'] })
  assert.deepEqual([...flat.keys()], ['a'])
})

test('buildGlossary apparie les termes par cle commune', () => {
  const glossary = buildGlossary({ commands: { levels: { name: 'niveaux' } } }, { commands: { levels: { name: 'levels' } } })
  assert.equal(glossary.niveaux, 'levels')
})

test('buildGlossary ignore les cles absentes d un cote', () => {
  const glossary = buildGlossary({ a: { name: 'Seul' } }, { b: { name: 'Alone' } })
  assert.deepEqual(glossary, {})
})

test('buildGlossary ecarte les cles dont le dernier segment n est pas retenu', () => {
  const glossary = buildGlossary({ a: { description: 'Un terme' } }, { a: { description: 'A term' } })
  assert.deepEqual(glossary, {})
})

test('buildGlossary ecarte les termes trop longs pour etre du vocabulaire', () => {
  const long = 'Anticonstitutionnellement anticonstitutionnellement anticonstitutionnellement'
  const glossary = buildGlossary({ a: { name: long } }, { a: { name: 'Whatever' } })
  assert.deepEqual(glossary, {})
})

test('buildGlossary ecarte les termes identiques dans les deux langues', () => {
  assert.deepEqual(buildGlossary({ a: { name: 'Premium' } }, { a: { name: 'Premium' } }), {})
})

test('buildGlossary retient un nom de commande identique dans les deux langues', () => {
  const glossary = buildGlossary(
    { 'commands/love': { name: 'couple', options: { juliette: { name: 'juliette' } } } },
    { 'commands/love': { name: 'couple', options: { juliette: { name: 'juliette' } } } },
  )
  assert.deepEqual(glossary, { couple: 'couple', juliette: 'juliette' })
})

test('buildGlossary ecarte un libelle affiche identique porte par une cle name de commande', () => {
  const glossary = buildGlossary(
    { 'commands/config/logs': { name: 'Logs', modules: { messages: { name: 'Messages' } } } },
    { 'commands/config/logs': { name: 'Logs', modules: { messages: { name: 'Messages' } } } },
  )
  assert.deepEqual(glossary, {})
})

test('buildGlossary ecarte un terme identique hors des fichiers de commandes', () => {
  assert.deepEqual(buildGlossary({ 'modules/levels': { name: 'premium' } }, { 'modules/levels': { name: 'premium' } }), {})
})

test('buildGlossary ecarte une valeur qui se termine par un point, une exclamation ou une interrogation', () => {
  assert.deepEqual(buildGlossary({ a: { name: 'Termine.' } }, { a: { name: 'Ended.' } }), {})
  assert.deepEqual(buildGlossary({ a: { name: 'Termine !' } }, { a: { name: 'Ended!' } }), {})
  assert.deepEqual(buildGlossary({ a: { name: 'Termine ?' } }, { a: { name: 'Ended?' } }), {})
})

test('buildGlossary ecarte une valeur qui contient un gabarit d interpolation', () => {
  const glossary = buildGlossary(
    { pure: { name: '{count}' }, mixed: { name: '{count} membre' } },
    { pure: { name: '{amount}' }, mixed: { name: '{count} member' } },
  )
  assert.deepEqual(glossary, {})
})

test('buildGlossary ecarte une valeur francaise de plus de cinq mots', () => {
  const glossary = buildGlossary({ a: { name: 'un deux trois quatre cinq six' } }, { a: { name: 'one two three four five six' } })
  assert.deepEqual(glossary, {})
})

test('buildGlossary retient une cle profondement imbriquee dont le dernier segment est name', () => {
  const glossary = buildGlossary(
    { commands: { premium: { options: { duree: { name: 'duree' } } } } },
    { commands: { premium: { options: { duree: { name: 'duration' } } } } },
  )
  assert.equal(glossary.duree, 'duration')
})

test('buildGlossary detoure les espaces de mise en forme des deux cotes', () => {
  const glossary = buildGlossary({ a: { name: '\nNiveaux ' } }, { a: { name: ' Levels\n' } })
  assert.deepEqual(glossary, { Niveaux: 'Levels' })
})

test('buildGlossary ecarte un terme reduit a des espaces', () => {
  assert.deepEqual(buildGlossary({ a: { name: '  ' } }, { a: { name: 'Levels' } }), {})
})

test('loadDirectory prefixe les cles par leur chemin relatif pour eviter les collisions entre sous-dossiers', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'glossary-test-'))
  await mkdir(join(dir, 'commands'))
  await mkdir(join(dir, 'modules'))
  await writeFile(join(dir, 'commands', 'config.json'), JSON.stringify({ a: 'Un' }))
  await writeFile(join(dir, 'modules', 'config.json'), JSON.stringify({ a: 'Deux' }))
  const merged = await loadDirectory(dir)
  assert.equal(merged['commands/config'].a, 'Un')
  assert.equal(merged['modules/config'].a, 'Deux')
})

test('buildImplicitCommandNames retient les commandes sans cle name et rejette le reste', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'glossary-test-'))
  await mkdir(join(dir, 'src', 'commands-slash', 'bot'), { recursive: true })
  await mkdir(join(dir, 'languages', 'fr', 'commands', 'config'), { recursive: true })
  for (const source of ['config.ts', 'profil.ts']) {
    await writeFile(join(dir, 'src', 'commands-slash', 'bot', source), '')
  }
  await writeFile(join(dir, 'languages', 'fr', 'commands', 'config.json'), JSON.stringify({ description: 'Configurer' }))
  await writeFile(join(dir, 'languages', 'fr', 'commands', 'profil.json'), JSON.stringify({ name: 'profil' }))
  await writeFile(join(dir, 'languages', 'fr', 'commands', 'suggest-context.json'), JSON.stringify({ accept: { name: 'Acceptee' } }))
  await writeFile(join(dir, 'languages', 'fr', 'commands', 'config', 'logs.json'), JSON.stringify({ description: 'Journaux' }))

  const glossary = await buildImplicitCommandNames(dir)
  assert.deepEqual(glossary, { config: 'config' })
})

test('mergeGlossaries garde une chaine quand les sources concordent', () => {
  const merged = mergeGlossaries({ Niveaux: 'Levels' }, { Niveaux: 'Levels' })
  assert.equal(merged.Niveaux, 'Levels')
})

test('mergeGlossaries expose les deux formes quand les sources divergent', () => {
  const merged = mergeGlossaries({ 'Route de l Infini': 'Infinite road' }, { 'Route de l Infini': 'Counter' })
  assert.deepEqual(merged['Route de l Infini'], ['Infinite road', 'Counter'])
})

test('mergeGlossaries cumule trois variantes sans doublon', () => {
  const merged = mergeGlossaries({ a: 'X' }, { a: 'Y' }, { a: 'X' })
  assert.deepEqual(merged.a, ['X', 'Y'])
})
