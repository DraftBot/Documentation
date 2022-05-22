---
description: >-
  Le système de signalement permet à vos membres de signaler des messages ou des
  membres ne respectant pas votre règlement à l'équipe de modération de votre
  serveur.
---

# Report

## Configuration

Vous avez la possibilité de configurer le système de signalement sur votre serveur avec la commande `report config`

Vous aurez alors la possibilité :

* D'activer ou de désactiver le système de reports
* De choisir le salon qui recevra les signalements de vos membres
* D'ajouter ou non une réaction sur un message signalé par vos membres
* D'ajouter un rôle à mentionner lors du signalement
* De changer le message de confirmation de l'envoi du report

## Utilisation

### Signalement d'un membre

Vos membres peuvent signaler un membre via la commande `report <membre> <descriptif>`.\
\
L'équipe du serveur recevra alors un message dans le salon destiné aux signalements avec la raison du report.

![Message type d'un membre signalé sur le serveur reçu dans le salon dédié aux reports](<../.gitbook/assets/image (33).png>)

### Signalement d'un message

Les membres de votre serveur peuvent signaler un message avec la commande `report <ID-Message>`

{% hint style="info" %}
Besoin d'aide pour récupérer l'identifiant d'un message ? [Cliquer ici !](../autres/recuperer-un-identifiant.md#message)
{% endhint %}

L'équipe du serveur recevra alors dans le salon dédié aux signalements ce message type.

![Message type d'un message signalé sur le serveur reçu dans le salon dédié aux reports](<../.gitbook/assets/image (34).png>)
