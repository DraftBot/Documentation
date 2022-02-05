---
description: >-
  Grâce à DraftBot, vous pouvez créer des commandes personnalisées sur votre
  serveur !
---

# Commandes personnalisées

## Configuration

### Depuis Discord

Vous pouvez créer une commande personnalisée avec la commande `customcommand create`.\
DraftBot vous demandera alors les informations suivantes :

* Nom de la commande
* Description de la commande
* Restreindre ou interdire la commande à certains rôles
* Restreindre ou interdire la commande à certains salons
* Type(s) d'action(s)&#x20;
  * Envoyer un message
  * Ajouter/Retirer des rôles
  * Faire un achat dans la boutique
* Si vous souhaitez ou non que la commande soit affichée dans le `help`

### Depuis le panel web

Vous pouvez configurer les commandes personnalisées depuis le panel web : [draftbot.fr](https://draftbot.fr).\
Il vous suffira de vous connecter en haut à droite puis de vous rendre dans la catégorie "Vos serveurs"

![](<../.gitbook/assets/image (42).png>)

Ensuite, choisissez un de vos serveurs sur le côté gauche puis sélectionner "**Commandes custom**".

![](<../.gitbook/assets/image (39).png>)

Pour créer une commande, cliquez sur le bouton "**Créer une commande**" en haut à droite et remplissez les divers champs (nom, description, actions, etc.).

{% hint style="info" %}
Besoin de modifier ou de supprimer la commande ? \
Pas de problème ! Cliquez sur Modifier ou Supprimer sur le côté droit.
{% endhint %}

![](<../.gitbook/assets/image (41).png>)

## Arguments

Les commandes personnalisées vous offrent la possibilité d'ajouter des arguments dans vos messages.

{% hint style="info" %}
**Exemple de commandes personnalisées avec des arguments**\
****_Message configuré: $1 est maintenant $2+_\
\
Commande de l'utilisateur : `!adjectif @Jules fort et beau`\
Réponse de DraftBot: @Jules _est maintenant_ fort et beau
{% endhint %}

Voici quelques exemples de variables d'arguments:\
\
$1 = première valeur saisie après la commande\
$2 = deuxième valeur saisie après la commande\
$1+ = tout ce qui est saisi après la commande\
$2+ = tout ce qui est saisi après la commande sauf la première valeur
