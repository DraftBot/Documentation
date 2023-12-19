---
description: >-
  Demarquez certains messages en intéragissant avec un émoji.
---

# ⭐ Starboard

## Comment ça marche ? 

Comme vous l'aurez compris, le système de starboard foncionne à base de réaction sou un message. Principalement, cela permet de faire des votes entre certains messages. Mais cela peut servir aussi à d'autres choses. Lorsqu'un message atteint un certain nombre de réaction, il est retranscrit par DraftBot, sous forme embed ou pas, dans un salon, créé au préalable ou choisit lors de la configuration.


## Configuration du système 

{% tabs %}
{% tab title="Par commande" %}
### Par commande

Pour configuer ce système par commande, il vous suffit de faire la commande <mark style="color:orange;">/config</mark> en sélectionnant le système ⭐<mark style="color:blue;">Starboards</mark>. Il se trouve tout en bas du sélecteur. Ensuite, vous aurez trois choix d'action. Créer ; Modifier ; Supprimer. Il ne vous reste plus qu'à cliquer sur l'action que vous souhaitez réaliser.

<details>
<summary>Liste des variables disponibles pour ce système<summary>

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
<summary>Liste des variables disponibles pour ce système<summary>

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

- Pour pouvoir créer plusieurs starboard et choisir l'émoji que l'on souhaite mettre en place, il faut être <mark style="color:orange;">[premium](https://www.draftbot.fr/premium/)</mark>.
- Vous pouvez choisir que le message en question soit retranscrit sous forme d'embed ou non.
- Vous pouvez choisir si le message s'envoie dans un salon textuel ou non. Il peut très bien être envoyé dans un fil ou dans un post. 
- Vous pouvez définir entre 1 et 25 réactions minimum avant qu'un message apparaisse dans le salon dédié à ce starboard.
- En tant que membre <mark style="color:orange;">[premium](https://www.draftbot.fr/premium/)</mark>, vous pouvez créer jusqu'à 5 starboards.