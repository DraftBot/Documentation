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
* `✨ Couleur` → Changer la couleur des embeds de l'économie
* `Argent Journalier` → Définir la quantité d'argent à donner via la commande `/daily`
* `Argent de départ` → Définir l'argent attribué à un membre lors de son arrivée
* `Ratio d'argent` → Définr la quantité d'argent attribué à un membre à chaque message (choix via des boutons)
* `Rôle sans gain d'argent` → Définir les rôles sans gains d'argent
* `Salons sans gains d'argent` → Définir les salons sans gains d'argent
* `Rôle Boosters` → Définir un multiplicateur d'argent sur un rôle (choix via des boutons)
* `Activer le reset d'argent lors du départ` → Activer/Désactiver le reset de l'argent d'un membre lorsqu'il quitte le serveur
* `Activer les longs messages comptant double argent` → Activer/Désactiver le double d'argent attribué lors d'un long message

### Réinitialiser la configuration

Si vous choisissez de **réinitialiser la configuration** du système de niveaux, en envoyant `reset`, vous n’aurez rien à faire de plus, **DraftBot** vous supprimera toutes les configurations effectuées pour ce système, à savoir :

* Son statut
* Le nombre d'argent donné lors de l'arrivée d'un membre
* Le nombre d'argent gagné à chaque message
* Le statut qui empêche les membres invisibles de gagner de l’expérience
* Les rôles qui empêchent le gain d'argent
* Les salons dans lesquels le gain d'argent est désactivé
* Les rôles qui permettent de multiplier le gain d'argent
* La couleur de la fonctionnalité d'argent (fonctionnalité réservée aux [premiums](https://www.draftbot.fr/premium))

### Modifier la couleur

Si vous choisissez de **modifier la couleur**, en envoyant `color` (fonctionnalité réservée aux [premiums](https://www.draftbot.fr/premium)), il vous suffira de renseigner un code hexadécimal (il s’agit d’une série de 6 chiffres et lettres représentant une couleur). Voici un sélecteur pour choisir vos couleurs : [htmlcolorcodes.com](https://htmlcolorcodes.com/)

## Boutique

Vous pouvez ajouter, retirer, modifier un article ou encore réinitialiser la boutique avec la commande `!adminshop` ou `@DraftBot#0535 adminshop`.&#x20;

Un message vous sera envoyé par **DraftBot** pour savoir si vous voulez :

* `add` → Ajouter un article
* `remove` → Supprimer un article
* `update` → Modifier un article
* `config` → Configurer la boutique
* `reset` → Réinitialiser la boutique

### Ajouter un article

Si vous choisissez d'ajouter un article à votre boutique, en envoyant `add`, vous aurez la possibilité d'ajouter :&#x20;

* Un rôle / rôle temporaire
* De l'expérience (niveaux)
* Récompense personnalisée (envoie un message à l'administrateur)
* Objet d'inventaire

Vous aurez ensuite la possibilité d'ajouter une description et un prix à votre article.

### Modifier un article

Si vous choisissez de modifier un article déjà existant, en envoyant `update`, vous devrez alors choisir un article parmi la liste envoyée.\
\
Vous pourrez alors modifier l'article, la description ou le prix de l'objet.

### Configurer la boutique

Si vous choisissez de configurer la boutique, en envoyant `config`, vous aurez la possibilité de choisir entre deux types de boutique :&#x20;

* Boutique normale : le message du `shop` est conservé.
* Marché noir : le message du `shop` est supprimé au bout de 60 secondes.

### Réinitialiser la boutique

Si vous choisissez de réinitialiser la boutique, en envoyant `reset`, tous les articles de votre boutique seront réinitialisés.

{% hint style="warning" %}
Les récompenses déjà données aux membres ayant payé l'article **ne leur seront pas retirées** !
{% endhint %}
