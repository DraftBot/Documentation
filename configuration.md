---
description: Nous allons à présent configurer DraftBot.
---

# Configuration

## Configuration de DraftBot

Pour démarrer le processus de configuration, utilisez la commande `!config` ou `@DraftBot#0535 config`. Répondez ensuite aux questions suivantes en utilisant les réactions ou en envoyant votre choix par écrit.

{% hint style="info" %}
Vous pouvez également utiliser le panneau de configuration sur le site accessible via la commande [`panel`](https://draftbot.fr/dashboard)ou à l'adresse suivante : [https://draftbot.fr/dashboard](https://draftbot.fr/dashboard)
{% endhint %}

### Choix du préfixe

Le premier message vous indiquera le préfixe actuel et vous proposera de le modifier. Cliquez alors sur la réaction correspondante à votre choix :

* ✅ Pour changer de préfixe selon votre convenance et éviter les conflits avec d'autres bots.
* ❌ Pour conserver le préfixe actuel.

Si vous avez choisi de modifier le préfixe (✅), répondez alors par le caractère que vous souhaitez utiliser. \
Par exemple : _$ ? % § & ..._

{% hint style="info" %}
Dans tous les cas, vous pourrez toujours utiliser `@DraftBot#0535` à la place du préfixe pour utiliser une commande.\
Si vous vous trompez dans votre choix, vous pourrez donc toujours faire :\
`@DraftBot#0535 prefix` pour le modifier.
{% endhint %}

### Message de bienvenue

La seconde étape concerne le message automatique de bienvenue envoyé lorsqu'un membre rejoint le serveur. Le message vous proposera d'activer ce système et pour y répondre vous devrez cliquer sur l'une des deux réactions :&#x20;

* ✅ Pour activer le message de bienvenue.&#x20;
* ❌ Pour désactiver le message de bienvenue.

Si vous choisissez d'activer le message de bienvenue (✅) , vous devrez répondre par le nom du salon dans lequel vous souhaitez que les messages soient envoyés. \
Par exemple _#accueil, #bienvenue, #général ..._

### Message d'au revoir

La troisième étape concerne le message automatique d'au revoir envoyé lorsqu'un membre quitte le serveur. Le message vous proposera d'activer ce système et pour y répondre vous devrez cliquer sur l'une des deux réactions :&#x20;

* ✅ Pour activer le message d'au revoir.
* ❌ Pour désactiver le message d'au revoir.

Si vous choisissez d'activer le message d'au revoir (✅), vous devrez répondre par le nom du salon dans lequel vous souhaitez que les messages soient envoyés. \
Par exemple : _#accueil, #bienvenue, #général ..._

### Rôles automatiques

La quatrième étape concerne les rôles automatiques qui peuvent être attribués à l'arrivée d'un nouveau membre. Le message vous proposera d'ajouter des rôles automatiques et pour y répondre vous devrez cliquer sur l'une des deux réactions proposées :&#x20;

* ✅ Pour ajouter des rôles automatiques.
* ❌ Pour ne pas ajouter de rôle automatique.d

Si vous choisissez de mettre en place des rôles automatiques (✅), vous devrez répondre par le nom du / des rôle(s) à ajouter aux nouveaux membres et les séparer d'espaces s'il y a plusieurs rôles.\
Par exemple : @_membre @humain ..._

### Système de niveaux

La cinquième étape concerne le système de niveaux. Le premier message vous proposera de l'activer et pour y répondre, vous devrez cliquer sur l'une des deux réactions proposées :&#x20;

* ✅ Pour activer le système de niveaux.
* ❌ Pour désactiver le système de niveaux.

Si vous décidez d'activer le système de niveaux (✅), **DraftBot** vous demandera alors quelles quantités d’expérience vos membres pourront recevoir à chaque message et vous devrez cliquer sur une des quatre réactions proposées:&#x20;

&#x20;          :zero: | 0 XP par message\
&#x20;          :one: | Entre 5 et 15 XP par message\
&#x20;          :two: | Entre 15 et 25 XP par message\
&#x20;          :three: | Entre 25 et 35 XP par message

Par défaut, l'option pour ajouter entre 15 et 25 XP par messages est sélectionnée.

### Système d'économie

La sixième partie de la configuration concerne le système d'économie virtuel. Le message vous proposera de l'activer et pour y répondre, vous devrez choisir une des réaction proposées :&#x20;

* ✅ Activer le système d'économie.
* ❌ Désactiver le système d'économie.

Si vous décidez d'activer le système d'économie (✅), **DraftBot** vous demandera alors quelles quantités d'argent vos membres pourront recevoir à chaque message et vous devrez cliquer sur une des quatre réactions proposées :&#x20;

&#x20;          :zero: | 0 $ par message\
&#x20;          :one: | Entre 5 et 15 💰 par message\
&#x20;          :two: | Entre 15 et 25 💰 par message\
&#x20;          :three: | Entre 25 et 35 💰 par message

Par défaut, l'option pour ajouter entre 15 et 25 💰 par messages est sélectionnée.

### Suppression des messages de commande

La septième et dernière partie de la configuration concerne la suppression des messages de commandes. Le message vous proposera de supprimer les messages de commandes et pour y répondre, vous devrez choisir une des deux réactions proposées :&#x20;

* ✅ Les messages de commande seront supprimés
* ❌ Les messages de commande seront conservés

{% hint style="success" %}
Vous avez terminé la configuration de **DraftBot** !\
Vous recevrez également un message de confirmation vous récapitulant toutes les configurations effectuées.
{% endhint %}

{% hint style="info" %}
Vous pouvez réitérer cette configuration à tout moment pour modifier vos paramétrages, ou utiliser les commandes individuellement comme détaillées ci-dessous.
{% endhint %}

## Commandes individuelles

Afin de personnaliser au mieux le comportement qu'adoptera le bot sur votre serveur, vous pouvez utiliser les commandes suivantes pour paramétrer ses actions automatiques.

### `prefix`

La commande `!prefix` ou `@DraftBot#0535 prefix` permet de visualiser ou modifier le préfixe utilisé par **DraftBot**. Si vous saisissez le caractère de votre choix à la suite de cette commande, le préfixe sera alors modifié.&#x20;

{% hint style="info" %}
Par exemple, en envoyant `!prefix ?`, le préfixe sera modifié en `?`.
{% endhint %}

### `welcome`

Utilisez `!welcome` ou `@DraftBot#0535 welcome` pour paramétrer le message de bienvenue. **DraftBot** vous proposera de choisir ce que vous voulez configurer à propos du message de bienvenue et vous devrez répondre par le mot correspondant à ce que vous souhaitez faire:

* `on` → Activer le message de bienvenue&#x20;
* `off` → Désactiver le message de bienvenue&#x20;
* `show` → Afficher le message de bienvenue&#x20;
* `config` → Configurer le message de bienvenue&#x20;
* `reset` → Réinitialiser la configuration du système de bienvenue&#x20;
* `back` → Changer la couleur du fond du message de bienvenue&#x20;
* `color` → Changer la couleur de l'embed du message de bienvenue _(_[_fonctionnalité premium_](https://www.draftbot.fr/premium)_)_&#x20;
* `image` → Mettre une image de fond au message de bienvenue _(_[_fonctionnalité premium_](https://www.draftbot.fr/premium)_)_

`confg`, `back`, `color` et `image`, demanderons d'autres paramètres. Il suffit de répondre aux questions comme dans la commande `config`.

### `autorole`

La commande `!autorole` ou `@DraftBot#0535 autorole` permet de gérer les rôles attribués aux nouveaux membres.\
\
Si vous exécutez la commande, un message vous sera envoyé par **DraftBot** pour savoir ce que vous souhaitez faire. Répondez par le `mot` correspondant à ce que vous voulez faire :

* &#x20;`add` → Ajouter un / des rôle(s) attribués aux nouveaux membres
* `remove` → Retirer un / des rôle(s) attribués aux nouveaux membres
* `list` → Afficher la liste des rôles attribués aux nouveaux membres
* `reset` → Supprimer tout les rôles attribués aux nouveaux membres&#x20;

`add` nécessite un rôle à attribuer aux nouveaux membres et `remove` nécessite un rôle déjà attribué aux nouveaux membres.

### `logs`

La commande `!logs` ou `@DraftBot#0535 logs` permet de paramétrer les logs DraftBot, ce qui une fois activé et configuré pourra envoyer dans le salon configuré un message lorsque quelque chose se passe sur votre serveur en fonction des différents modules de logs _(modération, auto-modération, configuration, arrivées et départs, salons, rôles, émojis, pseudos, transactions, événements, vocal et messages)_.

Si vous exécutez la commande, un message vous sera envoyé par **DraftBot** pour savoir ce que vous souhaitez faire. Répondez par le `mot` correspondant à ce que vous voulez faire :

* &#x20;`on` → Activer le système de logs
* `off` → Désactiver le système de logs
* `channel` → Ajouter un salon par défaut où seront envoyés les logs sans salon individuel
* `color` → Changer la couleurs par défaut des messages de logs
* `modules` → Configurer un module de logs individuellement
* `ignore` → Ajouter un salon que les logs ignoreront (si une action se passe dans le salon)

`channel` et `ignore` nécessitent le nom d'un salon, `color` nécessite une [couleur en code hex](https://htmlcolorcodes.com) (exemple: _#00000_) et pour `modules` il faut répondre aux questions comme avec la commande `config`

### `adminlevel`

Suivez l'activité de vos membres grâce à la fonction de niveaux. Vous pouvez l'activer, la désactiver ou modifier son intensité, l’ignorer, la booster, la personnaliser ou encore la réinitialiser avec la commande `!adminlevel` ou `@DraftBot#0535 adminlevel`.&#x20;

Un message vous sera envoyé par **DraftBot** pour savoir si vous voulez :

* `on` → Activer le système de niveaux
* `off` → Désactiver le système de niveaux
* `config` → Configure le système de niveaux
* `boosters` → Multiplier les gains d’un rôle
* `ignore` → Ne pas prendre en compte un rôle ou salon pour le gain d'expérience
* `reset` → Réinitialiser la fonctionnalité  (`!adminxp resetall` pour réinitialiser l'expérience)
* `import` → Importer les niveaux du bot MEE6
* `color` → Personnaliser la couleur des embeds du système  ([fonctionnalité premium](https://www.draftbot.fr/premium))

Si vous choisissez de **modifier le gain d'expérience**, en envoyant `config`, vous aurez alors le choix entre quatre propositions:

&#x20;          :zero: | 0 XP par message\
&#x20;          :one: | Entre 5 et 15 XP par message\
&#x20;          :two: | Entre 15 et 25 XP par message\
&#x20;          :three: | Entre 25 et 35 XP par message\
\
Le taux actuel est indiqué par un symbole :white\_check\_mark:. Cliquez alors sur la réaction de votre choix, en fonction du taux d’expérience que vous voulez à présent faire gagner par messages.&#x20;

Si vous choisissez de **booster un rôle**, en envoyant `boosters`, vous aurez alors le choix entre trois propositions : Ajouter un rôle booster | Supprimer un rôle booster | Afficher les rôles boosters

*   Si vous choisissez d’ajouter un rôle booster, vous devrez choisir quel rôle doit

    être boosté. Vous pourrez ensuite choisir le multiplicateur entre `1.5`, `2.0`, `2.5` ou `3.0`.
*   Si vous choisissez de supprimer un rôle booster, **DraftBot** vous montrera tous

    les rôles boostés et vous devrez alors choisir lequel supprimer.
* Si vous choisissez d’afficher la liste des rôles boosters, **DraftBot** vous enverra tous les rôles boostés et le multiplicateur qui leur a été attribué.

Si vous choisissez d’**ignorer l’expérience**, en envoyant `ignore`, vous aurez le choix entre deux propositions: Ignorer un rôle | Ignorer un salon&#x20;

* Si vous choisissez le rôle (1️⃣), vous devrez renseigner le rôle qui empêchera les membres l'ayant de gagner de l’expérience.&#x20;
* Si vous choisissez le salon (2️⃣), vous devrez renseigner le salon dans lequel l’expérience ne sera pas comptabilisé.

Si vous choisissez de **réinitialiser la configuration** du système de niveaux, en envoyant `reset`, vous n’aurez rien à faire de plus, **DraftBot** vous supprimera toutes les configurations effectués pour ce système. A savoir:

* Son statut
* Le nombre d'expérience gagné a chaque message
* Les messages de récompenses (statut, salon, message customisé)
* Le statut qui empêche les membres invisibles de gagner de l’expérience
* Les rôles qui empêchent le gain d'expérience
* Les salons dans les quels le gain d'expérience est désactivé
* Les rôles qui permettent de multiplier le gain d'expérience
* La couleur de la fonctionnalité de niveaux ([fonctionnalité premium](https://www.draftbot.fr/premium))

Si vous choisissez de **modifier la couleur**, en envoyant `color` ([fonctionnalité premium](https://www.draftbot.fr/premium)) il vous suffira de renseigner un code hexadécimal dont voici un sélecteur pour choisir vos couleurs: [htmlcolorcodes.com](https://htmlcolorcodes.com)\
Ces codes sont les mêmes que ceux que vous utilisez pour la couleur de vos rôles.

### `automoderation`

La commande `!automoderation` ou `@DraftBot#0535 automoderation` permet de paramétrer la détection et suppression de messages indésirables sur votre serveur (_mots interdits, invitations discord, liens externes, spam de messages, mentions excessives, émojis excessifs_).

Si vous exécutez la commande, un message vous sera envoyé par **DraftBot** pour savoir ce que vous souhaitez faire. Répondez par le `mot` correspondant à ce que vous voulez faire :

* `filter` → Paramétrer la liste de mots interdits
* `invites` → Paramétrer la détection et suppression d'invitations discord
* `links` → Paramétrer la détection et suppression de liens externes
* `spam` → Paramétrer la détection et suppression de spam de messages
* `mentions` → Paramétrer la détection et suppression de mentions excessives&#x20;
* `emojis` → Paramétrer la détection et suppression d'émojis excessifs

Par la suite vous devrez répondre aux questions posées par **DraftBot** comme dans les autres commandes y compris `config`.

### `autosanctions`

La commande `!autosanction` ou `@DraftBot#0535 autosanction` permet de paramétrer les sanctions automatiques en fonction des infractions attribuées grâce à la détection de messages indésirables du système `automoderation` lié aux différentes catégories d’infractions (_mots interdits, invitations discord, liens externes, spam de messages, mentions excessives, émojis excessifs_).

Si vous exécutez la commande, un message vous sera envoyé par **DraftBot** pour savoir ce que vous souhaitez faire. Répondez par le `mot` correspondant à ce que vous voulez faire :

* `create` → Créer une sanction automatique en fonction des infractions
* `delete` → Supprimer une sanction automatique en fonction des infractions
* `list` → Afficher la liste des sanctions automatiques
* `reset` → Réinitialiser les sanctions automatiques

Puis vous devrez répondre aux questions posées par **DraftBot** comme avec les autres commandes dont `config`.

### `vanish`

Permet d'activer ou de désactiver la suppression automatique des commandes que vous envoyez au bot. Lorsque vous entrez `!vanish` ou `@DraftBot#0535 vanish` le bot activera ou désactivera la fonctionnalité.
