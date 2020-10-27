---
description: >-
  La commande roleperms vous offres la possibilité d'autoriser ou de refuser à
  un rôle d'utiliser une commande indépendamment des permissions par défaut pour
  faire la commande.
---

# Permissions de commandes

## Autoriser ou refuser à un rôle une commande <a id="allow-or-deny"></a>

Pour **refuser** un rôle d'utiliser une commande, il vous suffit de faire `roleperms deny [commande] [rôle]`  
  
Pour **autoriser** un rôle d'utiliser une commande, il vous suffit de faire `roleperms allow [commande] [rôle]`

{% hint style="info" %}
Vous n'êtes pas obligé de mentionner le rôle, vous pouvez uniquement donner son nom.
{% endhint %}

## Réinitialiser le RolePerms <a id="reinitialiser"></a>

Si vous souhaitez réinitialiser les permissions que vous avez ajoutés ou supprimés à l'ensemble des rôles en utilisant cette fonctionnalité, il vous suffit de faire la commande`roleperms reset`

## Hiérarchie du RolePerms <a id="hierarchie"></a>

Le grade le plus haut de la personne sera pris en compte pour le `roleperms`.

{% hint style="info" %}
Prenons un exemple, vous avez deux grades : **Helper** et **Modérateur** qui ont tout deux la permission **Gérer les messages**.  
Le grade Modérateur est plus haut que celui du grade Helper dans la hiérarchie dans la liste des rôles de votre serveur Discord.  
  
Pour utiliser la commande **warn**, il faut par défaut obtenir la permission Gérer les messages.   
Si vous n’utilisez pas la commande `roleperms`, les deux grades auront tout deux accès à cette commande.   
  
Hors vous refusez au grade Helper l'accès à cette commande tandis que pour le grade Modérateur vous lui autorisez.  
Pour la **personne 1,** qui possède le grade **Helper** ainsi que **Modérateur**, pourra utiliser la commande `warn` puisque le grade Modérateur est plus haut dans la hiérarchie et qu'il lui autorise de faire la commande.  
Pour **la personne 2**, qui possède **seulement le grade Helper**, ne pourra pas utiliser la commande `warn` car son rôle le plus haut lui interdit.
{% endhint %}



