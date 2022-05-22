---
description: >-
  La commande mute permet de réduire au silence un membre dans l'ensemble des
  salons de votre serveur Discord.
---

# Mute

## Gestion des permissions

Lors de la première utilisation de la commande `mute` sur un de vos membres, **DraftBot** créera un rôle nommé **Mute** et interdira la permission "Envoyer des messages" au rôle Mute sur l'ensemble des salons textuels.\
Si vos membres réduits aux silences peuvent parler malgré ça, suivez cette partie du tutoriel pour corriger le problème.

{% hint style="info" %}
Vous pouvez aussi utiliser la commande `diagnose mute` sur votre serveur pour corriger les éventuels problèmes de permissions.&#x20;
{% endhint %}

### Permissions des rôles

L'ensemble de vos rôles devront avoir la permission "**Envoyer des messages**" dans leurs permissions pour que le mute fonctionne correctement dans les salons textuels. De plus, si vous souhaitez instaurer le système de mute dans les salons vocaux, l'ensemble de vos rôles doit avoir la permission "**Parler**".\
\
**DraftBot** doit être aussi **plus haut dans la hiérarchie** que le grade Mute.

### Permissions dans les salons

Dans vos salons textuels, il vous faudra gérer les permissions de cette manière pour la permission **Envoyer des messages** :

| **Grades**                | Permissions                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| **Mute**                  | ❌                                                                       |
| **Tous les autres rôles** | <img src="../.gitbook/assets/image (20).png" alt="qa" data-size="line"> |

Dans vos salons vocaux, il vous faudra gérer les permissions de cette manière pour la permission **Parler** :

| **Grades**                | Permissions                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| **Mute**                  | ❌                                                                       |
| **Tous les autres rôles** | <img src="../.gitbook/assets/image (20).png" alt="qa" data-size="line"> |

## Rendre muet un membre

### Pour une durée indéterminé

Si vous souhaite rendre muet un de vos membres pour une durée indéterminée, il vous suffit d'utiliser la commande `mute <Membre> <Raison>`

### Pour une durée définie

Pour rendre muet un membre pour une durée définie, vous pouvez utiliser la commande `tempmute <Membre> <Temps> <Raison>`\
\
Le membre ne sera plus réduit au silence lorsque le temps de sa sanction sera écoulé.

## Retirer le mute d'un membre

Pour retirer le mute d'un membre, vous avez deux possibilités :

* Utiliser la commande `unmute <Membre>`
* Retirer le grade Mute au membre
