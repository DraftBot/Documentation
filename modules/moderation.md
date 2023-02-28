---
description: >-
  Certains de vos membres vous posent quelques problèmes ? Alors configurez les
  outils de modération de DraftBot !
---

# Modération

## Note

Vous pouvez ajouter une note à un membre dans son historique de sanctions avec <mark style="color:orange;">/note \[utilisateur] \[note]</mark>.\
Cela permet d'ajouter un commentaire à un membre, visible par les modérateurs, sans avertir le membre en message privé.

![Note donnée à un membre](../.gitbook/assets/moderation/note.png)

Vous pourrez retirer une note à un membre avec la commande <mark style="color:orange;">/sanctions retirer</mark>.

{% hint style="warning" %}
**DraftBot** peut donner une note à un membre uniquement si vous disposez de la permission "_Gérer les messages_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/note</mark> sur votre serveur.
{% endhint %}

## Avertissement

Vous pouvez avertir un membre avec la commande <mark style="color:orange;">/avertir \[membre] \[raison]</mark>.\
Le membre recevra un message privé avec le motif de son avertissement.

{% hint style="warning" %}
Le membre recevra son avertissement par message privé uniquement s'il accepte les messages privés venant du serveur.
{% endhint %}

![Avertissement donné à un membre](../.gitbook/assets/moderation/warn.png)

Vous pourrez retirer un avertissement à un membre avec la commande <mark style="color:orange;">/sanctions retirer</mark>.

{% hint style="warning" %}
**DraftBot** peut donner un avertissement à un membre uniquement si vous disposez de la permission "_Gérer les messages_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/avertir</mark> sur votre serveur.

{% endhint %}

## Mute

Vous pouvez réduire au silence un membre avec la commande <mark style="color:orange;">/mute \[membre] \[temps] \[raison]</mark>.\
La durée d'un mute ne peut pas dépasser **28 jours**.

![Rendre muet un membre](../.gitbook/assets/moderation/mute.png)

Vous pourrez, si vous le souhaitez, acquitter un membre de sa réduction au silence avec la commande <mark style="color:orange;">/demute \[membre]</mark>.

{% hint style="warning" %}
**DraftBot** peut donner un mute à un membre uniquement si vous disposez de la permission "_Exclure temporairement des membres_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/mute</mark> sur votre serveur.

**DraftBot** doit avoir son rôle au-dessus des autres rôles pour rendre muet un membre.
{% endhint %}

## Expulsion

Le fait d'expulser un membre fera quitter le membre du serveur, mais il pourra toujours revenir avec une autre invitation. Si vous souhaitez qu'il ne puisse pas revenir, consultez le <mark style="color:orange;">[bannissement](moderation.md#bannissement)</mark>.

Vous pouvez expulser un membre de votre serveur avec la commande <mark style="color:orange;">/expulser \[membre] \[raison]</mark>.

![Expulsion d'un membre](../.gitbook/assets/moderation/kick.png)

{% hint style="warning" %}
**DraftBot** peut expulser un membre uniquement si vous disposez de la permission "_Expulser des membres_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/expulser</mark> sur votre serveur.

**DraftBot** doit avoir son rôle au-dessus des autres rôles pour expulser un membre.
{% endhint %}

## Bannissement

Le fait de bannir un membre fera quitter le membre du serveur et il ne pourra jamais y revenir. Vous pouvez également bannir temporairement le membre en question. Si vous souhaitez qu'il puisse revenir sur votre serveur, consultez l'<mark style="color:orange;">[expulsion](moderation.md#expulsion)</mark>.

Vous pouvez bannir un membre avec la commande <mark style="color:orange;">/ban \[utilisateur] \[raison]</mark>. Deux options facultatives supplémentaires s'offrent à vous :

* <mark style="color:orange;">\[temps]</mark> pour définir un temps de bannissement
* <mark style="color:orange;">\[messages\_supprimés]</mark> pour savoir depuis combien de temps les messages du membre doivent être supprimés (maximum 7 jours).

![Bannissement d'un utilisateur](../.gitbook/assets/moderation/ban.png)

Si vous souhaitez révoquer le bannissement d'un membre, vous pouvez le débannir avec la commande <mark style="color:orange;">/deban \[utilisateur]</mark> ou depuis l'onglet "_Bannissement_" de votre serveur Discord.

{% hint style="warning" %}
**DraftBot** peut bannir un membre uniquement si vous disposez de la permission "_Bannir des membres_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/ban</mark> sur votre serveur.

**DraftBot** doit avoir son rôle au-dessus des autres rôles pour bannir un membre.
{% endhint %}

## Historique de sanctions
Vous pouvez voir toutes les sanctions de votre serveur avec <mark style="color:orange;">/sanctions lister</mark>.\
Dans la même optique, vous pouvez retrouver la liste de toutes les sanctions d'un membre avec <mark style="color:orange;">/sanctions lister \[utilisateur]</mark>.

![Historique de sanctions d'un membre](../.gitbook/assets/moderation/history.png)

Vous pouvez enlever une sanction à un membre de votre serveur avec la commande <mark style="color:orange;">/sanctions retirer \[membre]</mark>.

Il est également possible d'enlever toutes les sanctions à un membre d'un coup via <mark style="color:orange;">/adminreinitialiser sanctions membre \[membre]</mark>.\
De même, si vous souhaitez enlever toutes les sanctions de tous les membres de votre serveur, vous pouvez utiliser <mark style="color:orange;">/adminreinitialiser sanctions serveur</mark>.

{% hint style="warning" %}
Les commandes <mark style="color:orange;">/adminreinitialiser sanctions membre</mark> et <mark style="color:orange;">serveur</mark> sont irréversibles : impossible de redonner les sanctions aux membres du serveur si la commande a été faite et validée.
{% endhint %}

**Vous pouvez retrouver la configuration de l'auto-sanction de DraftBot sur cette page :**
{% content-ref url="configuration/moderation.md" %}
[moderation.md](configuration/moderation.md)
{% endcontent-ref %}
