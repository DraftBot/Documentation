---
description: >-
  Le système de tickets permet à vos membres de communiquer avec
  l’administration de votre serveur Discord par le biais d’un salon textuel.
---

# Tickets

## Activer le système de tickets

Pour configurer le système de tickets, il vous suffit de faire la commande `ticket config` ou `@DraftBot#0535 ticket config`  
Il vous reste plus qu’à configurer le système de tickets suivant vos besoins.

## Validation des tickets

Si vous avez activé la validation de tickets et que vous avez demandé à DraftBot de créer le salon dédié à cela, il se nommera **\#demandes-de-tickets**.  
Lors de la création d’un nouveau ticket, les membres ayant accès à ce salon pourront soit :

* Accepter la demande de ticket à l'aide de la réaction ✅
* Refuser la demande en cliquant sur la réaction 🗑️

Si vous avez refusé la demande, le membre recevra la raison du refus de son ticket en message privée s'il les a activées.

## Fermeture d'un ticket

Si vous souhaitez supprimer un ticket, vous devez aller au début du salon puis de cliquer sur la réaction 🔒 du premier message de DraftBot dans le ticket puis de valider votre action en cliquant sur la réaction ✅.

{% hint style="info" %}
Si le ticket a été fermé par le membre, il sera conservé jusqu’à qu’un membre de votre équipe le supprime définitivement ou le rouvre à l’aide des réactions.
{% endhint %}

## Désactiver le système de tickets

Pour désactiver ce système, il vous suffit de faire cette commande `ticket config` ou `@DraftBot#0535 ticket config`

Lors de la première question **"Souhaitez-vous activer ou désactiver le système de tickets ?"**, il vous suffit de cliquer sur la réaction ❌

{% hint style="warning" %}
Si vous souhaitez supprimer tous les tickets crées, cela supprimera **tous les salons** dans la catégorie dédié au tickets. Cette action est irréversible !
{% endhint %}

