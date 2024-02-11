---
description: >-
  Certains de vos membres vous posent quelques problèmes ? Alors configurez les
  outils de modération de DraftBot !
---

# Modération

Les systèmes de modération de **DraftBot** sont là pour vous aidez dans la gestion de votre serveur. Ici, vous trouverez toutes les informations nécessaires à leurs utilisation. Des simples commandes modération aux sanctions prédéfinies ! 

## Sanctions 

### Note

Vous pouvez ajouter une note à un membre dans son historique de sanctions avec <mark style="color:orange;">/note \[utilisateur] \[note]</mark>.\
Cela permet d'ajouter un commentaire à un membre, visible par les modérateurs, sans avertir le membre en message privé.

![Note donnée à un membre](../.gitbook/assets/moderation/note.png)

Vous pourrez retirer une note à un membre avec la commande <mark style="color:orange;">/sanctions retirer</mark>.

{% hint style="warning" %}
**DraftBot** peut donner une note à un membre uniquement si vous disposez de la permission "_Gérer les messages_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/note</mark> sur votre serveur.
{% endhint %}

### Avertissement

Vous pouvez avertir un membre avec la commande <mark style="color:orange;">/avertir</mark>.\
Le membre recevra un message privé avec le motif de son avertissement.

{% hint style="warning" %}
Le membre recevra son avertissement par message privé uniquement s'il accepte les messages privés venant du serveur.
{% endhint %}

![Avertissement donné à un membre](../.gitbook/assets/moderation/warn.png)

Vous pourrez retirer un avertissement à un membre avec la commande <mark style="color:orange;">/sanctions retirer</mark>.

{% hint style="warning" %}
**DraftBot** peut donner un avertissement à un membre uniquement si vous disposez de la permission "_Gérer les messages_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/avertir</mark> sur votre serveur.

{% endhint %}

### Mute

Vous pouvez réduire au silence un membre avec la commande <mark style="color:orange;">/mute</mark>.\
La durée d'un mute ne peut pas dépasser **28 jours**.

![Rendre muet un membre](../.gitbook/assets/moderation/mute.png)

Vous pourrez, si vous le souhaitez, acquitter un membre de sa réduction au silence avec la commande <mark style="color:orange;">/demute</mark>.

{% hint style="warning" %}
**DraftBot** peut donner un mute à un membre uniquement si vous disposez de la permission "_Exclure temporairement des membres_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/mute</mark> sur votre serveur.

**DraftBot** doit avoir son rôle au-dessus des autres rôles pour rendre muet un membre.
{% endhint %}

### Expulsion

