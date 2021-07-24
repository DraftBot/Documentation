---
description: >-
  Voici la liste de tous les changements effectués datés et décris depuis la
  version 4.11.2.
---

# Changelog

## 4.13.7 - 24/07/2021 <a id="4-13-7"></a>

### ✨ Nouveautés

*  Nouvelle commande `temprole` pour ajouter un rôle temporairement à un membre.
* Intégration des rôles temporaires à l'ensemble de l'écosystème de DraftBot :
  * Commandes personnalisées
  * Récompenses de niveaux
  * Articles d'économie
  * Récompense de giveaway
* Ajout de la possibilité à DraftBot de jouer au morpion.
* Ajout de difficultés aux jeux `puissance4` & `morpion`.
* Ajout de 3 nouvelles variables : **{date}**, **{time}** et **{timestamp}** qui permettent respectivement d'afficher la date et l'heure et le timestamp en secondes.
* Amélioration du sélecteur d'émojis \(émojis personnalisés en haut de liste\) et du sélecteur de rôles multiples sur le panel.
* Amélioration de le commande `userinfo` \(badge pour les membres de l'équipe et suppression du tag qui était déjà dans la description\).
* Optimisation de la commande `admininventory`.

### ♻️ **Corrections**

* Nombreuses optimisations ayant pour objectif de réduire les problèmes de déconnexion causés par la latence l'API de Discord.
* Bug au niveau de la couleur des rôles dans le champ de sélection des rôles boosters.
* Bug présent lors d'un envoi de message d'erreur pour le captcha.
* Bug présent lors de la création de messages d'anniversaires personnalisés avec le mode lock \(depuis la commande\).
* Bug présent lors d'un `adminreward update` d'un rôle supprimé.
* Bug présent lors du relancement d'une action temporaire.
* Bug présent dans la sélection de durée qui prenait l'unité mois par défaut au lieu de minutes.

## 4.13.6 - 15/07/2021 <a id="4-13-6"></a>

### ✨ Nouveautés <a id="nouveautes"></a>

* Nouvelle commande `sell` vous permettant de vendre vos items d'inventaire aux autres membres \(avec logs\).
* Possibilité de désactiver la suppression du ticket s'il est fermé par un admin \(`admintickets config`\).
* Ajout de la commande `!diagnose commande` pour afficher le statut, les rôlesperms et les channelperms d'une commande.

### ♻️ **Corrections** <a id="corrections"></a>

*  Ajout d'un délais de 15 minutes par 10 utilisations de la commande `say` afin d’éviter le spam.
* Correction d'un bug avec l'envoi des webhooks lors d'un `moveconv` d'un message de bot.
* Correction d'un bug présent dans les logs de récompenses de niveau au retour d'un membre.
* Correction des vérifications de permissions pour le système de messages récurrents.
* Quelques corrections sur la page de niveaux \(espacement + ordre des récompenses\).
* Correction du problème avec la position du salon avec le `clearchannel` lorsque le salon se trouve dans une catégorie.
* Correction de la liste de toutes les permissions nécessaires à la commande `!help <commande>`.
* Correction d'un bug présent au niveau du changement de salon pour les logs.
* Tri des permissions lors de leur affichage sur l'ensemble des fonctionnalités.
* Ajout de l'alias "game" pour la commande de jeux Discord.

## 4.13.5 - 14/07/2021 <a id="4-13-5"></a>

### ♻️ **Changements**

*  Correction du message de confirmation de mise à jour d'un rôle de la boutique lorsque l'ancien rôle est supprimé \(`adminshop update`\).
* Ajout d'un message d'erreur dans la commande `level` & `money` lorsqu'une photo de profil est invalide.
* Ajout d'un message d'erreur approprié lorsque le plateau de jeu du puissance4 ou du morpion est supprimé juste avant le tour suivant.
* Ajout d'un message d'erreur dans la commande de règlement lorsque le règlement est supprimé pendant l'ajout d'une règle.
* Ajout d'un message d'erreur \(et émojis remis par défaut\) dans le système de suggestions si l'un des émojis perso a été supprimé.
* Correction d'un bug présent dans la commande `adminlevel ignore` \(message pour la demande du salon\)
* Correction d'un bug présent dans les commandes custom lorsque le rôle voulant être ajouté/retiré est déjà possédé ou non par le membre.
* Messages d'xp ou d'argent ignorés si le membre n'est pas encore en cache afin d'éviter de futurs erreurs ou ratelimits \(max 10min d'attente après un redémarrage\)
* Correction d'un bug présent dans la commande `adminxp` qui permet d'avoir un niveau négatif.
* Correction d'un bug présent lors de la génération des images sur le panel lorsque l'utilisateur n'a pas de photo de profil.

## 4.13.4 - 12/07/2021 <a id="4-13-4"></a>

### ♻️ **Changements** <a id="changements"></a>

* Correction d'un bug présent lors de l'utilisation de la fonctionnalité ban dans le cas où le membre est au dessus de DraftBot.
* Correction d'un bug présent dans l'autorole lorsque tous les rôles ont été supprimés.
* Correction du problème présent lors d'un changement de salon pour les logs.
* Multiples vérifications ajoutés au système de captcha afin d'assurer son bon fonctionnement.
* Ajout des salons vocaux et stages dans le sélecteur du panel web.
* Correction d'un bug présent dans le système d'administration des tickets.

## 4.13.3 - 12/07/2021 <a id="4-13-3"></a>

### **✨ Ajouts & Améliorations** <a id="ajouts-ameliorations"></a>

* Ajout de la commande `games` pour jouer aux applications de Discord \(Fishington, Échecs, YouTube, Betrayal & Poker\).
* Optimisation du temps requis pour le lancement de tous les shards: `25` =&gt; `15` minutes. 
* Amélioration du sélecteur de salons sur le panel \(nom de la catégorie, icones en fonction du type, salons vocaux, stages, catégories, message lorsqu'il n'y a pas résultats lors d'une recherche\)
* Amélioration des logs de pseudos en ajoutant l'ancien pseudo.
* Ajout d'une rétrogression des rôles uniques lors d'une suppression d'expérience manuelle avec la commande `adminxp`.
* Optimisation des questions demandant un ou plusieurs salons.

### ♻️ **Corrections** <a id="corrections"></a>

* Correction d'un problème avec les rôles évolutifs lorsque l'on quitte et rejoint à nouveau un serveur.
* Correction d'un bug présent dans la restauration de la fonctionnalité backup.
* Correction d'un problème de permissions présent dans la fonctionnalité d'acceptation de suggestions \(`suggest accept`\).
* Correction d'un problème lors de l'utilisation de l'argument français `accepte` de la fonctionnalité de suggestions.
* Correction d'un problème présent lorsque les limites de webhooks sont atteintes pour les logs.
* Correction d'un bug après le délais des 30s à la question du rôle d'anniversaire.

## 4.13.2 - 08/07/2021 <a id="4-13-2"></a>

### ♻️ **Changements** <a id="changements"></a>

* Correction du système de sondages dans le résumé.
* Correction du bug présent dans le saveconv.
* Amélioration de la récupération des participants du giveaway.
* Correction d'un bug présent dans les logs de changements de permission d'un salon si aucune permission n'est ajoutée au rôle ou membre sélectionné.
* Amélioration du captcha. \(plus précis & arrêt du système si le membre quitte le serveur\)
* Correction de l'emoji qui ne s'affiche pas dans les commentaires des suggest accept & refuse.
* Réécriture et optimisations des systèmes supportant les réactions. \(events, rôle réactions, tickets\)
* Correction d'un bug présent dans les autoroles.
* Correction d'un bug de génération des images d'annonces de réception de récompenses.
* Correction des bugs dans les messages d'infractions bloquant aussi les auto-sanctions.
* Correction d'un bug présent dans les dates d'anniversaire.
* Correction de l'authentification sur le panel depuis la commande panel + redirection après avoir invité DraftBot.
* Ajout de l'accès à la page serveurs aux serveurs premium même lorsqu'ils ont moins de 100 membres.
* Correction de tous les logs provenant des actions du panel.
* Correction des logs de sanctions temporaires.

## 4.13.1 - 06/07/2021

### ♻️ Corrections <a id="corrections"></a>

* Correction du bug présent lors de l'affichage de la commande `!welcome show`. 
* Ajout de l'aide des commandes \(`suggest accept` & `suggest refuse`\) dans la page communautaire sur le panel pour l'option de modération.
* Correction du bug des logs d'invitations lorsqu'il n'y en avait pas.
* Correction du bug présent dans l'affichage des anniversaires du jour dans la commande `!birthday`. 
* Correction du bug présent dans les embeds des commandes personnalisées lorsqu'il n'y avait qu'un seul embed.
* Correction d'un bug présent avec les webhooks des commandes de conversations.
* Correction d'un bug au niveau de la commande `suggest <accept/refuse>` lorsqu'il n'y avait pas de raison.
* Mise en privé de la liste des serveurs sur le userinfo \(réservée aux membres de l'équipe de DraftBot\). 
* Correction du lock des serveurs premium sur le panel.
* Correction d'un bug présent lors de l'activation de la mention dans le système de reports.
* Correction d'un bug de mentions lors de messages d'annonces d'anniversaire.

## 4.13.0 - 05/07/2021

### ✨ **Nouveautés** <a id="nouveautes"></a>

* **🎂 Nouveau système d'anniversaire :**
  * Annonces d'anniversaire : 
    * Heure d'envoi personnalisée
    * Whitelist/Blacklist de rôles autorisés
    * Mention d'un rôle
    * Choix du salon
  * Rôle d'anniversaire temporaire le jour de l'anniversaire :
    * Rôle donné et retiré à minuit
      * Whitelist/Blacklist de rôles autorisés
    * Cadeaux d'anniversaires. \(Rôle, Xp, Argent, Item, Custom\) \(2 sans premium et 5 avec le premium\)
  * Annonces ciblées illimitées : \(premium\)
    * Membre ou rôles
    * Création du message avec l'Embed Creator
      * Blocage de la possibilité de voir le message pour la personne ciblée.
* **📂 Nouveau système de logs :**
  * Logs catégorisés
  * Logs des actions du panel
  * Logs avec des Webhooks
  * Logs pour les infractions
  * Refonte du design de tous les logs
  * Couleur de l'embed personnalisé
  * Possibilité d'ignorer des salons dans les logs
  * Salon personnalisé pour chaque type de logs
    * Avatar personnalisé pour chaque type de logs \(premium\)
    * Couleur personnalisée de l'embed pour chaque type de logs \(premium\)



* Ajout de Minecraft dans le gameprofil
* Ajout de la fonctionnalité channelperms pour interdire les commandes à certains salons
* Ajout des commandes `!react` & `!rappel`
* Ajout de la possibilité d'accepter ou de refuser une suggestion \(`suggest accept`/`suggest refuse`\)

### 🌐 Panel web

* Ajout du système d'onglets sur l'Embed Creator \(2 ou 5, si le serveur est premium ou non\)
* Ajout de la page communautaire \(suggestions & signalements\)
* Ajout du badge "Premium" sur le panel pour les serveurs qui le sont
* Invitation de DraftBot dans une fenêtre popup avec redirection vers le panel sans rechargement de page
* Ajout du choix de la devise depuis le panel pour les serveurs premiums
* Amélioration du sélecteur d'emojis sur le panel
* Correction d'une faille avec le CTRL+V dans les champs
* Embed Creator : 
  * Correction d'un bug qui cachait les \`codes\` dans les fields de l'Embed Creator
  * Augmentation jusqu'à 4096 caractères pour la description d'un embed
* Limite de modifications de la date d'anniversaire \(avec affichage du temps restant avant la prochaine modification\)
* Accessibilité aux serveurs des shards, même lorsque d'autres ont crash ou sont pas encore lancés
* Optimisation du site en chargeant Stripe que sur la page premium
* Amélioration des sélecteurs de rôles, ils sont maintenant sélectionnables avec les flèches directionnelles du clavier
* Possibilité de modifier les rôles & salons interdits/autorisés des commandes par groupe
* Augmentation du nombre de caractères dans l'Embed

### ♻️ Autres changements

* Ajout des nouveautés premium à la commande et à la [page premium](https://www.draftbot.fr/premium)
* Possibilité de doubler l'xp et/ou l'argent si le message fait plus de 250 caractères
* Possibilité de réinitialiser l'xp ou l'argent d'un membre lorsqu'il quitte le serveur
* Possibilité de demander à l'utilisateur une confirmation avant l'envoi de sa suggestion
* Augmentation des commandes personnalisées de 50 à 100 pour les serveurs premiums
* Amélioration du mute :
  * Texte : ❌ Réactions & envoyer des messages
  * Vocal : ❌ Se connecter & parler
  * Conférence : ❌ Demande de parole
* Réécriture de tous les logs
* Réattribution des rôles récompenses au retour d'un membre sur le serveur
* Possibilité en tant que modérateur des tickets d'ouvrir un ticket pour un membre \(`adminticket open`\) 
* Possibilité d'ajouter des images aux reports \(de membres\) et récupération des images des messages \(pour les reports de messages\)
* Activation automatique du slowmode lors de l'activation d'un interserveur
* Refonte et optimisation du système de giveaways
* Refonte et optimisation du système d'inventaires
* Correction de la pagination du shop, des récompenses, des commandes personnalisées
* Pré-shot de la fonctionnalité "Niveau de suretée" sur la commande `!guildinfo`
* Ajout d'un message de confirmation après la création d'un ticket
* Amélioration du système d'anti-spam d'emojis, \(les variantes d'émojis ne sont plus comptés comme des émojis à part entière\)
* Ajout de nombres au système de sondage afin de s'y retrouver plus simplement
* Augmentation de la limite de caractères pour la question des sondages: 100 =&gt; 250
* Ajout du temps restant avant de pouvoir refaire la commande `backup restore`
* Ajout des bots du serveur dans la commande `diagnose support`
* Lorsqu'un modérateur des tickets ferme un ticket, le salon ne sera plus obligatoirement supprimé
* Possibilité d'échapper les variables dans les messages \(pour faire des exemples\) \(`\<user.username>`\)

## 4.12.1 - 17/04/2021 <a id="4-12-1"></a>

### ✨ **Nouveautés** <a id="nouveautes"></a>

* `dropmoney` & `dropxp` : Ces deux nouvelles commandes vous permettrons de faire gagner une certaine somme d'xp ou d'argent à la première personne cliquant sur la réaction.
* `admininfraction` & `adminsanction` : Ces deux nouvelles commandes vous permettrons de gérer les infractions et sanctions de vos membres. \(réinitialisation des infractions/sanctions du serveur et le retrait/réinitialisation de sanctions/infractions d'un membre\)
* `adminticket` : Ajout de la possibilité d'ajouter plusieurs rôles modérateurs à la gestion des tickets.
* `report` : Possibilité de mentionner un rôle lors d'un signalement d'un de vos membres.
* `copyconv` : Ajout d'une nouvelle commande vous permettant de copier une conversation à l'image de la commande `copymsg`
* `welcome`/`goodbye`/`customcommand`/`adminreward`/`adminlevel` : De nouvelles variables sont disponibles \(membre, serveur & salon\)
* `automoderation filter` : Ajout d'un mode strict \(choisissez si vous souhaitez détecter uniquement les mots exacts\).

### ⚡️Améliorations

* `repeatmsg`: Un message récurent ne s'enverra pas si le dernier message est le même message récurent.
* `ticket` : Suppression du message de confirmation de création d'un ticket après 10 secondes.
* `autosanctions` : 
  * Ajout de la possibilité d'ajouter une durée aux autosanctions qui n'ont comme déclencheur une seule infraction.
  * Ajout dans les logs du serveur des sanctions effectuées par l'auto-sanction.
* `brawlhalla` : Ajout des dernières armes & brawlers.
* `sondage` : Ajout de l'alias `poll`
* `vocalrole` : Les salons AFK du serveur ne permettront plus le rôle "Vocal".
* `config` : Ajout d'un message de résumé à la fin de la commande.
* Global : Amélioration de la découpe des éléments lorsque plusieurs sont attendus dans un message \(retours à la ligne & guillemets d'iPhone\).
* Commandes utilisant un système de pages : Amélioration du système de pagination.
* Systèmes utilisant des webhooks : Les webhooks peuvent maintenant supporter des fichiers et les mentions sont tout le temps désactivées.
* Panel web : 
  * Auto-Sanction : Amélioration de l'affichage pour une meilleure compréhension.
  * Economie : Ajout de la limite de l'argent de départ.

### 🐛 Résolutions de bugs

* `brawlhalla` : Si le joueur n'avait pas de clan, la commande tournait en boucle.
* `privateroom` : Correction du bug d'auto-whitelist des salons.
* `inventory` : Argent masqué si le système d'économie est désactivé.
* `automoderation filter` : Ajout d'une limite de 30 caractères par mot dans le filtre de mots.
* `event` : Correction du bug avec rôles si l'objectif n'était pas atteint.
* `adminreward` : Correction du bug des récompenses qui s'affichent mal dans les messages depuis la variable **{reward}**
* Panel web : 
  * Commandes personnalisées : Correction du bug de drag&drop dans les étapes

## 4.12.0 - 25/03/2021 <a id="4-12-0"></a>

### ✨ Nouvelles fonctionnalités

* Auto-Modération \(disponible également sur le panel\)
  * **Filter:** filtre de mots \(configuration de mots, whitelist de rôles et de salons, possibilité de désactiver la censure\)
  * **Invites:** Anti invitations discord \(whitelist de rôles et de salons, possibilité de désactiver la censure\)
  * **Liens:** Anti invitations discord \(possibilité de whitelist des noms de domaines, whitelist de rôles et de salons, possibilité de désactiver la censure\)
  * **Anti-spam:** Anti spam de messages \(configuration du temps ainsi que du nombre de messages autorisés, whitelist de rôles et de salons\)
  * **Mentions:** Anti spam de mentions \(\(configuration du temps ainsi que du nombre de mentions autorisés, whitelist de rôles et de salons\) \(spécial car entre messages\)
  * **Emojis:** Anti spam d'emojis \(\(configuration du pourcentage d'emojis ainsi que du nombre du nombre d'emojis autorisés, whitelist de rôles et de salons\)
* Auto-Sanctions \(disponible également sur le panel\) : Ajout de règles de sanctions suite aux infractions de l'automodération
* Sticky roles : Ces rôles seront conservés même après un retour sur le serveur, le rôle mute par exemple.

### ➕ Ajouts

* `inventory` : Ajout de la possibilité d'afficher l'inventaire d'un autre membre
* `customcommand` : Ajout de points de vérification pour que la commande ne continue pas les étapes si l'étape précédente n'a pas été réalisée.
* `adminreward` : Ajout de la possibilité de changer l'unicité d'un rôle reward depuis l'argument update
* `rolereact` : Ajout d'une erreur si on dépasse les 20 réactions autorisés par Discord.
* `ticket` : Ajout d'un message d'erreur si on dépasse les 50 tickets dans la catégorie
* `puissance4`: Ajout du curseur pour voir quel était le dernier mouvement de l'adversaire
* `joke` : Ajout de la possibilité de désactiver des types de blagues \(**dark** et **limit** désactivés par défaut\)
* `wordreact` : Ajout de la possibilité de mettre des débuts de phrases plus uniquement des mots
* `privateroom`: Ajout de la possibilité de rendre permanents des salons vocaux dans une catégorie de privateroom
* `logs` : Ajout de la date de création du compte Discord dans les logs d'arrivés systématiquement
* `suggest` : Ajout de la possibilité de mettre des images dans les suggestions
* `clear` : Ajout de la possibilité de supprimer les messages d'un membre \(même s'il n'est plus sur le serveur\)
* `gameprofil` : Ajout du jeu Plato \(disponible également sur le panel web\)
* Panel web : 
  * Récupération de la couleur et du pseudo de DraftBot \(Embed Creator & Messages récurrents\)
  * Commandes personnalisées : 
    * Ajout de la possibilité de changer l'ordre des étapes en drag-and-drop
  * Embed Creator : 
    * Ajout des fields en une ligne
    * Récupération de la couleur et du pseudo de DraftBot pour l'embed creator ainsi que pour le repeat-message
* `infractions` : Ajout de la commande pour voir les infractions d'un membre
* Global : Ajout de la possibilité de sélectionner 332 emojis nouveaux dans les différents systèmes de DraftBot

### ⚡️Améliorations <a id="ameliorations"></a>

* `survey` : Amélioration de l'affichage
* `birthday` : Amélioration globale de l'affichage de la commande
* `diagnose mute` : Amélioration de la détection des salons fonctionnels
* `votes` : Amélioration de la commande
* `roleperms` : Ajout d'une priorité pour les membres admins \(accès à toutes les commandes\)
* `adminreward` :
  * Suppression des récompenses reçues lorsque l'on reset toutes les récompenses afin que les nouvelles récompenses puisses être reçues à nouveau
  * Suppression automatique des récompenses d'un membre si son xp redescend en dessous du seuil de la récompense
* `maths` : Gestion de toutes les variantes de caractères mathématiques
* `autorole` : Ajout d'un avertissement si les rôles ne sont pas accessibles lors de la configuration
* `logs` : Amélioration des logs de modification et création d'un rôle
* `giveaway`, `event` & `survey` :
  * Si le salon cible n'a pas les permissions requises DraftBot vous donne un délai pour en sélectionner un autre ou changer les permissions
  * Si le rôle à ajouter n'est pas accessible ou ne pourra pas être ajouté, il laisse également un délai supplémentaire pour en sélectionner un autre ou changer la hiérarchie
* `buy` : Blocage lors de l'achat d'un rôle si la personne l'a déjà
* `botinfo` : Amélioration de l'affichage des nombres
* `privateroom` : Affichage des arguments si la personne est admin sinon on affiche le message de présentation
* `event` : Amélioration de l'affichage des dates
* `giveaway` : Proposition de l'activation des système de niveaux et d'économie s’ils sont désactivés lors de la création d'un giveaway avec ajout d'xp ou de money
* Panel web : 
  * Amélioration du champ anniversaire
  * Vérification de la faille des images avant l'envoi au serveur afin de prévoir les erreurs en avance
  * Améliorations sur la popup de création et de mise à jour d'une récompense et des articles
  * Ajout de la possibilité de réglementer l'accès aux commandes aux rôles Twitch et bots

### ♻️ Autres changements <a id="autres-changements"></a>

* `clearchannel` : vérification des salons de modération et de règlement avant exécution de la fonctionnalité
* `adminmoney` : addition minimal mise à 0 \(afin d'éviter les ajouts négatifs et suppressions positives\)
* `adminxp` : Ajout de la vérification des récompenses lors de l'achat d'xp ou modification manuelle de l'xp
* `inventory` : Ajout de vérifications supplémentaires pour ne pas dépasser le nombre autorisé d'items dans l'inventaire
* `filter` & `admininvites` : Déplacement de ces deux commandes dans la commande **automoderation** \(commande de rappel en cas d'oubli\)
* `wordreact` : Le reset du système mettra plus les wordreact par default, il laissera une liste vide et désactivera le système
* `giveaway` & `event` : Suppression des giveaway & events si le message a été supprimé pour ne plus être limité
* Global : 
  * Refonte du fonctionnement d'ajouts de rôles sur tout le bot, si des rôles ne sont pas ajoutables ils seront retirés des rôles à ajouter afin que les rôles n'ayant aucun problème soient ajoutés suivis d'un message d'erreur pour uniquement les rôles concernés
  * Récupération de tous les membres en cache afin de proposer des données tout le temps complètes
  * Ajout de raisons détaillées à toutes les actions dans les audit logs de Discord afin de comprendre pourquoi DraftBot à fait tel ou tel action: création de rôles, de salons, de webhooks, attribution de rôle, changement sur le serveur
  * Ajout et suppression automatique des rôles premium sur le Support Discord

### 🐛 Résolutions de bugs <a id="resolutions-de-bugs"></a>

* `membercount` : Fix des problèmes de comptes
* `bingo` : Fix bug avec nombres négatifs
* `roleperms add` : Fix de bugs
* `admineconomy` : Fix du bug d'argent de départ dans l'économie
* `adminrole` : Fix d'une faille
* `apex` : Fix du bug si le pseudo contient des espaces
* `birthday` & `description` : Correction des bugs présents sur le système d'anniversaire ainsi que sur le système de description
* Panel web : 
  * Fix de la prévisualisation des slots de l'Embed Creator
  * Fix de l'actualisation des images dans les embeds dans les messages récurrents 
  * Fix du bug dans le champ qui empêchait la sauvegarde des descriptions

## 4.11.6 - 24/12/2020 <a id="4-11-6"></a>

### ✨ Nouvelles fonctionnalités <a id="nouvelles-fonctionnalites"></a>

* `event` pour organiser des regroupements de participants
* Inventaire avec nouveaux items d'inventaire
  * Ajout d'une nouvelle commande `deal` pour effectuer des échanges d'objets
* `sondage` avec génération d'image, timer de fin \(optionnel\), statistiques
* Localité sur le `profil` \(personnalisable avec `locality`\)
* Commande `panel` pour être redirigé vers son profil ou le panel du serveur

### ⚡️Améliorations <a id="ameliorations"></a>

* Refonte de la fonctionnalité `admininvites`:
  * Plus de message privée
  * Détection de toutes les invitations
  * Fix des liens Discord qui étaient pris pour des invitations
  * Censure des invitations
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

### 🌐 Panel web <a id="panel-web"></a>

* Suppression de la fonctionnalité "no xp" pour les membres invisibles
* Page profil \(anniversaire, description, jeux\)
* Gestion du Premium
* Ergonomie globalement amélioré \(déroutant de rôles et certains trucs optimisés\)
* Fix du bug du Embed Creator qui scrollait up s'il estimait que le texte était trop long

### ♻️ Autres changements <a id="autres-changements"></a>

* Lors de l'activation ou la désactivation des commandes, le nom d'une commande aura la priorité sur le nom d'un groupe.
* Ajout du support de Fortnite Mobile aux stats `fortnite`
* Optimisation globale du cache des serveurs, nous ne garderons en cache que les infos des serveurs qui ont DraftBot sur leur serveur.

### 🐛 Résolution de bugs

* Fix bug des achats d'articles depuis les commandes personnalisées
* Modification de la commande `userinfo`:
  * Les éléments status, activité, surnom, et appareil ont été retirés
* Fix du système de lexique \(les ensemble de mots sont maintenant détectables\)
* La désactivation du système de ticket ne supprimeras plus, ni la catégorie, ni les salons de tickets \(demande la communauté\)
* Suppression de la commande translate suite à une inaccessibilité quasi permanente à l'api de traduction
* Suppression de la fonctionnalité "no xp" pour les membres en mode invisible \(demande de Discord\)
* Fix bug de top.gg qui n'était plus mis à jour.

## 4.11.5 - 19/10/2020 <a id="4-11-5"></a>

### ➕ Ajouts <a id="ajouts"></a>

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

### ♻️ Modifications

* Mise à jour des titres des embeds des commandes `toplevel` et `topmoney`
* Sécurisation de la suppression des salons de la commande `backup`
* Changement de catégorie la commande `wordreact` vers interaction
* Séparation de la commande `userinfo` en deux commandes `userinfo` et `profil`
* Vérification des messages lors de l'édition \(`admininvites` et `filter`\)

### 🐛 Résolutions de bugs <a id="resolutions-de-bugs"></a>

* Bug du `clearchannel` dans un salon communautaire
* Correction du bug des commandes non désactivées
* Fix de la commande `filter` lorsqu'il y a trop de mots a afficher

## 4.11.4 - 27/09/2020 <a id="4-11-4"></a>

### ✨ Nouvelles fonctionnalités  <a id="nouvelles-fonctionnalites"></a>

* Ajout de la fonctionnalité `report`
* Ajout de la fonctionnalité de commandes personnalisées \(create, reset, fonctionnement\)
* Ajout du système de dés complet
* Refonte totale des `autoroles` pour en avoir plusieurs \(3 non premiums\) \(5 max\)

### ♻️ Changements DraftBot

#### ✨ Ajouts <a id="ajouts"></a>

* Ajout du vanish a la commande `puissance4`
* Ajout de la fonctionnalité `diagnose view`
* Ajout de la fonctionnalité `diagnose rewards`
* Ajout de la limite des 250 caractères max et 20 min pour la description custom
* Ajout du temps que le bingo a duré dans le footer de l'embed de fin
* Ajout de l'xp de l'utilisateur dans les récompenses
* Ajout de l'argent de l'utilisateur dans le `shop`

#### 🔧 Général

* Refonte totale des autoroles pour en avoir plusieurs \(3 non premiums - 5 pour les premium\)
* Nombreuses fautes d'orthographes réglés
* Design et ergonomie du marché noir retravaillé
* Messages de captcha supprimés après validation ou dans le cas d'erreurs 6 secondes
* Salons de la commande `diagnose` triés
* Les premiums sont maintenant stockable jusqu'à 5 serveurs
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

### 🌐 Changements Panel Web

* Sélection des commandes dans le roleperms rendu plus précis.
* Possibilité de sélectionner plusieurs rôles et plusieurs salon à ignorer en une fois dans la page dédié aux niveaux
* Bug au niveau de l'affichage des récompenses supprimés réglé
* Ajout de la page custom commandes au panel web
* Ajout de la page messages récurrents
* Liste des commandes sur le site et sur le panel de config des commandes mise à jour \(customcommand, report, rolldice\)
* Possibilité de voir des emojis custom animés sur le module d'embeds \(commandes personnalisées, embed creator, message récurrents\)

### 🐛 Résolutions de bugs

* Bug de la page de niveaux lorsque l'on est connecté
* Bug du rabbitmq qui crash réglé
* Bug du serveur premium qui ne s'active pas après son activation sur le site \(cache non actualisé\) résolu.
* Bug des participants fantômes réglé pour la commande giveaway
* Erreur ajouté quand on essaye de clearchannel un salon de la communauté
* Bug des premiums non retirés réglé
* Bug des utilisateurs supprimés pour le saveconv réglé
* Bug de l'icon custom dans le footer du shop réglé
* Problème avec la taille des raisons dans la commande sanctions résolu \(toutes les raisons sont maintenant limités a 1000 caractères\)
* Impossible de donner plus de 1000 niveaux
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

## 4.11.3 - 02/08/2020 <a id="4-11-3"></a>

### ➕ Ajouts Welcome/Goodbye

* Pouvoir activer et désactiver directement \(`on` ou `off`\)
* Pouvoir afficher le message actuel
* Pouvoir reset toute la fonctionnalité
* Couleur embed \(premium\)
* Dégradé de fond \(pressets pour non premium\) et custom pour les premium
* Images de fond \(premium\)
* Message déplacé dans la description donc possibilité d'ajouter des liens
* Adaptation de panel pour la visualisation \(description\)

### ✉️ Changements Tickets

* `!ticket create` devient `!ticket`
* `!ticket config` devient `!adminticket config`
* Nouvelles fonctionnalités **add** et **remove** pour ajouter un membre au ticket `!adminticket`

### 💎 Changements Premium

* Les administrateurs peuvent maintenant ajouter le premium à leur serveurs
* Le premium est automatiquement après achat et une page propose d'activer à l'achat les serveurs \(toujours modifiable avec la commande\)
* Fermeture des inscriptions du Patreon

### 🎮 Jeux

* Amélioration du jeu Pendu \(jambe et édition du message\)
* Ajout du jeu Morpion

### ♻️ Autres changements

* Taille du welcome et du goodbye multiplié par deux pour l'affichage des petits téléphones
* Optimisation du système de level et de l'économie \(pouvait être lent quand les deux systèmes étaient activés\)
* Suppression du salon \#nouveaux-serveurs sur le support
* Refonte complète des messages de logs et conclusion des commandes de config
* Configuration des rôles permissions depuis la page Commandes du panel web avec l’icône ⚙️
* Ajout de la commande `!diagnose` pour connaître les problèmes de permissions avec le mute

## 4.11.2 - 23/06/2020 <a id="4-11-2"></a>

### ✨ Nouvelles fonctionnalités

* Nouvelle commande `!saveconv` permet de sauvegarder une conversation sous forme de page web
* Nouvelle commande `!qrcode` permet de générer un QRCode avec votre photo de profile au milieu 
* Nouvelle commande `!description` permet d'ajouter une description à votre profil globalement ou sur un serveur précis

### ⚡️Améliorations

* Pagination de la commande sanctions pouvant aller jusqu'à 50 sanctions
* Message en privé lorsqu'un donateur reçoit son premium
* Attribution des récompenses de niveaux améliorée, elles sont maintenant données dans l'ordre avec leur niveau correspondant
* Amélioration du design des messages de questions avec choix d'emojis
* Emojis customisés pour les commandes captcha, privateroom, ticket, interserveur, description

### 🌐 Panel Web

* Refonte des afficheurs de messages de bienvenue, d’au revoir, de niveaux et de récompenses avec un support complet du markdown de discord
* Ajout des emojis custom du serveur au sélecteur d'emojis des champs de texte
* Ajout des rôles boosters au panel web pour les niveaux et l'économie
* Ajout de la fonctionnalité Niveau maximum au panel \(réservé aux premiums\)
* Amélioration globale des pages de configuration pour les appareils mobiles

### 🐛 Résolutions de bugs

* Problème due à une mise à jour du jeu League of Legends résolu
* Problèmes avec quelques diagonales de puissance 4 résolus
* Problèmes avec certains emojis pour la devise personnalisée résolus
* Problèmes avec la réinitialisation du système de niveaux résolus
* Problème avec l'argent de départ après une réinitialisation de l'argent
* Problème avec la virgule du filter qui créait un bug

