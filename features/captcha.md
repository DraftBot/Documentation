---
description: >-
  Le système de captcha permet de protéger votre serveur d’éventuelles attaques
  de robots qu'il pourrait subir.
---

# Captcha

## Configuration

Vous pouvez configurer le système de captcha sur votre serveur à l'aide de la commande `captcha`  
Vous aurez alors le choix : 

* D'activer ou non le captcha
* Choisir entre 4 niveaux de sécurité \(facile, moyen, complexe et très complexe\)
* Créer ou choisir le salon de vérification ou seront envoyés les captchas
* Créer ou utiliser un rôle déjà existant qui sera donné aux personnes n'ayant pas validé le captcha
* Sélectionner ou non un rôle qui sera donné aux membres qui ont passé le captcha

## Utilisation du captcha

Lorsqu'un nouveau membre rejoindra votre serveur Discord, un message apparaitra dans le salon que vous avez défini pour le captcha.  
Le membre devra alors réécrire les caractères sur l'image qui lui est destiné pour accéder au serveur.

![Message envoy&#xE9; dans le salon d&#xE9;di&#xE9; au captcha lorsqu&apos;un membre rejoint le serveur](../.gitbook/assets/image%20%2838%29.png)

{% hint style="warning" %}
Si le membre ne répond pas bout de 2 minutes ou qu'il échoue plus de 3 fois au captcha, il sera automatiquement expulsé !
{% endhint %}