Le fait d'expulser un membre fera quitter le membre du serveur, mais il pourra toujours revenir avec une autre invitation. Si vous souhaitez qu'il ne puisse pas revenir, consultez le <mark style="color:orange;">[bannissement](moderation.md#bannissement)</mark>.

Vous pouvez expulser un membre de votre serveur avec la commande <mark style="color:orange;">/expulser</mark>.

![Expulsion d'un membre](../.gitbook/assets/moderation/kick.png)

{% hint style="warning" %}
**DraftBot** peut expulser un membre uniquement si vous disposez de la permission "_Expulser des membres_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/expulser</mark> sur votre serveur.

**DraftBot** doit avoir son rôle au-dessus des autres rôles pour expulser un membre.
{% endhint %}

### Bannissement

Le fait de bannir un membre fera quitter le membre du serveur et il ne pourra jamais y revenir. Vous pouvez également bannir temporairement le membre en question. Si vous souhaitez qu'il puisse revenir sur votre serveur, consultez l'<mark style="color:orange;">[expulsion](moderation.md#expulsion)</mark>.

Vous pouvez bannir un membre via la commande <mark style="color:orange;">/ban</mark>. 

Après avoir choisit l'utilisateur et donné une raison, deux options facultatives supplémentaires s'offrent à vous :

* <mark style="color:orange;">\[temps]</mark> pour définir un temps de bannissement
* <mark style="color:orange;">\[messages\_supprimés]</mark> pour savoir depuis combien de temps les messages du membre doivent être supprimés (maximum 7 jours).

![Bannissement d'un utilisateur](../.gitbook/assets/moderation/ban.png)

Si vous souhaitez révoquer le bannissement d'un membre, vous pouvez le débannir avec la commande <mark style="color:orange;">/deban</mark> ou depuis l'onglet "_Bannissement_" de votre serveur Discord.

{% hint style="warning" %}
**DraftBot** peut bannir un membre uniquement si vous disposez de la permission "_Bannir des membres_" ou que l'un de vos rôles peut utiliser la commande <mark style="color:orange;">/ban</mark> sur votre serveur.

**DraftBot** doit avoir son rôle au-dessus des autres rôles pour bannir un membre.
{% endhint %}

## Gestion des sanctions

### Historique des sanctions

Vous pouvez voir toutes les sanctions de votre serveur avec <mark style="color:orange;">/sanctions lister</mark>.\
Dans la même optique, vous pouvez retrouver la liste de toutes les sanctions d'un membre avec <mark style="color:orange;">/sanctions lister \[utilisateur]</mark>.

![Historique de sanctions d'un membre](../.gitbook/assets/moderation/history.png)

## Retirer des sanctions

Vous pouvez enlever une sanction à un membre de votre serveur avec la commande <mark style="color:orange;">/sanctions retirer</mark>.

Il est également possible de réinitialiser toutes les sanctions à un membre d'un coup via <mark style="color:orange;">/adminreinitialiser sanctions membre</mark>.\
De même, si vous souhaitez retirer toutes les sanctions de tous les membres de votre serveur, vous pouvez utiliser <mark style="color:orange;">/adminreinitialiser sanctions serveur</mark>.

{% hint style="warning" %}
Notez que les commandes <mark style="color:orange;">/adminreinitialiser sanctions membre</mark> et <mark style="color:orange;">/adminreinitialiser sanctionsserveur</mark> sont irréversibles.
{% endhint %}

## Options de Confidentialité

Grâce aux options de confidentialité, vous pourrez décider de masquer le nom de du modérateur ou les réponses aux commandes de modération.

### Configuration

{% tabs %}
{% tab title="First Tab" %}
Here is first tab content.
{% endtab %}

{% tab title="Second Tab" %}
Here is second tab content.
{% endtab %}
{% endtabs %}

# Sanctions prédéfinies

Une sanction prédéfinie est une sanction préconfigurée servant à centraliser différents actes de modération en une seule commande : <mark style="color:orange;">/mod</mark>. Vous pourrez y décider de la sanction à appliquer ainsi que de la raison de celle-ci. Cela facilietera et réglementera les sanctions applicables par vos modérateurs.

{% hint style="info" %}
Toutefois, vos modérateurs doivent posséder des permissions nécessaires pour effectuer la sanction souhaitée via <mark style="color:orange;">/mod</mark>.
{% endhint %}

### Configuration

{% tabs %}
{% tab title="Via la commande /config" %}
Rendez-vous d'abord dans la catégorie "🔨 Modération" de la commande <mark style="color:orange;">/config</mark> puis appuyez sur "<mark style="color:blue;">Sanctions prédéfinies</mark>".

#### Création d'une sanction prédéfinie

Pour créer une sanction prédéfinie, cliquez sur "Créer". Vous pourrez ensuite choisir la sanction à appliquer ainsi que la raison indiquée lors de l'utilisation de cette dernière. Vous aurez également la possibilité de définir un nom lors de la sélection de la sanction prédéfinie dans la commande <mark style="color:orange;">/mod</mark>.


#### Gestion d'une sanction prédéfinie existante

Pour supprimer une sanction prédéfinie, cliquez sur "Supprimer", **DraftBot** vous demandera par la suite de sélectionner la sanction à retirer.

Vous auvez également la possibilitée de retirer toutes les sanctions prédéfinies en cliquant sur "réinitialiser".

{% hint style="warning" %}
Notez que ces actions sont irréversibles, une fois effectuées, il vous sera impossible de revenir en arrière.
{% endhint %}

![Menu de configuration des sanctions prédéfinies](../.gitbook/assets/moderation/configuiration_predefined_sanctions.png)

{% endtab %}
{% tab title="Depuis le panel" %}

<mark style="color:blue;">[Accéder au panel de **DraftBot**](https://draftbot.fr/dashboard)</mark>

Rendez vous ensuite dans la rubrique modération puis cliquer sur <mark style="color:orange;">"Créer une sanction prédéfinie"</mark>. Vous pourrez ensuite choisir la sanction à appliquer ainsi que la raison indiquée lors de l'utilisation de cette dernière. Vous aurez également la possibilité de définir un nom lors de la sélection de la sanction prédéfinie dans la commande <mark style="color:orange;">/mod</mark>. Vous n'avez ensuite qu'à sauvegarder votre sanction et le tour est joué !

![Création d'une sanction prédéfinie](../.gitbook/assets/moderation/dashboard_creation_predefined_sanctions.png)

> ⚠️ Une fois fini, n'oubliez pas d'enregistrer vos modifications avec le bouton "Sauvegarder" en bas de la page.
{% endtab %}
{% endtabs %}



