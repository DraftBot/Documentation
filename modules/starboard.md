---
description: >-
  Demarquez certains messages en intéragissant avec un émoji.
---

# ⭐ Starboard

## Comment ça marche ? 

Comme vous l'aurez compris, le système de starboard foncionne à base de réaction sou un message. Principalement, cela permet de faire des votes entre certains messages. Mais cela peut servir aussi à d'autres choses. Lorsqu'un message atteint un certain nombre de réaction, il est retranscrit par DraftBot, sous forme embed ou pas, dans un salon, créé au préalable ou choisit lors de la configuration.


## Configuration du système 

{% tabs %}
{% tab title="Via le /config" %}

### Créer

Pour créer un starboard par commande, il suffit de faire la commande /config en sélectionnant Starboards. Ensuite, cliquez sur Créer. De là, DrafBot vous posera plusieurs afin de configurer au mieux votre premier starbaord. 

{% hint style="info" %}

- Pour pouvoir créer jusqu'à 5 starboards et choisir l'émoji en question pour les réactions, il faut être ✨ <mark style="color:orange;">[premium](https://www.draftbot.fr/premium/)</mark>.

{% endhint %}

![Menu de création](../.gitbook/assets/création-starboard.png)


### Modifier 

Pour modifier un starboard, il faut d'abord faire la commande /config en sélectionnant Starboard. Puis, cliquez sur Modifier. Par la suite, DraftBot vous affichera une sorte de panel de configuration. Exemple ci dessous. Vous pouvez choisir si la représentation du message dans le salon soit dans un embed ou pas mais vous pouvez également chosir dans quel salon vous souhaitez qu'il s'y trouve.

![Modification](../.gitbook/assets/menu-starboard.png)

{% hint style="info" %}

Vous pouvez définir entre 1 et 25 réactions minimum avant qu'un message apparaisse dans le salon dédié à ce starboard.

{% endhint %}


### <mark style="color:red;">Supprimer</mark>

Pour supprimer un starboard, 

<details>
<summary>Liste des variables disponibles pour ce système</summary>

Les variables sont des bouts de texte qui évoluent suivant la personne, le serveur, le salon ou encore le temps.Voici celles utilisables pour le système de starboard : 
 
- `{user}` = Surnom du membre sur le serveur.
- `{user.username}` = Pseudo du compte du membre.
- `{user.globalname}` = Nom affiché du compte du membre.
- `{emoji}` = Emoji du starboard.
- `{emoji.count}` = Nombre de réactions.
- `{message.url}` = Lien du message.

{% hint style="info" %}

La forme basique que DraftBot donne lors de la configuration est "{emoji} {emoji.count} | {message.url}".

{% endhint %}

</details>

"Image à venir." 





{% endtab %}

{% tab title="Via le panel" %}
Pour configurer le système via le [panel](https://www.draftbot.fr/dashboard/), il vous suffit de vous diriger dans l'onglet <mark style ="color:blue;">Communautaire</mark>. Ensuite, descendez un la liste des système et vous trouverez le système de starboards.

<details>
<summary>Liste des variables disponibles pour ce système</summary>

Les variables sont des bouts de texte qui évoluent suivant la personne, le serveur, le salon ou encore le temps.Voici celles utilisables pour le système de starboard : 
 
- `{user}` = Surnom du membre sur le serveur.
- `{user.username}` = Pseudo du compte du membre.
- `{user.globalname}` = Nom affiché du compte du membre.
- `{emoji}` = Emoji du starboard.
- `{emoji.count}` = Nombre de réactions.
- `{message.url}` = Lien du message.

{% hint style="info" %}
La forme basique que DraftBot donne lors de la configuration est "{emoji} {emoji.count} | {message.url}".

{% endhint %}

</details>

"Image à venir."

{% endtab %}
{% endtabs %}

### Infos utiles 

 
- Vous pouvez définir entre 1 et 25 réactions minimum avant qu'un message apparaisse dans le salon dédié à ce starboard.
