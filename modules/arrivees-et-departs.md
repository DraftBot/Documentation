---
description: >-
  Configurez des messages qui s'enverront lorsqu'un membre rejoint ou quitte
  votre serveur.
---

# 👋 Arrivées & départs

## <mark style="color:blue;">Messages de bienvenue</mark>

{% tabs %}
{% tab title="Via la commande /config" %}
Commencez d'abord par vous rendre dans la commande <mark style="color:orange;">/config</mark> ➜ 👋
Arrivées & départs ➜ "<mark style="color:blue;">Message de bienvenue</mark>".

Voici les différents boutons ainsi que leurs utilités :
- "Activer le système" ➜ Permet d'activer ou désactiver le système.
- "<mark style="color:blue;">Salon d'envoi</mark>" ➜ Définit le salon où le message de bienvenue sera envoyé.

- "Message personnalisé" ➜ Définit le texte du message de bienvenue.

<details>
<summary>Variables</summary>
Les variables sont des bouts de texte qui évoluent suivant la personne, le serveur, le salon ou encore le temps. Voici celles utilisables dans les messages de bienvenue de DraftBot.

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
Votre message doit faire un maximum de 1 200 caractères.
{% endhint %}

- "Mentionner le membre" ➜ Une fois cette option activée, le membre sera mentionné dans le message de bienvenue.
- "Couleur de fond" ➜ Permet de modifier la couleur de fond du message de bienvenue.

{% hint style="info" %}
Vous avez le choix entre trois couleurs ainsi que celle par défaut qui rendra l'image transparente (avec le bouton "<mark style="color:red;">Aucune</mark>").

Grâce à l'abonnement <mark style="color:blue;">[premium](https://draftbot.fr/premium)</mark>, vous pouvez avoir une couleur personnalisée.

![Menu de sélection de la couleur de fond](../../.gitbook/assets/welcome/configuration-welcome-color.png)

{% endhint %}

- "Couleur" ➜ Définit la couleur de la barre latérale de votre message de bienvenue. **_([✨ premium](https://draftbot.fr/premium))_**
- "Image" ➜ Permet d'ajouter une image de fond à votre message de bienvenue. **_([✨ premium](https://draftbot.fr/premium))_**

{% hint style="info" %}
Les dimensions optimales de l'image sont de 1 000 x 300 pixels.
{% endhint %}

![Menu de configuration du système de bienvenue](../../.gitbook/assets/welcome/configuration-welcome.png)

{% endtab %}
{% tab title="Via le panel" %}
Débutez en vous rendant sur le <mark style="color:blue;">[panel de **DraftBot**](https://draftbot.fr/dashboard/)</mark> ➜ Arrivées & départs.

Vous devez ensuite activer le système en cliquant sur le bouton d'activation du module. Si vous voulez le désactiver, cliquez à nouveau sur ce même bouton.

![Activer le système de bienvenue](../../.gitbook/assets/welcome/dashboard-welcome-enable.png)

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

![Menu de configuration](../../.gitbook/assets/welcome/dashboard-welcome.png)

{% endtab %}
{% endtabs %}

## <mark style="color:blue;">Messages d'au revoir</mark>

{% tabs %}
{% tab title="Via la commande /config" %}
Commencez par vous rendre dans la commande <mark style="color:orange;">/config</mark> ➜ 👋
Arrivées & départs ➜ "<mark style="color:blue;">Message d'au revoir</mark>".

Voici les différents boutons ainsi que leurs utilités :
- "Activer le système" ➜ Permet d'activer ou désactiver le système.
- "<mark style="color:blue;">Salon d'envoi</mark>" ➜ Définit le salon où le message d'au revoir sera envoyé.

- "Message personnalisé" ➜ Définit le texte du message de bienvenue.

<details>
<summary>Variables</summary>
Les variables sont des bouts de texte qui évoluent suivant la personne, le serveur, le salon ou encore le temps. Voici celles utilisables dans les messages d'au revoir de DraftBot.

- `{user}` ➜ Mention du membre
- `{user.id}` ➜ Identifiant du membre
- `{user.username}` ➜ Pseudo du membre
- `{user.nickname}` ➜ Surnom ou pseudo du membre
- `{user.tag}` ➜ Tag du membre _(Pseudo#0000)_
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
Votre message doit faire un maximum de 1 200 caractères.
{% endhint %}

- "Couleur de fond" ➜ Permet de modifier la couleur de fond du message d'au revoir.

{% hint style="info" %}
Vous avez le choix entre trois couleurs ainsi que celle par défaut (avec le bouton "<mark style="color:red;">Aucune</mark>"). 

Grâce à l'abonnement <mark style="color:blue;">[premium](https://draftbot.fr/premium)</mark>, vous pouvez avoir une couleur personnalisée.

![Menu configuration couleur de fond](../../.gitbook/assets/welcome/configuration-goodbye-color.png)

{% endhint %}

- "Couleur" ➜ Définit la couleur de la barre latérale de votre message d'au revoir. **_([✨ premium](https://draftbot.fr/premium))_**
- "Image" ➜ Permet d'ajouter une image de fond à votre message d'au revoir. **_([✨ premium](https://draftbot.fr/premium))_**

{% hint style="info" %}
Les dimensions optimales de l'image sont de 1 000 x 300 pixels.
{% endhint %}

![Menu de configuration du système d'au revoir](../../.gitbook/assets/welcome/configuration-goodbye.png)

{% endtab %}
{% tab title="Depuis le panel" %}
Rendez-vous sur le <mark style="color:blue;">[panel de **DraftBot**](https://draftbot.fr/dashboard)</mark> ➜ Arrivées & départs.

Vous devez d'abord activer le système en cliquant sur le bouton d'activation du module. Si vous voulez le désactiver, cliquez à nouveau sur ce même bouton.

![Activer le système messages d'au revoir](../../.gitbook/assets/welcome/dashboard-goodbye-enable.png)

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Enregistrer" en bas de la page.

![Menu de configuration](../../.gitbook/assets/welcome/dashboard-goodbye-configuration.png)

{% endtab %}
{% endtabs %}