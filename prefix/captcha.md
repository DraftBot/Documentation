---
description: >-
  Le système de captcha permet de protéger votre serveur d’éventuelles attaques
  de robots qu'il pourrait subir.
---

# Captcha

## Configuration

Vous pouvez configurer le système de captcha sur votre serveur à l'aide de la commande `captcha`.\
Vous aurez alors le choix :&#x20;

* D'activer ou non le captcha
* Choisir entre 4 niveaux de sécurité (facile, moyen, complexe et très complexe)
* Créer ou choisir le salon de vérification ou seront envoyés les captchas
* Créer ou utiliser un rôle déjà existant qui sera donné aux personnes n'ayant pas validé le captcha
* Sélectionner ou non un rôle qui sera donné aux membres qui ont rempli le captcha

## Utilisation du captcha

Lorsqu'un nouveau membre rejoindra votre serveur Discord, un message apparaîtra dans le salon que vous avez défini pour le captcha.\
Le membre devra alors réécrire les caractères sur l'image qui lui est destinée pour accéder au serveur.

![Message envoyé dans le salon dédié au captcha lorsqu'un membre rejoint le serveur](<../.gitbook/assets/image (38).png>)

{% hint style="warning" %}
Si le membre ne répond pas bout de 2 minutes ou qu'il échoue plus de 3 fois au captcha, il sera automatiquement expulsé !
{% endhint %}
