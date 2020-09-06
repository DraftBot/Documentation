---
description: >-
  Voici la liste de tous les changements effectués datés et décris depuis la
  version 4.11.2
---

# Changelog

## 4.11.3 - 02/08/2020

### Ajouts Welcome/Goodbye

* Pouvoir activer et désactiver directement \(`on` ou `off`\)
* Pouvoir afficher le message actuel
* Pouvoir reset toute la fonctionnalité
* Couleur embed \(premium\)
* Dégradé de fond \(pressets pour non premium\) et custom pour les premium
* Images de fond \(premium\)
* Message déplacé dans la description donc possibilité d'ajouter des liens
* Adaptation de panel pour la visualisation \(description\)

### Changements Tickets

* `!ticket create` devient `!ticket`
* `!ticket config` devient `!adminticket config`
* Nouvelles fonctionalités **add** et **remove** pour ajouter un membre au ticket `!adminticket`

### Changements Premium

* Les administrateurs peuvent maintenant ajouter le premium à leur serveurs
* Le premium est automatiquement après achat et une page propose d'activer à l'achat les serveurs \(toujours modifiable avec la commande\)
* Fermeture des inscriptions du Patreon

### Jeux

* Amélioration du jeu Pendu \(jambe et édition du message\)
* Ajout du jeu Morpion

### Autres changements

* Taille du welcome et du goodbye multiplié par deux pour l'affichage des petits téléphones
* Optimisation du système de level et de l'économie \(pouvait être lent quand les deux systèmes étaient activés\)
* Suppression du salon \#nouveaux-serveurs sur le support
* Refonte complète des messages de logs et conclusion des commandes de config
* Configuration des rôles permissions depuis la page Commandes du panel web avec l’icône ⚙️
* Ajout de la commande `!diagnose` pour connaître les problèmes de permissions avec le mute

## 4.11.2 - 23/06/2020

### Nouvelles fonctionnalités

* Nouvelle commande `!saveconv` permet de sauvegarder une conversation sous forme de page web
* Nouvelle commande `!qrcode` permet de générer un QRCode avec votre photo de profile au milieu 
* Nouvelle commande `!description` permet d'ajouter une description à votre profil globalement ou sur un serveur précis

### Changements DraftBot

* Pagination de la commande sanctions pouvant aller jusqu'à 50 sanctions
* Message en privé lorsqu'un donateur reçoit son premium
* Attribution des récompenses de niveaux améliorée, elles sont maintenant données dans l'ordre avec leur niveau correspondant
* Amélioration du design des messages de questions avec choix d'emojis
* Emojis customisés pour les commandes captcha, privateroom, ticket, interserveur, description

### Changements Panel Web

* Refonte des afficheurs de messages de bienvenue, d’au-revoir, de niveaux et de récompenses avec un support complet du markdown de discord
* Ajout des emojis custom du serveur au sélecteur d'emojis des champs de texte
* Ajout des rôles boosters au panel web pour les niveaux et l'économie
* Ajout de la fonctionnalité Niveau maximum au panel \(réservé aux premiums\)
* Amélioration globale des pages de configuration pour les appareils mobiles

### Résolutions de bugs

* Problème due à une mise à jour du jeu League of Legends résolu
* Problèmes avec quelques diagonales de puissance 4 résolus
* Problèmes avec certains emojis pour la devise personnalisée résolus
* Problèmes avec la réinitialisation du système de niveaux résolus
* Problème avec l'argent de départ après une réinitialisation de l'argent
* Problème avec la virgule du filter qui créait un bug, résolu

