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
Il faut que l'option "Notification lors du changement de statut" soit <mark style="color:blue;">(activée)[]</mark> sur le serveur. Si ce n'est pas le cas, vous ne verrez pas le bouton "Me notifé en cas de changement de status"
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
> "<mark style="color:red;">Désactiver</mark>" ➜ Désactiver le système de notifications lors du changement de statut.
> "Mention activée par défaut" ➜ Une fois cette option activée, les membres seront toujours notifié lors du changement de statut.
> "Mention désactivée par défaut" ➜ Une fois cette option activée, les membres ne seront pas notifié lors du changement de statut.
>
> {% hint style="info" %}
> Pour les deux dernières options citées ci-dessus, il sera possible pour vos membres de modifier le paramètre par défaut en passant par "<mark style="color:orange;">/suggest</mark>" puis "Me notifié en cas de changement de statut".
> {% endhint %}

{% hint style="info" %}
Il est conseillé d'activer
{% endhint %}

![Menu de configuration des notifications lors du chnagement de statut](../.gitbook/assets/suggestions/set_suggestion_notification.png)

"<mark style="color:blue;">Définir le fil des suggestions acceptées</mark>" ➜ 
"<mark style="color:blue;">Définir le fil des suggestions refusée</mark>" ➜

{% endtab %}

{% tab title="Via le panel" %}
Here is second tab content.
{% endtab %}
{% endtabs %}