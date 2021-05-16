---
description: >-
  La catégorie Conversations regroupe des commandes pour la gestion des messages
  sur votre serveur Discord.
---

# Gestion des messages

## Clean/clear <a id="clear"></a>

La commande `clear` \(ou `clean`\) vous permet de supprimer un grand nombre de messages.   
Pour utiliser cette commande, il vous suffit de faire `clear [nombre entre 1 et 99]`

{% hint style="info" %}
**DraftBot** ne peut pas supprimer les messages datant de plus de 14 jours dû à une limite de Discord.  
S'il détecte que les messages que vous souhaitez supprimer date de plus d'une semaine, **DraftBot** vous proposera de cloner le salon et de supprimer l'ancien. 
{% endhint %}

## ClearChannel

Cette commande vous permet de cloner le salon et de supprimer l'ancien.   
Pour se servir cette fonctionnalité, vous devez utiliser la commande `clearchannel`

{% hint style="info" %}
Vous pouvez mentionner un salon textuel après la commande pour choisir un autre salon que celui où la commande a été effectuée.
{% endhint %}

## Delconv

La commande `delconv` vous permet de supprimer une partie des messages dans un salon textuel.  
Pour cela, vous devez faire`delconv [Identifiant du premier message] [Identifiant du dernier message]` 

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquez ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

## MoveConv

La commande `moveconv` vous permet de déplacer une conversation dans un autre salon textuel.  
Pour ce faire, il vous suffit de faire `moveconv [salon] [Identifiant du premier message] [Identifiant du dernier message]`

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquez ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

## MoveMsg

La commande `movemsg` permet de déplacer un message dans un autre salon.  
Pour déplacer un message, il vous suffit de faire `movemsg [salon] [Identifiant du message]`.

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquez ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

## SaveConv

La commande `saveconv` offre la possibilité de sauvegarder une conversation sous la forme d'une page web \(HTML\).   
Pour ce faire, utilisez la commande `saveconv [Identifiant du premier message] [Identifiant du dernier message]`

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquez ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

{% hint style="info" %}
**DraftBot** vous demandera après avoir indiqué l'identifiant du premier et du dernier message si vous souhaitez supprimer la conversation après avoir effectué la sauvegarde, cliquez sur la réaction ❌ou ✅ selon votre situation et besoins.
{% endhint %}

