---
description: >-
 Rendez publique votre activité sur les autres réseaux sociaux !
---
# Notifications sociales

## Modules

### YouTube

Ce module permet **d'afficher** un message lors de la **publication d'une vidéo <mark style="color:orange;">[YouTube](https://www.youtube.com/)</mark>.**

![Notification sociale YouTube](../.gitbook/assets/socialnotifs/view_youtube.png)

L'annonce est entièrement **personnalisable**. Cela permet donc aux administrateurs de configurer **un rôle notifié**, activer **la publication sur d'autres serveurs**, choisir la **couleur** de l'embed d'annonce (réservé aux <mark style="color:orange;"> [serveurs premiums ✨](https://www.draftbot.fr/premium)</mark>), ainsi que d'autres éléments visuels.

Il peut y avoir **une seule chaîne <mark style="color:orange;">[YouTube](https://www.youtube.com/)</mark> différente** pour les serveurs **non-premiums** contrairement aux serveurs premiums qui peuvent avoir jusqu'à 5 chaînes YouTube différentes actuellement.

### Twitch

{% hint style="warning" %}
Les annonces <mark style="color:orange;">[Twitch](https://www.twitch.tv/)</mark> sont limitées aux <mark style="color:orange;">[serveurs premiums ✨](https://www.draftbot.fr/premium)</mark>.
Si vous n'avez pas le premium, il existe une alternative appelée le <mark style="color:orange;">[Live Presence](https://docs.draftbot.fr/modules/notifications-sociales#live-presence)</mark>.
{% endhint %}

**Les notifications sociales Twitch** permettent d'envoyer un message **personnalisable** lors du **lancement d'un live**. Il peut y avoir au maximum **5 notifications sociales Twitch différentes** par serveur.

![Notification sociale Twitch](../.gitbook/assets/socialnotifs/view_twitch.png)

{% hint style="info" %}
Afin d'éviter un spam d'embed, un délai de 30 minutes a été mis en place entre deux annonces de la même personne.
{% endhint %}

### Live Presence

Le module **Live Presence** consiste à envoyer une notification lorsqu'un membre a un statut "**Streame** ..." (symbolisé par la bulle violette et le triangle).

![Notification sociale de Live Presence](../.gitbook/assets/socialnotifs/view_presence.png)

En fonction de la configuration du module sur votre serveur, **n'importe quel membre** peut avoir sa notification lorsqu'il est en stream.

**Le nombre de notifications de Live Presence est illimité**, cela dit l'administrateur de votre serveur peut restreindre l'envoi de la notification à certains rôles.

{% hint style="info" %}
L'envoi d'une notification Live Presence nécessite d'avoir **son compte Twitch ou YouTube lié à Discord**. Plus d'information ci-dessous.
{% endhint %}

#### Comment lier son compte Twitch ou YouTube à Discord

Voici <mark style="color:orange;">[ce tutoriel réalisé par Discord](https://support.discord.com/hc/fr/articles/8063233404823-Connexions-et-r%C3%B4les-li%C3%A9s-pour-les-membres-de-la-communaut%C3%A9)</mark> qui explique globalement comment ajouter des connexions ainsi que l'obtention des rôles liés sur un serveur.

Suite à cette manipulation, vous devrez normalement avoir cet aperçu sur votre profil lorsque vous serez en live :


![Image de live](../.gitbook/assets/socialnotifs/view_live.png)

### Reddit

Ce module permet d'afficher une notification lors d'une publication dans un **subreddit**. Comme pour les autres modules de notifications sociales, le message envoyé est entièrement customisable : il pourra donc être envoyé sous forme de **message classique ou sous forme d'embed.**

Il ne peut y avoir qu'**une seule notification <mark style="color:orange;">[Reddit](https://www.reddit.com/)</mark> maximum** pour les serveurs **non-premiums**, contrairement aux serveurs premiums qui pour  ront avoir jusqu'à 10 notifications sociales Reddit.

Voici un exemple de message de notification :

![Notification sociale Reddit](../.gitbook/assets/socialnotifs/view_reddit.png)

### Epic Games

Ce module permet d'envoyer une annonce lorsqu'un jeu gratuit est disponible sur l'<mark style="color:orange;">[Epic Games Store](https://store.epicgames.com/fr/)</mark>.

{% hint style="info" %}
Le rôle mentionné, la couleur de l'annonce ainsi que le salon d'envoi peuvent être configurés par l'administrateur.
{% endhint %}


![Notification sociale Epic Games](../.gitbook/assets/socialnotifs/view_epicgames.png)

### Steam

Ce module permet d'envoyer une annonce lorsqu'un jeu gratuit est disponible sur <mark style="color:orange;">[Steam](https://store.steampowered.com/?l=french)</mark>.

{% hint style="info" %}
Le rôle mentionné, la couleur de l'annonce ainsi que le salon d'envoi peuvent être configurés par l'administrateur.
{% endhint %}

![Notification sociale Steam](../.gitbook/assets/socialnotifs/view_steam.png)

### GOG

Ce module permet d'envoyer une annonce lorsqu'un jeu gratuit est disponible sur <mark style="color:orange;">[GOG](https://www.gog.com/)</mark>.

{% hint style="info" %}
Le rôle mentionné, la couleur de l'annonce ainsi que le salon d'envoi peuvent être configurés par l'administrateur.
{% endhint %}
![Notification sociale GOG](../.gitbook/assets/socialnotifs/view_gog.png)

### CommitStrip

Ce module permet de vous notifier lorsque de nouvelles planches de bandes dessinées sont publiés par les dessinateurs de CommitStrip : Un ensemble de graphistes qui racontent la vie des développeurs.

{% hint style="info" %}
Le rôle mentionné, la couleur de l'annonce ainsi que le salon d'envoi peuvent être configurés par l'administrateur.
{% endhint %}

![Notification sociale CommitStrip](../.gitbook/assets/socialnotifs/view_commitstrip.png)

### Dealabs

Ce module permet d'envoyer une notification lorsqu'une réduction devient "hot" (brûlante). Il s'agit du stade où la promotion est jugée intéressante par les utilisateurs du site. Il faut aussi noter que l'administrateur peut configurer le module <mark style="color:orange;">[Dealabs](https://www.dealabs.com/)</mark> uniquement pour certaines catégories (exemples : High-Tech, Mode, etc...).

{% hint style="info" %}
Le rôle mentionné, la couleur de l'annonce ainsi que le salon d'envoi peuvent être configurés par l'administrateur.
{% endhint %}

![Notification Sociale Dealabs](../.gitbook/assets/socialnotifs/view_dealabs.png)

## Configuration

Vous pouvez activer séparément tous les types de notifications sociales.

{% tabs %}
{% tab title="Configuration via le /config" %}

Pour ajouter une annonce lors d'un évènement (publication de vidéo, post, notification de stream, etc...), il vous suffit d'effectuer la commande <mark style="color:orange;">/config système:Notifications Sociales</mark>. Vous aurez alors accès à l'onglet ci-dessous.

![/config > Notifications Sociales](../.gitbook/assets/socialnotifs/view_socialnotifs_config.png)

Il vous suffira de sélectionner la plateforme de votre choix et il n'y aura plus qu'à configurer à partir de la sélection guidée.

{% endtab %}

{% tab title="Configuration via le panel" %}

Dans cette page, vous pouvez activer et désactiver à votre guise les notifications sociales. Il existe deux types de notifications sociales :
* Les onglets, qui peuvent être configurés pour plusieurs chaines/forums.
* Les modules, qui vous permettent d'activer des notifications qui nécessitent peu de configuration.

Lien vers le panel : <mark style="color:orange;">[https://www.draftbot.fr/dashboard/user](https://www.draftbot.fr/dashboard/user)</mark>

![Configuration via le panel](../.gitbook/assets/socialnotifs/view_panelconfig.png)

{% endtab %}
{% endtabs %}

## Informations Complémentaires

Vous retrouverez le nombre maximum d'annonces par plateformes sur <mark style="color:orange;">[le comparatif de DraftBot Premium](https://www.draftbot.fr/premium#diff)</mark> dans la partie <mark style="color:orange;">Notifications sociales</mark>.
