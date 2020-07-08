---
description: >-
  La catégorie Conversations regroupe des commandes pour la gestion des messages
  sur votre serveur Discord.
---

# Gestion des messages

## Clean/clear \(avec arguments\)

La commande `clear` \(ou `clean`\) vous permet de supprimer un grand nombre de message.   
Pour utiliser cette commande, il vous suffit de faire `clear [nombre entre 1 et 100]`

{% hint style="info" %}
DraftBot ne peut pas supprimer les messages datant de plus de 14 jours du à une limite de Discord.  
S'il détecte que les messages que vous souhaitez supprimer date de plus de semaine, DraftBot vous proposera de cloner le salon et de supprimer l'ancien. 
{% endhint %}

## ClearChannel

Cette commande vous permet de cloner le salon et de supprimer l'ancien.   
Pour utiliser cette fonctionnalité, vous devez utiliser la commande `clearchannel`

{% hint style="info" %}
Vous pouvez mentionner un salon textuel après la commande pour choisir un autre salon que celui où la commande a été effectué.
{% endhint %}

## Delconv

La commande `delconv` vous permet de supprimer une partie des messages dans un salon textuel.  
Pour cela, vous devez faire`delconv [Identifiant du premier message] [Identifiant du dernier message]` 

{% hint style="warning" %}
Pour obtenir l'identifiant d'un message, vous devez au préalable activer le mode développeur dans les paramètres utilisateur dans **Apparence** ou **Comportement** suivant votre appareil.   
  
Il vous suffira ensuite de **laisser appuyer votre doigt** sur le message si vous êtes sur téléphone ou de faire **clique droit** sur le message si vous êtes sur ordinateur puis ensuite de sélectionner **Copier l'identifiant**.
{% endhint %}

## MoveConv

La commande `moveconv` vous permet de déplacer une conversation dans un autre salon textuel.  
Pour ce faire, il vous suffit de faire `moveconv [Identifiant du premier message] [Identifiant du dernier message]`

{% hint style="warning" %}
Pour obtenir l'identifiant d'un message, vous devez au préalable activer le mode développeur dans les paramètres utilisateur dans **Apparence** ou **Comportement** suivant votre appareil.   
  
Il vous suffira ensuite de **laisser appuyer votre doigt** sur le message si vous êtes sur téléphone ou de faire **clique droit** sur le message si vous êtes sur ordinateur puis ensuite de sélectionner **Copier l'identifiant**.
{% endhint %}

## MoveMSG

La commande `movemsg` permet de déplacer un message dans un autre salon.  
Pour déplacer un message, il vous suffit de faire `movemsg [Identifiant du message]`

{% hint style="warning" %}
Pour obtenir l'identifiant d'un message, vous devez au préalable activer le mode développeur dans les paramètres utilisateur dans **Apparence** ou **Comportement** suivant votre appareil.   
  
Il vous suffira ensuite de **laisser appuyer votre doigt** sur le message si vous êtes sur téléphone ou de faire **clique droit** sur le message si vous êtes sur ordinateur puis ensuite de sélectionner **Copier l'identifiant**.
{% endhint %}

## SaveConv

La commande `saveconv` offre la possibilité de sauvegarder une conversation sous la forme d'une page web \(HTML\).   
Pour ce faire, utiliser la commande `saveconv [Identifiant du premier message] [Identifiant du dernier message]`

{% hint style="warning" %}
Pour obtenir l'identifiant d'un message, vous devez au préalable activer le mode développeur dans les paramètres utilisateur dans **Apparence** ou **Comportement** suivant votre appareil.   
  
Il vous suffira ensuite de **laisser appuyer votre doigt** sur le message si vous êtes sur téléphone ou de faire **clique droit** sur le message si vous êtes sur ordinateur puis ensuite de sélectionner **Copier l'identifiant**.
{% endhint %}

{% hint style="info" %}
DraftBot vous demandera après avoir indiquer l'identifiant du premier et du dernier message si vous souhaitez supprimer la conversation après avoir effectué la sauvegarde, cliquer sur la réaction ❌ou ✅selon votre situation et besoins.
{% endhint %}

