---
description: >-
  Envie d'égayer davantage la vie sur votre serveur ? Alors activez le système d'économie et laissez-vous guider par DraftBot !
---

# 💰 Économie

## Votre Argent

Vous pouvez voir votre somme d'argent, ainsi que celle des autres membres en indiquant leur pseudo dans l'argument "Membre" avec <mark style="color:orange;">/argent \[membre]</mark>.

![Carte d'économie](../.gitbook/assets/economy/money.png)

- <mark style="color:orange;">/journalier</mark> ➜ Commande journalière permettant de gagner un montant défini au préalable par les administrateurs.
- <mark style="color:orange;">/payer</mark> ➜ Donner de l'argent à un membre de votre choix.

{% hint style="info" %}
Pour pouvoir obtenir de l'argent, il vous faut configurer <mark style="color:blue;">[__configurer__](modules/economie#configuration)</mark> le système d'économie.
{% endhint %}

## Classement

Grâce à la commande <mark style="color:orange;">/topargent</mark>, vous avez accès au classement économique du serveur. Vous y verrez les cinq premiers membres ainsi que votre position. Pour voir l'ensemble du classement, cliquez sur le bouton **"Voir l'ensemble du classement"** situé sous le message de **DraftBot**.

![Classement d'argent des membres du serveur](../.gitbook/assets/economy/topmoney.png)

## Boutique

Vous pouvez dans la boutique acheter des rôles (temporaires ou non), de l'expérience, des objets d'inventaire ou des articles personnalisés.
Elle est accessible avec la commande <mark style="color:orange;">/boutique</mark>\.

![Boutique de DraftBot](../.gitbook/assets/economy/shop.png)

{% hint style="info" %}
Le marché noir est une variante de la boutique consistant à se supprimer au bout de 60 secondes d'inactivité, ni vu ni connu ! Plus d'informations <mark style="color:blue;">[__ici__](modules/economie#typedelaboutique)</mark>.

![Marché noir de DraftBot](../.gitbook/assets/economy/shop-dark.png)

{% endhint %}

## Objets d'inventaire

Vous avez la possibilité avec **DraftBot** de pouvoir animer la vie de votre serveur avec des objets d'inventaire. Une fois achetés dans la __<mark style="color:blue;">[boutique](modules/economie#boutique)</mark>__ ou gagnés, vous pouvez effectuer les commandes :

- <mark style="color:orange;">/inventaire</mark> ➜ Afficher son inventaire ou celui de la personne de notre choix.
- <mark style="color:orange;">/item échanger</mark> ➜ Échanger un de ses objets d'inventaire avec la personne de son choix.
- <mark style="color:orange;">/item donner</mark> ➜ Donner un de ses objets d'inventaire à la personne de son choix.
- <mark style="color:orange;">/item drop</mark> ➜ Offrir un de ses items à la personne qui appuiera sur le bouton en premier.
- <mark style="color:orange;">/item vendre</mark> ➜ Vendre un de ses objets d'inventaire à la personne de son choix.
- <mark style="color:orange;">/concours créer item</mark> ➜ Faire gagner un item via un giveaway.
- <mark style="color:orange;">/dropitem</mark> ➜ Générer un message qui offre un item au premier qui clique sur le bouton.

## Modifier l'argent des utilisateurs

Plusieurs commandes sont disponibles pour gérer l'argent de vos membres :

- <mark style="color:orange;">/adminargent ajouter</mark> ➜ Ajouter de l'argent à un membre en plus de son montant actuel.
- <mark style="color:orange;">/adminargent définir</mark> ➜ Définir l'argent d'un membre en ne tenant pas compte de son montant actuel.
- <mark style="color:orange;">/adminargent retirer</mark> ➜ Retirer de l'argent à un membre en se basant sur le montant actuel.
- <mark style="color:orange;">/adminargent réinitialiser serveur</mark> ➜ Remettre à zéro l'argent de tout le serveur.
- <mark style="color:orange;">/dropargent</mark> ➜ Créer un message qui offre de l'argent au premier qui clique sur le bouton.

## Configuration

Vous pouvez configurer le système d'économie depuis le <mark style="color:blue;">[__panel__](https://draftbot.fr/dashboard)</mark> ou depuis la commande <mark style="color:orange;">/config</mark>.

Vous aurez la possibilité de configurer :

- [Le système d'économie](modules/configuration/economie#systeme-deconomie)
- [La configuration de la boutique](modules/configuration/economie#configuration-de-la-boutique)

_Retrouvez le détail de la configuration ci-dessous._

### Système d'économie

{% tabs %}
{% tab title="Via la commande /config" %}

Voici les différents boutons ainsi que leurs utilités :

- "**Activer le système**" ➜ Permet d'activer ou désactiver le système.
- "**Activer l'argent en vocal**" ➜ Une fois activé, les membres pourront gagner de l'argent en vocal. **_([✨ premium](https://draftbot.fr/premium))_**

{% hint style="info" %}
Conditions : être plus de deux humains dans le salon vocal ; le salon vocal ne doit pas être paramétré comme "AFK" ; avoir un micro actif.
{% endhint %}

- "**Devise**" ➜ Permet de définir l'émoji symbolisant la monnaie du serveur. **(_[✨ premium](https://draftbot.fr/premium)_)**
- "**Couleur**" ➜ Paramétrer une couleur pour tout le système d'économie. **_([✨ premium](https://draftbot.fr/premium))_**
- "**Argent journalier**" ➜ Permet de définir l'argent que vos membres pourront gagner chaque jour via la commande <mark style="color:orange;">/journalier</mark>.
- "**Argent de départ**" ➜ Une fois activé, vous pourrez définir l'argent qu'auront vos membres à leur arrivée sur le serveur.
- "**Ratio d'argent**" ➜ Permet de définir la quantité d'argent gagnée par message.
- "**Rôles sans gain d'argent**" ➜ Permet de définir les rôles qui ne gagneront pas d'argent.
- "**Salons sans gain d'argent**" ➜ Permet de définir les salons où les membres ne gagneront pas d'argent.
- "**Rôles boosters**" ➜ Permet de donner plus d'argent à un membre s'il possède un certain rôle.
- "**Salons boosters**" ➜ Permet de donner plus d'argent à un membre s'il envoie son message dans un certain salon.
- "**Activer le reset de l'argent lors du départ**" ➜ Une fois activé, les membres perdront tout l'argent en leur possession s'ils quittent le serveur.
- "**Activer les longs messages comptent double argent**" ➜ Si un de vos membres fait un message de plus de 250 caractères, il gagnera le double d'expérience.
- "**Activer le gain d'argent dans les fils**" ➜ Une fois cette option activée, vos membres pourront gagner de l'argent dans les fils et posts.

![Menu de configuration du système d'économie](../.gitbook/assets/economy/config_economy.png)

{% endtab %}

{% tab title="Depuis le panel" %}

<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Une fois sur le panel de **DraftBot**, rendez-vous sur la page "Économie".

Vous devez d'abord activer le système en cliquant sur le bouton d'activation du module. Si vous voulez le désactiver, recliquez sur ce même bouton.

![Activation du système d'économie](../.gitbook/assets/economy/dashboard_activate_system.png)

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.


![Menu de configuration](../.gitbook/assets/economy/dashboard_view.png)

{% endtab %}
{% endtabs %}

### Configuration de la boutique

{% tabs %}
{% tab title="Via la commande /config" %}

Rendez-vous d'abord dans la catégorie "💰 Économie" de la commande <mark style="color:orange;">/config</mark> puis appuyez sur "<mark style="color:blue;">Configuration de la boutique</mark>".

### Créer un article dans votre boutique

Après avoir cliqué sur le bouton "<mark style="color:blue;">Créer</mark>", un menu va s'ouvrir :

- "<mark style="color:blue;">Rôle</mark>" ➜ Vos membres pourront acheter un rôle prédéfini.
- "<mark style="color:blue;">Rôle temporaire</mark>" ➜ Vos membres pourront acheter un rôle prédéfini qu'ils garderont durant une durée choisie.
- "<mark style="color:blue;">Expérience</mark>" ➜ Vos membres pourront acheter de l'<mark style="color:blue;">[expérience](modules/niveaux)</mark>.
- "<mark style="color:blue;">Personnaliser</mark>"➜ Créer une récompense personnalisée (quelque chose que **DraftBot** ne peut pas offrir).

{% hint style="info" %}
Un message privé sera envoyé au créateur du serveur pour qu'il vous donne la récompense.
{% endhint %}

- "<mark style="color:blue;">Objet</mark>" ➜ Créer un item qui sera affiché dans votre <mark style="color:orange;">/inventaire</mark>.

{% hint style="info" %}
**Conseil :** si vous voulez illustrer vos objets d'inventaire et ne pas avoir que du texte, vous pouvez ajouter des émojis.
_Exemple : "🍒 Cerises"_
{% endhint %}

![Créer un article](../.gitbook/assets/economy/config_shop_article_type.png)

### Modifier un article dans votre boutique

Si vous vous rendez compte qu'une erreur s'est glissée dans un de vos articles, vous pouvez le modifier, en cliquant sur le bouton "<mark style="color:blue;">Modifier"</mark>" :

- "<mark style="color:blue;">Article</mark>" ➜ Modifier le nom de l'article.
- "<mark style="color:blue;">Description</mark>" ➜ Modifier la description de l'article.
- "<mark style="color:blue;">Prix</mark>" ➜ Modifier le prix de l'article.
- "<mark style="color:blue;">Stock</mark>" ➜ Modifier la quantité d'articles disponible dans la boutique. **_([✨ premium](https://draftbot.fr/premium))_**

![Modifier un article](../.gitbook/assets/economy/config_shop_article_edit.png)
ㅤ

### Supprimer un article dans votre boutique

Si vous souhaitez supprimer un article dans votre boutique, cliquez sur le bouton "<mark style="color:blue;">Supprimer</mark>" puis choisissez l'article à retirer.

![Supprimer un article](../.gitbook/assets/economy/config_shop_article_delete.png)

### Réinitialiser votre boutique

Si vous souhaitez réinitialiser votre boutique, cliquez sur le bouton "<mark style="color:blue;">Réinitialiser</mark>".

{% hint style="warning" %}
Une fois la boutique réinitialisée, il vous sera impossible de récupérer ce que vous aviez fait.
{% endhint %}

### Type de la boutique

Si vous souhaitez modifier le type de la boutique, cliquez sur le bouton "<mark style="color:blue;">Type de la boutique</mark>".

- "<mark style="color:blue;">Normal</mark>" ➜ Le message de la boutique est conservé.
- "<mark style="color:blue;">Noir</mark>" ➜ Le message de la boutique est supprimé automatiquement après 60 secondes d'inactivité.

{% endtab %}
{% tab title="Depuis le panel" %}
<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Une fois sur le panel de **DraftBot**, rendez-vous en bas de la page "Économie".

### Créer un article dans votre boutique

Pour créer un article, cliquez sur le bouton "<mark style="color:orange;">Créer un article</mark>".

![Créer un article](../.gitbook/assets/economy/dashboard_article_create.png)

Un pop-up s'ouvrira dans laquel vous pourrez configurer votre article.

![Pop-up création d'un article](../.gitbook/assets/economy/dashboard_article_create_popup.png)

Pour créer un article, cliquez sur le bouton "<mark style="color:orange;">Créer un article</mark>". Les options de configuration sont les mêmes que sur la commande <mark style="color:orange;">/config</mark>. Vous pouvez donc vous rendre dans l'onglet `(Via la commande /config)` pour les comparer.
ㅤ
{% hint style="info" %}
Si vous souhaitez mettre des émojis sur vos items, vous devrez récupérer l'affichage de l'émoji avec son <mark style="color:blue;">[__identifiant__](autres/recuperer-un-identifiant#identifiant-dun-emoji)</mark> (en mettant un antislash (\\) devant celui-ci).
{% endhint %}
ㅤ

### Modifier un article dans votre boutique

Si vous vous rendez compte qu'une erreur s'est glissée dans un de vos articles, vous pouvez le modifier en cliquant sur le bouton nommé ci-dessus dans la liste de vos articles.

![Modifier un article](../.gitbook/assets/economy/dashboard_article_edit.png)

### Supprimer un article dans votre boutique

Si vous souhaitez supprimer un article, cliquez sur le bouton "<mark style="color:red;">Supprimer</mark>".

![Supprimer un article](../.gitbook/assets/economy/dashboard_article_delete.png)

### Type de la boutique

Pour modifier le type de la boutique, rendez vous sur le sélecteur (voir image) puis sélectionnez le modèle voulu.

- "<mark style="color:blue;">Normal</mark>" ➜ Le message de la boutique est conservé.
- "<mark style="color:blue;">Noir</mark>" ➜ Le message de la boutique est supprimé automatiquement après 60 secondes d'inactivité.

![Type de boutique](../.gitbook/assets/economy/dashboard_shop_type.png)


> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

{% endtab %}
{% endtabs %}
