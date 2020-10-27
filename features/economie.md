---
description: >-
  Le système d'économie de DraftBot offre à vos membres d'obtenir de l'argent en
  étant actif sur votre serveur et de pouvoir s'offrir des articles avec
  l'argent virtuel gagné.
---

# Economie

## Afficher le nombre d'argent

Vous pouvez afficher le nombre d'argent virtuel d'un membre sous forme d'image.

### La carte d'un membre

* Vous pouvez afficher votre carte à l'aide de la commande `!money` !
* Dans le cas où vous souhaitez afficher la carte d'un membre il vous suffit de faire la même commande `!money` suivi du membre.

![](../.gitbook/assets/image%20%2842%29.png)

{% hint style="info" %}
Pour représenter un membre pour n'importe quelle commande de DraftBot, vous pouvez utiliser son **id**, son **pseudo**, son **tag**, son **pseudo sur le serveur**, son **pseudo partiellement**, et sa **mention**.
{% endhint %}

### Le classement du serveur

Dans le cas où vous souhaitez afficher le classement d'argent du serveur, il vous suffit de faire la commande`!topmoney.`

![](../.gitbook/assets/image%20%2836%29.png)

{% hint style="warning" %}
Dans le cas où vous ne faites pas parti du top 3, vous serez tout de même affiché en dessous avec votre place.
{% endhint %}

## Membre

### Donner de l'argent

Vous avez la possibilité de donner de l'argent à un autre membre avec la commande `pay <membre> <nombre> <raison>`

{% hint style="info" %}
Pour représenter un membre pour n'importe quelle commande de DraftBot, vous pouvez utiliser son **id**, son **pseudo**, son **tag**, son **pseudo sur le serveur**, son **pseudo partiellement**, et sa **mention**.
{% endhint %}

### Acheter un article

Vous pouvez acheter un article présent dans la boutique du serveur avec la commande `buy <article>`

{% hint style="info" %}
Vous pouvez voir la boutique du serveur avec la commande `shop` !
{% endhint %}

## Configuration

Vous pouvez l'activer, la désactiver, modifier son intensité, l’ignorer, la booster, la personnaliser ou encore la réinitialiser avec la commande `!admineconomy` ou `@DraftBot#0535 admineconomy`. 

Un message vous sera envoyé par DraftBot pour savoir si vous voulez :

* L'activer → `on`
* Le désactiver → `off`
* Le configurer → `config`
* Multiplier les gains d'expérience d’un rôle → `boosters`
* Ne pas prendre en compte un rôle ou salon → `ignore` 
* Réinitialiser la fonctionnalité → `reset` \(`!adminmoney resetall` pour réinitialiser l'expérience\)
* Personnaliser la couleur → `color` \(fonctionnalité réservé aux [premiums](https://www.draftbot.fr/premium)\)

### **Modifier le gain d'argent** <a id="modifier-le-gain-dexperience"></a>

Si vous choisissez de **modifier le gain d'argent**, en envoyant `config`, vous aurez alors le choix entre quatre propositions:

           0⃣ \| 0 💰 par message  
           1⃣ \| Entre 5 et 15 💰 par message  
           2⃣ \| Entre 15 et 25 💰 par message  
           3⃣ \| Entre 25 et 35 💰 par message  
  
Le taux actuel est indiqué par un symbole ✅. Cliquez alors sur la réaction de votre choix, en fonction du taux d’expérience que vous voulez à présent faire gagner. 

### **Multiplier le gain d’un rôle** <a id="multiplier-le-gain-dun-role"></a>

Si vous choisissez de **booster le gain d'argent d'un rôle**, en envoyant `boosters`, vous aurez alors le choix entre trois propositions : Ajouter un rôle booster \| Supprimer un rôle booster \| Afficher les rôles boosters

* Si vous choisissez d’ajouter un rôle booster, vous devrez choisir quel rôle doit

  être boosté. Vous pourrez ensuite choisir le multiplicateur entre `1.5`, `2.0`, `2.5` ou `3.0`.

* Si vous choisissez de supprimer un rôle booster, DraftBot vous montrera tous

  les rôles boostés et vous devrez alors choisir lequel supprimer.

* Si vous choisissez d’afficher la liste des rôles boosters, DraftBot vous enverra tous les rôles boostés et le multiplicateur qui leur a été attribué.

### Ignorer un salon ou un rôle

Si vous choisissez d’**ignorer le gain d'argent**, en envoyant `ignore`, vous aurez le choix entre deux propositions: Ignorer un rôle \| Ignorer un salon 

* Si vous choisissez le rôle, vous devez renseigner le rôle qui empêchera les membres l'ayant de gagner de l’argent. 
* Si vous choisissez le salon, vous devez renseigner le salon dans lequel le gain d'argent ne sera pas comptabilisé.

### Réinitialiser la configuration

Si vous choisissez de **réinitialiser la configuration** du système de niveaux, en envoyant `reset`, vous n’aurez rien à faire de plus, DraftBot vous supprimera toutes les configurations effectués pour ce système. A savoir:

* Son statut
* Le nombre d'argent donné lors de l'arrivée d'un membre
* Le nombre d'argent gagné a chaque message
* Le statut qui empêche les membres invisibles de gagner de l’expérience
* Les rôles qui empêchent le gain d'argent
* Les salons dans les quels le gain d'argent est désactivé
* Les rôles qui permettent de multiplier le gain d'argent
* La couleur de la fonctionnalité d'argent \(fonctionnalité réservé aux [premiums](https://www.draftbot.fr/premium)\)

### Modifier la couleur

Si vous choisissez de **modifier la couleur**, en envoyant `color`. \(fonctionnalité réservé aux [premiums](https://www.draftbot.fr/premium)\) Ensuite il vous suffira de renseigner un code hexadécimal \(il s’agit d’une série de 6 chiffre représentant une couleur\) voici un sélecteur pour choisir vos couleurs: [htmlcolorcodes.com](https://htmlcolorcodes.com/)

## Boutique

Vous pouvez ajouter, retirer, modifier un article ou encore réinitialiser la boutique avec la commande `!adminshop` ou `@DraftBot#0535 adminshop`. 

Un message vous sera envoyé par DraftBot pour savoir si vous voulez :

* Ajouter un article → `add`
* Supprimer un article → `remove`
* Modifier un article → `update`
* Configurer la boutique → `config`
* La réinitialiser → `reset`

### Ajouter un article

Si vous choisissez d'ajouter un article à votre boutique, en envoyant `add`, vous aurez la possibilité d'ajouter : 

* Un rôle
* De l'expérience \(niveaux\)
* Récompense personnalisée \(envoie un message à l'administrateur\)

Vous aurez ensuite la possibilité d'ajouter une description et un prix à votre article.

### Modifier un article

Si vous choisissez de modifier un article déjà existant, en envoyant `update`, vous devrez alors choisir un article parmi la liste envoyé.  
  
Vous pourrez alors modifier l'article, la description ou le prix de l'objet.

### Configurer la boutique

Si vous choisissez de configurer la boutique, en envoyant `config`, vous aurez la possibilité de choisir entre deux types de boutique : 

* Normal : le message du `!shop` est conservé
* Marché noir : le message du `!shop` est supprimé au bout de 60 secondes.

### Réinitialiser la boutique

Si vous choisissez de rénitialiser la boutique, en envoyant reset, tous les articles de votre boutique sera réinitialisés.

{% hint style="warning" %}
Les récompenses déjà donnés aux membres ayant payé l'article **ne leur seront pas retirés !** 
{% endhint %}

