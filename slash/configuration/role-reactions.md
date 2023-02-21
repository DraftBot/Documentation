---
description: >-
  Avec le système de rôles-réactions, vos membres pourront facilement choisir des
  rôles parmi une liste définie, que ce soit par un sélecteur, des boutons, ou
  des émojis.
---

# 🔘 Rôles-réactions

{% hint style="info" %}
Les rôles-réactions ne peuvent être ajoutés que sur des messages envoyés par **DraftBot**. Vous pouvez créer ces messages de différentes manières :
* *Par la commande <mark style="color:orange;">/envoyer</mark>, aussi présente sous le nom de <mark style="color:orange;">/send</mark>* : Permet d'envoyer un message simple sous l'identité de DraftBot, sans embed.
* *Depuis la configuration des rôles-réactions, via <mark style="color:orange;">/config système:Rôles-Réactions</mark>* : Permet de créer un embed au titre personnalisé et au footer prédéfini.
* *Depuis l'Embed Creator du [panel web](https://www.draftbot.fr/dashboard)* : Permet la création complète et facile d'un message ou d'un embed entièrement personnalisable (description, champs, image...).
{% endhint %}

## Accéder à la configuration
{% tabs %}

<!-- Depuis Discord -->
{% tab title="Via la commande /config" %}
Pour configurer le système de rôles-réactions, rendez-vous dans la catégorie "Rôles-Réactions" de la commande <mark style="color:orange;">/config</mark>. Deux choix s'offrent alors à vous :
* ***Créer un nouveau rôle-réaction*** ➜ Accède au menu de [création d'un nouveau rôle-réaction](role-reactions.md#créer-un-nouveau-rôle-réaction).
* ***Gérer un rôle-réaction existant*** ➜ Permet de [gérer un rôle-réaction existant](role-reactions.md#gérer-un-rôle-réaction-existant) sur le message dont vous renseignez l'identifiant.

![Commande /config système: Rôles-Réactions](<../../.gitbook/assets/rolereact/view.png>)
{% endtab %}

<!-- Depuis le panel -->
{% tab title="Via le panel" %}

<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Pour configurer le système de rôles-réactions, accédez au panel via le lien ci-dessus et rendez-vous dans la catégorie "Rôles-Réactions" sur le serveur de votre choix.

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

<!-- Inclure un screen -->

{% endtab %}
{% endtabs %}

## Configuration

### Créer un nouveau rôle-réaction
{% tabs %}

<!-- Depuis Discord -->
{% tab title="Via la commande /config" %}
Pour créer un nouveau rôle-réaction, rendez-vous dans la catégorie "Rôles-Réactions" de la commande <mark style="color:orange;">/config</mark>, puis cliquez sur "Créer un nouveau rôle-réaction".

![](<../../.gitbook/assets/rolereact/question.png>)

Une fois fait, DraftBot vous demandera à partir de quel message vous souhaitez créer votre rôle-réaction :
* ***Nouveau message*** ➜ Créera un embed au titre personnalisé et au footer prédéfini.
* ***Message existant de DraftBot*** ➜ Récupérera un message de DraftBot ayant déjà été envoyé.

L'intégralité de la création est ensuite guidée par **DraftBot**, il vous suffit de suivre ses consignes.
{% endtab %}

<!-- Depuis le panel web -->
{% tab title="Via le panel" %}
<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Une fois sur le panel de **DraftBot** (accessible depuis le lien ci-dessus), rendez-vous sur la page "Rôles-Réactions".

* Si vous voulez créer un nouveau message, créez un message et / ou un embed grâce à l'Embed Creator se trouvant au centre de la page.
* Si vous voulez utiliser un message de **DraftBot** existant, cliquez sur le bouton "Récupérer un message" situé en haut à droite de la page et remplissez la fenêtre pop-up en indiquant le salon dans lequel se trouve le message, ainsi que l'[identifiant du message](../../autres/recuperer-un-identifiant.md#identifiant-dun-message) à récupérer.

Ajoutez ensuite votre rôle-réaction, celui-ci pouvant être une "Réaction", un "Bouton" ou un "Sélecteur". Vous pouvez en ajouter plusieurs sur un même message.

Puis, dans le sélecteur situé en haut de l'Embed Creator, sélectionnez un salon dans lequel envoyer le message de rôle-réaction.

{% hint style="success" %}
Enfin, cliquez sur "Créer" : votre rôle-réaction est créé !
{% endhint %}

<!-- Ajouter une image -->

{% hint style="info" %}
Vous pouvez donner des noms personnalisés aux rôles-réactions dans la partie à droite de la page. Pour cela, modifiez le texte de la zone de texte présente en haut à gauche de la "carte" d'un rôle-réaction.
{% endhint %}
{% endtab %}
{% endtabs %}

### Gérer un rôle-réaction existant

{% tabs %}

{% tab title="Message existant de DraftBot" %}
* Indiquez le lien ou l'[**identifiant du message**](../../autres/recuperer-un-identifiant.md#identifiant-dun-message) auquel vous souhaitez ajouter un ou plusieurs rôles-réactions.
* L'intégralité de la création est guidée par **DraftBot**, il vous suffit de suivre ses consignes.
{% endtab %}
{% endtabs %}

## <mark style="color:blue;">Gérer un rôle-réaction existant</mark>

Afin d'indiquer quel rôle-réaction vous désirez modifier, vous devrez envoyer le lien ou l'[identifiant du message](../../autres/recuperer-un-identifiant.md#identifiant-dun-message). Vous aurez ensuite accès au menu de gestion de rôle-réaction :
* ***Ajouter*** ➜ [Ajouter](role-reactions.md#ajouter-un-nouveau-rôle-reaction) un nouveau rôle-réaction.
* ***Modifier*** ➜ [Modifier](role-reactions.md#modifier-un-rôle-réaction) un rôle-réaction.
* ***Supprimer*** ➜ [Supprimer](role-reactions.md#supprimer-un-rôle-réaction) un rôle-réaction.
* ***Mode*** ➜ [Changer le mode](role-reactions.md#changer-le-mode-du-message) des rôles-réactions présents sur le message.

### <mark style="color:blue;">Ajouter</mark> un nouveau rôle-reaction

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
1. Sélectionnez "Oui" ou "Non", si vous souhaitez que votre bouton contienne un émoji ou non. \
   Si "Oui", alors envoyez l'émoji que vous souhaitez afficher sur votre bouton.
2. Sélectionnez "Oui" ou "Non", si vous souhaitez afficher un texte personnalisé sur le bouton à la place du nom du rôle ou non. \
   Si "Oui", envoyez le texte que vous souhaitez afficher.
3. Sélectionnez la couleur du bouton que vous souhaitez créer entre <mark style="color:blue;">"Bleu"</mark>, "Gris", <mark style="color:green;">"Vert"</mark> et <mark style="color:red;">"Rouge"</mark>. \


{% hint style="success" %}
Et votre bouton de rôle-réaction est bien créé avec les paramètres que vous avez définis !
{% endhint %}
{% endtab %}

{% tab title="Sélécteur" %}
Le sélecteur dispose de plusieurs lignes, correspondant chacune à un rôle qui sera attribué lors de leur sélection.

1. Sélectionnez "Oui" ou "Non", si vous souhaitez que votre ligne contienne un émoji ou non. \
   Si "Oui", alors envoyez l'émoji que vous souhaitez afficher au début de celle-ci.
2. Sélectionnez "Oui" ou "Non", si vous souhaitez afficher un texte personnalisé à la place du nom du rôle ou non. \
   Si "Oui", envoyez le texte que vous souhaitez afficher.
3. Sélectionnez "Oui" ou "Non", si vous souhaitez ajouter une description au rôle dans le sélecteur ou non. \
   Si "Oui", envoyez la description que vous voulez donner au rôle dans le sélecteur. \

{% hint style="success" %}
Et votre sélecteur de rôle-réaction est créé avec succès !
{% endhint %}
{% endtab %}
{% endtabs %}

### <mark style="color:blue;">Modifier</mark> un rôle réaction

Vous devez d'abord choisir si vous voulez modifier des <mark style="color:blue;"></mark> [<mark style="color:blue;">"Réactions"</mark>](role-reactions.md#emoji), des <mark style="color:blue;"></mark> [<mark style="color:blue;">"Boutons"</mark>](role-reactions.md#nom) ou des [<mark style="color:blue;">"Sélecteurs"</mark>](role-reactions.md#couleur-du-bouton).

{% tabs %}
{% tab title="Réactions" %}

<!-- Mettre dans la section de tout en bas -->
Si vous choisissez de modifier des réactions, vous ne pouvez modifier **que le rôle qu'attribue la réaction**, et **pas la réaction elle-même**. Suivez alors les instructions du bot qui vous demandera de choisir le rôle-réaction que vous souhaitez modifier, puis d'indiquer par quel rôle vous souhaitez le remplacer.\

{% hint style="success" %}
Et voilà, un message de confirmation vous dira que le rôle qu'attribue la réaction a bien été modifié !
{% endhint %}
{% endtab %}

{% tab title="Boutons" %}
Si vous décidez de modifier des boutons, vous pourrez modifier le <mark style="color:blue;">"Rôle"</mark>, l'<mark style="color:blue;">"Émoji"</mark>, le <mark style="color:blue;">"Nom"</mark> (texte) ou alors la <mark style="color:blue;">"couleur"</mark> du bouton.

* Lorsque vous avez choisi ce que vous souhaitez modifier, choisissez le rôle-réaction concerné.
{% endtab %}

{% tab title="Sélecteurs" %}
Si vous décidez de modifier un sélecteur, vous pourrez modifier le <mark style="color:blue;">"Texte du sélecteur"</mark> (qui s'affiche par défaut), le <mark style="color:blue;">"Rôle"</mark>, l'<mark style="color:blue;">"Émoji"</mark>, le <mark style="color:blue;">"Nom"</mark> ou la <mark style="color:blue;">"Description"</mark> d'un rôle.

<!-- Ajouter une image ? -->

{% endtab %}
{% endtabs %}

### <mark style="color:blue;">Supprimer</mark> un rôle-réaction

### Changer le <mark style="color:blue;">mode</mark> du message