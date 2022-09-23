---
description: >-
  Le système d'économie de DraftBot permet à vos membres d'obtenir de l'argent
  en étant actifs sur votre serveur et de pouvoir s'offrir des articles avec
  l'argent virtuelle gagnée.
---

# Economie

## Afficher le nombre d'argent

Vous pouvez afficher le nombre d'argent virtuel d'un membre sous forme d'image.

### La carte d'un membre

* Vous pouvez afficher votre carte à l'aide de la commande `/money`.
* Dans le cas où vous souhaitez afficher la carte d'un membre, il vous suffit de faire la même commande `/money membre:<Le_membre>`.

![Image de la carte d'économie ](../../.gitbook/assets/Money.png)

{% hint style="info" %}
Pour représenter un membre pour n'importe quelle commande de **DraftBot**, vous pouvez utiliser son **identifiant** et sa **mention**.
{% endhint %}

### Le classement du serveur

Dans le cas où vous souhaitez afficher le classement d'argent du serveur, il vous suffit de faire la commande `/topmoney`.

![Image du classement d'économie](../../.gitbook/assets/Topmoney.png)

{% hint style="info" %}
Dans le cas où vous ne faites pas partie du top 5, vous serez tout de même affiché en dessous avec votre place.
{% endhint %}

## Membre

### Donner de l'argent

Vous avez la possibilité de donner de l'argent à un autre membre avec la commande `/payer membre:<membre> montant:<montant> raison:<raison>`

{% hint style="info" %}
Pour représenter un membre pour n'importe quelle commande de **DraftBot**, vous pouvez utiliser son [**identifiant**](../../autres/recuperer-un-identifiant.md#membre) et sa **mention**.
{% endhint %}

### Acheter un article

Vous pouvez acheter un article présent dans la boutique du serveur avec la commande `/boutique`. Cela affichera la boutique du serveur et vous aurez la possibilité d'acheter un article via le sélecteur en-dessous du message.

## Configuration

Vous pouvez l'activer, la désactiver, modifier son intensité, l’ignorer, la booster, la personnaliser ou encore la réinitialiser avec la commande `/config`, puis la catégorie `Economie` ou `/config système:Économie`.&#x20;

Lorsque **DraftBot** affichera l'interface d'économie, vous devrez choisir `Configuration de l'économie`

À ce moment là, des options s'afficheront

* `Activer le système` ou `Système activé` → Permet d'activer/désactiver la fonction
* `✨ Devise` → Configuer l'icône (emoji) de l'argent
* `✨ Couleur` → Changer la couleur des embeds de l'économie **(Couleur en héxadécimale)**
* `Argent Journalier` → Définir la quantité d'argent à donner via la commande `/daily`
* `Argent de départ` → Définir l'argent attribué à un membre lors de son arrivée
* `Ratio d'argent` → Définr la quantité d'argent attribué à un membre à chaque message (choix via des boutons)
* `Rôle sans gain d'argent` → Définir les rôles sans gains d'argent
* `Salons sans gains d'argent` → Définir les salons sans gains d'argent
* `Rôle Boosters` → Définir un multiplicateur d'argent sur un rôle (choix via des boutons)
* `Activer le reset d'argent lors du départ` → Activer/Désactiver le reset de l'argent d'un membre lorsqu'il quitte le serveur
* `Activer les longs messages comptant double argent` → Activer/Désactiver le double d'argent attribué lors d'un long message
* `Activer le gain d'argent dans les threads` → Activer/Désactiver le gain d'argent dans les fils Discord

[Interface économie](../../.gitbook/assets/Capture5.png)

{% hint style="warning" %}
Les fonctions possédant l'émoji ✨ sont réservées aux membres [premiums](https://www.draftbot.fr/premium).
{% endhint %}

### Réinitialiser la configuration

{% hint style="warning" %}
La réinitialisation du système n'existe plus en slash commands, il faudra donc effectuer `admineconomy remove`. Attention cepandant car cette méthode disparaitra bientôt.
{% endhint %}

## Boutique

Vous pouvez l'activer, la désactiver, modifier son intensité, l’ignorer, la booster, la personnaliser ou encore la réinitialiser avec la commande `/config`, puis la catégorie `Economie` ou `/config système:Économie`.&#x20;

Lorsque **DraftBot** affichera l'interface d'économie, vous devrez choisir `Configuration de l'économie` :

* `Créer` → Créer un article en vente
* `Modifier` → Modifier un article existant
* `Supprimer` → Supprimer un article existant
* `Type de la boutique` → Choisir la boutique : classique ou marché noir (suppression auto au bout de 60s)
* `Réinitialiser` → Réinitialiser la boutique

[Interface shop](../../.gitbook/assets/Capture6.png)
