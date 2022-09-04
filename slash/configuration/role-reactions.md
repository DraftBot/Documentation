---
description: >-
  Avec le système de rôle réactions, vos membres pourront facilement choisir des
  rôles parmi une liste définie, que ce soit par un sélecteur, des boutons, ou
  des émojis
---

# 🔘 Rôle réactions

{% hint style="info" %}
Les rôles-réactions ne peuvent être ajouté que sur des messages envoyés par **DraftBot**. Vous pouvez créer ces messages avec la commande <mark style="color:orange;">/envoyer</mark>, <mark style="color:orange;">/send</mark>, directement la configuration <mark style="color:orange;">/config système: Rôles réactions</mark> ou le [PanelWeb](https://www.draftbot.fr/dashboard) qui permet une personnalisation plus facile et complète.
{% endhint %}

<figure><img src="../../.gitbook/assets/Rôles réactions.png" alt=""><figcaption><p>Commande <mark style="color:orange;">/config système: Rôles-Réactions</mark></p></figcaption></figure>

### <mark style="color:blue;">Créer un nouveau rôle-réaction</mark>

<figure><img src="../../.gitbook/assets/Créer un rôle-réaction.png" alt=""><figcaption></figcaption></figure>

#### <mark style="color:blue;">Nouveau message</mark>

* Indiquez le **titre** du du rôle-réaction qui apparaîtra en haut de l'embed.
* Précisez ou mentionnez le **rôle** que vous souhaiter ajouter lorsqu'un membre interagit avec le message.
* Choisissez le format du rôle-réaction, entre <mark style="color:blue;">"Réaction" "Bouton"</mark> ou <mark style="color:blue;">"Sélecteur"</mark>
* L'intégralité de la création est guidée par **DraftBot**, il vous suffit de suivre ses consignes.

#### <mark style="color:blue;">Message existant de DraftBot</mark>

SI vous décidez de choisir un message de DraftBot crée au préalable, vous devrez envoyer l'[identifiant du message](../../autres/recuperer-un-identifiant.md#message) auquel vous souhaitez ajouter des rôles. Ensuite, **DraftBot** vous guidera pour la configuration des rôles-réactions.



### <mark style="color:blue;">Gérer un rôle-réaction existant</mark>

Afin d'indiquer quel rôle-réaction vous désirez modifier, vous devrez envoyer l'[identifiant du message](../../autres/recuperer-un-identifiant.md#message), ou le lien vers celui-ci. Vous aurez ensuite la possibilité de gérer les rôles-réactions du message de différentes façons :

* <mark style="color:blue;"></mark>[<mark style="color:blue;">"Ajouter"</mark>](role-reactions.md#ajouter-un-nouveau-role-reaction) un rôle-réaction.
* <mark style="color:blue;"></mark>[<mark style="color:blue;">"Modifier"</mark>](role-reactions.md#modifier-un-role-reaction) un rôle-réaction.
* <mark style="color:blue;"></mark>[<mark style="color:blue;">"Supprimer"</mark>](role-reactions.md#supprimer-un-role-reaction) un rôle-réaction.
* Ou changer le [<mark style="color:blue;">"mode"</mark>](role-reactions.md#changer-le-mode-du-message) des rôles-réactions.

#### <mark style="color:blue;">Ajouter</mark> un nouveau rôle-reaction

* Envoyez le nom du rôle que vous souhaitez attribuer à l’interaction du rôle-réactions
* Puis sélectionnez le type du rôle-réaction: [<mark style="color:blue;">"Réaction"</mark>](role-reactions.md#reaction) [<mark style="color:blue;">"Bouton"</mark>](role-reactions.md#bouton) <mark style="color:blue;">ou</mark> [<mark style="color:blue;">"Sélecteur"</mark>](role-reactions.md#selecteur)<mark style="color:blue;"></mark>

{% tabs %}
{% tab title="Réaction" %}
{% hint style="warning" %}
Les émojis venants d'autres serveurs ne fonctionnent pas
{% endhint %}

\
Indiquez simplement l'émoji que vous aimeriez ajouter en réaction. \


{% hint style="success" %}
Et votre rôle-réaction, réaction Discord est crée avec succès !
{% endhint %}
{% endtab %}

{% tab title="Bouton" %}
1. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> si vous souhaitez que votre bouton contienne un émoji. \
   Si <mark style="color:green;">"Oui"</mark>, alors envoyez l'émoji que vous souhaitez afficher sur votre bouton
2. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> si vous souhaitez afficher un texte parsonnalisé sur le bouton à la place du nom du rôle. \
   Si <mark style="color:green;">"Oui"</mark>, envoyez le texte que vous souhaitez afficher.
3. Sélectionnez la couleur du bouton que vous souhaitez créer entre <mark style="color:blue;">"Bleu"</mark>, "Gris" <mark style="color:green;">"Vert"</mark> et <mark style="color:red;">"Rouge"</mark>.\


{% hint style="success" %}
Et votre bouton rôle-réaction est bien crée avec les paramètres que vous avez defini&#x20;
{% endhint %}
{% endtab %}

{% tab title="Sélécteur" %}
Le sélecteur dispose de plusieurs lignes, correspondants chacune à un rôle qui sera attribué lors de leur sélection.

1. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> si vous souhaitez que votre ligne contienne un émoji. \
   Si <mark style="color:green;">"Oui"</mark>, alors envoyez l'émoji que vous souhaitez afficher au début de celle-ci.
2. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> si vous souhaitez afficher un texte personnalisé à la place du nom du rôle. \
   Si <mark style="color:green;">"Oui"</mark>, envoyez le texte que vous souhaitez afficher.
3. Sélectionnez <mark style="color:green;">"Oui"</mark> ou <mark style="color:red;">"Non"</mark> si vous souhaitez ajouter une description au rôle dans le sélecteur\
   Si <mark style="color:green;">"Oui"</mark>, envoyez la description que vous voulez donner au rôle dans le sélecteur\


{% hint style="success" %}
Et votre sélécteur de rôle Discord est crée avec succès !
{% endhint %}
{% endtab %}
{% endtabs %}

#### <mark style="color:blue;">Modifier</mark> un rôle réaction

Vous devez d'abord choisir si vous voulez modifier des <mark style="color:blue;"></mark> [<mark style="color:blue;">"Réactions"</mark>](role-reactions.md#emoji), des <mark style="color:blue;"></mark> [<mark style="color:blue;">"Boutons"</mark>](role-reactions.md#nom) ou des [<mark style="color:blue;">"Sélecteurs"</mark>](role-reactions.md#couleur-du-bouton).

{% tabs %}
{% tab title="Réactions" %}
Si vous choisissez de modifier des réactions, **vous ne pouvez modifier que le rôle qu'attribue la réaction**. Suivez alors les instructions du bot qui vous demandera de choisir le rôle-réaction que vous souhaitez modfier pour ensuite indiquer par quel rôle vous voulez le remplacer.\


{% hint style="success" %}
Et voilà, un message de confirmation vous dira que le rôle qu'attribue la réaction a bien été modifié !
{% endhint %}
{% endtab %}

{% tab title="Boutons" %}
Si vous décidez de modifier des boutons, vous pourrez modifier le <mark style="color:blue;">"Rôle"</mark>, L'<mark style="color:blue;">"Émoji"</mark>, le <mark style="color:blue;">"Nom"</mark> (texte) ou alors la <mark style="color:blue;">"couleur du bouton"</mark>.

* Lorsque vous avez choisi ce que vous souhaitez modifier, choisissez le rôle-réaction concerné
{% endtab %}

{% tab title="Sélécteurs" %}

{% endtab %}
{% endtabs %}

### <mark style="color:blue;">Supprimer</mark> un rôle-réaction

### Changer le <mark style="color:blue;">mode</mark> du message

