---
description: Avec DraftBot, vous pouvez renseigner votre date d'anniversaire et être informé des prochains à venir !
---

# 🎂 Anniversaires

## Votre Anniversaire

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

## La configuration

{% tabs %}
{% tab title="Depuis le /config" %}

Grâce à la commande <mark style="color:orange;">/config \[système:anniversaires]</mark> vous pouvez paramétrer plusieurs options du système d'anniversaire.

Avec les boutons présentés ci-dessous, vous pouvez :

![Aperçu des options du système de configuration via la commande /config](../.gitbook/assets/birthday/birthday_config_button.png)

## Annonces

*Vous pouvez accéder à différents paramètres de cette option en cliquant sur le bouton "Annonces" :*

Grâce à l'option annonce, vous pouvez paramétrer l'envoi d'un message général à tous les membres lors du jour de lors du jour de leur anniversaire.

![Aperçu des différents paramètres d'annonce d'anniversaire](../.gitbook/assets/birthday/birth_config_annoncement.png)

- En cliquant sur le premier bouton *(Système activer/désactiver)*, vous pouvez activé ou désactiver le système d'annonce d'anniversaire.
- Avec le deuxième bouton *(Salon)*, vous pouvez choisir le salon dans lequel le bot enverra l'annonce d'anniversaire.
- Grâce au troisième bouton *(Message)*, vous pouvez paramétrer le message d'annonce.

{% hint style="info" %}
Lorsque vous voulez paramètre le message d'anniversaire, vous pouvez choisir entre prendre le message par défaut et un message personnalisé. Si vous prenez la deuxième option, n'oubliez pas d'utiliser les variables ci-dessous et le markdown de Discord.

![Aperçu des variables diponible pour l'annonce d'anniversaire](../.gitbook/assets/birthday/birthday_config_message_edit.png)
{% endhint %}

- Avec l'aide du quatrième bouton *(Heure d'envoi)*, vous pouvez définir leur à laquelle le message d'annonce d'anniversaire sera envoyé dans le salon que vous aurez défini au préalable. 
- Grâce à ce cinquième bouton *(Mention)*, vous pouvez décider de mentionner un rôle lors de l'annonce qui sera envoyer lorsque quelqu'un fêtera son anniversaire.
- Pour conclure avec le sixième bouton *(Rôles interdits)*, vous bloquez l'annonce d'un anniversaire à tous les membres qui possède le rôle interdit. 

## Rôle

*Vous pouvez accéder à différents paramètres de cette option en cliquant sur le bouton "Rôle" :*

Avec l'option Rôle, vous pouvez gérer le fait d'un membre recevra un rôle exclusif uniquement le jour de son anniversaire.

![Option rôle du menu de la configuration des anniversaires](../.gitbook/assets/birthday/birthday_config_role.png)

- Grâce au premier bouton *(Rôle)*, vous pouvez choisir un rôle temporaire qui mettra en avant le membre qui fêtera son anniversaire. Celui-ci conservera temporairement le rôle jusqu'à la fin de la journée.
- Avec le deuxième bouton *(Rôles interdits)*, vous pouvez désactiver la possibilité qu'un membre récupère le rôle temporaire le jour de son anniversaire grâce à un rôle interdit.

## Cadeaux

*Vous pouvez accéder à différents paramètres de cette option en cliquant sur le bouton "Cadeaux" :*

Proposer une magnifique surprise à vos membres le jour de leur anniversaire. Ils seront sûrement ravis par votre générosité !

![Aperçu des options offerte avec le menu Cadeaux](../.gitbook/assets/birthday/birthday_config_gift.png)

En cliquant sur le premier bouton *(Crée)*, vous pouvez choisir entre les quatre options ci-dessous pour créer une récompense/cadeau à offrir à vos membres qui fêteront leur anniversaire *:*

![Option des cadeaux à offrir via le menu Cadeaux](../.gitbook/assets/birthday/bithday_config_option_gift.png)

Dans le menu déroulant, vous avez accès à plusieurs options, vous pouvez lire leurs explications ci-dessous *:*

- Premièrement avec la première option du menu déroulant, vous pouvez donner de l'expérance de niveau en cadeau à un membre.

{% hint style="warning" %}
Attention les points d'expérience n'est pas un niveau. L'expérience est les points qui vous permettent de monter de 
niveau donc pour ce cadeau basé vous sur le fait qu'un membre reçoit par défaut gagne 15 à 25 points d'expérience par message.
{% endhint %}
    
- Avec le deuxième bouton du menu déroulant 'Crée', WORK IN PROGRESS ...
- WORK IN PROGRESS ...
- WORK IN PROGRESS ...

*Avec les deux boutons restants, vous pouvez modifier et supprimer les paramètres enregistrer avec l'aide du premier bouton :*

- À l'aide du deuxième bouton,
- Troisième et finalement avec le bouton, vous pouvez réinitialiser l'entièreté du système de Cadeaux.

## Annonces personnalisées

- WORK IN PROGRESS ...
- WORK IN PROGRESS ...
- WORK IN PROGRESS ...

{% endtab %}


{% tab title="Depuis le panel" %}

WORK IN PROGRESS ...

{% endtab %}
{% endtabs %}