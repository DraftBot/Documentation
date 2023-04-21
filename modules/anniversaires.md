---
description: Avec DraftBot, vous pouvez renseigner votre date d'anniversaire et être informé des prochains à venir !
---

# 🎂 Anniversaires

## Votre anniversaire

Vous pouvez définir votre anniversaire via [le panel de Draftbot](https://www.draftbot.fr) ou avec la commande <mark style="color:orange;">/anniversaire définir \[date] </mark>. Il vous suffira de mettre dans l'argument <mark style="color:orange;">\[date]</mark> votre date d'anniversaire. 

![Exemple de commande d'anniversaire](../.gitbook/assets/birthday/command_review.png)

Vous pouvez également voir la liste de tous les anniversaires définis sur le serveur grâce à la commande <mark style="color:orange;">/anniversaire liste</mark>.

{% hint style="warning" %}
Attention, pour changer votre date de naissance, il y a un cooldown progressif *(il augmente à chaque changement)*.

- 1er changement : 1 jour
- 2ème : 2 jours
- 3ème : 6 mois
- 4 et plus : 1 an
{% endhint %}

## Modifier la visibilité de votre anniversaire

Grâce aux commandes <mark style="color:orange;">/anniversaire activer</mark> & <mark style="color:orange;">/anniversaire désactiver</mark> vous pouvez *(par serveur individuel)* activer ou désactiver la visibilité de votre anniversaire.

![Message de confirmation de la commande /anniversaire activer](../.gitbook/assets/birthday/birthday_enable.png)

{% hint style="info" %}
Vous pouvez désactiver la visibilité de votre anniversaire sur tous les serveurs avec la commande <mark style="color:orange;">/anniversaire retirer</mark>.
{% endhint %}

## Configuration des anniversaires sur le serveur

{% tabs %}
{% tab title="Via le /config" %}

Grâce à la commande <mark style="color:orange;">/config \[système:anniversaires]</mark> vous pouvez paramétrer plusieurs options du système d'anniversaire.

Avec les boutons présentés ci-dessous, vous pouvez :

![Aperçu des options du système de configuration via la commande /config](../.gitbook/assets/birthday/birthday_config_button.png)

## Annonces

Vous pouvez accéder à différents paramètres de l'option <mark style="color:orange;">Annonces</mark> en cliquant sur le bouton <mark style="color:orange;">Annonces</mark> :

Grâce à l'option <mark style="color:orange;">Annonces</mark>, vous pouvez paramétrer l'envoi d'un message général à tous les membres lors du jour de leur anniversaire.

![Aperçu des différents paramètres d'annonce d'anniversaire](../.gitbook/assets/birthday/birth_config_annoncement.png)

- En cliquant sur le bouton <mark style="color:orange;">Système activer/désactiver</mark>, vous pouvez activer ou désactiver le système d'annonce d'anniversaire.
- Avec le bouton <mark style="color:orange;">Salon</mark>, vous pouvez choisir le salon dans lequel le bot enverra l'annonce d'anniversaire.
- Grâce au troisième bouton <mark style="color:orange;">Message</mark>, vous pouvez paramétrer le message d'annonce.

{% hint style="info" %}
Lorsque vous voulez paramètre le message d'anniversaire, vous pouvez choisir entre prendre le message par défaut et un message personnalisé. Si vous prenez la deuxième option, n'oubliez pas d'utiliser les variables ci-dessous et le markdown de Discord.

![Aperçu des variables diponible pour l'annonce d'anniversaire](../.gitbook/assets/birthday/birthday_config_message_edit.png)
{% endhint %}

- Avec l'aide du quatrième bouton <mark style="color:orange;">Heure d'envoi</mark>, vous pouvez définir l'heure à laquelle le message d'annonce d'anniversaire sera envoyé dans le salon que vous aurez défini au préalable. 
- Grâce à ce cinquième bouton <mark style="color:orange;">Mention</mark>, vous pouvez décider de mentionner un rôle lors de l'annonce qui sera envoyer lorsque quelqu'un fêtera son anniversaire.
- Pour finir, avec le bouton <mark style="color:orange;">Rôles interdits</mark>, vous bloquez l'annonce d'un anniversaire à tous les membres qui possède le rôle interdit. 

## Rôle

Vous pouvez accéder à différents paramètres de cette option en cliquant sur le bouton <mark style="color:orange;">Rôle</mark> :

Avec l'option <mark style="color:orange;">Rôle</mark>, vous pouvez gérer le fait d'un membre recevra un rôle exclusif uniquement le jour de son anniversaire.

![Option rôle du menu de la configuration des anniversaires](../.gitbook/assets/birthday/birthday_config_role.png)

- Grâce au bouton <mark style="color:orange;">Rôle</mark>, vous pouvez choisir un rôle temporaire qui mettra en avant le membre qui fêtera son anniversaire. Celui-ci conservera temporairement le rôle jusqu'à la fin de la journée.
- Avec le bouton <mark style="color:orange;">Rôles interdits</mark>, vous pouvez désactiver la possibilité qu'un membre récupère le rôle temporaire le jour de son anniversaire grâce à un rôle interdit.

## Cadeaux

Vous pouvez accéder à différents paramètres de cette option en cliquant sur le bouton <mark style="color:orange;">Cadeaux</mark> :

Proposer une magnifique surprise à vos membres le jour de leur anniversaire. Ils seront sûrement ravis par votre générosité !

![Aperçu des options offertes avec le menu "Cadeaux"](../.gitbook/assets/birthday/birthday_config_gift.png)

En cliquant sur le bouton <mark style="color:orange;">Créer</mark>, vous pouvez choisir entre les quatre options ci-dessous pour créer une récompense ou un cadeau à offrir à vos membres qui fêteront leur anniversaire :

![Option des cadeaux à offrir via le menu Cadeaux](../.gitbook/assets/birthday/bithday_config_option_gift.png)

Dans le menu déroulant, vous avez accès à plusieurs options, vous pouvez lire leurs explications ci-dessous :

- Premièrement avec la première option du menu déroulant <mark style="color:orange;">Expériance</mark>, vous pouvez donner de l'expérance de niveau en cadeau à un membre.

{% hint style="info" %}
Je vous conseille de vous diriger vers <mark style="color:blue;">[le page de niveaux](niveaux.md)</mark> pour en apprendre plus sur les niveaux et donc potentiellement mieux paramétrer cette fonctionnalité !
{% endhint %}
    
- Avec le deuxième option du menu déroulant <mark style="color:orange;">Argent</mark>, vous permet de donner de l'argent au membre qui fêtera son anniversaire.
- Grâce au troisième option <mark style="color:orange;">Objet</mark>, vous pouvez donner un objet d'inventaire à la personne qui fête son anniversaire. 
- La dernière option <mark style="color:orange;">Cadeaux personnalisé</mark>, vous permet d'envoyer un message privé à la personne qui fête son anniversaire, cette fonctionnalité est pratique si par exemple, vous souhaitez lui offrir un Nitro ou alors juste lui écrire un petit message.


*Avec les deux boutons restant du menu des <mark style="color:orange;">Cadeaux</mark>, vous pouvez modifier et supprimer les paramètres enregistrés avec l'aide du premier bouton :*

- À l'aide du deuxième bouton <mark style="color:orange;">Modifier</mark>, vous pouvez modifier les options préalablement enregistrées.
- Troisième et finalement avec le bouton <mark style="color:orange;">Suprimer</mark>, vous pouvez réinitialiser l'entièreté du système de <mark style="color:orange;">Cadeaux</mark>.

## Annonces personnalisées *(Avantage premium 💎)*

![Aperçu des options du menu des annnonces personnalisées](../.gitbook/assets/birthday/birthday_config_special_annoucement.png)

- Premièrement avec le bouton <mark style="color:orange;">Créer</mark>, vous pouvez accéder à deux options.

![Options disponibles pour la création d'une annonce personnalisée](../.gitbook/assets/birthday/birthday_config_premium_options.png)

- Avec l'option <mark style="color:orange;">Un seul membre</mark>, vous pouvez créer une annonce personnalisée lors de l'anniversaire de ce membre uniquement.
- À l'aide de l'option <mark style="color:orange;">Membres ayant un rôle</mark>, vous pouvez créer une annonce personnalisée lors de l'anniversaire de tous les membres qui possèderont le rôle.

*Avec les deux boutons restant du menu des <mark style="color:orange;">Annonces personnalisées</mark>, vous pouvez supprimer et réinitialiser les paramètres enregistrés avec l'aide du premier bouton :*

- Avec le bouton <mark style="color:orange;">Supprimer</mark>, vous pouvez supprimer une annonce personnaliser que vous auriez créé au paravent.
- Grâce au bouton <mark style="color:orange;">Réinitialiser</mark>, vous pouvez réinitialiser l'entièreté du système d'<mark style="color:orange;">Annonces personnalisées.</mark>

{% endtab %}


{% tab title="Depuis le panel" %}

Grâce au <mark style="color:blue;">[panel de draftbot](https://www.draftbot.fr/dashboard/)</mark> vous pouvez paramétrer plusieurs options du système d'anniversaire.

*Avec les boutons présentés ci-dessous, vous pouvez :*

Comme vous le voyez sous vos yeux, vous avez accès aux fonctionnalités suivantes : <mark style="color:orange;">Annonces</mark>, <mark style="color:orange;">Rôle temporaire</mark>, <mark style="color:orange;">Cadeaux d'anniversaire</mark> et <mark style="color:orange;">Annonces personnalisées *(Avantage premium 💎)*</mark>

## Annonces
## Rôle temporaire
## Cadeaux d'anniversaire
## Annonces personnalisées *(Avantage premium 💎)*
{% endtab %}
{% endtabs %}