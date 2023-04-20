---
description: >-
  Les privaterooms offrent la possibilité à vos membres de créer des salons
  vocaux temporaires qu'ils pourront personnaliser en filtrant l'accès de
  celui-ci par exemple.
---

# Salons Vocaux Temporaires

## Utilisation des Salons Vocaux Temporaires

## Configuration

### Activer les PrivateRooms

Pour activer les privaterooms, il vous suffit d'utiliser la commande `privateroom config`.
**DraftBot** vous demandera si vous souhaitez **activer ou non** les privaterooms ainsi que **la catégorie** ou seront stockés les salons vocaux.

{% hint style="warning" %}
Choisissez une catégorie qui ne contient aucun salon vocal créé manuellement !
Si une personne quitte un salon vocal qui a été créé manuellement, mais qui est dans la catégorie dédié au privateroom, il sera supprimé par **DraftBot,** sauf s'il a été sauvegardé avec la commande `privateroom permanent`.
{% endhint %}

### Créer le salon vocal

Pour que vos membres obtiennent leur salon vocal, ils devront rejoindre le salon vocal que vous avez défini lors de la configuration du système. Les permissions par défaut d'une privateroom sont celles situées dans la catégorie.

Lorsqu'une personne crée une privateroom en rejoignant le salon vocal dédié à la création des privaterooms, il aura la permission **Gérer le salon** dans son salon, qui lui permettra de modifier la limite d'utilisateur, les permissions du salon ainsi que le nom du salon.
Quand toutes les personnes auront quitté le salon crée par ce système, il sera supprimé automatiquement par **DraftBot**.

### Rendre un salon permanent

Lorsque vos membres rejoignent un salon vocal dans la catégorie privateroom et qu'ils le quittent ensuite, le salon se supprime. Pour qu'un salon soit conservé dans la catégorie sans être supprimé une fois qu'il n'a plus de membres, vous pouvez le rendre permanent en faisant la commande `privateroom permanent`.
Pour enlever un salon de la liste des permanents, il vous suffit de faire la même commande puis de renseigner le salon à enlever de la liste.

### Désactiver les PrivateRooms

Si vous souhaitez désactiver les privateroom sur votre serveur, il vous suffit d'utiliser la commande `privateroom config`.
Ensuite, cliquez sur le bouton "Non" lors de la question "Souhaitez-vous activer ou désactiver le système de salons privés ?".

## Informations Supplémentaires

### Liste des Variables

Vous pouvez utiliser les variables suivantes pour nommer un salon vocal lors de sa création :
* `{user}` pour afficher le pseudonyme du membre sur le serveur
* `{user.username}` pour afficher le nom Discord du membre
* `{user.tag}` pour afficher le pseudonyme avec le tag du membre (Pseudo#0000)
* `{index}` pour numéroter le salon
* `{random-word}` pour attribuer un nom aléatoire parmi une certaine liste

### Limite d'hubs de Salons Vocaux Temporaires

Par défaut, DraftBot limite les serveurs à **un seul hub**. Cela dit, si l'offre <mark style="color:orange;">[premium](https://www.draftbot.fr/premium)</mark> est activée sur votre serveur, vous pourrez créer jusqu'à **5 hubs**.

### Panel

Lien vers le panel : <mark style="color:orange;">[https://www.draftbot.fr/dashboard/user](https://www.draftbot.fr/dashboard/user)</mark>