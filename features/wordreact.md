---
description: >-
  Le WordReact permet lorsqu'un mot spécifique est envoyé dans un message,
  qu'une réaction soit ajoutée au message.
---

# Réactions de mots

## Activer et désactiver le système de WordReact <a id="on-off"></a>

Pour **activer** le système de WordReact, il vous suffit de faire la commande `wordreact on`  
Pour le **désactiver**, il vous faudra utiliser la commande `wordreact off`

## Ajouter un WordReact <a id="add"></a>

Pour ajouter une réaction à un mot, il vous suffit de faire la commande `wordreact add`  
DraftBot vous demandera alors quel mot ou début de phrase ainsi que la réaction associé à ce texte.

{% hint style="info" %}
Si vous ne possédez pas le [premium](https://draftbot.fr/premium), vous aurez une limite de 10 wordreacts.  
  
Pour qu'un wordreact soit pris en compte, il doit être situé en **début de message**. Si le mot est au milieu ou à la fin d'un message, aucune réaction ne sera ajoutée.
{% endhint %}

## Supprimer des WordReacts <a id="delete"></a>

Si vous souhaitez supprimer **un WordReact en particulier**, il vous suffira d'utiliser la commande `wordreact remove` et ensuite d'indiquer le mot qui doit être supprimé des wordreacts.  
  
Si vous souhaitez supprimer **tous les WordReacts**, vous pouvez utiliser la commande `wordreact reset`

{% hint style="warning" %}
Aucune confirmation ne vous sera envoyée, faites donc attention en utilisant cette commande.
{% endhint %}

## Voir les WordReacts  <a id="view"></a>

Vous pouvez voir les wordreacts d'un serveur avec la commande `wordreact list`



