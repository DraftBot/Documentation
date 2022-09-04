---
description: >-
  Avec DraftBot, vous pouvez renseigner votre date d'anniversaire et être
  informé des prochains à venir !
---

# Anniversaires

## **Donner sa date de naissance**

Si vous n'avez jamais renseigné votre date d'anniversaire, elle vous sera demandée lors de votre première activation sur un serveur avec la commande `birthday activate`. Vous devrez la renseigner dans le format français `JJ/MM/AAAA` ou `JJ/MM`.&#x20;

{% hint style="info" %}
Si vous indiquez votre année de naissance, alors votre âge sera automatiquement affiché dans votre profil DraftBot.
{% endhint %}

{% hint style="warning" %}
Vous vous êtes trompé de date de naissance ? Vous pouvez la modifier avec la commande `birthday set`.

Attention, il existe un cooldown évolutif, plus vous modifiez votre date, plus le temps avant de pouvoir la modifier à nouveau est long.
{% endhint %}

## Visibilité de votre date

Votre date d'anniversaire vous appartient, c'est donc à vous de choisir sur quel serveur vous souhaitez qu'elle soit affichée :&#x20;

Utilisez  `birthday activate` pour activer votre date sur ce serveur et `birthday deactivate` pour la désactiver.

## Lister les anniversaires

Une fois que les membres ont activé leur anniversaire sur le serveur en question, il est possible à tout moment de moment de consulter la liste des anniversaires grâce à la commande `birthday`.

Triés par ordre croissant, il vous sera facile de connaître les prochains anniversaires à venir !

![](../../.gitbook/assets/Birthday.png)

## Message d'annonce

Vous pouvez configurer un message d'annonce pour l'anniversaire d'un membre ayant un certain rôle avec la commande `adminbirthday message`.

Vous aurez ensuite le choix pour configurer les messages d'annonce :&#x20;

* `on` → Activer les annonces d'anniversaire
* `off` → Désactiver les annonces d'anniversaire
* `show` → Afficher le message d'annonce
* `config` → Configurer les options du message d'annonce

Si vous utilisez `config`, alors **DraftBot** vous posera plusieurs questions pour terminer de paramétrer les messages d'annonce.

## Rôle d'anniversaire

Vous pouvez définir un rôle qui sera donné le jour de l'anniversaire d'un de vos membres. Pour cela, vous pouvez utiliser la commande `adminbirthday role`. Il vous sera ensuite demandé par **DraftBot** si vous voulez utiliser un rôle existant ou bien si vous voulez en créer un nouveau automatiquement.
