---
description: >-
  Avec le système de rôles-réactions, vos membres pourront facilement choisir des
  rôles parmi une liste définie, que ce soit depuis un sélecteur, des boutons, ou
  des réactions.
---

# 🔘 Rôles-réactions

Les Rôles-réactions sont utiles lorsque vous souhaitez que vos membres choisissent un ou plusieurs rôles à choix parmi une liste prédéfinie par le créateur de ce dernier.  

## Configuration

{% tab title="Via le panel" %}

<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Pour configurer le système de rôles-réactions, accédez au panel via le lien ci-dessus et rendez-vous dans la catégorie "Rôles-Réactions" sur le serveur de votre choix.

![Panel de configuration des rôles-réactions](../.gitbook/assets/rolereact/dashboard.png)

{% endtab %}
{% endtabs %}

## Créer un rôles-réaction

{% tabs %}
{% tab title="Via la commande /config" %}

Pour créer un rôle-réaction, rendez-vous dans <mark style="color:orange;">/config</mark> puis dans la rubrique "🧿 Rôles-Réactions" (*dans le sélecteur*). Ensuite, cliquez sur "<mark style="color:blue;">Créer un nouveau rôle-réaction</mark>".

![Configuration des rôles-réactions via /config](../.gitbook/assets/rolereact/view.png)

Une fois cela fait, plusieurs choix s'offriront à vous :

* ***Nouveau message*** ➜ Créera un embed au titre personnalisé et au footer prédéfini.
* ***Message existant de DraftBot*** ➜ Récupérera un message de **DraftBot** ayant déjà été envoyé.

{% hint style="info" %}
Pour créer un rôle-réaction à partir d'un message déjà envoyé, il vous faudra récupéré son <mark style="color:blue;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant)</mark>.

Si vous souhaitez par contre créer un message pour votre rôle réaction voici les différentes possibilitées :

* *Depuis la commande <mark style="color:orange;">/envoyer</mark>* : Permet d'envoyer un message simple sous l'identité de **DraftBot**.
* *Depuis l'Embed Creator du <mark style="color:blue;">[panel](https://www.draftbot.fr/dashboard)</mark>* : Permet la création complète et facile d'un message ou d'un embed entièrement personnalisable.
{% endhint %}

{% hint style="warning" %}
Les rôles-réactions ne peuvent être ajoutés que sur des messages envoyés par **DraftBot**.
{% endhint %}

