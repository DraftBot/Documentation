# Commandes personnalisées

## Configuration

### Depuis Discord

Vous pouvez créer une commande personnalisée avec la commande <span style="color: #cd6e57;"> /config </span>, en vous rendant ensuite dans l'onglet "Commandes personnalisées" du sélecteur.\
DraftBot vous demandera alors les informations suivantes :

* Nom de la commande
* Description de la commande
* Restreindre ou interdire la commande à certains rôles
* Restreindre ou interdire la commande à certains salons
* Type(s) d'action(s)&#x20;
  * Envoyer un message
  * Ajouter ou retirer un ou des rôle(s)
  * Ajouter un rôle temporaire
  * Faire un achat dans la boutique
* Si vous souhaitez ou non que la commande soit affichée dans le <span style="color: #cd6e57;"> /aide </span>

{% hint style="info" %}
Lorsque vous exécutez une commande personnalisée, votre texte de déclenchement de commande reste dans le salon. Si vous souhaitez que **DraftBot** supprime votre commande, vous pouvez activer l'option correspondante dans <span style="color: #cd6e57;"> /config </span>, en vous rendant dans l'onglet "Commandes personnalisées" du sélecteur, puis en activant le bouton "Activer la suppression des commandes".
{% endhint %}

### Depuis le panel web

Vous pouvez configurer les commandes personnalisées depuis le panel web : [draftbot.fr](https://draftbot.fr).\
Il vous suffira de vous connecter en haut à droite puis de vous rendre dans la catégorie "Vos serveurs".

![](<../.gitbook/assets/custom-commands/home.png>)

Ensuite, choisissez un de vos serveurs sur le côté gauche puis sélectionnez "**Commandes personnalisées**".

![](<../.gitbook/assets/custom-commands/view.png>)

Pour créer une commande, remplissez les divers champs (nom, description, actions, etc.) puis cliquez sur le bouton "**Créer**" en bas à droite de votre commande personnalisée.

{% hint style="info" %}
Besoin de modifier ou de supprimer la commande ? \
Pas de problème ! Cliquez sur Modifier ou Supprimer sur le côté droit.
{% endhint %}

![](<../.gitbook/assets/custom-commands/edit-command.png>)

## Arguments

Les commandes personnalisées vous offrent la possibilité d'ajouter des arguments dans vos messages.

{% hint style="info" %}
**Exemple de commande personnalisée avec des arguments**\
➜ _Message configuré : `$1 est maintenant $2+`_\
\
Commande de l'utilisateur : `!adjectif @Jules fort et beau`\
Réponse de DraftBot : @Jules _est maintenant_ fort et beau
{% endhint %}

Voici les différentes variables d'arguments possibles avec **DraftBot** :

>$1 = première valeur saisie après la commande\
$2 = deuxième valeur saisie après la commande\
$1+ = tout ce qui est saisi après la commande\
$2+ = tout ce qui est saisi après la commande sauf la première valeur
