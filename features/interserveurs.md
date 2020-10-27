---
description: >-
  Le système d'interserveurs permet de transférer les messages entre deux salons
  de deux serveurs différents.
---

# Interserveurs

Ce type de fonctionnalité permet notamment de pouvoir avoir plusieurs serveurs autour d'une même thématique mais également de pouvoir garder un même fil de discussion générale.

## Création de la fréquence

La création de l'interserveur se fait simplement à l'aide de la commande suivante dans le salon de votre choix:

```
!interserveur
```

Une fréquence vous sera envoyée en message privé.

{% hint style="warning" %}
Vous devez activer vos messages privés pour recevoir cette fréquence, vous pouvez les ouvrir uniquement sur le serveur en question en passant par l'onglet **Paramètres de confidentialité** de votre serveur Discord.
{% endhint %}

{% hint style="success" %}
Votre fréquence est créée, il ne vous reste plus qu'à ajouter un autre salon à cette fréquence !
{% endhint %}

## Relier un salon à un interserveur

Une fois votre fréquence créée, il vous faut maintenant relier un autre serveur à cette fréquence afin que les deux salons puissent communiquer.

Pour ce faire vous pouvez utiliser la même commande suivie de la fréquence reçue par message privé

```text
!interserveur <la fréquence>
```

Une fois cette commande exécutée, un message de confirmation vous sera envoyé dans le même salon ainsi que dans le salon relié par la fréquence !

{% hint style="success" %}
Vous avez crée votre interserveur entre vos deux salons !
{% endhint %}

## Supprimer un interserveur

Pour supprimer la fréquence d'un salon, deux options s'offrent à vous:

{% tabs %}
{% tab title="Supprimer l\'interserveur du salon" %}
Exécutez la commande suivante:

```text
!interserveur
```

![R&#xE9;ponse de DraftBot &#xE0; la commande](../.gitbook/assets/image%20%281%29.png)

Sélectionnez l'emoji corbeille 🗑️ pour supprimer l'interserveur du salon

{% hint style="success" %}
L'interserveur est bien supprimé du salon !
{% endhint %}
{% endtab %}

{% tab title="Supprimer le salon" %}
DraftBot a été conçu pour être le plus ergonomique et le plus simple a utilisé, **supprimer le salon** supprimera automatiquement l'interserveur du salon.
{% endtab %}
{% endtabs %}

