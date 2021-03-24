---
description: >-
  Voici la liste de tous les changements effectués datés et décris depuis la
  version 4.11.2
---

# Changelog

## 4.12 - 24/03/2021

## 4.11.6 - 24/12/2020

### Nouvelles fonctionnalités

* `event` pour organiser des regroupements de participants
* Inventaire avec nouveaux items d'inventaire
  * Ajout d'une nouvelle commande `deal` pour effectuer des échanges d'objets
* `sondage` avec génération d'image, timer de fin \(optionnel\), statistiques
* Localité sur le `profil` \(personnalisable avec `locality`\)
* Commande `panel` pour être redirigé vers son profil ou le panel du serveur

### Améliorations

* Refonte de la fonctionnalité `admininvites`:
  * Plus de message privée
  * Détection de toutes les invitations
  * Fix des liens Discord qui étaient pris pour des invitations
  * Censuration des invitations
* La commande `birthday` n'affichera plus que les membres présents sur le server
* Ajout des logs des transactions d'économie
* Ajout de la possibilité de customiser le message de confirmation du système de suggestion 
* Ajout de la possibilité de désactiver un serveur premium même après l'avoir quitté
* Amélioration du puissance 4 :
  * Ajout d'une intelligence artificielle \(mentionner DraftBot comme utilisateur\)
  * Ajout de 2s de délais pour le bot afin d'avoir un jeu plus humanisé
  * Fix bug quand il y a victoire sur la dernière case de la grille
* Amélioration de la commande `diagnose support`
* Augmentation des limites des commandes personnalisées de 10 à 20 de plus pour les non premium et de 20 à 50 de plus pour les premium
* Amélioration du `saveconv` \(toujours plus réaliste, persistance des images, bug des mentions de membres avec pseudo\)
* La désactivation du système de ticket ne supprimeras plus, ni la catégorie, ni les salons de tickets
* Possibilité de mentionner un rôle de la boutique pour l'acheter \(un message sera envoyé à l'utilisateur pour lui dire d'éviter de le mentionner, que cela mentionne tout le monde et qu'il peut juste mettre le nom\)
* Ajout du nouveau rôle à la commande `wolfy`
* Limitation à un lancement de commande `bingo` par salon
* Adaptation du `morpion` au pavé numérique
* Pour les commandes `sondage`, `giveaway`, `event`, avant demander le salon dans lequel on veut que cela se passe, il demandera si on veut que ça se passe dans le salon actuel

### Panel web

* Suppression de la feature "no xp" pour les membres invisibles
* Page profil \(anniversaire, description, jeux\)
* Gestion du Premium
* Ergonomie globalement amélioré \(déroutant de roles et certains trucs optimisés\)
* Fix du bug du Embed Creator qui scrollait up s'il estimait que le texte était trop long

### Autres changements

* Lors de l'activation ou la désactivation des commandes, le nom d'une commande aura la priorité sur le nom d'un groupe.
* Ajout du support de Fortnite Mobile aux stats `fortnite`
* Optimisation globale du cache des serveurs, nous ne garderons en cache que les infos des serveurs qui ont DraftBot sur leur serveur.

### Résolutions des bugs

* Fix bug des achats d'articles depuis les commandes personnalisées
* Modification de la commande `userinfo`:
  * Les éléments status, activité, surnom, et appareil ont été retirés
* Fix du système de lexique \(les ensemble de mots sont maintenant détectables\)
* La désactivation du système de ticket ne supprimeras plus, ni la catégorie, ni les salons de tickets \(demande la communauté\)
* Suppression de la commande translate suite à une inaccessibilité quasi permanente à l'api de traduction
* Suppression de la fonctionnalité "no xp" pour les membres en mode invisible \(demande de Discord\)
* Fix bug de top.gg qui n'était plus mis à jour.

## 4.11.5 - 19/10/2020

### Ajouts

* Ajout de la possibilité d'utiliser tous les signes mathématiques ASCII `+﹢⁺₊＋-﹣⁻₋-﹡×÷⁄/`
* Ajout de la possibilité d'avoir le prefix de DraftBot en le mentionnant
* Ajout de la fonctionnalité de plage horaire des messages récurrents
* Ajout de la commandes `!votes` avec comptage des votes dans les webhooks
* Ajout des infos Appareil et Activité à la commande `userinfo`
* Ajout de la possibilité de terminer un giveaway
* Ajouts de modes pour les rolereact
* Ajout du `diagnose support`
* Ajout de la fonctionnalité d'anniversaires
* Anniversaire ajouté au profile
* Ajout d'une boucle toutes les 6h pour s'assurer que l'activité de DraftBot s'est pas désactivée

### Modifications

* Mise à jour des titres des embeds des commandes `toplevel` et `topmoney`
* Sécurisation de la suppression des salons de la commande `backup`
* Changement de catégorie la commande `wordreact` vers interaction
* Séparation de la commande `userinfo` en deux commandes `userinfo` et `profil`
* Vérification des messages lors de l'édition \(`admininvites` et `filter`\)

### Résolutions de bugs

* Bug du `clearchannel` dans un salon communautaire
* Correction du bug des commandes non désactivées
* Fix de la commande `filter` lorsqu'il y a trop de mots a afficher

## 4.11.4 - 27/09/2020

