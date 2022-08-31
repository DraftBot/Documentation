---
description: >-
  La catégorie Conversations regroupe des commandes pour la gestion des messages
  sur votre serveur Discord.
---

# Gestion des messages

## Clear / clean <a href="#clear" id="clear"></a>

La commande `clear` (ou `clean`) vous permet de supprimer un grand nombre de messages venant d'un seul membre ou non. \
Pour utiliser cette commande, il vous suffit de faire `clear [nombre entre 1 et 99]`

1. Pour supprimer des messages de tous les membres en masse la commande est : `clear [nombre entre 1 et 99]`
2. Pour supprimer un certain nombre de messages envoyés par un seul membre, la commande est : `clear [nombre entre 1 et 99] [membre]`

{% hint style="info" %}
**DraftBot** ne peut pas supprimer les messages datant de plus de **14 jours** dû à une limite de Discord.\
&#x20;\- S'il détecte que les messages que vous souhaitez supprimer datent de plus de deux semaines, **DraftBot** vous proposera de cloner le salon et de supprimer l'ancien. \
&#x20;\- S'il détecte qu'un message que vous voulez supprimer est épinglé dans le salon, **DraftBot** vous demandera si vous voulez quand même le supprimer.
{% endhint %}

## ClearChannel

Cette commande vous permet de cloner le salon et de supprimer l'ancien afin de le vider de tous ses messages. \
Pour vous servir de cette fonctionnalité, vous devez utiliser la commande `clearchannel`

{% hint style="info" %}
Vous pouvez mentionner un salon textuel après la commande pour choisir un autre salon que celui où la commande a été effectuée.
{% endhint %}

## Delconv

La commande `delconv` vous permet de supprimer des messages à partir d'un message plus haut et d'un message plus bas.\
Pour cela, vous devez faire `delconv [Identifiant du premier message] [Identifiant du dernier message]`&#x20;

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquez ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

{% hint style="warning" %}
**DraftBot** ne peut pas supprimer les messages datant de plus de **14 jours** dû à une limite de Discord.
{% endhint %}

## MoveConv

La commande `moveconv` vous permet de déplacer une conversation dans un autre salon textuel.\
Pour ce faire, il vous suffit de faire `moveconv [salon] [Identifiant du premier message] [Identifiant du dernier message]`

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquez ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

{% hint style="warning" %}
**DraftBot** ne peut pas supprimer les messages datant de plus de **14 jours** dû à une limite de Discord.
{% endhint %}

## MoveMsg

La commande `movemsg` permet de déplacer un message dans un autre salon.\
Pour déplacer un message, il vous suffit de faire `movemsg [salon] [Identifiant du message]`.

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquez ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

## SaveConv

La commande `saveconv` offre la possibilité de sauvegarder une conversation sous la forme d'une page web (HTML). \
Pour ce faire, utilisez la commande `saveconv [Identifiant du premier message] [Identifiant du dernier message]`

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquez ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

{% hint style="info" %}
**DraftBot** vous demandera après avoir indiqué l'identifiant du premier et du dernier message si vous souhaitez supprimer la conversation après avoir effectué la sauvegarde, cliquez sur le bouton "Oui" ou "Non" selon votre situation et besoins.
{% endhint %}
