---
description: Nous allons à présent configurer le DraftBot.
---

# Configuration

## Configuration de DraftBot

Pour démarrer le processus de configuration, utilisez la commande `!config` ou `@DraftBot#0535 config`. Répondez ensuite aux questions suivantes en utilisant les réactions ou en envoyant votre choix par écrit.

### Choix du préfixe

Le premier message vous indiquera le préfixe actuel et vous proposera de le modifier. Cliquez alors sur la réaction correspondant à votre choix :

* ✅ Pour changer de préfixe selon votre convenance et éviter les conflits avec d'autres bots.
* ❎ Pour conserver le préfixe actuel.

Si vous avez choisis de modifier le préfixe, répondez alors par le caractère que vous souhaitez utiliser.   
Par exemple : _$ ? % § & ..._

{% hint style="info" %}
Dans tous les cas, vous pourrez toujours utiliser `@DraftBot#0535` à la place du préfixe pour utiliser une commande.
{% endhint %}

### Message de bienvenue

Le second message concerne les message automatique de bienvenue. Pour répondre à cette question vous devrez cliquer sur l'une des deux réaction : 

* ✅ Pour activer le message de bienvenue 
* ❎ Pour désactiver le message de bienvenue

Si vous choisissez d'activer le message de bienvenue, vous devrez répondre par le nom du salon dans lequel vous souhaitez que les messages soient envoyés.   
Par exemple _\#accueil \#bienvenue \#général ..._

### Rôle automatique

{% hint style="warning" %}
En cours de réalisation
{% endhint %}

### Logs du bot

{% hint style="warning" %}
En cours de réalisation
{% endhint %}

### Niveau d'activité

{% hint style="warning" %}
En cours de réalisation
{% endhint %}

### Invitations Discord externes

{% hint style="warning" %}
En cours de réalisation
{% endhint %}

### Suppression des commandes

{% hint style="warning" %}
En cours de réalisation
{% endhint %}

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

Utilisez `!welcome` ou `@DraftBot#0535 welcome` pour activer ou désactiver le message de bienvenue. Si vous décidez de l'activer en cliquant sur la réaction ✅ , le bot vous demandera de désigner un salon textuel dans lequel ces messages devront être envoyés.

### `autorole`

La commande `!autorole` ou `@DraftBot#0535 autorole` permet d'attribuer un rôle automatiquement aux nouveaux arrivants.   
Dans le cas `!autorole exemple`, le rôle "Exemple" sera donné à toute personne rejoignant le serveur.

### `logs`

Vous pouvez activer les logs de **DraftBot** afin d'être tenu informé de ses activités :   
Arrivée et départ d'utilisateurs, modification de la configuration, modification des rôles, du lexique...  
Pour cela, utilisez simplement la commande `!logs` ou `@DraftBot#0535 logs` afin d'activer ou désactiver les logs. Vous pouvez choisir le salon textuel où seront envoyés ces messages en précisant le nom de ce salon à la suite de la commande, par exemple : `!logs logschannel`

### `adminlevel`

Suivez l'activité de vos membres grâce à la fonction de niveaux. Vous pouvez l'activer, la désactiver ou modifier son intensité avec la commande `!adminlevel` ou `@DraftBot#0535 adminlevel`. Un message vous sera envoyé par DraftBot pour savoir si vous voulez :  
          activer → _On_          -          désactiver → _Off_          -          modifier l'intensité → _Config_  
Si vous choisissez de modifier le gain d'expérience, en envoyant _Config_, vous aurez alors le choix entre quatre propositions :  
  
           0⃣ \| 0 XP par message  
           1⃣ \| Entre 5 et 15 XP par message  
           2⃣ \| Entre 15 et 25 XP par message  
           3⃣ \| Entre 25 et 35 XP par message  
  
Le taux actuel est indiqué par un symbole ✅. Cliquez alors sur la réaction de votre choix, en fonction du taux d'experience que vous voulez à présent faire gagner. 

### `admininvites`

Vous avez la possibilité d'interdire les invitation Discord sur votre serveur, et de les faire supprimer automatiquement par **DraftBot**, pour éviter que vos membres fassent de la pub. Pour cela, il suffit d'executer la commande `!admininvites` ou `@DraftBot admininvites` afin d'activer ou désactiver cette fonctionnalité.

### `vanish`

Permet d'activer ou de désactiver la suppression automatique des commandes que vous envoyez au bot. Lorsque vous entrez `!vanish` ou `@DraftBot#0535 vanish` le bot vous répondra pour vous informer si vous avez activé ou désactivé cette fonctionnalité.