### Nouvelles fonctionnalités 

* Ajout de la fonctionnalité `report`
* Ajout de la feature commandes custom \(create, reset, fonctionnement\)
* Ajout du système de dés complet
* Refonte totale des `autoroles` pour en avoir plusieurs \(3 non premiums\) \(5 max\)

### Changements DraftBot

#### Ajouts

* Ajout du vanish a la commande `puissance4`
* Ajout de la fonctionnalité `diagnose view`
* Ajout de la fonctionnalité `diagnose rewards`
* Ajout de la limite des 250 caractères max et 20 min pour la description custom
* Ajout du temps que le bingo a duré dans le footer de l'embed de fin
* Ajout de l'xp de l'utilisateur dans les récompenses
* Ajout de l'argent de l'utilisateur dans le `shop`

#### Général

* Refonte totale des autoroles pour en avoir plusieurs \(3 non premiums - 5 pour les premium\)
* Nombreuses fautes d'orthographes réglés
* Design et ergonomie du marché noir retravaillé
* Messages de captcha supprimés après validation ou dans le cas d'erreurs 6 secondes
* Salons de la commande `diagnose` triés
* Les premiums sont maintenant stackable jusqu'à 5 serveurs
* Amélioration de l'affichage de la commande `groupes`
* Catégorie de la commande `admintickets` changé
* Auto-suppression des messages de `captcha`
* Fonctionnalité d'import de niveaux de MEE6 dans la commande déplacé de la commande `config` vers`adminlevel`
* La demande de la description de ticket n'est plus demandé lors de la commande `!ticket` si le système est désactivé
* Mise à jour des permissions requises pour le `puissance4`
* Blocage de l'activation du premium si il est déjà activé par quelqu'un d'autre sur le serveur en question
* Modification Premium : 
  * Premium à vie passé de 5 serveurs à 1
  * Premium 1 an passé de 5 serveurs a 3
* Mise à jour de la page des fonctionnalités premium de la commande `!premium` \(plus de 10 commandes perso, plus de 3 autoroles\)
* Mise à jour du message qui demande quel message envoyer avec conseil de passer sur l'embed creator avec un lien
* Amélioration du design du `diagnose mute`
* Amélioration du message des `privateroom`

### Changements Panel Web

* Sélection des commandes dans le roleperms rendu plus précis.
* Adminlevel possibilité de sélectionner plusieurs rôles et plusieurs salon à ignorer en une fois
* Bug au niveau de l'affichage des récompenses supprimés réglé
* Ajout de la page custom commandes au panel web
* Ajout de la page messages récurrents
* Liste des commandes sur le site et sur le panel de config des commandes mise à jour \(customcommand, report, rolldice\)
* Possibilité de voir des emojis custom animés sur le module d'embeds \(customcommand, embedcreator, repeatmsg\)

### Résolutions de bugs

* Bug de la page levels lorsque l'on est connecté réglé
* Bug du rabbitmq qui crash réglé
* Bug du serveur premium qui ne s'active pas après son activation sur le site \(cache non actualisé\) résolu.
* Bug des participants fantômes réglé pour la commande giveaway
* Erreur ajouté quand on essaye de clearchannel un salon de la communauté
* Bug des premiums non retirés réglé
* Bug des utilisateurs supprimés pour le saveconv réglé
* Bug de l'icon custom dans le footer du shop réglé
* Problème avec la taille des raisons dans la commande sanctions résolu \(toutes les raisons sont maintenant limités a 1000 caractères\)
* Impossible de give plus de 1000 niveaux
* Bug des autoroles lorsque l'option désactivé était activé sur l'ancienne version
* Bug du `!report config` lorsqu'un membre s'appelle config résolu
* Bug du help lorsqu'il n'y a pas de custom commandes \(affiche &gt;&gt;&gt; et n'affiche pas pas la commande `!customcommand`\)
* Bug du salon par défaut de logs quand un salon vocal s'appelle logs
* Bug des repeats messages qui se mettent pas à jour après la sauvegarde des modifications
* Bug des liens déjà visités dans le contenu du message d'un embed creator
* Blocage des actions des custom commandes sans contenu \(Action message sans message, Ajout ou suppression de rôles sans rôles, Achat d'article sans article\)
* Lorsque le nombre de custom commandes dépasse les 10 pour les premiums, les commandes restent créables mais sont ignorés, et mis en rouge, si le nombre est de 20 commandes le bouton se grise et la création est limité à 20 commandes
* Correction du messages de adminlevel ignore qui faisait une erreur
* Correction du problème de calcul des niveaux dans l'adminxp add
* Correction du problème du backup avec les salons news
* Correction du problème des messages invalides qui coupaient le processus des commandes rules et rolereact
* Correction du problème de giveaway sans fin
* Mise à jour de la date des timestamps embeds des repeat messages
* Correction du message de ban qui posait problème si le membre était parti
* Gestion des problèmes de perms lors de l'ajout de rôles dans les custom commandes
* Bug des custom-commandes mises en maj dans la config qui fonctionnaient pas
* Suppression de la suppression des anciens salons lors d'une configuration de la fonctionnalité de tickets
* Bug des règles sur un message sans embed réglé
* Bug des autorôles dans la commande config
* Bug dans le pendu lorsque l'on donnait deux lettres consécutives en même temps

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

