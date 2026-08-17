import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import { contentHash } from './frontmatter.mjs'
import { findIssues, listPages, slugFromPath } from './pages.mjs'

test('slugFromPath retire les prefixes numeriques et l extension', () => {
  assert.equal(slugFromPath('3.engagement/0.levels.md'), '/engagement/levels')
  assert.equal(slugFromPath('0.home.md'), '/home')
})

test('slugFromPath conserve le suffixe _dir', () => {
  assert.equal(slugFromPath('3.engagement/_dir.yml'), '/engagement/_dir')
  assert.equal(slugFromPath('_dir.yml'), '/_dir')
})

async function fixture() {
  const dir = await mkdtemp(join(tmpdir(), 'docs-'))
  await mkdir(join(dir, 'fr/3.engagement'), { recursive: true })
  await mkdir(join(dir, 'en/3.engagement'), { recursive: true })
  return dir
}

test('listPages rend les pages d une locale avec leur frontmatter', async () => {
  const dir = await fixture()
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), '---\nslug: /engagement/niveaux\n---\nFR\n')
  const pages = await listPages(dir, 'fr')
  assert.equal(pages.length, 1)
  assert.equal(pages[0].relPath, '3.engagement/0.levels.md')
  assert.equal(pages[0].data.slug, '/engagement/niveaux')
})

test('findIssues signale une page non traduite', async () => {
  const dir = await fixture()
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), '---\nslug: /engagement/niveaux\n---\nFR\n')
  const issues = await findIssues(dir)
  assert.deepEqual(issues.untranslated, ['3.engagement/0.levels.md'])
  assert.deepEqual(issues.stale, [])
})

test('findIssues signale une traduction perimee', async () => {
  const dir = await fixture()
  const fr = '---\nslug: /engagement/niveaux\n---\nFR modifie\n'
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), fr)
  await writeFile(
    join(dir, 'en/3.engagement/0.levels.md'),
    '---\nslug: /engagement/levels\nsourceHash: ' + contentHash('autre chose') + '\n---\nEN\n',
  )
  const issues = await findIssues(dir)
  assert.deepEqual(issues.stale, ['3.engagement/0.levels.md'])
  assert.deepEqual(issues.untranslated, [])
})

test('findIssues ne signale rien quand la traduction est a jour', async () => {
  const dir = await fixture()
  const fr = '---\nslug: /engagement/niveaux\n---\nFR\n'
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), fr)
  await writeFile(
    join(dir, 'en/3.engagement/0.levels.md'),
    '---\nslug: /engagement/levels\nsourceHash: ' + contentHash(fr) + '\n---\nEN\n',
  )
  const issues = await findIssues(dir)
  assert.deepEqual(issues.stale, [])
  assert.deepEqual(issues.untranslated, [])
})

test('findIssues signale un slug incoherent avec son dossier parent', async () => {
  const dir = await fixture()
  await writeFile(join(dir, 'fr/3.engagement/_dir.yml'), 'slug: /engagement/_dir\ntitle: Engagement\n')
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), '---\nslug: /autre/niveaux\n---\nFR\n')
  const issues = await findIssues(dir)
  assert.equal(issues.slugErrors.length, 1)
  assert.match(issues.slugErrors[0], /0\.levels\.md/)
})

test('findIssues signale un slug racine malforme', async () => {
  const dir = await fixture()
  await writeFile(join(dir, 'fr/_dir.yml'), 'slug: /_dir\ntitle: Documentation\n')
  await writeFile(join(dir, 'fr/0.home.md'), '---\nslug: accueil\n---\nFR\n')
  const issues = await findIssues(dir)
  assert.equal(issues.slugErrors.length, 1)
  assert.match(issues.slugErrors[0], /0\.home\.md/)
})

test('findIssues signale deux pages d une meme locale declarant le meme slug', async () => {
  const dir = await fixture()
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), '---\nslug: /engagement/niveaux\n---\nFR\n')
  await writeFile(join(dir, 'fr/3.engagement/1.economy.md'), '---\nslug: /engagement/niveaux\n---\nFR\n')
  const issues = await findIssues(dir)
  assert.equal(issues.slugErrors.length, 1)
  assert.match(issues.slugErrors[0], /1\.economy\.md .*deja declare par 3\.engagement\/0\.levels\.md/)
})

test('findIssues accepte le meme slug dans deux locales differentes', async () => {
  const dir = await fixture()
  const fr = '---\nslug: /engagement/levels\n---\nFR\n'
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), fr)
  await writeFile(
    join(dir, 'en/3.engagement/0.levels.md'),
    '---\nslug: /engagement/levels\nsourceHash: ' + contentHash(fr) + '\n---\nEN\n',
  )
  const issues = await findIssues(dir)
  assert.deepEqual(issues.slugErrors, [])
})

test('findIssues signale une page anglaise sans source francaise', async () => {
  const dir = await fixture()
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), '---\nslug: /engagement/niveaux\n---\nFR\n')
  await writeFile(join(dir, 'en/3.engagement/9.removed.md'), '---\nslug: /engagement/removed\n---\nEN\n')
  const issues = await findIssues(dir)
  assert.deepEqual(issues.orphaned, ['3.engagement/9.removed.md'])
})

test('findIssues ignore une page source portant translate: false', async () => {
  const dir = await fixture()
  await writeFile(
    join(dir, 'fr/3.engagement/0.levels.md'),
    '---\nslug: /engagement/niveaux\ntranslate: false\n---\nFR\n',
  )
  const issues = await findIssues(dir)
  assert.deepEqual(issues.untranslated, [])
  assert.deepEqual(issues.stale, [])
})

// Le dispositif lit chaque fichier isolement : aucune cascade ne descend d'un
// _dir.yml vers ses pages. La cle doit donc etre posee page par page.
test('findIssues ne propage pas le translate: false d un _dir.yml aux pages', async () => {
  const dir = await fixture()
  await writeFile(join(dir, 'fr/3.engagement/_dir.yml'), 'slug: /engagement/_dir\ntranslate: false\n')
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), '---\nslug: /engagement/niveaux\n---\nFR\n')
  const issues = await findIssues(dir)
  assert.deepEqual(issues.untranslated, ['3.engagement/0.levels.md'])
})

test('findIssues signale un slug manquant', async () => {
  const dir = await fixture()
  await writeFile(join(dir, 'fr/3.engagement/0.levels.md'), '---\ntitle: Niveaux\n---\nFR\n')
  const issues = await findIssues(dir)
  assert.equal(issues.slugErrors.length, 1)
  assert.match(issues.slugErrors[0], /slug manquant/)
})

test('listPages propage une erreur autre qu un dossier absent', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'docs-'))
  await writeFile(join(dir, 'fr'), 'ceci est un fichier, pas un dossier')
  await assert.rejects(() => listPages(dir, 'fr'), { code: 'ENOTDIR' })
})
