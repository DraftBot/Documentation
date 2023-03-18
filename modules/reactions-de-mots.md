---
description: >-
  Faites réagir DraftBot à vos messages pour ne plus jamais vous sentir seul. 
---

# 👀 Réactions de mots

## Qu'est-ce que le système de réactions de mots et quel est son utilité ? 

Le système de réactions de mots, aussi appelé "wordreact", permet de faire en sorte que DraftBot réagit avec des réactions à des messages qui commencent par un mot spécial. Petit exemple illustré ci-dessus : 

![Exemple du système](../../.gitbook/assets/wordreact/view_wordreact.jpg)

## Activer / désactiver le système de réactions de mots 

{% tabs %}
{% tab title="Activer" %}
**Activer le système**

Pour activer le système de réactions de mots, il vous suffit de faire la commande <markt style="color:orange;">/config</mark>, puis d'aller dans le système **"Réactions de mots"** et de cliquer sur **"Activer le système"**.

![Exemple du système](../../.gitbook/assets/wordreact/view.png)
{% endtab %}
{% tab title="Désactiver" %}
**Désactiver le système**

Pour désactiver le système, il vous faudra également utiliser la commande <mark style="color:orange;">/config</mark>, puis dans le système **"Réactions de mots"** et **"Désactiver le système"**. Cela désactivera le système automatiquement.
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Vous pouvez également utiliser <mark style="color:orange;">/config Système: Réactions de mots</mark> pour afficher directement la page.
{% endhint %}


## Ajouter des réactions de mots

Pour ajouter une réaction à un mot, il vous suffit de faire la commande <mark style="color:orange;">/config</mark>, aller dans le système <mark style="color:orange;">**"Réactions de mots"**</mark> puis cliquez sur le bouton **"Ajouter"**.


![Exemple du message](../../.gitbook/assets/wordreact/question.png)


{% hint style="warning" %}
Si vous ne possédez pas le [<mark style="color:orange;">premium</mark>](https://draftbot.fr/premium), vous serez limité à 10 réactions de mots. En possédant le premium de DraftBot, vous pourrez créer des réactions de mots de manière illimitée. Pour qu'une réaction de mots soit prise en compte, il doit être situé en **début de message**. Si le mot est au milieu ou à la fin d'un message, aucune réaction ne sera ajoutée.
{% endhint %}


## Supprimer des réactions de mots

Si vous souhaitez supprimer une réaction en particulier, il vous suffira d'utiliser la commande <mark style="color:orange;">/config</mark> puis aller dans le système **"Réactions de mots"** et enfin, cliquez sur le bouton **"Retirer"**.

Un sélecteur s'affichera et vous permettra de choisir la réaction de mots à supprimer.


## Lister les réactions de mots

Vous pouvez voir les réactions de mots sur votre serveur avec la commande <mark style="color:orange;">/config</mark> et vous rendre simplement dans le système **Réactions de mots**.
Une liste s'affichera alors, contenant tous vos mots avec la réaction qui leur est associée.


## Réinitialiser le système

Si vous souhaitez supprimer **toutes** les réactions de mots, vous pouvez utiliser la commande <mark style="color:orange;">/config</mark>, toujours dans le système **"Réactions de mots"** et de cliquer sur **"Réinitialiser"**.

{% hint style="warning" %}
Une réinitialisation est irréversible ! Une fois effectuée, elle remettra les trois réactions de mots de base. C'est-à-dire : "hey", "coucou" et "salut".
{% endhint %}