![Message de création d'un nouveau rôle-réaction](../.gitbook/assets/rolereact/question.png)


L'intégralité de la création est ensuite guidée par **DraftBot**, il vous demandera le rôle devant être ajouté lors d'une interaction avec le message, le format du rôle réaction ainsi que des questions de personnalisation.

{% hint style="success" %}
Félicitations ! Le rôle-réaction est maintenant créé. Nous allons maintenant pouvoir le personnaliser encore plus !
{% endhint %}

## Gérer un rôle-réaction

Pour ajouter, retirer, supprimmer ou modifier le mode de votre rôle-réaction, rendez vous dans <mark style="color:orange;">/config</mark> puis dans la rubrique "🧿 Rôles-Réactions" (*dans le sélecteur*). Ensuite, cliquez sur "<mark style="color:blue;">Gérer un rôle-réaction existant</mark>".

{% hint style="info" %}
Pour accéder au rôle-réaction, vous devrez rensigner <mark style="color:blue;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant)</mark> du message contenant le rôle-réaction.
{% endhint %}

### Ajouter un rôle à votre rôle-réaction

Vous n'aurez qu'à cliquer sur "<mark style="color:blue;">Ajouter</mark>" pour ajouter un nouveau rôle à votre rôle-réaction.

### Modifier un rôle-réaction

* ***Modifier*** ➜ Modifier un rôle-réaction.
* ***Supprimer*** ➜ Supprimer un rôle-réaction.
* ***Mode*** ➜ Changer le mode des rôles-réactions présents sur le message.



![Message de gestion des rôles-réactions](../.gitbook/assets/rolereact/gestion.png)

{% endtab %}
{% tab title="Via le panel" %}

Pour créer un nouveau rôle-réaction, [accédez à la configuration](#accéder-à-la-configuration) des rôles-réactions via le panel.

<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

* Si vous voulez créer un nouveau message, créez un message et/ou un embed grâce à l'Embed Creator se trouvant au centre de la page.
* Si vous voulez utiliser un message de **DraftBot** existant, cliquez sur le bouton "Récupérer un message" situé en haut à droite de la page et remplissez la fenêtre pop-up en indiquant le salon dans lequel se trouve le message, ainsi que l'[identifiant du message](../autres/recuperer-un-identifiant.md#identifiant-dun-message) à récupérer. Cliquez ensuite sur "Récupérer".

Ajoutez ensuite votre rôle-réaction, celui-ci pouvant être une "Réaction", un "Bouton" ou un "Sélecteur". Vous pouvez en ajouter plusieurs sur un même message.

Vous pouvez modifier le mode des rôles-réactions du message grâce au sélecteur situé en bas de l'Embed Creator.

Puis, dans le sélecteur situé en haut de l'Embed Creator, sélectionnez le salon dans lequel sera envoyé le message de rôle-réaction.

{% hint style="success" %}
Enfin, cliquez sur "Créer" : votre rôle-réaction est créé !
{% endhint %}

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

![Panel de création d'un nouveau rôle-réaction](../.gitbook/assets/rolereact/dashboard_creation.png)

{% endtab %}
{% endtabs %}

{% hint style="info" %}
Vous pouvez donner des noms personnalisés aux rôles-réactions dans la partie à droite de la page. Pour cela, modifiez le texte de la zone de texte présente en haut à gauche de l'encadré d'un rôle-réaction.

![Zone de texte de l'encadré d'un rôle-réaction](../.gitbook/assets/rolereact/dashboard_rename_rolereact.png)
{% endhint %}




### Gérer un rôle-réaction existant
{% tabs %}

<!-- Depuis Discord -->
{% tab title="Via la commande /config" %}
Pour gérer un rôle-réaction existant, <mark style="color:orange;">[accédez à la configuration](#accéder-à-la-configuration)</mark> des rôles-réactions via la commande <mark style="color:orange;">/config</mark>.

![Message de gestion des rôles-réactions](../.gitbook/assets/rolereact/gestion.png)

Vous devrez ensuite indiquer le lien ou l'[<mark style="color:blue;">identifiant du message</mark>](../autres/recuperer-un-identifiant.md#identifiant-dun-message) sur lequel se trouve le rôle-réaction que vous souhaitez modifier.

Vous aurez ensuite accès au menu de gestion des rôles-réactions :
* ***Ajouter*** ➜ Ajouter un nouveau rôle-réaction.
* ***Modifier*** ➜ Modifier un rôle-réaction.
* ***Supprimer*** ➜ Supprimer un rôle-réaction.
* ***Mode*** ➜ Changer le mode des rôles-réactions présents sur le message.

L'intégralité de la création est ensuite guidée par **DraftBot**, il vous suffit de suivre ses consignes.
{% endtab %}

<!-- Depuis le panel web -->
{% tab title="Via le panel" %}

<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Pour gérer un rôle-réaction existant, <mark style="color:orange;">[accédez à la configuration](#accéder-à-la-configuration)</mark> des rôles-réactions via le panel.

À droite de la page, vous retrouverez la liste de tous les rôles-réactions existants sur le serveur. Pour en modifier un, cliquer sur "Modifier".

Vous pourrez modifier les rôles-réactions de différentes façons :
* En modifiant le message du rôle-réaction via l'Embed Creator se trouvant au centre de la page.
* En modifiant le mode du rôle-réaction à l'aide du sélecteur se trouvant juste en dessous de l'Embed Creator.
* En ajoutant, modifiant ou supprimant un rôle-réaction dans la section se trouvant en dessous du sélecteur de mode.

{% hint style="success" %}
Enfin, cliquez sur "Modifier" : votre rôle-réaction est modifié !
{% endhint %}

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

![Panel de gestion d'un rôle-réaction](../.gitbook/assets/rolereact/dashboard_gestion.png)
{% endtab %}
{% endtabs %}