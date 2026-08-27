---
name: traduire
description: Traduit ou met à jour les pages anglaises de la documentation DraftBot à partir des sources françaises. Prend en argument une liste de chemins de fichiers français, séparés par des espaces.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(git:*), Bash(gh pr create:*), Bash(node scripts/check-translations.mjs:*), Bash(node scripts/check-links.mjs:*), Bash(node scripts/content-hash.mjs:*)
---

Tu mets à jour la documentation anglaise de DraftBot à partir de la version
française, qui fait autorité.

## Ce que tu reçois

Une liste de chemins relatifs à `docs/fr/`. Pour chacun, la page anglaise
correspondante est au même chemin sous `docs/en/` : les noms de fichiers et
de dossiers sont identiques entre les deux locales, seul le segment de
locale change.

Si la page anglaise existe déjà, mets-la à jour plutôt que de la réécrire :
compare la version française actuelle à celle qu'elle traduisait
(`git show <sourceCommit>:docs/fr/<chemin>`, d'après le frontmatter) et ne
touche qu'aux passages correspondant aux changements. Une page anglaise
relue par un humain ne doit pas être régénérée pour une virgule ajoutée
côté français.

## Terminologie

`glossaire.json` à la racine fait autorité sur tout terme d'interface :
noms de commandes, options du panel, libellés de boutons. Il est extrait des
traductions officielles du bot et du panel — n'invente jamais la traduction
d'un terme qui s'y trouve. Si un terme d'interface est absent du glossaire,
traduis-le au mieux et signale-le dans la description de la pull request,
pour qu'un relecteur confirme la forme retenue.

Le fichier est court (un peu moins de 500 termes, environ 490 lignes) et peut
être lu en entier. `Grep` reste le moyen le plus direct de cibler un terme
précis :

```
Grep pattern="\"Rôles automatiques\"" path=glossaire.json
Grep pattern="(?i)\"arrivées & départs\"" path=glossaire.json   # toutes les casses
```

Cherche chaque terme au moment où tu en as besoin. Une absence de résultat est
une information : le terme n'est pas au glossaire, traduis-le et signale-le.

Une entrée du glossaire vaut soit une chaîne, soit un tableau :

```json
"Rôles automatiques": "Automatic roles",
"Tickets : modérateurs": ["Tickets: moderators", "Tickets: staff"]
```

Un tableau signale que plusieurs traductions officielles coexistent dans le
produit. N'essaie pas de deviner laquelle vient du bot et laquelle du panel :
l'ordre du tableau ne l'indique pas de façon fiable. Retiens une forme,
tiens-t'y dans toute la page et dans les pages voisines, et signale ce choix
dans la description de la pull request pour qu'un relecteur tranche.

Une entrée dont les deux formes sont identiques n'est pas un doublon : elle
signale un nom de commande ou d'option que le bot ne traduit pas.

```json
"config": "config",
"couple": "couple"
```

Reprends-la telle quelle. Le nom du fichier source du bot n'est pas le nom
de la commande : `/couple` vit dans `love.json`, `/chifumi` dans `rps.json`.
Écrire `/love` documenterait une commande qui n'existe pas.

Le glossaire distingue les termes par leur casse, et des variantes voisines
peuvent porter des traductions différentes :

```json
"Arrivées & départs": "Welcome & goodbye",
"Arrivées & Départs": "Joins & Leaves"
```

Avant de retenir une traduction, regarde les entrées qui l'entourent dans le
fichier trié — `Grep` avec `-C 3` les rend sans ouvrir le fichier. Une entrée
isolée peut cacher une contradiction située une ligne plus haut.

## Règles de rédaction

`docs/fr/9.appendices/1.contribute.md` définit le style attendu. Le français
vouvoie ; l'anglais n'a pas cette distinction, mais garde le même registre :
informatif, neutre, sans « simply », « just » ni « obviously », qui
minimisent la difficulté pour le lecteur.

## Ce qui ne se traduit pas

- Les blocs MDC (`::hint`, `::tabs`, `::card`, `::collapse`) : la syntaxe et
  les noms de propriétés restent identiques. Leurs **valeurs** se traduisent :
  `label="Depuis le panel"` devient `label="From the panel"`.
- Les noms de commandes Discord (`/config`, `/premium activer`) : utilise la
  forme anglaise réelle du bot, vérifiée dans le glossaire.
- Les émojis personnalisés (`<:icon_premium:1096140508625125417>`).
- Les chemins d'assets : reprends ceux du fichier français, sauf si une
  capture anglaise existe au même chemin sous le dossier `assets/` de la
  catégorie anglaise.

## Frontmatter

- `slug` : le chemin d'URL anglais. Il doit commencer par le `slug` du
  `_dir.yml` du dossier parent, privé de son suffixe `/_dir`.
- `sourceHash` : le SHA-256 du fichier français traduit. L'obtenir par
  `node scripts/content-hash.mjs docs/fr/<chemin>`.
- `sourceCommit` : le SHA du commit courant (`git rev-parse HEAD`).
- Reprends `navigation.icon`, `noindex`, `redactors` et `contributors` tels
  quels depuis la version française.
- Ne reprends **pas** `translate`. Cette clé, posée sur une page française,
  l'exclut de la traduction — le changelog la porte. Une page qui te parvient
  malgré elle est une anomalie : ne la traduis pas, signale-le.

## Liens internes

Un lien `/docs/engagement/niveaux` pointe vers un slug français. Dans la page
anglaise, remplace-le par le `slug` déclaré dans le frontmatter de la page
anglaise correspondante. Si cette page n'est pas encore traduite, garde le
lien français : il reste valide grâce au repli par page.

## Pour finir

**Crée une branche avant tout commit.** Ne commite jamais sur `main` : un push
sur `main` déclenche le déploiement en production sans relecture, et c'est
cette relecture que la pull request existe pour obtenir.

```bash
git switch -c traduction/<pages-du-lot>   # ex. traduction/joins-and-leaves
```

Le nom dérive des pages traduites — le dernier segment du chemin d'une page,
ou un thème commun quand le lot en compte plusieurs. Vérifie que tu n'es plus
sur `main` (`git branch --show-current`) avant de committer, puis pousse cette
branche et ouvre la pull request depuis elle.

Lance `node scripts/check-translations.mjs` puis `node scripts/check-links.mjs`
et vérifie que les deux passent, puis ouvre une pull request vers `main`.

Dans la description de la pull request, liste pour chaque page ce qui a
changé côté français et ce que tu as répercuté. Signale explicitement tout
passage où tu as hésité sur la terminologie — un relecteur doit pouvoir
vérifier tes choix sans relire l'intégralité du diff.
