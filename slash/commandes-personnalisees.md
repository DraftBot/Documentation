---
description: >-
  Avec DraftBot, vous avez la possibilité de créer vos propres commandes !
---

# Commandes personnalisées

## Configuration

<!-- Depuis Discord -->
{% tabs %}
{% tab title="Via la commande /config" %}
Vous pouvez créer une commande personnalisée avec la commande <mark style="color:orange;">/config</mark>, en vous rendant ensuite dans l'onglet "Commandes personnalisées" du sélecteur.\
DraftBot vous demandera alors les informations suivantes :

* Nom de la commande
* Description de la commande
* Restreindre ou interdire la commande à certains rôles
* Restreindre ou interdire la commande à certains salons
* Le / les types d'actions que vous souhaitez ajouter à la commande personnalisée :
  * Envoyer un message
  * Ajouter ou retirer un ou des rôle(s)
  * Ajouter un rôle temporaire
  * Faire un achat dans la boutique
* Si vous souhaitez ou non que la commande soit affichée dans le <mark style="color:orange;">/aide</mark>.

{% hint style="info" %}
Lorsque vous exécutez une commande personnalisée, votre texte de déclenchement de commande reste dans le salon. Si vous souhaitez que **DraftBot** supprime votre commande, vous pouvez activer l'option correspondante dans <mark style="color:orange;">/config</mark>, en vous rendant dans l'onglet "Commandes personnalisées" du sélecteur, puis en activant le bouton "Activer la suppression des commandes".
{% endhint %}
{% endtab %}

<!-- Depuis le panel web -->
{% tab title="Depuis le panel" %}
<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Pour créer une commande personnalisée, rendez-vous dans la catégorie "Commandes personnalisées" du panel.\
Remplissez ensuite les divers champs (nom, description, actions...) puis cliquez sur le bouton "Créer" en bas à droite de votre commande personnalisée.

![Panel de configuration des commandes personnalisées](<../.gitbook/assets/custom-commands/view.png>)

{% hint style="info" %}
Besoin de modifier ou de supprimer une commande ?\
Pas de problème ! Cliquez sur "Modifier" ou "Supprimer" sur le côté droit.
![Boutons de modification ou suppression d'une commande personnalisée](<../.gitbook/assets/custom-commands/edit-command.png>)
{% endhint %}

{% endtab %}
{% endtabs %}

## Arguments

Les commandes personnalisées vous offrent la possibilité d'ajouter des arguments dans vos messages.

Voici les différentes variables d'arguments possibles avec **DraftBot** :

>`$1` ➜ Première valeur saisie après la commande.\
>`$2` ➜ Deuxième valeur saisie après la commande.\
>`$1+` ➜ Tout ce qui est saisi après la commande.\
>`$2+` ➜ Tout ce qui est saisi après la commande sauf la première valeur.

{% hint style="info" %}
**Exemple de commande personnalisée avec des arguments :**
* Message configuré : `$1 est maintenant $2+`
* Commande de l'utilisateur : `!adjectif @Jules fort et beau`
* Réponse de DraftBot : @Jules _est maintenant_ fort et beau
{% endhint %}