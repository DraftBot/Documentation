---
description: >-
  Avec le système de rôles-réactions, vos membres pourront facilement choisir des
  rôles parmi une liste définie, que ce soit depuis un sélecteur, des boutons, ou
  des réactions.
---

# 🔘 Rôles-réactions 

## Créer un rôle-réaction

{% tabs %}
{% tab title="Via la commande /config" %}

Pour créer un rôle-réaction, rendez-vous dans <mark style="color:orange;">/config</mark> puis dans la rubrique "🧿 Rôles-Réactions" (*dans le sélecteur*). Ensuite, cliquez sur "<mark style="color:blue;">Créer un nouveau rôle-réaction</mark>".

![Configuration des rôles-réactions via /config](../.gitbook/assets/rolereact/view.png)

Une fois cela fait, plusieurs choix s'offriront à vous :

* ***Nouveau message*** ➜ **DraftBot** créera un embed au titre personnalisé.
* ***Message existant de DraftBot*** ➜ Le bot récupérera un message de **DraftBot** ayant déjà été envoyé.

{% hint style="warning" %}
Pour créer un rôle-réaction à partir d'un message déjà envoyé, il vous faudra récupérer son <mark style="color:blue;">[identifiant](../autres/recuperer-un-identifiant.md#identifiant-dun-message)</mark>.
{% endhint %}

{% hint style="info" %}
Si vous souhaitez par contre créer un message pour votre rôle-réaction voici les différentes possibilités :

* *Depuis la commande <mark style="color:orange;">/envoyer</mark>* : Permet d'envoyer un message simple sous l'identité de **DraftBot**.
* *Depuis l'Embed Creator du <mark style="color:blue;">[panel](https://www.draftbot.fr/dashboard)</mark>* : Permet la création complète et facile d'un message ou d'un embed entièrement personnalisable.
{% endhint %}

