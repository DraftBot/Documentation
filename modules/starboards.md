---
description: >-
  Mettez en avant les meilleurs messages de votre serveur dans un salon dédié en intéragissant avec un émoji.
---

# ⭐ Starboards

## Comment ça marche ?

Le système de starboard met en avant les messages qui reçoivent un certain nombre de réactions. Un message populaire est automatiquement affiché par DraftBot dans un salon dédié, choisi ou créé lors de la configuration.


## Configuration du système 

{% tabs %}
{% tab title="Via le /config" %}

### Créer un starboard

Pour créer un starboard par commande, il suffit de faire la commande <mark style="color:orange;">/config</mark> en sélectionnant Starboards. Ensuite, cliquez sur Créer. De là, DrafBot vous posera plusieurs afin de configurer au mieux votre premier starboard. 

{% hint style="info" %}

- Pour pouvoir créer jusqu'à 5 starboards et choisir l'émoji en question pour les réactions, il faut être ✨ <mark style="color:orange;">[premium](https://www.draftbot.fr/premium/)</mark>.

{% endhint %}

![Menu de création](../.gitbook/assets/starboards/starboards-create.png)


### Modifier un starboard

Pour modifier un starboard, lancez la commande <mark style="color:orange;">/config</mark>, sélectionnez "Starboards" et cliquez sur "Modifier". DraftBot affichera alors un panel de configuration.

![Explicaton visuelle](../.gitbook/assets/starboards/starboards-modify.png)

![Explicaton visuelle](../.gitbook/assets/starboards/starboards-info.png)

{% hint style="info" %}

Vous pouvez définir entre 1 et 25 réactions minimum avant qu'un message apparaisse dans le salon dédié à ce starboard.

{% endhint %}

<details>
<summary>Liste des variables disponibles pour ce système</summary>

Les variables sont des morceaux de texte qui évoluent en fonction de la personne, du serveur, du salon ou encore du temps. Voici celles utilisables pour le système de starboard : 
 
- `{user}` ➜ Surnom du membre sur le serveur.
- `{user.username}` ➜ Pseudo du compte du membre.
- `{user.globalname}` ➜ Nom affiché du compte du membre.
- `{emoji}` ➜ Emoji du starboard.
- `{emoji.count}` ➜ Nombre de réactions.
- `{message.url}` ➜ Lien vers le message.

{% hint style="info" %}

La forme basique que DraftBot donne lors de la configuration est `{emoji} {emoji.count} | {message.url}`.

{% endhint %}

</details>


### <mark style="color:red;">Supprimer un starboard</mark>

Pour supprimer un starboard, faites la commande /config toujours en sélectionnant "Starboards", puis, cliquer sur "Supprimer" en rouge.



![Explicaton visuelle](../.gitbook/assets/starboards/starboards-delete.png)


{% endtab %}

{% tab title="Via le panel" %}
Pour configurer le système via le [panel](https://www.draftbot.fr/dashboard/), il vous suffit de vous diriger dans l'onglet <mark style ="color:blue;">Communautaire</mark>. Ensuite, descendez un la liste des système et vous trouverez le système de starboards.

### Créer un starboard

Pour créer un starboard via le [panel](https://www.draftbot.fr/dashboard/), Veuillez vous rendre dans la catégorie "Communautaire". Ensuite, descendez dans la partie "Starboards" et cliquez sur "Créer un hub". Par la suite, DraftBot vous proposera une sorte de menu de configuration pour configurer votre premier starboard.

![Explicaton visuelle](../.gitbook/assets/starboards/starboards-create-2.png)

{% hint style="info" %}

Pour créer jusqu'à 5 starboards et choisir l'émoji associé aux réactions, le ✨ [premium](https://www.draftbot.fr/) est nécessaire.

{% endhint %}


### Modifier un starboard

Pour modifier un starboard, il vous suffit de cliquer sur Modifier qui se trouve toujours dans le <mark style="color:orange;">[panel](https://www.draftbot.fr/dashboard)</mark>, dans la catégorie Communautaire, dans la partie Staboards.  Vous pouvez choisir si la représentation du message dans le salon soit dans un embed ou pas mais vous pouvez également chosir dans quel salon vous souhaitez qu'il s'y trouve.

![Explicaton visuelle](../.gitbook/assets/starboards/starboards-modify-2.png)

{% hint style="info" %}
Vous avez la possibilité de définir un nombre minimum de réactions, compris entre 1 et 25, avant qu'un message n'apparaisse dans le salon dédié à ce starboard.

{% endhint %}


### <mark style="color:red;">Supprimer un starboard</mark>

Pour supprimer un starboard, cliquez sur le bouton "Supprimer", situé également sur le [panel](https://www.draftbot.fr/dashboard/), dans la catégorie "Communautaire", puis dans la partie "Starboards"."

![Explicaton visuelle](../.gitbook/assets/starboards/starboards-delete-2.png)

{% hint style="info" %}
Si vous le souhaitez, vous avez la possibilité de désactiver votre starboard tout en le conservant. Il vous suffit simplement de décocher la case à gauche du bouton "Modifier".

![Explicaton visuelle](../.gitbook/assets/starboards/starboards-tips.png)

{% endhint %}


<details>
<summary>Liste des variables disponibles pour ce système</summary>

Les variables sont des morceaux de texte qui évoluent en fonction de la personne, du serveur, du salon ou encore du temps. Voici celles utilisables pour le système de starboard : 
 
- `{user}` ➜ Surnom du membre sur le serveur.
- `{user.username}` ➜ Pseudo du compte du membre.
- `{user.globalname}` ➜ Nom affiché du compte du membre.
- `{emoji}` ➜ Emoji du starboard.
- `{emoji.count}` ➜ Nombre de réactions.
- `{message.url}` ➜ Lien vers le message.

{% hint style="info" %}
La forme basique que DraftBot donne lors de la configuration est "{emoji} {emoji.count} | {message.url}".

{% endhint %}

</details>


{% endtab %}
{% endtabs %}