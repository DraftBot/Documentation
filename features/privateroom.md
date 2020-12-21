---
description: >-
  Les privaterooms offrent la possibilité à vos membres de créer des salons
  vocaux temporaires qu'ils pourront personnaliser en filtrant l'accès de
  celui-ci par exemple.
---

# Salons vocaux privés

## Activer les PrivateRooms <a id="activer"></a>

Pour activer les privaterooms, il vous suffit d'utiliser la commande `privateroom config`  
**DraftBot** vous demandera si vous souhaitez **activer ou non** les privaterooms, **la catégorie** ou seront stockés les salons vocaux ainsi que le **salon vocal** qui permettra la création de leur salon.

{% hint style="warning" %}
Choisissez une catégorie qui contient aucun salon vocal créé manuellement !   
Si une personne quitte un salon vocal qui a été créé manuellement, mais qui est dans la catégorie dédié au privateroom, il sera supprimé par **DraftBot**.
{% endhint %}

## Créer le salon vocal <a id="create"></a>

Pour que vos membres obtiennent leur salon vocal, ils devront rejoindre le salon vocal que vous avez défini lors de la configuration du système. Les permissions par défaut d'une privateroom sont celles situées dans la catégorie.

Lorsqu'une personne crée une privateroom en rejoignant le salon vocal dédié à la création des privaterooms, il aura la permission **Gérer le salon** dans son salon, qui lui permettra de modifier la limite d'utilisateur, les permissions du salon ainsi que le nom du salon.  
Quand toutes les personnes auront quitté le salon crée par ce système, il sera supprimé automatiquement par **DraftBot**.

## Désactiver les PrivateRooms <a id="desactiver"></a>

Si vous souhaitez désactiver les privateroom sur votre serveur, il vous suffit d'utiliser la commande `privateroom config`   
Ensuite, cliquez sur la réaction ❌ lors de la question "Souhaitez-vous activer ou désactiver le système de salons privés ?".

