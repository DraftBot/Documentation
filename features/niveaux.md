---
description: Suivez l'activité de vos membres grâce à la fonctionnalité de niveaux.
---

# Niveaux

## Afficher les niveaux

Vous pouvez afficher les statistiques de niveaux d'un membre sous forme d'image ou d'un serveur sous forme de liste ou de page web.

### La carte d'un membre

* Vous pouvez afficher votre carte à l'aide de la commande `!level` !
* Dans le cas où vous souhaitez afficher la carte d'un membre il vous suffit de faire la même commande `!level` suivi du membre.

![](../.gitbook/assets/image%20%287%29.png)

{% hint style="info" %}
Pour représenter un membre pour n'importe quelle commande de DraftBot, vous pouvez utiliser son **id**, son **pseudo**, son **tag**, son **pseudo sur le serveur**, son **pseudo partiellement**, et sa **mention**.
{% endhint %}

### Le classement du serveur

Dans le cas où vous souhaitez afficher les niveaux du serveur, il vous suffit de faire la commande`!levels` . 

![](../.gitbook/assets/image%20%288%29.png)

{% hint style="warning" %}
Dans le cas où vous ne faites pas parti du top 3, vous serez tout de même affiché en dessous avec votre place.
{% endhint %}

## Configuration

Vous pouvez l'activer, la désactiver, modifier son intensité, l’ignorer, la booster, la personnaliser ou encore la réinitialiser avec la commande `!adminlevel` ou `@DraftBot#0535 adminlevel`. 

Un message vous sera envoyé par DraftBot pour savoir si vous voulez :

* L'activer → `on`
* Le désactiver → `off`
* Le configurer → `config`
* Multiplier les gains d'expérience d’un rôle → `boosters`
* Ne pas prendre en compte un rôle ou salon → `ignore` 
* Réinitialiser la fonctionnalité → `reset` \(`!adminxp resetall` pour réinitialiser l'expérience\)
*  Personnaliser la couleur → `color` \(fonctionnalité réservé aux [donateurs](https://www.draftbot.fr/premium)\)

### **Modifier le gain d'expérience**

Si vous choisissez de **modifier le gain d'expérience**, en envoyant `config`, vous aurez alors le choix entre quatre propositions:

           0⃣ \| 0 XP par message  
           1⃣ \| Entre 5 et 15 XP par message  
           2⃣ \| Entre 15 et 25 XP par message  
           3⃣ \| Entre 25 et 35 XP par message  
  
Le taux actuel est indiqué par un symbole ✅. Cliquez alors sur la réaction de votre choix, en fonction du taux d’expérience que vous voulez à présent faire gagner. 

### **Multiplier le gain d’un rôle**

Si vous choisissez de **booster l'expérience d'un rôle**, en envoyant `boosters`, vous aurez alors le choix entre trois propositions : Ajouter un rôle booster \| Supprimer un rôle booster \| Afficher les rôles boosters

* Si vous choisissez d’ajouter un rôle booster, vous devrez choisir quel rôle doit

  être boosté. Vous pourrez ensuite choisir le multiplicateur entre `1.5`, `2.0`, `2.5` ou `3.0`.

* Si vous choisissez de supprimer un rôle booster, DraftBot vous montrera tous

  les rôles boostés et vous devrez alors choisir lequel supprimer.

* Si vous choisissez d’afficher la liste des rôles boosters, DraftBot vous enverra tous les rôles boostés et le multiplicateur qui leur a été attribué.

### Ignorer un salon ou un rôle

Si vous choisissez d’**ignorer l’expérience**, en envoyant `ignore`, vous aurez le choix entre deux propositions: Ignorer un rôle \| Ignorer un salon 

* Si vous choisissez le rôle, vous devez renseigner le rôle qui empêchera les membres l'ayant de gagner de l’expérience. 
* Si vous choisissez le salon, vous devez renseigner le salon dans lequel l’expérience ne sera pas comptabilisé.

### Réinitialiser la configuration

Si vous choisissez de **réinitialiser la configuration** du système de niveaux, en envoyant `reset`, vous n’aurez rien à faire de plus, DraftBot vous supprimera toutes les configurations effectués pour ce système. A savoir:

* Son statut
* Le nombre d'expérience gagné a chaque message
* Les messages de récompenses \(statut, salon, message customisé\)
* Le statut qui empêche les membres invisibles de gagner de l’expérience
* Les rôles qui empêchent le gain d'expérience
* Les salons dans les quels le gain d'expérience est désactivé
* Les rôles qui permettent de multiplier le gain d'expérience
* La couleur de la fonctionnalité de niveaux \(fonctionnalité réservé aux [donateurs](https://www.draftbot.fr/premium)\)

### Modifier la couleur

Si vous choisissez de **modifier la couleur**, en envoyant `color`. \(fonctionnalité réservé aux [donateurs](https://www.draftbot.fr/premium)\) Ensuite il vous suffira de renseigner un code hexadécimal \(il s’agit d’une série de 6 chiffre représentant une couleur\) voici un sélecteur pour choisir vos couleurs: [htmlcolorcodes.com](https://htmlcolorcodes.com/)

## Récompenses

### Afficher les récompenses

Vous pouvez afficher les récompenses de n'importe quel serveur ayant le système de niveaux activé depuis la commande `!rewards` ou`@DraftBot#0535 rewards`.

Une récompense peut comporter plusieurs éléments optionnels qui permettent de connaitre le fonctionnement de la récompense, sa disponibilité et son status.

* Une récompense accompagné d'un émoji diamant 🔹 signifie qu'elle fait parti des récompenses cumulables par conséquent parmi toutes vos récompenses de niveaux, seul la dernière que vous aurez reçu sera affiché.
* Une compense comportant une grande suite de nombres barrée et accompagné du mot clé `supprimé` signifie que la récompense était un rôle et que ce rôle a été supprimé. Elle n'est donc plus obtenable.
* Une récompense barrée et accompagné du mot clé `vérouillé` signifie que le serveur possède plus de 10 récompenses de niveaux et que cette récompense fait parti des récompenses ayant été désactivés pour une question de performances sur DraftBot. Afin que cette limitation un niveau soit la moins dérangeante pour le serveur, seul les récompenses demandant le plus grand niveau sont désactivés. Cette limite peut être dépassés par les serveurs appartenant aux donateurs.

###  Créer une récompense

Vous pouvez créer une récompense avec la commande `!adminreward add` ou `@DraftBot#0535 adminreward add`. Une fois exécuté, une série de questions adaptée à chaque décision que vous prendrez vous sera posé.

### Supprimer une récompense

Vous pouvez supprimer une de vos récompenses avec la commande `!adminreward remove` ou `@DraftBot#0535 adminreward remove`. Une fois exécuté, le nom de la récompense cible vous sera demandé afin de la supprimer.

### Supprimer toutes les récompenses

En cas de problème vous pouvez supprimer l'intégralité de vos récompenses avec la commande `!adminreward reset` ou `@DraftBot#0535 adminreward reset`. Une fois exécuté, toutes les récompenses du serveur seront supprimés.

