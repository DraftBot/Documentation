---
description: >-
  Envie d'égayer davantage la vie sur votre serveur ? Alors activez le système d'économie et laissez-vous guider par DraftBot !
---

# Gestion de l'économie

### Votre Argent

Vous pouvez voir votre somme d'argent, ainsi que celle des autres membres en indiquant leur pseudo dans l'argument "membre" avec <mark style="color:orange;">/argent \[membre]</mark>. Pour d'obtenir de l'argent, il faut que [le système d'économie](https://docs.draftbot.fr/slash/configuration/economie) soit activé sur le serveur.

![Carte d'économie](../.gitbook/assets/economy/money.png)

- <mark style="color:orange;">/journalier</mark> ➜ Commande journalière permettant de gagner un montant défini au préalable par les administrateurs.
- <mark style="color:orange;">/payer</mark> ➜ Donner de l'argent à un membre de votre choix.

{% hint style="info" %}
Il vous faut d'abord configurer ce système.
{% endhint %}


### Modifier l'argent des utilisateurs

Il existe plusieurs commandes pour gérer l'argent de vos membres :

- <mark style="color:orange;">/adminargent ajouter</mark> ➜ Ajouter de l'argent à un membre en plus de son montant actuel.
- <mark style="color:orange;">/adminargent définir</mark> ➜ Définir l'argent d'un membre en ne tenant pas compte de son montant actuel.
- <mark style="color:orange;">/adminargent retirer</mark> ➜ Retirer de l'argent à un membre en se basant sur le montant actuel.
- <mark style="color:orange;">/adminargent réinitialiser serveur</mark> ➜ Remettre à zéro l'argent de tout le serveur.
- <mark style="color:orange;">/dropargent</mark> ➜ Créer un message qui offre de l'argent au premier qui clique sur le bouton.

### Classement

Grâce à la commande <mark style="color:orange;">/topargent</mark> vous avez accès au classement économique du serveur. Vous y verrez les cinq premiers membres ainsi que votre position. Pour voir l'ensemble du classement, cliquez sur le bouton **"Voir l'ensemble du classement"** situé sous le message de **DraftBot**.

![Classement d'argent des membres du serveur](../.gitbook/assets/economy/topmoney.png)


### Boutique

Vous pouvez y acheter des rôles (temporaire ou non), de l'expérience, des objets d'inventaire ou des articles personnalisés.
Elle est accessible avec la commande <mark style="color:orange;">/boutique</mark>\.

![Boutique de DraftBot](../.gitbook/assets/economy/shop.png)

{% hint style="info" %}
Le marché noir est une variante de la boutique consistant à se supprimer au bout de 60 secondes d'inactivité, ni vu ni connu !

![Marché Noir de DraftBot](../.gitbook/assets/economy/shop-dark.png)

{% endhint %}


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

Si vous créez vos items depuis le <mark style="color:orange;">[panel](https://draftbot.fr/dashboard/)</mark>, vous devrez récupérer l'affichage de l'émoji avec son <mark style="color:orange;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant#identifiant-dun-emoji)</mark>. (en mettant un antislash (\\) devant celui-ci).
{% endhint %}


### Rôle booster

Vous pouvez, lors de [la configuration](https://docs.draftbot.fr/slash/configuration/economie), choisir un rôle booster.\
Quand une personne a un rôle booster, elle pourra gagner **1,5** / **2** / **2,5** ou **3** fois plus d'argent qu'un membre normal.

# Configuration

Depuis le <mark style="color:blue;">[panel](https://draftbot.fr/dashboard)</mark> ou depuis la commande <mark style="color:orange;">/config</mark>, vous pouvez configurer le système d'économie. 

Vous aurez la possibilité de configurer :

- Le système d'économie
- La configuration de la boutique

*Retrouvez le détail de configuration de chacun de ces boutons ci-dessous.*

## Système d'économie

{% tabs %}
{% tab title="Via la commande /config" %}

- "**Activer le système**" ➜ Permet d'activer ou désactiver le système.
- "**✨Activer l'argent en vocal**" ➜ Une fois activé, les membres pourront gagner de l'argent en vocal.
ㅤ
{% hint style="info" %}
Conditions : être plus de deux humains dans le salon vocal ; le salon vocal ne doit pas être paramétré comme "AFK" ; avoir un micro actif.
{% endhint %}
ㅤ
- "**✨Devise**" ➜ Permet de définir l'émoji symbolisant la monnaie du serveur.
- "**✨Couleur**" ➜ Paramétrer une couleur pour tout le système d'économie.
- "**Argent journalier**" ➜ Permet de définir l'argent que vos membres pourront gagner chaque jour via la commande <mark style="color:orange;">/journalier</mark>
- "**Argent de départ**" ➜ Permet de définir l'argent qu'auront vos membres à leurs arrivé sur le serveur.
- "**Ratio d'argent**" ➜ Permet de définir la quantité d'argent gagnée par message.
- "**Rôles sans gain d'argent**" ➜ Permet de définir
- "**Salons sans gain d'argent**" ➜ Permet de définir les salons où les membres ne gagneront pas d'argent.
- "**Rôles boosters**" ➜ Permet de donner plus d'argent à un membre s'il possède un certain rôle.
- "**Salons boosters**" ➜ Permet de donner plus d'argent à un membre si il envoie son message dans un certain salon.
- "**Activer le reset de l'argent lors du départ**" ➜ Une fois activé, les membres perdront toute leur argent s'ils quittent le serveur.
- "**Activer les longs messages comptent double argent**" ➜ Si un de vos membres fait un message 
- "**Activer le gain d'argent dans les fils**" ➜ 

*Les boutons étant précédés d'un "✨" indiquent que le <mark style="color:blue;">[premium](https://draftbot.fr/premium)</mark> est nécéssaire.*
{% endtab %}



{% tab title="Via le panel" %}
Here is second tab content.
{% endtab %}
{% endtabs %}
