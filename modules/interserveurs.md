---
description: >-
  Relier deux salons distinct de deux serveurs.
---

# 👍🏻 Interserveurs

La fonctionnalité d'interserveurs permet à deux salons distincts de communiquer grâce à la simulation créée par DraftBot qui, prenant l'apparence de l'utilisateur, transmets les messages dans les salons connectés au vôtre.

## Les commandes
**Trois commandes sont à disposition pour gérer vos liaisons de salon.**

> <mark style="color:orange;">`/interserveur générer`</mark> Générer une fréquence pour un interserveur.\
<mark style="color:orange;">`/interserveur lier`</mark> Lier ce salon à une fréquence d'interserveur.\
<mark style="color:orange;">`/interserveur gérer`</mark> Gérer la liaison interserveur du salon.


## Configurer l'interserveur
- Pour lier deux salons, il faut tout d'abord créer une fréquence, cette fréquence est unique à votre salon.
- Pour créer une fréquence, utilisez la commande <mark style="color:orange;">`/interserveur générer`</mark>.

![Réponse de DraftBot lors de l'exécution de la commande](../.gitbook/assets/interservers/interserver_generate.png)


## Relier deux salons
Une fois la fréquence créée, utilisez la commande <mark style="color:orange;">`/interserveur lier`</mark> dans le salon du serveur que vous souhaitez relier au premier salon.

![Exemple de la commande à effectuer lors de la liaison des deux salons](../.gitbook/assets/interservers/interserver_link.png)

{% hint style="info" %}
Vous pouvez retrouver la fréquence configurée pour un salon en utilisant la commande <mark style="color:orange;">`/interserveur gérer`</mark> gérer dans le salon correspondant.
{% endhint %}

{% hint style="warning" %}
Un coldown est présent sur l'envoi des messages, il a été mis en place par sécurité afin d'éviter à Draftbot de se faire rate-limit.
{% endhint %}

{% hint style="success" %}
**Félicitations !** Vos deux salons ont bien été configurés.

{% endhint %}
