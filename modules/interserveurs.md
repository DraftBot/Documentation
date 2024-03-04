---
description: >-
  Reliez deux salons distincts de deux serveurs.

---

# 🔃 Interserveurs

La fonctionnalité d'interserveurs permet à deux salons distincts de communiquer grâce à la simulation créée par DraftBot qui, prenant l'apparence de l'utilisateur, transmets les messages dans les salons connectés au vôtre.

## Les commandes
**Trois commandes sont à disposition pour gérer vos liaisons de salon :**


> <mark style="color:orange;">/interserveur générer</mark> ➜ Génére une fréquence pour un interserveur.\
<mark style="color:orange;">/interserveur lier</mark> ➜ Lie ce salon à une fréquence d'interserveur.\
<mark style="color:orange;">/interserveur gérer</mark> ➜ Gére la liaison interserveur du salon.



## Configurer l'interserveur
- Pour lier deux salons, il vous faut tout d'abord créer une fréquence, cette dernière est unique à chaque salon.

- Pour créer une fréquence, utilisez la commande <mark style="color:orange;">/interserveur générer</mark>.


![Réponse de DraftBot lors de l'exécution de la commande](../.gitbook/assets/interservers/interserver_generate.png)


## Relier deux salons
Une fois la fréquence créée, utilisez la commande <mark style="color:orange;">/interserveur lier</mark> dans le salon que vous souhaitez relier au premier.

{% hint style="info" %}
Vous ne pouvez pas lier deux salons du même serveur.
{% endhint %}


![Exemple de la commande à effectuer lors de la liaison des deux salons](../.gitbook/assets/interservers/interserver_link.png)

{% hint style="info" %}
Vous pouvez retrouver la fréquence configurée pour un salon en utilisant la commande <mark style="color:orange;">/interserveur gérer</mark> dans le salon correspondant.

{% endhint %}

{% hint style="warning" %}
Un cooldown est présent sur l'envoi des messages, il a été mis en place par sécurité afin d'éviter des abus.

{% endhint %}

{% hint style="success" %}
**Félicitations !** L'interserveur est maintenant configuré sur votre serveur !

{% endhint %}
