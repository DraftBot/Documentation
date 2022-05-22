---
description: >-
  Le système de tickets permet à vos membres de communiquer avec
  l’administration de votre serveur Discord par le biais d’un salon textuel.
---

# Tickets

## Configurer le système de tickets

Pour configurer le système de tickets, il vous suffit d'utiliser la commande `adminticket config` ou `@DraftBot#0535 adminticket config`.\
Vous pouvez configurer :&#x20;

* Si vous souhaitez activer ou désactiver le système de tickets
* Si vous souhaitez valider ou non le ticket avant sa création
* Si vous souhaitez demander la raison de leur demande de ticket
* Choisir ou créer le salon et la catégorie où seront stockés les tickets
* Si vous voulez ajouter un rôle qui n'est pas Administrateur à voir les tickets
* Si la fermeture d'un ticket par un administrateur supprime automatiquement le ticket

### Validation des tickets

Si vous avez activé la validation de tickets et que vous avez demandé à **DraftBot** de créer le salon dédié à cela, il se nommera **#demandes-de-tickets**.\
Lors de la création d’un nouveau ticket, les membres ayant accès à ce salon pourront soit :

* Accepter la demande de ticket à l'aide de la réaction 📂
* Refuser la demande de ticket en cliquant sur la réaction 🗑️

Si vous avez refusé la demande, le membre recevra la raison du refus de son ticket en message privé s'il les a activés.

### Désactiver le système de tickets

Pour désactiver ce système, il vous suffit d'utiliser la commande `adminticket config` ou `@DraftBot#0535 adminticket config`.\
Lors de la première question **"Souhaitez-vous activer ou désactiver le système de tickets ?"**, il vous suffit de cliquer sur le bouton "Non".

{% hint style="warning" %}
Si vous souhaitez supprimer tous les tickets crées, cela supprimera **tous les salons** dans la catégorie dédiée aux tickets. Cette action est irréversible !
{% endhint %}

## Gérer les tickets des membres

### Ouverture d'un ticket

Pour ouvrir un ticket, vos membres devront utiliser la commande `ticket` dans un salon textuel.\
Si la validation de tickets est activée sur le serveur, une raison sera nécessaire avant de pouvoir créer le ticket.

### Fermeture d'un ticket

Si vous souhaitez supprimer un ticket, vous devez aller au début du salon puis cliquer sur la réaction 🔒 du premier message de **DraftBot** dans le ticket (qui est dans les messages épinglés du ticket) puis à valider votre action en cliquant sur la réaction ✅.

{% hint style="info" %}
Si le ticket à été fermé par le membre, il sera conservé jusqu'à ce qu’un membre de votre équipe le supprime définitivement ou le rouvre à l’aide des réactions.
{% endhint %}

### Ajouter ou retirer un membre à un ticket

{% hint style="warning" %}
Pour utiliser cette fonctionnalité, il vous faut avoir la permission de **Gérer le salon** dans le ticket.
{% endhint %}

Pour ajouter un membre à un ticket déjà existant, vous pouvez utiliser la commande `adminticket add` ou `adminticket remove` si vous souhaitez retirer un membre du ticket.
