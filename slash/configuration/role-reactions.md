---
description: >-
  Avec le système de rôle réactions, vos membres pourront facilement choisir des
  rôles parmi une liste définie, que ce soit par un sélecteur, des boutons, ou
  des émojis.
---

# 🔘 Rôle réactions

{% hint style="info" %}
Les rôles-réactions ne peuvent être ajoutés que sur des messages envoyés par **DraftBot**. Vous pouvez créer ces messages avec la commande <mark style="color:orange;">/envoyer</mark>, <mark style="color:orange;">/send</mark>, directement la configuration <mark style="color:orange;">/config système: Rôles réactions</mark> ou le [panel web](https://www.draftbot.fr/dashboard) qui permet une personnalisation plus facile et complète.
{% endhint %}

![Commande /config système: Rôles-Réactions](<../../.gitbook/assets/rolereact/view.png>)

## <mark style="color:blue;">Créer un nouveau rôle-réaction</mark>

![](<../../.gitbook/assets/rolereact/question.png>)

### <mark style="color:blue;">Nouveau message</mark>

* Indiquez le **titre** du rôle-réaction qui apparaîtra en haut de l'embed.
* Précisez ou mentionnez le **rôle** que vous souhaiter ajouter lorsqu'un membre interagit avec le message.
* Choisissez le format du rôle-réaction, entre <mark style="color:blue;">"Réaction"</mark>, <mark style="color:blue;">"Bouton"</mark> ou <mark style="color:blue;">"Sélecteur"</mark>.
* L'intégralité de la création est guidée par **DraftBot**, il vous suffit de suivre ses consignes.

### <mark style="color:blue;">Message existant de DraftBot</mark>

Si vous décidez de choisir un message de DraftBot créé au préalable, vous devrez envoyer l'[identifiant du message](../../autres/recuperer-un-identifiant.md#message) auquel vous souhaitez ajouter un ou plusieurs rôles-réactions. Ensuite, **DraftBot** vous guidera pour la configuration des rôles-réactions.

## <mark style="color:blue;">Gérer un rôle-réaction existant</mark>

Afin d'indiquer quel rôle-réaction vous désirez modifier, vous devrez envoyer l'[identifiant du message](../../autres/recuperer-un-identifiant.md#message), ou le lien vers celui-ci. Vous aurez ensuite accès au menu de gestion de rôle-réaction :
* ***Ajouter*** ➜ [Ajouter](role-reactions.md#ajouter-un-nouveau-rôle-reaction) un nouveau rôle-réaction.
* ***Modifier*** ➜ [Modifier](role-reactions.md#modifier-un-rôle-réaction) un rôle-réaction.
* ***Supprimer*** ➜ [Supprimer](role-reactions.md#supprimer-un-rôle-réaction) un rôle-réaction.
* ***Mode*** ➜ [Changer le mode](role-reactions.md#changer-le-mode-du-message) des rôles-réactions présents sur le message.

## <mark style="color:blue;">Ajouter</mark> un nouveau rôle-reaction

* Envoyez le nom du rôle que vous souhaitez attribuer à l’interaction du rôle-réaction.
* Puis sélectionnez le type du rôle-réaction : [<mark style="color:blue;">"Réaction"</mark>](role-reactions.md#reaction) [<mark style="color:blue;">"Bouton"</mark>](role-reactions.md#bouton) <mark style="color:blue;">ou</mark> [<mark style="color:blue;">"Sélecteur"</mark>](role-reactions.md#selecteur)<mark style="color:blue;"></mark>

{% tabs %}
{% tab title="Réaction" %}
{% hint style="warning" %}
Les émojis venants d'autres serveurs ne fonctionnent pas !
{% endhint %}

\
Indiquez simplement l'émoji que vous aimeriez ajouter en réaction.
\

{% hint style="success" %}
Et votre réaction de rôle-réaction est créé avec succès !
{% endhint %}
{% endtab %}

{% tab title="Bouton" %}
1. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> selon si vous souhaitez que votre bouton contienne un émoji ou non. \
   Si <mark style="color:green;">"Oui"</mark>, alors envoyez l'émoji que vous souhaitez afficher sur votre bouton.
2. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> selon si vous souhaitez afficher un texte personnalisé sur le bouton à la place du nom du rôle ou non. \
   Si <mark style="color:green;">"Oui"</mark>, envoyez le texte que vous souhaitez afficher.
3. Sélectionnez la couleur du bouton que vous souhaitez créer entre <mark style="color:blue;">"Bleu"</mark>, "Gris", <mark style="color:green;">"Vert"</mark> et <mark style="color:red;">"Rouge"</mark>. \


{% hint style="success" %}
Et votre bouton de rôle-réaction est bien créé avec les paramètres que vous avez definis !
{% endhint %}
{% endtab %}

{% tab title="Sélécteur" %}
Le sélecteur dispose de plusieurs lignes, correspondant chacune à un rôle qui sera attribué lors de leur sélection.

1. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> selon si vous souhaitez que votre ligne contienne un émoji ou non. \
   Si <mark style="color:green;">"Oui"</mark>, alors envoyez l'émoji que vous souhaitez afficher au début de celle-ci.
2. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> selon si vous souhaitez afficher un texte personnalisé à la place du nom du rôle ou non. \
   Si <mark style="color:green;">"Oui"</mark>, envoyez le texte que vous souhaitez afficher.
3. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> selon si vous souhaitez ajouter une description au rôle dans le sélecteur ou non. \
   Si <mark style="color:green;">"Oui"</mark>, envoyez la description que vous voulez donner au rôle dans le sélecteur. \

{% hint style="success" %}
Et votre sélécteur de rôle-réaction est créé avec succès !
{% endhint %}
{% endtab %}
{% endtabs %}

## <mark style="color:blue;">Modifier</mark> un rôle réaction

Vous devez d'abord choisir si vous voulez modifier des <mark style="color:blue;"></mark> [<mark style="color:blue;">"Réactions"</mark>](role-reactions.md#emoji), des <mark style="color:blue;"></mark> [<mark style="color:blue;">"Boutons"</mark>](role-reactions.md#nom) ou des [<mark style="color:blue;">"Sélecteurs"</mark>](role-reactions.md#couleur-du-bouton).

{% tabs %}
{% tab title="Réactions" %}

<!-- Mettre dans la section de tout en bas -->
Si vous choisissez de modifier des réactions, vous ne pouvez modifier **que le rôle qu'attribue la réaction**, et **pas la réaction elle-même**. Suivez alors les instructions du bot qui vous demandera de choisir le rôle-réaction que vous souhaitez modfier, puis d'indiquer par quel rôle vous souhaitez le remplacer.\

{% hint style="success" %}
Et voilà, un message de confirmation vous dira que le rôle qu'attribue la réaction a bien été modifié !
{% endhint %}
{% endtab %}

{% tab title="Boutons" %}
Si vous décidez de modifier des boutons, vous pourrez modifier le <mark style="color:blue;">"Rôle"</mark>, l'<mark style="color:blue;">"Émoji"</mark>, le <mark style="color:blue;">"Nom"</mark> (texte) ou alors la <mark style="color:blue;">"couleur"</mark> du bouton.

* Lorsque vous avez choisi ce que vous souhaitez modifier, choisissez le rôle-réaction concerné.
{% endtab %}

{% tab title="Sélécteurs" %}
Si vous décidez de modifier un sélecteur, vous pourrez modifier le <mark style="color:blue;">"Texte du sélecteur"</mark> (qui s'affiche par défaut), le <mark style="color:blue;">"Rôle"</mark>, l'<mark style="color:blue;">"Émoji"</mark>, le <mark style="color:blue;">"Nom"</mark> ou la <mark style="color:blue;">"Description"</mark> d'un rôle.

<!-- Ajouter une image ? -->

{% endtab %}
{% endtabs %}

## <mark style="color:blue;">Supprimer</mark> un rôle-réaction

## Changer le <mark style="color:blue;">mode</mark> du message