---
description: Nous allons à présent configurer DraftBot.
---

# Configuration

## Configuration de DraftBot

Pour démarrer le processus de configuration, utilisez la commande `!config` ou `@DraftBot#0535 config`. Répondez ensuite aux questions suivantes en utilisant les réactions ou en envoyant votre choix par écrit.

### Choix du préfixe

Le premier message vous indiquera le préfixe actuel et vous proposera de le modifier. Cliquez alors sur la réaction correspondant à votre choix :

* ✅ Pour changer de préfixe selon votre convenance et éviter les conflits avec d'autres bots.
* ❎ Pour conserver le préfixe actuel.

Si vous avez choisi de modifier le préfixe, répondez alors par le caractère que vous souhaitez utiliser.   
Par exemple : _$ ? % § & ..._

{% hint style="info" %}
Dans tous les cas, vous pourrez toujours utiliser `@DraftBot#0535` à la place du préfixe pour utiliser une commande.
{% endhint %}

### Message de bienvenue

La seconde étape concerne les messages automatiques de bienvenue. Pour répondre à cette question vous devrez cliquer sur l'une des deux réactions : 

* ✅ Pour activer le message de bienvenue 
* ❎ Pour désactiver le message de bienvenue

Si vous choisissez d'activer le message de bienvenue, vous devrez répondre par le nom du salon dans lequel vous souhaitez que les messages soient envoyés.   
Par exemple _\#accueil \#bienvenue \#général ..._

### Rôle automatique

La troisième étape concerne le rôle automatique qui peut être attribué à l'arrivée d'un nouveau membre. Pour répondre à cette question vous devrez cliquer sur l'une des deux réactions proposées: 

* ✅ Pour activer le rôle automatique
* ❎ Pour désactiver le rôle automatique

 Si vous choisissez de mettre en place un rôle automatique, vous devez répondre par le nom du rôle à ajouter aux nouveaux membres.   
Par exemple @_membre @humain ..._

### Système de niveaux

La quatrième étape concerne le système de niveaux. Pour y répondre, vous devrez cliquer sur une des deux réactions proposées: 

* ✅ Pour activer le système de niveaux
* ❎ Pour désactiver le système de niveaux.

Si vous décidez d'activer le système de niveaux, DraftBot vous demande alors si vous souhaitez modifier l'expérience gagnée à chaque message. Vous pouvez choisir une des deux réactions proposées: 

* ✅ Modifier l'expérience gagnée par message
* ❎ Continuer sans modifier l'expérience gagnée par message

Si vous souhaitez modifier la valeur, DraftBot vous propose alors 4 choix: 

           0⃣ \| 0 XP par message  
           1⃣ \| Entre 5 et 15 XP par message  
           2⃣ \| Entre 15 et 25 XP par message  
           3⃣ \| Entre 25 et 35 XP par message

Cliquez alors sur la réaction de votre choix.

### Invitations Discord externes

La cinquième partie de la configuration concerne l'interdiction à vos membres d'envoyer des invitations vers d'autres serveurs. Pour y répondre, vous devrez choisir une des réaction proposées: 

* ✅ Les invitations ne seront pas interdites aux membres
* ❎ Les membres ne pourront pas envoyer d'invitations

{% hint style="info" %}
Les administrateurs pourront envoyer des invitations même si c'est interdit aux membres.
{% endhint %}

### Suppression des messages de commande

La sixième et dernière partie de la configuration concerne la suppression des messages de commande. Pour y répondre, vous devez choisir une des réactions proposées: 

* ✅ Les messages de commande seront supprimés
* ❎ Les messages de commande seront conservés

{% hint style="success" %}
Vous avez terminé la configuration de **DraftBot**
{% endhint %}

{% hint style="info" %}
Vous pouvez réitérer cette configuration à tout moment pour modifier vos paramétrages, ou utiliser les commandes individuellement comme détaillées ci-dessous.
{% endhint %}

## Commandes individuelles

Afin de personnaliser au mieux le comportement qu'adoptera le bot sur votre serveur, vous pouvez utiliser les commandes suivantes pour paramétrer ses actions automatiques.

### `prefix`

La commande `!prefix` ou `@DraftBot#0535 prefix` permet de visualiser ou modifier le préfixe utilisé par **DraftBot**. Si vous saisissez le caractère de votre choix à la suite de cette commande, le préfixe sera alors modifié. Par exemple, en envoyant `!prefix ?` le préfixe sera modifié par `?`.

### `welcome`

Utilisez `!welcome` ou `@DraftBot#0535 welcome` pour activer ou désactiver le message de bienvenue. Suite à quoi vous aurez la possibilité de modifier ou non le texte de bienvenue. En cliquant sur la réaction ✅, il vous sera demandé d’insérer le texte à envoyer lors de l’arrivée d’un nouveau membre.

### `autorole`

La commande `!autorole` ou `@DraftBot#0535 autorole` permet d'attribuer un rôle automatiquement aux nouveaux arrivants. Comme pour le préfixe, si vous tapez la commande, vous serez renseigné sur le rôle actuellement attribué, autrement dans le cas `!autorole exemple`, le rôle "Exemple" sera donné à toute personne rejoignant le serveur.