![Message de création d'un nouveau rôle-réaction](../.gitbook/assets/rolereact/question.png)


{% hint style="warning" %}
Les rôles-réactions ne peuvent être ajoutés qu'aux messages envoyés par **DraftBot**.
{% endhint %}

L'intégralité de la création est ensuite guidée par **DraftBot**, il vous demandera le rôle devant être ajouté lors d'une interaction avec le message et le format du rôle-réaction.

{% hint style="info" %}
Il est possible de donner un rôle temporairement un choisissant les boutons comme format.
{% endhint %}

{% hint style="success" %}
Félicitations ! Le rôle-réaction est maintenant créé. Nous allons pouvoir y ajouter d'autres rôles et continuer à le personnaliser.
{% endhint %}

{% endtab %}

{% tab title="Via le panel" %}

<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Pour configurer le système de rôles-réactions, accédez au panel via le lien ci-dessus et rendez-vous dans la rubrique "Rôles-Réactions".

Tout d'abord, sélectionnez le salon dans lequel sera envoyé le message de rôle-réaction via le sélecteur situé au dessus de l'Embed Creator.

Voici les différentes possibilitées de définir le message sur lequel les membres devront intéragir pour recevoir un rôle :

* En créant un nouveau message ou / et un embed grâce à l'Embed Creator se trouvant au centre de la page.
* En utilisant un message de **DraftBot** préalablement créé. Pour le récupérer, cliquez sur le bouton "<mark style="color:orange;">Récupérer un message</mark>" situé en haut à droite de la page. Renseignez ensuite le salon dans lequel se trouve le message, ainsi que l'<mark style="color:blue;">[identifiant du message](../autres/recuperer-un-identifiant.md#identifiant-dun-message)</mark> à récupérer. Cliquez ensuite sur "Récupérer".

Ajoutez ensuite vos rôles-réaction à votre message, ceux-ci pouvant être une "<mark style="color:orange;">Réaction</mark>", un "<mark style="color:orange;">Bouton</mark>" ou un "<mark style="color:orange;">Sélecteur</mark>". Vous pouvez en ajouter plusieurs sur un même message.

{% hint style="info" %}
Il est possible de personnaliser les boutons ou le sélecteur en cliquant sur la petit flèche à droite du champ où l'on sélectionne le rôle à ajouter.

![Personnaliser un bouton](../.gitbook/assets/rolereact/dashboard_set_button_settings.png)

{% endhint %}

Vous pouvez modifier le mode des rôles-réactions du message grâce au sélecteur situé juste en dessous de l'Embed Creator.

{% hint style="success" %}
Enfin, cliquez sur "Créer". Félicitations ! Votre rôle-réaction est maintenant créé.
{% endhint %}


{% hint style="info" %}
Vous pouvez nommer vos rôles-réactions. Pour se faire,  rendez-vous dans la liste contenant les rôles-réaction existants puis  modifiez le nom du rôle-réaction en cliquant sur "SANS NOM".

![Zone de texte de l'encadré d'un rôle-réaction](../.gitbook/assets/rolereact/dashboard_rename_rolereact.png)
{% endhint %}

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

![Panel de création d'un nouveau rôle-réaction](../.gitbook/assets/rolereact/dashboard_creation.png)

{% endtab %}
{% endtabs %}

## Gérer un rôle-réaction

{% tabs %}
{% tab title="Via la commande /config" %}

Pour gérer votre rôle-réaction, rendez vous dans <mark style="color:orange;">/config</mark> puis dans la rubrique "🧿 Rôles-Réactions" (*dans le sélecteur*). Ensuite, cliquez sur "<mark style="color:blue;">Gérer un rôle-réaction existant</mark>".

{% hint style="info" %}
Pour accéder au rôle-réaction, vous devrez renseigner l'<mark style="color:blue;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant)</mark> du message contenant le rôle-réaction.
{% endhint %}

### Ajouter ou retirer un rôle à votre rôle-réaction

Pour ajouter un nouveau rôle à votre rôle-réaction, vous n'aurez qu'à cliquer sur "<mark style="color:blue;">Ajouter</mark>". **DraftBot** vous demandera ensuite le rôle à ajouter ainsi que le format.

Pour retirer un rôle de son rôle-réaction, vous devrez cliquer sur "<mark style="color:blue;">Supprimer</mark>". Le bot demandera par la suite le rôle à enlever.

### Modifier un rôle-réaction

Si vous souhaitez changer le rôle que le membre recevra en interagissant avec un bouton, une réaction ou un rôle à choix dans un sélecteur, cliquez sur "<mark style="color:blue;">Modifier</mark>". **DraftBot** vous invitera à sélectionner le rôle à modifier et celui par lequel vous souhaitez le remplacer.

### Les différents modes

Les modes servent à modifier la manière dont vos membres pourront sélectionner les rôles et la manière dont ils les garderont.
Pour modifier le mode d'un rôle-réaction, cliquez sur "<mark style="color:blue;">Mode</mark>".

{% hint style="info" %}
Lors de la création d'un rôle-réaction, le mode par défaut est le mode *Normal*.
{% endhint %}

{% hint style="warning" %}
Tous les modes ne sont pas disponibles pour tous les formats de rôle-réaction (bouton ; réaction ; sélecteur).
{% endhint %}

Le seul mode disponible à tous les formats est le mode *Normal* (ajout ou retrait d'un rôle lors d'une interaction avec le message).

{% tabs %}
{% tab title="Réactions" %}

* *Inversé* : Suppression du rôle lors de l'ajout de la réaction et ajout du rôle lors du retrait de celle-ci.
* *Simple* : Ajout ou retrait du rôle lors de l'ajout de la réaction, la réaction est immédiatement retirée.
* *Ajout du rôle définitif* : Retrait de la réaction de l'utilisateur lors de l'ajout du rôle et impossibilité de retirer le rôle.
* *Retrait du rôle définitif* : Retrait de la réaction de l'utilisateur lors du retrait du rôle et impossibilité de se remettre le rôle.

{% endtab %}
{% tab title="Sélecteur et boutons" %}

* *Unique* : Un seul rôle possible dans le sélecteur ou parmi les boutons.
* *Unique* définitif : Un seul rôle possible dans le sélecteur ou parmi les boutons et impossibilité de changer de rôle.

{% endtab %}
{% endtabs %}

![Message de gestion des rôles-réactions](../.gitbook/assets/rolereact/gestion.png)

{% hint style="success" %}
Vous savez maintenant comment gérer votre rôle-réaction !
{% endhint %}

{% endtab %}
{% tab title="Via le panel" %}

<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Pour gérer un rôle-réaction existant, rendez vous tout d'abord sur le panel via le lien ci-dessus puis dans la rubrique "Rôles-Réactions".

À droite de la page, vous retrouverez la liste contenant tous les rôles-réactions existants sur le serveur. Pour en modifier un, cliquer sur "Modifier".

Vous pourrez par la suite modifier les rôles-réactions de différentes façons :

* En modifiant le message du rôle-réaction via l'Embed Creator se trouvant au centre de la page.
* En modifiant le mode du rôle-réaction à l'aide du sélecteur se trouvant juste en dessous de l'Embed Creator.
* En ajoutant, modifiant ou supprimant un rôle-réaction dans la section se trouvant en dessous du sélecteur de mode.

{% hint style="success" %}
Enfin, cliquez sur "Modifier" : votre rôle-réaction est modifié !
{% endhint %}

![Modifier un rôle-réaction](../.gitbook/assets/rolereact/dashboard_modify_role-reaction.png)

{% endtab %}
{% endtabs %}