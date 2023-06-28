---
description: >-
  Récoltez simplement les suggestions et les avis de vos membres dans un salon
  avec DraftBot.
---

# 💡 Suggestions

## Utilisation

### Menu des suggestions

Pour accéder au menu des suggestions, vous devez vous rendre dans <mark style="color:orange;">/suggest</mark>.

Cette commande vous permet de soumettre de nouvelles suggestions, accéder à celles-ci (en cliquant sur leurs titres) ou encore, voir leur état. C'est à dire que vous pourrez voir le pourcentage de votes de vos suggestions mais aussi si elles ont été acceptées, refusées ou si elles sont prévues.

Vous pourrez également y décider de vous faire notifié ou non en cas d'un changement de <mark style="color:blue;">[status](suggestions.md#gerer-une-suggestion)</mark> sur l'une de vos suggestions.

{% hint style="info" %}
Il faut que l'option "Notification lors du changement de statut" soit <mark style="color:blue;">[activée](suggestions.md#tri-des-suggestions)</mark> sur le serveur. Si ce n'est pas le cas, vous ne verrez pas le bouton "Me notifé en cas de changement de status"
{% endhint %}

![Menu des suggestions](../.gitbook/assets/suggestions/suggest_menu.png)

### Soumettre une suggestion

Pour soumettre une suggestion, il faut vous rendre dans le [menu des suggestions](suggestions.md#menu-des-suggestions) (<mark style="color:orange;">/suggest</mark>) puis cliquer sur le bouton "<mark style="color:blue;">Envoyer une nouvelle suggestion</mark>".

**DraftBot** vous ouvrira ensuite un pop-up où vous pourrez renseigner :
* Titre ➜ Le titre à donner à votre suggestion. Il permettra aussi de la référencer dans le menu des [menu des suggestions](suggestions.md#menu-des-suggestions).
* Description ➜ La description de votre suggestion, où vous pourrez détailler votre suggestion pour mieux l'expliquer aux autres membres.

{% hint style="info" %}
Pour ajouter une image d'illustration à votre suggestion, vous devez avoir activé la demande de confirmation lors de la configuration.
Vous aurez alors un bouton pour ajouter une image lors de cette confirmation.
{% endhint %}

![Menu de création d'une suggestion](../.gitbook/assets/suggestions/create_suggestion.png)

*Vous avez oublié une information lors de la publication de votre suggestion ou vous voulez ajouter un commentaire à cette dernière ?*\
Vous pouvez alors sélectionner le bouton "<mark style="color:blue;">Ajouter un commentaire sur l'une de ces suggestions</mark>" pour en ajouter un !

{% hint style="info" %}
Il faut que <mark style="color:blue;">[commentaire après publication](suggestions.md#membres)</mark> soit activé. 
{% endhint %}

### Gérer une suggestion

**DraftBot** vous propose de pouvoir accepter, refuser ou prévoir une suggestion.\
Découvrez dans le menu ci-dessous comment faire :

{% hint stype="info" %}
Vous avez besoin de la permission "*Gérer les messages*" pour pouvoir accepter, refuser ou prevoir une suggestion.
{% endhint %}

{% tabs %}
{% tab title="Accepter une suggestion" %}
Pour accepter une suggestion, vous pouvez utiliser la commande <mark style="color:orange;">/suggestmod accepter</mark>. Vous devrez ensuite saisir l'<mark style="color:blue;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant#message)</mark> du message (donc de la suggestion à accepter). Finalement, un menu s'ouvrira afin vous demander la raison d'acceptation.

{% hint stype="info" %}
Vous avez aussi la possibilité de faire un clic droit (sur ordinateur) ou appuyez longtemps (sur mobile) sur la suggestion en question puis d'appuyez sur "Applications". Vous aurez ensuite la possibilité d'"Accepter" la suggestion.

![Accepter une suggestion](../.gitbook/assets/suggestions/suggest_accept.gif)
{% endhint %}

{% endtab %}

{% tab title="Refuser une suggestion" %}
Pour refuser une suggestion, vous pouvez utiliser la commande <mark style="color:orange;">/suggestmod refuser</mark>. Vous devrez ensuite saisir l'<mark style="color:blue;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant#message)</mark> du message (donc de la suggestion à refuser). Finalement, un menu s'ouvrira afin vous demander la raison de refus.

{% hint stype="info" %}
Vous avez aussi la possibilité de faire un clic droit (sur ordinateur) ou appuyez longtemps (sur mobile) sur la suggestion en question puis d'appuyez sur "Applications". Vous aurez ensuite la possibilité d'"Refuser" la suggestion.

![Refuser une suggestion](../.gitbook/assets/suggestions/suggest_refuse.gif)
{% endhint %}

{% endtab %}

{% tab title="Prévoir une suggestion" %}
Pour prévoir une suggestion, vous pouvez utiliser la commande <mark style="color:orange;">/suggestmod prevue</mark>. Vous devrez ensuite saisir l'<mark style="color:blue;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant#message)</mark> du message (donc de la suggestion à prévoir). Finalement, un menu s'ouvrira afin vous demander la raison de prévision.

{% hint stype="info" %}
Vous avez aussi la possibilité de faire un clic droit (sur ordinateur) ou appuyez longtemps (sur mobile) sur la suggestion en question puis d'appuyez sur "Applications". Vous aurez ensuite la possibilité de "prévoir" la suggestion.

- GIF à ajouté
{% endhint %}
{% endtab %}
{% endtabs %}

Vous vous rendez compte que vous avez fait une erreur ? Vous pouvez toujours repasser une suggestion en attente via la commande <mark style="color:orange;">/suggestmod attente</mark>. Vous aurez ensuite à saisir l'<mark style="color:blue;">[identifiant](https://docs.draftbot.fr/autres/recuperer-un-identifiant#message)</mark> du message (donc de la suggestion).

## Configuration

{% tabs %}
{% tab title="Via la commande /config" %}

### Configuration de base

"<mark style="color:blue;">Activer le système</mark>" ➜ Permet d'activer ou désactiver le système.
"<mark style="color:blue;">Salon de réception</mark>" ➜ Sert à définir le salon où seront envoyées les suggestions.
"Mention" ➜ Paramétrer un rôle qui sera mentionné lors de l'envoi d'une nouvelle suggestion.
"Couleur en fonction des votes" ➜ Une fois cette option activée, **DraftBot** changera la couleur de l'embed en fonction du pourcentage de vote pour ou contre.

{% hint stype="info" %}
Si vous êtes souscrit à un abonnement <mark style="color:pink;">[premium](https://draftbot.fr/premium)</mark>, vous pourrez chosir les couleurs du dégradé, en cliquant sur "💎Dégradé personnalisé".
{% endhint %}

### Réactions 

En cliquant sur le bouton "Réactions", vous aurez accès à ce menu :

"Activer le retrait des réactions après traitement" ➜ Une fois la suggestion <mark style="color:blue;">[traitée](suggestions.md#gerer-une-suggestion)</mark>, **DraftBot** retirera les réactions sous la suggestion.
"Vote favorable" ➜ Définir l'émoji sous la suggestion pour donner un avis positif.
"Vote neutre" ➜ Paramétrer l'émoji sous la suggestion pour de donné un avis neutre.

{% hint stype="info" %}
Vous pouvez également ne pas définir de vote neutre en cliquant sur "Vote neutre" puis <mark style="color:red;">"Non"</mark>.
{% endhint %}

"Vote défavorable" ➜ Permet de définir l'émoji sous la suggestion pour de donné un avis négatif.

![Configurer les réactions](../.gitbook/assets/suggestions/set_suggestion_reactions.png)

### Confirmation

En cliquant sur le bouton "Confirmation", vous aurez accès à ce menu :

"Activer la confirmation avant envoi" ➜ Cette option sert à ce que le membre puisse modifier ça suggestion s'il se rend compte qu'il a fait une erreur ou à ajouter une image.

{% hint style="warning" %}
Si cette option n'est pas activée, il vous sera impossible d'ajouter une image à vos suggestions.
{% endhint %}

![Message de confirmation lors de l'envoi d'une suggestion](../.gitbook/assets/suggestions/suggestion_confirmation.png)

"Message de confirmation après envoi" ➜ Vous pouvez définir un message personnalisé qui sera envoyé lorsqu'un membre enverra une nouvelle suggestion.

{% hint style="info" %}
Cette option n'est pas désactivable, si vous décidez de ne pas la personnalisée, voici le message qui sera envoyé :
> Merci de votre suggestion. Elle a été ajoutée aux suggestions du serveur !
{% endhint %}


![Configurer les différentes confirmations](../.gitbook/assets/suggestions/set_suggestion_confirmation.png)

### Tri des suggestions

En cliquant sur le bouton "Tri des suggestions", vous aurez accès à ce menu :

"Activer le tri des suggestions" ➜ Sert à activer / désactiver le tri des suggestions
"Masquer le nom du modérateur" ➜ Cette option sert masquer le nom de la personne qui aura [géré la suggestion](suggestions.md#gerer-une-suggestion).
"Activer les notifications" ➜ Une fois cette option activée le membre qui aura fait la suggestion pourra, ou non être notifié lorsque sa suggestion changera de [statut](suggestions.md#gerer-une-suggestion).
    "<mark style="color:red;">Désactiver</mark>" ➜ Désactiver le système de notifications lors du changement de statut.
    "<mark style="color:blue;">Mention activée par défaut</mark>" ➜ Une fois cette option activée, les membres seront toujours notifié lors du changement de statut
    "Mention désactivée par défaut" ➜ Une fois cette option activée, les membres ne seront pas notifié lors du changement de statut.

{% hint style="info" %}
Pour les deux dernières options citées ci-dessus, il sera possible pour vos membres de modifier le paramètre par défaut en passant par "<mark style="color:orange;">/suggest</mark>" puis "Me notifié en cas de changement de statut".
{% endhint %}

![Menu de configuration des notifications lors du chnagement de statut](../.gitbook/assets/suggestions/set_suggestion_notification.png)

"<mark style="color:blue;">Définir le fil des suggestions acceptées</mark>" ➜ Une fois le fil défini, toute les suggestions acceptées se rendront automatiquement dans ce fil.
"<mark style="color:blue;">Définir le fil des suggestions refusée</mark>" ➜ Une fois le fil défini, toute les suggestions refusées se rendront automatiquement dans ce fil.

### Membres

En cliquant sur le bouton "Membres", vous aurez accès à ce menu :

"Limiter les suggestions en attentes" ➜ Grâce à ce bouton, vous pouvez décider de limiter le nombre de suggestion que vos membres pourront envoyer. 

{% hint style="info" %}
Le nombre de suggestions en simultané peut varier de **1** à **10**.

Une fois la suggestions [traitée](suggestions.md#gerer-une-suggestion), le membre pourra renvoyer une suggestion.
{% endhint %}

"Activer le commentaire après publication" ➜ Une fois cette option activée, si un de vos membres oublie un détail important sur sa suggestion, il pourra après coup ajouter un commentaire sous sa suggestion en passant par <mark style="color:orange;">/suggest</mark>.

![Menu de configuration de la partie "Membre"](../.gitbook/assets/suggestions/set_suggestion_member.png)

### 💎 Fils de discussions automatiques

En cliquant sur le bouton "💎 Fils de discussions automatiques", vous aurez accès à ce menu :

"Activer l'ouverture d'un fil" ➜ Une fois cette option activée, **DraftBot** ouvrira un fil sous chaque suggestion soumise.
"Modifier le nom du fil" ➜ Vous pourrez mofifier le nom du fil qui s'ouvrira sous chaque suggestion.

{% hint style="info" %}
Vous pouvez mettre diffrérentes variables dans le nom du fil :

### 💎 Fils de discussions automatiques (*Avantage Premium*)

En cliquant sur le bouton "💎 Fils de discussions automatiques", vous aurez accès à ce menu :

"Activer l'ouverture d'un fil" ➜ Une fois cette option activée, **DraftBot** ouvrira un fil sous chaque suggestion soumise.
"Modifier le nom du fil" ➜ Vous pourrez mofifier le nom du fil qui s'ouvrira sous chaque suggestion.

{% hint style="info" %}
Vous pouvez mettre diffrérentes variables dans le nom du fil :

<details>
<summary>Variables</summary>
Les variables sont des bouts de texte qui évoluent suivant la personne, le serveur, le salon ou encore le temps. Voici celles utilisables dans le nom des fils automatiquement ouverts par DraftBot.

- `{user}` ➜ Mention du membre
- `{user.id}` ➜ Identifiant du membre
- `{user.username}` ➜ Pseudo du membre
- `{user.nickname}` ➜ Surnom ou pseudo du membre
- `{user.tag}` ➜ Tag du membre _(Pseudo#0000)_
- `{server}` ➜ Nom du serveur
- `{server.id}` ➜ Identifiant du serveur
- `{server.name}` ➜ Nom du serveur
- `{server.membercount}` ➜ Nombre de membres sur le serveur
- `{date}` ➜ Date actuelle (JJ/MM/AAAA)
- `{time}` ➜ Heure actuelle (HH:MM)
- `{timestamp}` ➜ Timestamp actuel en secondes
</details>
{% endhint %}

![Menu de configuration concernant les fils automatiques](../.gitbook/assets/suggestions/set_suggestion_automatic_thread.png)

{% endtab %}

{% tab title="Via le panel" %}
Veuillez d'abord vous rendre sur le <mark style="color:blue;">[panel de **DraftBot**](https://draftbot.fr/dashboard/)</mark> ➜ Suggestions.

Si vous n'avez pas encore configurer le système, vous tomberez sur cette page :  

![Premier menu lorsque l'on configure le système](../.gitbook/assets/suggestions/dashboard_suggestion.png)

En cliquant sur "Configurer en quelques secondes" vous tomberez sur ce pop-up : 

![Configurer la structure du système de suggestions](../.gitbook/assets/suggestions/dashboard_set_structure.png)

Vous pourrez y configurer la structure de votre système :

"Salons des suggestions" ➜ Paramétré le salon dans lequel seront envoyées les suggestions.

{% hint style="info" %}
La différence entre l'onglet "Créer" et "Sélectionner" est que dans le premier onglet, vous choisirez le nom du salon que **DraftBot** créera et dans le deuxième, vous choisirez un salon déjà créé.  
{% endhint %}

"Suggestions par membre" ➜ Vous pourrez y limiter le nombre de suggestion <mark style="color:blue;">[non-traitée](suggestions.md#gerer-une-suggestion)</mark> par membre.
"Rôle à mentionner" ➜ Paraméter le rôle qui sera mentionné lors de l'envoi d'une nouvelle suggestion.
"Modération des suggestions" ➜ Une fois cette option activée, les suggestions pourront être [refusées, acceptées ou prévues](suggestions.md#gerer-une-suggestion).

Une fois cela fait, d'autres options de configuration s'offriront à vous :

"Message de confirmation d'une suggestion" ➜ Configurer le message qui s'enverra automatiquement lorsqu'un membre enverra une nouvelle suggestion.

{% hint style="info" %}
Cette option n'est pas désactivable, si vous décidez de ne pas la personnalisée, voici le message qui sera envoyé :

> Merci de votre suggestion. Elle a été ajoutée aux suggestions du serveur !
{% endhint %}

"Réactions" ➜ Paramétrer les différentes réactions pour donner un avis positif, neutre ou négatif.

{% hint style="info" %}
Le vote "neutre" peut être retirer des réactions.
{% endhint %}

"Demande de confirmation" ➜ Une fois la suggestion envoyé, **DraftBot** proposera une dernière fois au membre de pouvoir modifier sa suggestion ou encore y ajouter une image.

{% hint style="warning" %}
Si cette option n'est pas activée, il vous sera impossible d'ajouter une image à vos suggestions.
{% endhint %}

"Variation de la couleur" ➜ Suivant le pourcentage de votes pour ou contre, la couleur variera.

{% hint style="info" %}
Pour les utilisateurs <mark style="color:pink;">[premium](https://draftbot.fr/premium)</mark>, vous pourrez décider des couleurs.
{% endhint %}

"Ouverture automatique d'un fil de discussion" (💎) ➜ Paraméter l'ouverture automatique d'un fil lorsqu'une nouvelle suggestion est envoyée.

{% hint style="info" %}
Vous pouvez mettre diffrérentes variables dans le nom du fil :

<details>
<summary>Variables</summary>
Les variables sont des bouts de texte qui évoluent suivant la personne, le serveur, le salon ou encore le temps. Voici celles utilisables dans le nom des fils automatiquement ouverts par DraftBot.

- `{user}` ➜ Mention du membre
- `{user.id}` ➜ Identifiant du membre
- `{user.username}` ➜ Pseudo du membre
- `{user.nickname}` ➜ Surnom ou pseudo du membre
- `{user.tag}` ➜ Tag du membre _(Pseudo#0000)_
- `{server}` ➜ Nom du serveur
- `{server.id}` ➜ Identifiant du serveur
- `{server.name}` ➜ Nom du serveur
- `{server.membercount}` ➜ Nombre de membres sur le serveur
- `{date}` ➜ Date actuelle (JJ/MM/AAAA)
- `{time}` ➜ Heure actuelle (HH:MM)
- `{timestamp}` ➜ Timestamp actuel en secondes
</details>
{% endhint %}

"Supression des réactions" ➜ Lorsqu'une suggestion sera <mark style="color:blue;">[traitée](suggestions.md#gerer-une-suggestion)</mark>, les réactions seront retirées de la suggestion.
"Commentaire de la part de l'auteur" ➜ Une fois activé, vos membres pourront ajouter un commentaire sur leur suggestion si ils ont oubliés un détail.
"Masquer le pseudo du modérateur" ➜ Le nom de la personne ayant <mark style="color:blue;">[traitée](suggestions.md#gerer-une-suggestion)</mark> la suggestion ne sera pas affiché sur la suggestion.
"Fils de tri" ➜ Une fois les suggestions <mark style="color:blue;">[traitées](suggestions.md#gerer-une-suggestion)</mark>, elles seront automatiquement dans les fils configuré ici.
"Notification de changements" ➜ Lorsque la suggestion change de statut, c'est à dire quelle est acceptée, refusée, ou prévue, l'auteur de la suggestion sera mentionné soit dans le fil de la suggestion (si l'option est activée), dans les fils de tri ou dans les messages privés.

{% hint style="info" %}
Les membres pourront toujours modifier les paramètres par défaut depuis la commande <mark style="color:orange;">/suggest</mark>.
{% endhint %}

![Configuration du système de suggestion via le panel](../.gitbook/assets/suggestions/dashboard_view.png)

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

{% endtab %}
{% endtabs %}