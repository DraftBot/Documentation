---
description: >-
  Un utilisateur remarque un message ou des agissements inappropriés sur votre serveur ? 
  Permettez-lui de vous les signaler avec le système de signalement DraftBot !
---

# 🚨 Signalements

## Configuration

{% tabs %}
{% tab title="Via la commande /config" %}
> Vous trouverez ci-dessous la configuration des signalements avec la commande <mark style="color:orange;">/config</mark>.

![Aperçu du système](../.gitbook/assets/report/view.png)

Veuillez d'abord vous rendre dans la commande <mark style="color:orange;">/config</mark> ➜ 🚨 Signalements

Voici les différents boutons ainsi que leurs utilités :
- "Activer le système" ➜ Permet d'activer ou désactiver le système.
- "Activer la réaction 🚨" ➜ DraftBot réagira au message signalé avec la réaction "🚨".

- "Activer l'ouverture d'un thread" ➜ Si activé, DraftBot ouvrira un fil quand un signalement est envoyé. **_([✨ premium](https://draftbot.fr/premium))_**
- "Rôle mentionné" ➜ Permet de définir le rôle qui sera mentionné dans le message de signalement.
- "<mark style="color:blue;">Salon</mark>" ➜ Défini le salon dans lequel le message de signalement est envoyé.
- "Rôles Modérateurs" ➜ Permet de définir des rôles non-administrateurs qui pourront gérer les signalements.
- Message de confirmation ➜ Défini le message qui sera envoyé à la personne qui fait le signalement.
<details>
<summary>Variables</summary>
Les variables sont des bouts de texte qui évoluent suivant la personne, le serveur, le salon ou encore le temps. Voici celles utilisables dans les motifs de signalement de DraftBot.

- `{user}` ➜ Mention du membre
- `{user.id}` ➜ Identifiant du membre
- `{user.username}` ➜ Pseudo du membre
- `{user.nickname}` ➜ Surnom ou pseudo du membre
- `{server}` ➜ Nom du serveur
- `{server.id}` ➜ Identifiant du serveur
- `{server.name}` ➜ Nom du serveur
- `{server.membercount}` ➜ Nombre de membres sur le serveur
- `{channel}` ➜ Mentions du salon
- `{channel.id}` ➜ Identifiant du salon
- `{channel.name}` ➜ Nom du salon
- `{date}` ➜ Date actuelle (JJ/MM/AAAA)
- `{time}` ➜ Heure actuelle (HH:MM)
- `{timestamp}` ➜ Timestamp actuel en secondes
</details>

{% hint style="warning" %}
Votre message peut faire au maximum 1 200 caractères.
{% endhint %}

- Fil de tri **_([✨ premium](https://draftbot.fr/premium))_** ➜ Permet de définir les fils pour les signalements résolus, refusés et sanctionnés.
{% endtab %}

{% tab title="Via le panel" %}
<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Sur le panel, vous retrouverez sur une même page, les mêmes possibilités de configuration qu'avec les commandes Slash sur Discord.

Pour configurer le système de signalements, accédez au panel via le lien ci-dessus et rendez-vous dans la catégorie "Signalements" sur le serveur de votre choix.

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

![Panel de configuration des niveaux](../.gitbook/assets/report/dashboard.jpg)
{% endtab %}
{% endtabs %}

## Gestion des signalements

Une fois qu'une personne aura signalée un utilisateur ou un message, vous aurez ce message dans le salon que vous aurez défini auparavant :
[message de signalement](../.gitbook/assets/report/traitement du signalement.jpg)<!--A changer : faute d'orthographe dans le message-->

Vous pourez donc :


<mark style="color:blue;">"prendre en charge"</mark> ➜ Permet de montrer que vous êtes en train de régler le signalement.

<mark style="color:green;">Marquer comme traité</mark> ➜ Marque le signalement comme résolu.
Vous pouvez ensuite séléctionner la raison de la résolution du signalement parmis :
<mark style="color:blue;">Membre sanctionné</mark>, <mark style="color:green;">Signalement résolu</mark> et <mark style="color:blue;">Signalement refusé</mark>.

Une fois la raison séléctionnée, vous pourrez ajouter un commentaire ou non.

{% hint style="info" %}
Vous pourez toujours remettre le signalement en attente via un bouton sur le message de signalement.
{% endhint %}