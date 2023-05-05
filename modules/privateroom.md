---
description: >-
  Les salons vocaux temporaires offrent la possibilité à vos membres de créer des salons
  vocaux temporaires qu'ils pourront personnaliser en filtrant l'accès de
  celui-ci par exemple.
---

# Salons vocaux temporaires

## Utilisation des salons vocaux temporaires

Pour obtenir son salon vocal, il faut rejoindre le salon vocal "hub". Il s'agit du salon vocal permanent qui permet la création de votre salon vocal temporaire. Il se nomme par défaut `➕ Créer votre salon`.

Lorsque vous créez un salon vocal temporaire, vous aurez la permission "*Gérer le salon*", qui vous permettra de modifier la limite d'utilisateur, les permissions du salon ainsi que le nom du salon.

Quand toutes les personnes auront quitté le salon vocal temporaire, ce dernier sera automatiquement supprimé par **DraftBot**.

{% hint style="info" %}
Les **permissions par défaut** du Salon vocal temporaire correspondent à celles de la **catégorie**.
{% endhint %}

## Configuration

{% tabs %}
{% tab title="Via la commande /config" %}

![Aperçu de la commande /config](../.gitbook/assets/privateroom/view.png)

### Créer un hub de salons vocaux temporaires

Pour activer les salons vocaux temporaires, il vous suffit d'aller dans le menu <mark style="color:orange;">Salons vocaux temporaires</mark> de la commande <mark style="color:orange;">/config</mark> et de cliquer sur le bouton <mark style="color:orange;">Créer un hub</mark>.

**DraftBot** vous demandera ensuite **la catégorie** ou seront stockés les salons vocaux.

{% hint style="info" %}
Les salons vocaux déjà existants dans cette catégorie seront supprimés par le bot si vous ne les rendez pas permanents.
{% endhint %}

### Supprimer un hub de salons vocaux temporaires

Pour supprimer un hub de salons vocaux temporaires, il vous suffit d'aller dans le menu <mark style="color:orange;">Salons vocaux temporaires</mark> de la commande <mark style="color:orange;">/config</mark> et de cliquer sur le bouton <mark style="color:orange;">Supprimer un hub</mark>.

{% hint style="info" %}

Cette action est irréversible une fois le message de confirmation validé :
> Message en question : "Êtes-vous sûr de vouloir supprimer la seule catégorie de salons vocaux temporaires du serveur ?"

{% endhint %}

### Modifier un hub de salons vocaux temporaires

Pour modifier un hub de salons vocaux temporaires, vous devez accéder au menu en allant dans le système <mark style="color:orange;">Salons vocaux temporaires</mark> de la commande <mark style="color:orange;">/config</mark>. Vous devez ensuite <mark style="color:orange;">Modifier un hub</mark>.

![Modification des Salons Vocaux Temporaires](../.gitbook/assets/privateroom/view_edit.png)

#### Activer/Désactiver un Hub

Pour activer ou désactiver des Salons Vocaux Temporaires, vous devez cliquer sur le bouton <mark style="color:orange;">Activer le système</mark>. Vous verrez alors le menu se mettre à jour.

{% hint style="info" %}
Lorsqu'un hub est déjà activé, le bouton se nomme <mark style="color:orange;">Système activé</mark>.
{% endhint %}

#### Changer la catégorie des Salons Vocaux Temporaires

Pour changer la catégorie des salons vocaux temporaires, il vous suffit de cliquer sur le bouton <mark style="color:orange;">Catégorie</mark>. DraftBot demandra s'il faut créer une nouvelle catégorie ou attribuer une catégorie **déjà existante**.

#### Changer le salon hub

Pour changer le salon vocal qui vous redirigera dans votre salon temporaire, il suffit d'appuyer sur le bouton <mark style="color:orange;">Hub (salon)</mark>. Un message vous demandera alors <mark style="color:orange;">[l'identifiant du salon](https://docs.draftbot.fr/autres/recuperer-un-identifiant)</mark>.

#### Changer le nom par défaut des salons temporaires

{% hint style="warning" %}
Cette fonctionnalité est réservée aux <mark style="color:orange;">[serveurs premiums](https://www.draftbot.fr/premium)</mark>.
{% endhint %}

Vous pouvez changer le nom par défaut des salons

#### Ajouter/Supprimer un salon permanent

{% hint style="info" %}
Par défaut, lorsque vos membres rejoignent un salon vocal dans la catégorie des salons vocaux temporaires et qu'ils le quittent ensuite, le salon se supprime. 
{% endhint %}

Pour qu'un salon soit conservé dans la catégorie sans être supprimé une fois qu'il n'a plus de membres, il faut appuyer sur le bouton <mark style="color:orange;">Salons permanents</mark>. Un menu s'ouvrira alors et vous pourrez ajouter ou supprimer les salons vocaux permanents de votre choix.



{% endtab %}
{% endtabs %}

## Informations supplémentaires

### Liste des variables

Vous pouvez utiliser les variables suivantes pour nommer un salon vocal lors de sa création :
* `{user}` pour afficher le pseudonyme du membre sur le serveur.
* `{user.username}` pour afficher le nom Discord du membre.
* `{user.tag}` pour afficher le pseudonyme avec le tag du membre (Pseudo#0000).
* `{index}` pour numéroter le salon.
* `{random-word}` pour attribuer un mot aléatoire parmi une liste de mots de **DraftBot**.
* `{custom-word}` pour attribuer un mot aléatoire parmi une liste personnalisable.

### Limite d'hubs de salons vocaux temporaires

Par défaut, **DraftBot** limite les serveurs à **un seul hub**. Cela dit, si l'offre <mark style="color:orange;">[premium](https://www.draftbot.fr/premium)</mark> est activée sur votre serveur, vous pourrez créer jusqu'à **5 hubs**.

### Panel

Lien vers le panel : <mark style="color:orange;">[https://www.draftbot.fr/dashboard/user](https://www.draftbot.fr/dashboard/user)</mark>