---
description: >-
  Les vents, c'est pas cool. Une petite réaction ça fait plaisir, alors faites
  réagir DraftBot à vos messages.
---

# 👀 Réactions de mots

## Activer / désactiver le système de réactions de mots <a href="#on-off" id="on-off"></a>

Pour activer le système de réactions de mots, il vous suffit de faire la commande `/config`, puis d'aller sur la catégorie **Réactions de mots** et de cliquer sur **Activer le système**.

Pour **désactiver** le système, il vous faudra également utiliser la commande `/config`, puis aller sur **Réactions de mots** et de cliquer sur <mark style="color:green;">Système activé</mark> .

![](<../../.gitbook/assets/wordreact/view.png>)


{% hint style="info" %}
Vous pouvez également utiliser `/config système:Réactions de mots` pour afficher directement la page.
{% endhint %}

## Ajouter des réactions de mots <a href="#add" id="add"></a>

Pour **ajouter** une réaction à un mot, il vous suffit de faire la commande `/config`, aller sur `Réactions de mots` puis `Ajouter`.
DraftBot vous demandera alors quel mot ou début de phrase ainsi que la réaction associée à ce texte. 

![](<../../.gitbook/assets/wordreact/question ajout rôles.png>)

{% hint style="warning" %}
Si vous ne possédez pas le [premium](https://draftbot.fr/premium), vous serez limité à 10 réactions de mots.\
\
Pour qu'une réaction de mots soit prise en compte, il doit être situé en **début de message**. Si le mot est au milieu ou à la fin d'un message, aucune réaction ne sera ajoutée.
{% endhint %}

## Supprimer des réactions de mots <a href="#delete" id="delete"></a>

Si vous souhaitez **supprimer** une réactions en particulier, il vous suffira d'utiliser la commande `/config` puis, sélectionnez `Réactions de mots` et enfin, cliquez sur le bouton `Retirer`.
Un sélecteur s'affichera et vous permettra de choisir la réaction de mots à supprimer.

![](<../../.gitbook/assets/wordreact/supression-mots.png>)

## Lister les réactions de mots<a href="#view" id="view"></a>

Vous pouvez voir les réactions de mots sur votre serveur avec la commande `/config` et vous rendre simplement dans le système **Réactions de mots**.
Une liste s'affichera alors, contenant tous vos mots avec la réaction qui leur est associée.


## <mark style="color:red;">Réinitialiser le système</mark>

Si vous souhaitez supprimer **toutes** les réactions de mots, vous pouvez utiliser la commande `/config`, toujours dans le système `Réactions de mots` et cliquer sur `Réinitialiser`.

{% hint style="warning" %}
Une réinitialisation est irréversible ! Une fois effectuée, elle remettra les trois réactions de mots de base. C'est à dire : "hey", "coucou" et "salut".
{% endhint %}