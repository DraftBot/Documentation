---
description: >-
  Offrez la possibilité à vos membres de proposer des idées pour le futur de
  votre serveur.
---

# Système de suggestions

## Configuration

Vous pouvez configurer le système de suggestions grâce à la commande `suggest config`.  
Vous aurez alors les possibilités : 

* D'activer ou de désactiver les suggestions sur votre serveur
* De choisir le salon qui recevra les suggestions de vos membres
* De choisir un émoji 
  * pour un vote favorable
  * pour un vote neutre
  * pour un vote défavorable
* De changer le message de confirmation de l'envoi des suggestions
* D'activer la demande de confirmation avant l'envoi des suggestions
* Permettre aux membres ayant la permission **Gérer les messages** d'accepter ou de refuser les suggestions \(avec les commandes `suggest accept` et `suggest refuse`\)

## Utilisation

Pour que vos membres puissent envoyer leurs suggestions sur votre serveur, ils devront utiliser la commande `suggest` suivie de leur suggestion.  
Les membres de votre serveur pourront ensuite voter aux suggestions à l'aide des réactions que vous avez définies dans la configuration.

![Message envoy&#xE9; dans votre salon d&#xE9;di&#xE9; aux suggestions apr&#xE8;s qu&apos;une suggestion ait &#xE9;t&#xE9; propos&#xE9;e.](../.gitbook/assets/image%20%2830%29.png)

## Gestion

* Pour accepter une suggestion, les membres avec la permission de **gérer les messages** peuvent exécuter la commande `suggest accept <message> <commentaire>` si cette option a été acceptée en configuration du système
  * `<commentaire>` pouvant être remplacé par un commentaire qui sera affiché sur la suggestion à accepter. _\(optionnel\)_
* Pour refuser une suggestion, les membres avec la permission **gérer les messages** peuvent exécuter la commande `suggest refuse <message> <raison>` si cette option a été acceptée en configuration du système
  * `<raison>` pouvant être remplacé par la raison du refu qui sera affichée sur la suggestion à refuser. _\(optionnel\)_

{% hint style="info" %}
`<message>` devant être remplacé par [l'identifiant du message](https://docs.draftbot.fr/autres/recuperer-un-identifiant#message) de la suggestion ciblée
{% endhint %}



