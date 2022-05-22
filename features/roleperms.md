---
description: >-
  La commande roleperms vous offre la possibilité d'autoriser ou de refuser à un
  rôle la possibilité d'utiliser une commande indépendamment des permissions par
  défaut pour faire la commande.
---

# RolePerms

## Autoriser ou refuser à un rôle une commande <a href="#allow-or-deny" id="allow-or-deny"></a>

Pour **refuser** à un rôle l'utilisation d'une commande, il vous suffit de faire `roleperms deny [commande] [rôle]`.\
\
Pour **autoriser** à un rôle l'utilisation d'une commande, il vous suffit de faire `roleperms allow [commande] [rôle]`.

{% hint style="info" %}
Vous n'êtes pas obligé de mentionner le rôle, vous pouvez uniquement donner son nom.
{% endhint %}

## Remettre par défaut les permissions d'une commande

Pour **remettre par défaut** les permissions d'une commande, il vous suffit de faire `roleperms default [commande]`.

## Réinitialiser le RolePerms <a href="#reinitialiser" id="reinitialiser"></a>

Si vous souhaitez réinitialiser les permissions que vous avez ajoutées ou supprimées à l'ensemble des rôles en utilisant cette fonctionnalité, il vous suffit d'utiliser la commande`roleperms reset`

## Hiérarchie du RolePerms <a href="#hierarchie" id="hierarchie"></a>

Le grade le plus haut de la personne sera pris en compte pour le `roleperms`.

{% hint style="info" %}
Prenons un exemple, vous avez deux grades : **Helper** et **Modérateur** qui ont tous deux la permission **Gérer les messages**.\
Le grade Modérateur est plus haut que celui du grade Helper dans la hiérarchie de la liste des rôles de votre serveur Discord.\
\
Pour utiliser la commande **warn**, il faut par défaut obtenir la permission Gérer les messages. \
Si vous n’utilisez pas la commande `roleperms`, les deux grades auront tout deux accès à cette commande. \
\
Hors vous refusez au grade Helper l'accès à cette commande tandis que pour le grade Modérateur vous lui autorisez.\
La personne 1, qui possède le grade Helper ainsi que Modérateur, pourra utiliser la commande `warn` puisque le grade Modérateur est plus haut dans la hiérarchie et lui autorise l'utilisation de celle-ci.\
La **personne 2**, qui possède **seulement le grade Helper**, ne pourra pas utiliser la commande `warn` car son rôle le plus haut lui interdit.
{% endhint %}
