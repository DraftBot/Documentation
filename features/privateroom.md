---
description: >-
  Les privaterooms offrent la possibilité à vos membres de créer des salons
  vocaux temporaires qu'ils pourront personnaliser en filtrant l'accès de
  celui-ci par exemple.
---

# PrivateRoom

## Activer les PrivateRooms <a href="#activer" id="activer"></a>

Pour activer les privaterooms, il vous suffit d'utiliser la commande `privateroom config`.\
**DraftBot** vous demandera si vous souhaitez **activer ou non** les privaterooms ainsi que **la catégorie** ou seront stockés les salons vocaux.

{% hint style="info" %}
En possédant le [premium](https://www.draftbot.fr/premium), vous pourrez également changer le nom du salon qui sera crée.

Vous pouvez utiliser les variables suivantes pour nommer un salon vocal lors de sa création :\
\=> `{user}` pour afficher le pseudonyme du membre sur le serveur\
\=> `{user.id}` pour afficher l'identifiant du membre\
\=> `{user.username}` pour afficher votre nom Discord\
\=> `{user.nickname}` pour afficher le pseudonyme du membre sur le serveur\
\=> `{user.tag}` pour afficher le pseudonyme avec le tag du membre (Pseudo**#0000**)
{% endhint %}

{% hint style="warning" %}
Choisissez une catégorie qui ne contient aucun salon vocal créé manuellement ! \
Si une personne quitte un salon vocal qui a été créé manuellement, mais qui est dans la catégorie dédié au privateroom, il sera supprimé par **DraftBot,** sauf s'il a été sauvegardé avec la commande `privateroom permanent`.
{% endhint %}

## Créer le salon vocal <a href="#create" id="create"></a>

Pour que vos membres obtiennent leur salon vocal, ils devront rejoindre le salon vocal que vous avez défini lors de la configuration du système. Les permissions par défaut d'une privateroom sont celles situées dans la catégorie.

Lorsqu'une personne crée une privateroom en rejoignant le salon vocal dédié à la création des privaterooms, il aura la permission **Gérer le salon** dans son salon, qui lui permettra de modifier la limite d'utilisateur, les permissions du salon ainsi que le nom du salon.\
Quand toutes les personnes auront quitté le salon crée par ce système, il sera supprimé automatiquement par **DraftBot**.

## Rendre un salon permanent

Lorsque vos membres rejoignent un salon vocal dans la catégorie privateroom et qu'ils le quittent ensuite, le salon se supprime. Pour qu'un salon soit conservé dans la catégorie sans être supprimé une fois qu'il n'a plus de membres, vous pouvez le rendre permanent en faisant la commande `privateroom permanent`.\
Pour enlever un salon de la liste des permanents, il vous suffit de faire la même commande puis de renseigner le salon à enlever de la liste.

## Désactiver les PrivateRooms <a href="#desactiver" id="desactiver"></a>

Si vous souhaitez désactiver les privateroom sur votre serveur, il vous suffit d'utiliser la commande `privateroom config`.\
Ensuite, cliquez sur le bouton "Non" lors de la question "Souhaitez-vous activer ou désactiver le système de salons privés ?".
