---
description: Avec DraftBot, vous pouvez renseigner votre date d'anniversaire et être informé des prochains à venir !
---

# 🎂 Anniversaires

## Votre Anniversaire

Vous pouvez définir votre anniversaire via [le pannel de Draftbot](https://www.draftbot.fr) ou avec la commande <mark style="color:orange;">/anniversaire définir \[date] </mark>. Il vous suffira de mettre dans l'argument <mark style="color:orange;">\[date]</mark> votre date d'anniversaire. 

![Exemple de commande d'anniversaire](../.gitbook/assets/birthday/command_preview.png)

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
{% tab title="Via la commande /config" %}

Grâce à la commande <mark style="color:orange;">/config \[système:anniversaires]</mark> vous pouvez paramétrer plusieurs options du système d'anniversaire.

Avec les boutons présentés ci-dessous, vous pouvez :

![Aperçu des options du système de configuration via la commande /config](../.gitbook/assets/birthday/birthday_config_button.png)


*Vous pouvez accéder à différents paramètres en cliquant sur le bouton "Annonces" :*

![Aperçu des différents paramètres d'annonce d'anniversaire](../.gitbook/assets/birthday/birth_config_annoncement.png)

- En cliquant sur le premier bouton, vous pouvez activé ou désactiver le système d'annonce d'anniversaire.
- Avec le deuxième bouton, vous pouvez choisir le salon dans lequel le bot enverra l'annonce d'anniversaire.
- Grâce au troisième bouton, vous pouvez paramétrer le message d'annonce.

{% hint style="info" %}
Lorsque vous voulez paramètre le message d'anniversaire, vous pouvez choisir entre prendre le message par défaut et un message personnalisé. Si vous prenez la deuxième option, n'oubliez pas d'utiliser les variables ci-dessous et le markdown de Discord.

![Aperçu des variables diponible pour l'annonce d'anniversaire](../.gitbook/assets/birthday/birthday_config_message_edit.png)
{% endhint %}

- Avec l'aide du quatrième bouton, vous pouvez définir leur à laquelle le message d'annonce d'anniversaire sera envoyer dans le salon que vous aurez défini au préalable. 
- Grâce à ce cinquième bouton, vous pouvez décider de mentionner un rôle lors dans l'annonce qui sera envoyer lorsque quelle qu'un faitera son anniversaire.
- Pour conclure avec le sixième bouton, vous permet de faire en sorte qu'un membre puisse enregristrer son anniversaire, mais aucune annonce ne sera envoyer lors de son anniversaire et aucune récompense ne sera offerte.

{% endtab %}


{% tab title="Via le panel" %}

WORK IN PROGRESS :

{% endtab %}
{% endtabs %}