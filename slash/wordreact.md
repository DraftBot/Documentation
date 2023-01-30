---
description: >-
  Le WordReact permet de faire en sorte que lorsqu'un mot spécifique est envoyé dans un message, une réaction soit ajoutée au message.
---

# Réactions de mots

## Activer et désactiver le système de WordReact <a href="#on-off" id="on-off"></a>

Pour **activer** le système de WordReact, il vous suffit de faire la commande `/config`, puis d'aller sur la catégorie `réaction de mot` et d'`activer le système`.\
Pour le **désactiver**, il vous faudra utiliser la commande `/config`, puis aller sur `réaction de mot` et de `désactiver le système`.\
\
![Exemple d'activation/désactivation](../.gitbook/assets/wordreact/view.png)


{% hint style="info" %}
Vous pouvez également utiliser `/config système:Réactions de mots` pour afficher directement la page.
{% endhint %}

## Ajouter des réactions de mots <a href="#add" id="add"></a>

Pour ajouter une réaction à un mot, il vous suffit de faire la commande `/config`, aller sur `réaction de mot` puis `ajouter`.\
**DraftBot** vous demandera alors quel mot ou début de phrase ainsi que la réaction associée à ce texte.\
\
![exemple de la réaction](../.gitbook/assets/wordreact/question.png)


{% hint style="warning" %}
Si vous ne possédez pas le [premium](https://draftbot.fr/premium), vous aurez une limite de 10 wordreacts.\
\
Pour qu'un wordreact soit pris en compte, il doit être situé en **début de message**. Si le mot est au milieu ou à la fin d'un message, aucune réaction ne sera ajoutée.
{% endhint %}

## Supprimer de réactions de mots <a href="#delete" id="delete"></a>

Si vous souhaitez supprimer **un WordReact en particulier**, il vous suffira d'utiliser la commande `/config` puis aller sur `réaction de mot` et enfin `retirer`.\
Un sélecteur s'affichera et vous permettra de choisir le wordreact a supprimer.\

{% hint style="info" %}
Une confirmation sera envoyée suite à la suppression du wordreact.
{% endhint %}

\
Si vous souhaitez supprimer **tous les WordReacts**, vous pouvez utiliser la commande `/config`, aller dans `réaction de mots` et terminer par `Réinitialiser`

{% hint style="warning" %}
Une fois effectuée, une réinitialisation est irréversible.
{% endhint %}

## Lister les réactions de mots<a href="#view" id="view"></a>

Vous pouvez voir les wordreacts d'un serveur avec la commande `/config` et aller sur `réaction de mot`.
Une liste s'affichera alors, contenant tous vos mots avec la réaction qui leur est associée.

