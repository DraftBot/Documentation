---
description: >-
  Envie d'égayer davantage la vie sur votre serveur ? Alors activez le système d'économie et laissez-vous guider par DraftBot !
---

# Gestion de l'économie

### Argent

Vous pouvez voir votre somme d'argent ainsi que celle des autres membres en indiquant leur pseudo sous "membre" avec <mark style="color:orange;">/argent \[membre]</mark>.\
Afin d'obtenir de l'argent, il faut que [le système d'économie](https://docs.draftbot.fr/slash/configuration/economie) soit activé sur le serveur.

![Carte d'économie](../.gitbook/assets/economy/money.png)

- <mark style="color:orange;">/journalier</mark> ➜ Commande journalière permettant de gagner un montant défini au préalable par les administrateurs.
- <mark style="color:orange;">/payer</mark> ➜ Donner de l'argent à un membre de votre choix.

{% hint style="info" %}
Il vous faut d'abord configurer ce système.
{% endhint %}


__**Commandes pour les administrateurs - Argent**__

Il existe plusieurs commandes pour gérer l'argent de vos membres :

- <mark style="color:orange;">/adminargent ajouter</mark> ➜ Ajouter de l'argent à un membre en plus de son montant actuel.
- <mark style="color:orange;">/adminargent définir</mark> ➜ Définir l'argent d'un membre en ne tenant pas compte de son montant actuel.
- <mark style="color:orange;">/adminargent retirer</mark> ➜ Retirer de l'argent à un membre en se basant sur le montant actuel.
- <mark style="color:orange;">/adminargent réinitialiser serveur</mark> ➜ Remettre à zéro l'argent de tout le serveur.
- <mark style="color:orange;">/dropargent</mark> ➜ Créer un message qui offre de l'argent au premier qui clique sur le bouton.

### Classement

Grâce à la commande <mark style="color:orange;">/topargent</mark> vous avez accès au classement économique du serveur. Vous y verrez les cinq premiers membres ainsi que votre position. Pour voir l'ensemble du classement, cliquez sur le bouton situé sous le message de **DraftBot** ("Voir l'ensemble du classement").

![Classement d'argent des membres du serveur](../.gitbook/assets/economy/topmoney.png)


### Boutique

La boutique est l'endroit où vous pouvez acheter les articles qui composeront votre inventaire *(voir ci-dessous)*.\
Vous pouvez y acheter un rôle (temporaire ou non), de l'expérience, un objet d'inventaire et plein d'autres choses ! Elle est accessible avec la commande <mark style="color:orange;">/boutique</mark>\.

{% hint style="info" %}
Le marché noir est une variante de la boutique consistant à se supprimer au bout de 60 secondes d'inactivité, ni vu ni connu !
{% endhint %}

![Boutique de DraftBot](../.gitbook/assets/economy/shop.png)


### Objets d'inventaire

Vous avez la possibilité avec **DraftBot** de pouvoir animer la vie du serveur avec des objets d'inventaire. Une fois achetés ou gagnés, vous pouvez effectuer les commandes :
- <mark style="color:orange;">/item échanger</mark> ➜ Échanger un de ses objets d'inventaire avec la personne de son choix.
- <mark style="color:orange;">/item donner</mark> ➜ Donner un de ses objets d'inventaire à la personne de son choix.
- <mark style="color:orange;">/item drop</mark> ➜ Offrir un de ses items à la personne qui appuiera sur le bouton en premier.
- <mark style="color:orange;">/item vendre</mark> ➜ Vendre un de ses objets d'inventaire à la personne de son choix.
- <mark style="color:orange;">/concours créer item</mark> ➜ Faire gagner un item via un giveaway.
- <mark style="color:orange;">/dropitem</mark> ➜ Générer un message qui offre un item au premier qui clique sur le bouton.

{% hint style="info" %}
**Conseil :** si vous voulez illustrer vos objets d'inventaire et ne pas avoir que du texte, vous pouvez ajouter des émojis.
*Exemple : "🍒 Cerises"*

Si vous créez par contre vos items depuis le <mark style="color:orange;">[panel](https://draftbot.fr/dashboard/)</mark>, vous devez par contre récupérer l'<mark style="color:orange;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant#identifiant-dun-emoji)</mark> de celui-ci en mettant un antislash (\\) devant celui-ci.
{% endhint %}


### Rôle booster

Tu peux, lors de [la configuration](https://docs.draftbot.fr/slash/configuration/economie), choisir un rôle booster.\
Quand une personne a un rôle booster, elle pourra gagner **1,5** / **2** / **2,5** ou **3** fois plus d'argent qu'un membre normal.
