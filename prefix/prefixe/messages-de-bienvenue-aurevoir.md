---
description: >-
  Souhaitez la bienvenue ou un départ à vos membres avec les messages de
  bienvenue et d'au revoir.
---

# Messages de bienvenue/au revoir

## Activer et désactiver les messages de bienvenue

Tout d'abord, vous pouvez activer les messages de bienvenue pour qu'ils fonctionnent correctement, avec la commande `welcome on`. Si vous souhaitez désactiver les messages de bienvenue, il suffira de faire cette fois-ci la commande `welcome off`.

## Les différentes possibilités de configuration

En faisant seulement la commande `!welcome`, les possibilités de configuration suivantes vous seront présentées :

* `on` pour activer les messages de bienvenue
* `off` pour désactiver les messages de bienvenue
* `show` pour afficher le message de bienvenue
* `config` pour configurer les messages de bienvenue
* `reset` pour réinitialiser votre configuration (**il sera impossible de retourner en arrière une fois la commande validée**)
* `back` pour changer la couleur de fond de votre message de bienvenue
* `color` pour changer la couleur de l'embed du message de bienvenue ([premium](https://www.draftbot.fr/premium) uniquement)
* `image` pour mettre une image de fond dans votre message de bienvenue ([premium](https://www.draftbot.fr/premium) uniquement)

## Configurer le message de bienvenue

> Afin de configurer au mieux votre message de bienvenue, il faudra exécuter la commande `welcome config`. Puis, il suffira de répondre correctement aux questions de **DraftBot**. Ceci, afin de remplir les critères suivants : salon d'envoi des messages de bienvenue, changer ou non le texte (si oui, un nouveau texte vous sera demandé, il faudra alors le rédiger) et choisir si le membre doit être mentionné ou non.

Il vous sera possible de choisir le salon où vous souhaitez afficher votre message de bienvenue, ainsi que de modifier le texte de votre message de bienvenue.\
\
Vous pourrez utiliser les variables suivantes pour faire un message personnalisé :\
\=> `{user}` pour afficher la mention du nouveau membre\
\=> `{user.id}` pour afficher l'identifiant du nouveau membre\
\=> `{user.username}` pour afficher le nom du nouveau membre\
\=> `{user.nickname}` pour afficher le nom du nouveau membre\
\=> `{user.tag}` pour afficher le pseudonyme avec le tag du nouveau membre (Pseudo\*\*#0000\*\*)\
\=> `{server}` pour afficher le nom du serveur\
\=> `{server.id}` pour afficher l'identifiant du serveur\
\=> `{server.name}` pour afficher le nom du serveur\
\=> `{server.membercount}` pour afficher le nombre total de membres présents sur le serveur, après l'arrivée du nouveau membre\
\=> `{channel}` pour mentionner le salon\
\=> `{channel.id}` pour afficher l'identifiant du salon\
\=> `{channel.name}` pour afficher le nom du salon\
\=> `{date}` pour afficher la date au moment de l'arrivée du nouveau membre\
\=> `{time}` pour afficher l'heure au moment de l'arrivée du nouveau membre\
\=> `{timestamp}` pour afficher le timestamp au moment de l'arrivée du nouveau membre\
\_\_\
\_\_Le message de bienvenue permet aussi de mentionner le membre qui vient d'arriver sur le serveur. Pour rappel, mentionner un utilisateur ou un rôle dans un embed ne le mentionnera pas, il faudra que la mention soit dans un message au-dessus de l'embed. C'est pour cela que, si la fonction est choisie, la mention du membre qui vient d'arriver sera dans un message et non dans l'embed.

## Fond de carte de message de bienvenue

Cette commande permet de modifier le fond de la carte du message de bienvenue, c'est à dire le fond de l'image qui est intégrée à l'embed du message de bienvenue.\
Dans la capture d'écran ci-dessous, le fond de carte est en orange.

![Image du message de bienvenue](<../../.gitbook/assets/image (58) (1).png>)

Pour changer la couleur du fond de carte, il faudra exécuter la commande `welcome back`.\
Par la suite, un message s'affichera, vous permettant de :\
\-> Choisir entre 3 couleurs prédéfinies, en cliquant sur les boutons "Couleur 1", "Couleur 2" ou "Couleur 3".\
\-> Envoyer le code HEX (#xxxxxx) d'une couleur de votre choix avec le bouton "✨Personnalisée".\
\-> Cliquer sur le bouton "Aucune" afin de réinitialiser la couleur de fond de carte.

## Premium : couleur et image personnalisée

En ayant acheté le premium, il vous est possible de personnaliser encore plus votre message de bienvenue.\
\
Si vous souhaitez modifier la couleur de la barre à gauche de l'embed, cela sera possible avec la commande `welcome color`. **DraftBot** vous demandera alors d'envoyer le code HEX (#xxxxxx) de la couleur que vous souhaitez remplacer.\
Cela vous permettra d'avoir une couleur pour le fond de carte mais aussi une couleur différente pour l'embed.\
\
De plus, il est possible de modifier l'image de fond de la carte du message de bienvenue, avec la commande `welcome image`. Vous pourrez donner l'image de votre choix en envoyant le lien de l'image ou en envoyant l'image en pièce-jointe de votre message.\
**Attention :** la dimension optimale de votre image est de 1000x300 pixels.\
Il est également possible de mettre en place un filtre gris afin d'améliorer la lisibilité de votre image de fond.

_**Vous voilà prêt(e) à faire un message de bienvenue pour votre serveur, comme vous le souhaitez !!**_

## Messages d'au revoir

Les messages d'au revoir fonctionnent de la manière que les messages de bienvenue, mais il faudra remplacer `welcome` par `goodbye`. Ils permettent d'envoyer un message d'au revoir aux membres qui viennent de quitter votre serveur.\
\
Seule différence est que, dans la `config` du message d'au revoir, il ne vous sera plus possible de mentionner le membre qui vient de quitter le serveur.

{% tabs %}
{% tab title="Bienvenue" %}
### Activer et désactiver les messages de bienvenue

Tout d'abord, vous pouvez activer les messages de bienvenue pour qu'ils fonctionnent correctement, avec la commande `!welcome on`. Si vous souhaitez désactiver les messages de bienvenue, il suffira de faire cette fois-ci la commande `!welcome off`.

### Les différentes possibilités de configuration

En faisant seulement la commande `!welcome`, les possibilités de configuration suivantes vous seront présentées :

* `on` pour activer les messages de bienvenue
* `off` pour désactiver les messages de bienvenue
* `show` pour afficher les messages de bienvenue
* `config` pour configurer les messages de bienvenue
* `reset` pour réinitialiser votre configuration (**il sera impossible de retourner en arrière une fois la commande validée**)
* `back` pour changer la couleur de fond de votre message de bienvenue
* `color` pour changer la couleur de l'embed du message de bienvenue (premium uniquement)
* `image` pour mettre une image de fond dans votre message de bienvenue (premium uniquement)

### Configurer le message de bienvenue

> Afin de configurer au mieux votre message de bienvenue, il faudra exécuter la commande `!welcome config`. Puis, il suffira de répondre correctement aux questions de DraftBot. Ceci, afin de remplir les critères suivants : salon d'envoi des messages de bienvenue, changer ou non le texte (si oui, un nouveau texte vous sera demandé, il faudra alors le rédiger) et choisir si le membre doit être mentionné ou non.

Il vous sera possible de choisir le salon où vous souhaitez afficher votre message de bienvenue, ainsi que de modifier le texte de votre message de bienvenue.\
\
Vous pourrez utiliser les variables suivantes pour faire un message personnalisé :\
\=> `{userName}` pour afficher le pseudonyme du nouveau membre\
\=> `{userTag}` pour afficher le pseudonyme avec le tag du nouveau membre (Pseudo\*\*#0000\*\*)\
\=> `{userId}` pour afficher l'identifiant du nouveau membre\
\=> `{totalMemberCount}` pour afficher le nombre total de membres présents sur le serveur, après l'arrivée du nouveau membre\
\=> `{serverName}` pour afficher le nom du serveur\
_Astuce : le markdown_ (gras, italique...) _est autorisé !_\
\_\_\
\_\_Le message de bienvenue permet aussi de mentionner le membre qui vient d'arriver sur le serveur. Pour rappel, une mentionner un utilisateur ou un rôle dans un embed ne le mentionnera pas, il faudra que la mention soit dans un message au-dessus de l'embed. C'est pour cela, si la fonction est choisie, que la mention du membre qui vient d'arriver sera dans un message et non dans l'embed.

### Fond de carte de message de bienvenue

Cette commande permet de modifier le fond de la carte du message de bienvenue, c'est à dire le fond de l'image qui est intégrée à l'embed du message de bienvenue.\
Dans la capture d'écran ci-dessous, le fond de carte est en orange.

![Image du message de bienvenue](<../../.gitbook/assets/image (58) (1).png>)

Pour changer la couleur du fond de carte, il faudra exécuter la commande `!welcome back`.\
Par la suite, un message s'affichera, vous permettant de :\
\-> Choisir entre 3 couleurs prédéfinies, en cliquant sur les réactions 1️⃣, 2️⃣ ou 3️⃣.\
\-> Envoyer le code HEX (#xxxxxx) d'une couleur de votre choix.\
\-> Cliquer sur la réaction 🧹 afin de réinitialiser la couleur de fond de carte.\
\
**A noter :** En modifiant la couleur du fond de la carte, l'embed prendra la même couleur.

### Premium : couleur et image personnalisée

En ayant acheté le premium, il vous est possible de personnaliser encore plus votre message de bienvenue.\
\
Si vous souhaitez modifier la couleur de la barre à gauche de l'embed, cela sera possible avec la commande `!welcome color`. DraftBot vous demandera alors d'envoyer le code HEX (#xxxxxx) de la couleur que vous souhaitez remplacer.\
Cela vous permettra d'avoir une couleur pour le fond de carte mais aussi une couleur différente pour l'embed.\
\
De plus, il est possible de modifier l'image de fond de la carte du message de bienvenue, avec la commande `!welcome image`. Vous pourrez donner l'image de votre choix en envoyant le lien de l'image ou en envoyant l'image en pièce-jointe de votre message.\
**Attention :** la dimension optimale de votre image est de 1000x300 pixels.\
Il est également possible de mettre en place un filtre gris afin d'améliorer la lisibilité de votre image de fond.

_**Vous voilà prêt(e) à faire un message de bienvenue pour votre serveur, comme vous le souhaitez !!**_
{% endtab %}

{% tab title="Aurevoir" %}
### Activer et désactiver les messages d'aurevoir

Tout d'abord, vous pouvez activer les messages d'aurevoir pour qu'ils fonctionnent correctement, avec la commande `!goodbye on`. Si vous souhaitez désactiver les messages d'aurevoir, il suffira de faire cette fois-ci la commande `!goodbye off`.

### Les différentes possibilités de configuration

En faisant seulement la commande `!goodbye`, les possibilités de configuration suivantes vous seront présentées :

* `on` pour activer les messages d'au revoir
* `off` pour désactiver les messages d'au revoir
* `show` pour afficher les messages d'au revoir
* `config` pour configurer les messages d'au revoir
* `reset` pour réinitialiser votre configuration (**il sera impossible de retourner en arrière une fois la commande validée**)
* `back` pour changer la couleur de fond de votre message d'au revoir
* `color` pour changer la couleur de l'embed du message d'au revoir (premium uniquement)
* `image` pour mettre une image de fond dans votre message d'au revoir (premium uniquement)

### Configurer le message d'au revoir

> Afin de configurer au mieux votre message d'au revoir, il faudra exécuter la commande `!goodbye config`. Puis, il suffira de répondre correctement aux questions de DraftBot. Ceci, afin de remplir les critères suivants : salon d'envoi des messages d'au revoir, changer ou non le texte (si oui, un nouveau texte vous sera demandé, il faudra alors le rédiger).

Il vous sera possible de choisir le salon où vous souhaitez afficher votre message d'au revoir, ainsi que de modifier son texte.\
\
Vous pourrez utiliser les variables suivantes pour faire un message personnalisé :\
\=> `{userName}` pour afficher le pseudonyme du membre\
\=> `{userTag}` pour afficher le pseudonyme avec le tag du membre (Pseudo\*\*#0000\*\*)\
\=> `{userId}` pour afficher l'identifiant du membre\
\=> `{totalMemberCount}` pour afficher le nombre total de membres présents sur le serveur, après le départ du membre\
\=> `{serverName}` pour afficher le nom du serveur\
_Astuce : le markdown_ (gras, italique...) _est autorisé !_

### Fond de carte de message d'au revoir

Cette commande permet de modifier le fond de la carte du message d'au revoir, c'est à dire le fond de l'image qui est intégrée à l'embed du message.\
Dans la capture d'écran ci-dessous, le fond de carte est en orange.

![Image du message de bienvenue](<../../.gitbook/assets/image (58) (1).png>)

Pour changer la couleur du fond de carte, il faudra exécuter la commande `!welcome back`\
Par la suite, un message s'affichera, vous permettant de :\
\-> Choisir entre 3 couleurs prédéfinies, en cliquant sur les réactions boutons.\
\-> Choisir une couleur personnalisée\
\-> Cliquer sur "aucune" afin de réinitialiser la couleur de fond de carte.\
\
**A noter :** En modifiant la couleur du fond de la carte, l'embed prendra la même couleur.

### Premium : couleur et image personnalisée

En ayant acheté le premium, il vous est possible de personnaliser encore plus votre message d'au revoir.\
\
Si vous souhaitez modifier la couleur de la barre à gauche de l'embed, cela sera possible avec la commande `!goodbye color`. DraftBot vous demandera alors d'envoyer le code HEX (#xxxxxx) de la couleur que vous souhaitez remplacer.\
Cela vous permettra d'avoir une couleur pour le fond de carte mais aussi une couleur différente pour l'embed.\
\
De plus, il est possible de modifier l'image de fond de la carte, avec la commande `!goodbye image`. Vous pourrez donner l'image de votre choix en envoyant le lien de l'image ou en l'envoyant en pièce-jointe de votre message.\
**Attention :** la dimension optimale de votre image est de 1000x300 pixels.\
Il est également possible de mettre en place un filtre gris afin d'améliorer la lisibilité de votre image de fond.

_**Vous voilà prêt(e) à faire un message de bienvenue pour votre serveur, comme vous le souhaitez !!**_
{% endtab %}
{% endtabs %}