### `logs`

Vous pouvez activer les logs de **DraftBot** afin d'être tenu informé de ses activités :   
Arrivée et départ d'utilisateurs, modification de la configuration, modification des rôles, du lexique...  
Pour cela, utilisez simplement la commande `!logs` ou `@DraftBot#0535 logs` afin d'activer ou désactiver les logs. Vous pouvez choisir le salon textuel où seront envoyés ces messages en précisant le nom de ce salon à la suite de la commande, par exemple : `!logs logschannel`

### `adminlevel`

Suivez l'activité de vos membres grâce à la fonction de niveaux. Vous pouvez l'activer, la désactiver ou modifier son intensité, l’ignorer, la booster, la personnaliser ou encore la réinitialiser avec la commande `!adminlevel` ou `@DraftBot#0535 adminlevel`. 

Un message vous sera envoyé par DraftBot pour savoir si vous voulez :

* L'activer → `on`
* Le désactiver → `off`
* Le configurer → `config`
* Multiplier les gains d’un rôle → `boosters`
* Ne pas prendre en compte un rôle ou salon → `ignore` 
* Réinitialiser la fonctionnalité → `reset` \(`!adminxp resetall` pour réinitialiser l'expérience\)
*  Personnaliser la couleur → `color` \(fonctionnalité réservé aux [donateurs](https://www.draftbot.fr/premium)\)

Si vous choisissez de **modifier le gain d'expérience**, en envoyant `config`, vous aurez alors le choix entre quatre propositions:

           0⃣ \| 0 XP par message  
           1⃣ \| Entre 5 et 15 XP par message  
           2⃣ \| Entre 15 et 25 XP par message  
           3⃣ \| Entre 25 et 35 XP par message  
  
Le taux actuel est indiqué par un symbole ✅. Cliquez alors sur la réaction de votre choix, en fonction du taux d’expérience que vous voulez à présent faire gagner. 

Si vous choisissez de **booster un rôle**, en envoyant `boosters`, vous aurez alors le choix entre trois propositions : Ajouter un rôle booster \| Supprimer un rôle booster \| Afficher les rôles boosters

* Si vous choisissez d’ajouter un rôle booster, vous devrez choisir quel rôle doit

  être boosté. Vous pourrez ensuite choisir le multiplicateur entre `1.5`, `2.0`, `2.5` ou `3.0`.

* Si vous choisissez de supprimer un rôle booster, DraftBot vous montrera tous

  les rôles boostés et vous devrez alors choisir lequel supprimer.

* Si vous choisissez d’afficher la liste des rôles boosters, DraftBot vous enverra tous les rôles boostés et le multiplicateur qui leur a été attribué.

Si vous choisissez d’**ignorer l’expérience**, en envoyant `ignore`, vous aurez le choix entre deux propositions: Ignorer un rôle \| Ignorer un salon 

* Si vous choisissez le rôle, vous devez renseigner le rôle qui empêchera les membres l'ayant de gagner de l’expérience. 
* Si vous choisissez le salon, vous devez renseigner le salon dans lequel l’expérience ne sera pas comptabilisé.

Si vous choisissez de **réinitialiser la configuration** du système de niveaux, en envoyant `reset`, vous n’aurez rien à faire de plus, DraftBot vous supprimera toutes les configurations effectués pour ce système. A savoir:

* Son statut
* Le nombre d'expérience gagné a chaque message
* Les messages de récompenses \(statut, salon, message customisé\)
* Le statut qui empêche les membres invisibles de gagner de l’expérience
* Les rôles qui empêchent le gain d'expérience
* Les salons dans les quels le gain d'expérience est désactivé
* Les rôles qui permettent de multiplier le gain d'expérience
* La couleur de la fonctionnalité de niveaux \(fonctionnalité réservé aux [donateurs](https://www.draftbot.fr/premium)\)

Si vous choisissez de **modifier la couleur**, en envoyant `color`. \(fonctionnalité réservé aux [donateurs](https://www.draftbot.fr/premium)\) Ensuite il vous suffira de renseigner un code hexadécimal \(il s’agit d’une série de 6 chiffre représentant une couleur\) voici un sélecteur pour choisir vos couleurs: [htmlcolorcodes.com](https://htmlcolorcodes.com/)

### `admininvites`

Vous avez la possibilité d'interdire les invitations Discord sur votre serveur, et de les faire supprimer automatiquement par **DraftBot**, pour éviter que vos membres fassent de la pub. Pour cela, il suffit d’exécuter la commande `!admininvites` ou `@DraftBot admininvites` afin d'activer ou désactiver cette fonctionnalité.

### `vanish`

Permet d'activer ou de désactiver la suppression automatique des commandes que vous envoyez au bot. Lorsque vous entrez `!vanish` ou `@DraftBot#0535 vanish` le bot vous répondra pour vous informer si vous avez activé ou désactivé cette fonctionnalité.

