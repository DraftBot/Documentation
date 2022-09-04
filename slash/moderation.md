---
description: >-
  Certains de vos membres vous posent quelques problèmes ? Alors configurez les
  outils de modération de DraftBot !
---

# Modération

### <mark style="color:purple;">Note</mark>

Vous pouvez ajouter une note à un membre dans son historique de sanctions avec <mark style="color:orange;">/note \[utilisateur] \[note]</mark>\
Cela permet d'ajouter un commentaire à un membre, visible par les modérateurs, sans avertir le membre en message privé.\
Vous pourrez retirer une note à un membre avec la commande <mark style="color:orange;">/sanctions remove</mark>.

{% hint style="warning" %}
**DraftBot** peut donner une note à un membre uniquement s'il dispose de la permission "_Gérer les messages_" sur votre serveur.
{% endhint %}

### <mark style="color:purple;">Avertissement</mark>

Vous pouvez avertir un membre avec la commande <mark style="color:orange;">/avertir \[membre] \[raison]</mark>.\
Le membre recevra un message privé avec le motif de son avertissement.\
Vous pourrez retirer un avertissement à un membre avec la slash commande <mark style="color:orange;">/sanctions remove</mark>.

{% hint style="warning" %}
**DraftBot** peut donner un avertissement à un membre uniquement s'il dispose de la permission "_Gérer les messages_" sur votre serveur.
{% endhint %}

### <mark style="color:purple;">Mute</mark>

Vous pouvez rendre muet un membre avec la slash commande <mark style="color:orange;">/mute \[membre] \[temps] \[raison]</mark>. La durée d'un mute ne peut pas dépasser 28 jours.\
Vous pourrez, si vous le souhaitez, retirer le mute du membre avec la commande <mark style="color:orange;">unmute</mark>.

{% hint style="warning" %}
**DraftBot** peut donner un mute à un membre uniquement s'il dispose de la permission "_Gérer les messages_" sur votre serveur.

**DraftBot** doit avoir son rôle au-dessus des autres rôles pour rendre muet un membre.
{% endhint %}

### <mark style="color:purple;">Exclusion</mark>

Le fait d'exclure un membre fera quitter le membre du serveur mais il pourra toujours revenir avec une autre invitation. Si vous souhaitez qu'il ne puisse pas revenir, consultez le [bannissement](moderation.md#ban).\
Vous pouvez exclure un membre de votre serveur avec la slash commande <mark style="color:orange;">/expulser \[membre] \[raison]</mark>.

{% hint style="warning" %}
**DraftBot** peut exclure un membre uniquement s'il dispose de la permission "_Expulser des membres_" sur votre serveur.
{% endhint %}

### <mark style="color:purple;">Bannissement</mark>

Le fait de bannir un membre fera quitter le membre du serveur et il ne pourra jamais y revenir. Vous pouvez également bannir temporairement le membre en question. Si vous souhaitez qu'il puisse revenir sur votre serveur, consultez l'[expulsion](moderation.md#exclure). \
Vous pouvez bannir un membre avec la slash commande <mark style="color:orange;">/ban \[utilisateur] \[raison]</mark>. Deux options s'offrent alors à vous en plus :

* <mark style="color:orange;">\[temps]</mark> pour définir un temps de bannissement
* <mark style="color:orange;">\[messages\_supprimés]</mark> pour savoir depuis combien de temps les messages du membre doivent être supprimés (maximum 7 jours).

Si vous souhaitez révoquer le bannissement d'un membre, vous pouvez le dé bannir avec la slash commande <mark style="color:orange;">/unban \[utilisateur]</mark> ou depuis l'onglet "_Bannissement_" de votre serveur Discord.

{% hint style="warning" %}
**DraftBot** peut bannir un membre uniquement s'il dispose de la permission "_Bannir des membres_" sur votre serveur.
{% endhint %}

### <mark style="color:purple;">Historique de sanctions</mark>

Vous pouvez retrouver la liste de toutes les sanctions d'un membre avec <mark style="color:orange;">/sanctions list \[utilisateur]</mark>. Dans la même optique, vous pouvez voir toutes les sanctions de votre serveur avec <mark style="color:orange;">/sanctions list</mark>.

Vous pouvez enlever une sanction à un membre de votre serveur avec la slash commande <mark style="color:orange;">/sanctions remove \[membre]</mark>.

Il est également possible d'enlever toutes les sanctions à un membre d'un coup via <mark style="color:orange;">/sanctions reset \[membre]</mark>.

#### Vous pouvez retrouver la configuration de l'<mark style="color:purple;">**autodétermination**</mark>** **<mark style="color:yellow;">****</mark> de **DraftBot** sur cette page :

{% content-ref url="configuration/moderation.md" %}
[moderation.md](configuration/moderation.md)
{% endcontent-ref %}
