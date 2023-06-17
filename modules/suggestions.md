---
description: >-
  Récoltez simplement les suggestions et les avis de vos membres dans un salon
  avec DraftBot.
---

# 💡 Suggestions

## Utilisation

### Menu des suggestions

Pour accéder au menu des suggestions, vous devez vous rendre dans <mark style="color:orange;">/suggest</mark>.

Cette commande vous permet de soumettre de nouvelles suggestions, accéder à celles-ci (en cliquant sur leurs titres) ou encore,voir leurs état. C'est à dire que vous pourrez voir le pourcentage de votes de vos suggestions mais aussi si elles ont été acceptées, refusées ou si elles sont prévues.

Vous pourrez également y décider de vous faire notifié ou non en cas d'un changement de <mark style="color:blue;">(status)[]</mark> sur l'une de vos suggestions.

{% hint style="info" %}
Il faut que l'option "Notification lors du changement de statut" soit <mark style="color:blue;">(activée)[]</mark> sur le serveur. Si ce n'est pas le cas, le ne verrez pas le bouton "Me notifé en cas de changement de status"
{% endhint %}

{% hint style="warning" %}
Ce système n'étant disponible que depuis peu, il n'est pas possible de répertorier les suggestions qui datent d'avant le 12 décembre 2022.
{% endhint %}

![Menu des suggestions](../.gitbook/assets/suggestions/suggest_menu.png)

### Proposer une suggestion

Pour proposer une suggestion, il faut vous rendre dans le [menu des suggestions](suggestions.md#menu-des-suggestions) (<mark style="color:orange;">/suggest</mark>) puis cliquer sur le bouton "<mark style="color:blue;">Envoyer une nouvelle suggestion</mark>".

**DraftBot** vous ouvrira ensuite un pop-up où vous pourrez renseigner :
* Titre ➜ Le titre à donner à votre suggestion. Il permettra aussi de la référencer dans le menu des [menu des suggestions](suggestions.md#menu-des-suggestions).
* Description ➜ La description de votre suggestion, où vous pourrez détailler votre suggestion pour mieux l'expliquer aux autres membres.

{% hint style="info" %}
Pour ajouter une image d'illustration à votre suggestion, vous devez avoir activé la demande de confirmation lors de la configuration.
Vous aurez alors un bouton pour ajouter une image lors de cette confirmation.
{% endhint %}

![Menu de création d'une suggestion](../.gitbook/assets/suggestions/create_suggestion.png)

**Vous avez oublié une information lors de la création de votre suggestion ou vous voulez ajouter un commentaire à cette dernière ?**\
Vous pouvez alors sélectionner le bouton "<mark style="color:blue;">Ajouter un commentaire sur l'une de ces suggestions</mark>" pour en ajouter un.


### Gérer une suggestion

**DraftBot** vous propose de pouvoir accepter,refuser une suggestion.\
Découvrez dans le menu ci-dessous comment faire !

{% hint stype="info" %}
Vous avez besoin de la permission "*Gérer les messages*" pour pouvoir accepter ou refuser une suggestion.
{% endhint %}

{% tabs %}
{% tab title="Accepter une suggestion" %}
Pour accepter une suggestion, faites un clic droit (sur ordinateur) ou appuyez longtemps (sur mobile) sur la suggestion en question et appuyez sur "Applications".\
Vous aurez ensuite la possibilité d'"Accepter" la suggestion.

Un menu s'ouvrira et vous demandera votre raison d'acceptation.\
Si vous ne souhaitez pas mettre de raison d'acceptation, appuyez directement sur "<mark style="color:blue;">Envoyer</mark>" sans rentrer de texte dans la case.

![Accepter une suggestion](../.gitbook/assets/suggestions/suggest_accept.gif)
{% endtab %}

{% tab title="Refuser une suggestion" %}
Pour refuser une suggestion, faites un clic droit (sur ordinateur) ou appuyez longtemps (sur mobile) sur la suggestion en question et appuyez sur "Applications".\
Vous aurez ensuite la possibilité de "Refuser" la suggestion.

Un menu s'ouvrira afin vous demander la raison de refus.

![Refuser une suggestion](../.gitbook/assets/suggestions/suggest_refuse.gif)
{% endtab %}
{% endtabs %}

## Configuration



![](<../../.gitbook/assets/suggestions/view.png>)