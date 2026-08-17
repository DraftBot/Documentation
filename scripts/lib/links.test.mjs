// scripts/lib/links.test.mjs
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { test } from 'node:test'
import { extractDocsLinks, extractImagePaths, findBrokenLinks } from './links.mjs'

test('extractImagePaths trouve les images markdown', () => {
  const body = '![Une legende](./assets/levels/panel.png)\n\n![Autre](../assets/x.jpg)\n'
  assert.deepEqual(extractImagePaths(body), ['./assets/levels/panel.png', '../assets/x.jpg'])
})

test('extractImagePaths ignore les URLs absolues', () => {
  assert.deepEqual(extractImagePaths('![x](https://example.com/a.png)'), [])
})

test('extractImagePaths ignore une image dans un bloc de code', () => {
  const body = '![Vraie](./assets/a.png)\n\n```\n![Exemple](./assets/inexistant.png)\n```\n'
  assert.deepEqual(extractImagePaths(body), ['./assets/a.png'])
})

test('extractImagePaths ignore une image en code inline', () => {
  assert.deepEqual(extractImagePaths('Ecrivez `![Legende](./assets/x.png)` pour une image.'), [])
})

test('extractImagePaths ne bascule pas sur un delimiteur cite en pleine phrase', () => {
  const body = 'Fermez avec ``` en fin de bloc.\n\n![Vraie](./assets/a.png)\n'
  assert.deepEqual(extractImagePaths(body), ['./assets/a.png'])
})

test('extractImagePaths detecte les images avant et apres un bloc', () => {
  const body = '![Avant](./assets/a.png)\n\n```\ncode\n```\n\n![Apres](./assets/b.png)\n'
  assert.deepEqual(extractImagePaths(body), ['./assets/a.png', './assets/b.png'])
})

test('extractImagePaths ignore ce qui suit un bloc non ferme', () => {
  const body = '![Avant](./assets/a.png)\n\n```\n![Dedans](./assets/x.png)\n'
  assert.deepEqual(extractImagePaths(body), ['./assets/a.png'])
})

test('extractImagePaths ne ferme pas un bloc sur un delimiteur avec info-string', () => {
  const body = '```\n```Texte\ncontenu\n```\n![Apres](./assets/a.png)\n'
  assert.deepEqual(extractImagePaths(body), ['./assets/a.png'])
})

test('extractDocsLinks trouve les liens internes, ancre et titre compris', () => {
  const body = 'Voir [les niveaux](/docs/engagement/niveaux) et [la boutique](/docs/engagement/economie#la-boutique "Boutique").\n'
  assert.deepEqual(extractDocsLinks(body), [
    '/docs/engagement/niveaux',
    '/docs/engagement/economie#la-boutique',
  ])
})

test('extractDocsLinks ignore un lien dans un bloc de code', () => {
  const body = '```\n[exemple](/docs/inexistant)\n```\n[vrai](/docs/engagement/niveaux)\n'
  assert.deepEqual(extractDocsLinks(body), ['/docs/engagement/niveaux'])
})

test('extractDocsLinks ignore les liens externes et relatifs', () => {
  const body = '[a](https://www.draftbot.fr/docs/x) [b](./autre.md) [c](/premium)\n'
  assert.deepEqual(extractDocsLinks(body), [])
})

async function linksFixture(pages) {
  const dir = await mkdtemp(join(tmpdir(), 'links-'))
  for (const [relPath, content] of Object.entries(pages)) {
    await mkdir(dirname(join(dir, relPath)), { recursive: true })
    await writeFile(join(dir, relPath), content)
  }
  return dir
}

test('findBrokenLinks signale un lien interne vers un slug inconnu', async () => {
  const dir = await linksFixture({
    'fr/3.engagement/0.levels.md':
      '---\nslug: /engagement/niveaux\n---\nVoir [ceci](/docs/engagement/disparu).\n',
  })
  const broken = await findBrokenLinks(dir)
  assert.equal(broken.length, 1)
  assert.match(broken[0], /lien fr\/3\.engagement\/0\.levels\.md -> \/docs\/engagement\/disparu/)
})

test('findBrokenLinks accepte un lien vers un slug declare, ancre comprise', async () => {
  const dir = await linksFixture({
    'fr/3.engagement/0.levels.md':
      '---\nslug: /engagement/niveaux\n---\nVoir [ceci](/docs/engagement/economie#la-boutique).\n',
    'fr/3.engagement/1.economy.md': '---\nslug: /engagement/economie\n---\nFR\n',
  })
  assert.deepEqual(await findBrokenLinks(dir), [])
})

test('findBrokenLinks accepte un lien vers un slug declare par l autre locale', async () => {
  const dir = await linksFixture({
    'fr/3.engagement/0.levels.md':
      '---\nslug: /engagement/niveaux\n---\nVoir [ceci](/docs/engagement/economy).\n',
    'en/3.engagement/1.economy.md': '---\nslug: /engagement/economy\n---\nEN\n',
  })
  assert.deepEqual(await findBrokenLinks(dir), [])
})

test('findBrokenLinks signale une image absente', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'links-'))
  await mkdir(join(dir, 'fr/3.engagement'), { recursive: true })
  await writeFile(
    join(dir, 'fr/3.engagement/0.levels.md'),
    '---\nslug: /engagement/niveaux\n---\n![x](./assets/levels/panel.png)\n',
  )
  const broken = await findBrokenLinks(dir)
  assert.equal(broken.length, 1)
  assert.match(broken[0], /panel\.png/)
})

test('findBrokenLinks ne signale rien quand l image existe', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'links-'))
  await mkdir(join(dir, 'fr/3.engagement/assets/levels'), { recursive: true })
  await writeFile(join(dir, 'fr/3.engagement/assets/levels/panel.png'), 'x')
  await writeFile(
    join(dir, 'fr/3.engagement/0.levels.md'),
    '---\nslug: /engagement/niveaux\n---\n![x](./assets/levels/panel.png)\n',
  )
  assert.deepEqual(await findBrokenLinks(dir), [])
})
