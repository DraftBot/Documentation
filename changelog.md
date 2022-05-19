---
description: >-
  Voici la liste de tous les changements effectués datés et décris depuis la
  version 4.11.2.
---

# Changelog

## [4.15.9 - 06/05/2022](https://discord.com/channels/422112414964908042/599942732559024138/971917384124362762) <a id="4-15-9"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Ajout de la possibilité dans tous les systèmes de @DraftBot de cibler une catégorie au lieu d'un salon afin de sélectionner tous les salons enfants.
* Ajout de la possibilité dans tous les social-notifs d'envoyer les annonces dans les fils (même lorsque les fils sont archivés).
* Ajout de la possibilité de supprimer une récompense dont le rôle a été supprimé depuis le panel.
* L'affichage de la commande `!shards` a été améliorée afin d'afficher tous les shards de @DraftBot.
* Amélioration de l'interface du panel sur Safari IOS.

### 🐛 Corrections <a id="corrections"></a>

* Il y avait un bug dans la matrice de l'IA de DraftBot qui le rendait nul au morpion. 🤯
* Correction d'un bug qui prévalait l'égalité en cas de victoire.
* Le rôle "Live" sera de nouveau retiré correctement lors de la fin d'un live via présence.
* Il est de nouveau possible d'ajouter une chaîne Twitch, YouTube ou un Subreddit via la commande `!socialnotif`.
* Un bug a été corrigé dans les annonces EpicGames, empêchant leur envoi sur vos serveurs.

## [4.15.8 - 03/05/2022](https://discord.com/channels/422112414964908042/599942732559024138/970862861054267454) <a id="4-15-8"></a>

### 🐛 Corrections <a id="corrections"></a>

* Correction d'un bug présent dans les commandes de jeux `!puissance4` & `!morpion` qui pouvait empêchait leur bon fonctionnement.
* Correction d'un bug présent lors de la création d'un message récurrent via la commande `!repeatmsg`.
* Correction de la description de certaines commandes slash.

## [4.15.8 - 02/05/2022](https://discord.com/channels/422112414964908042/599942732559024138/970484865092960347) <a id="4-15-8"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Fusion des deux commandes `/send embed` & `/send say` en `/send`
* Changement de la structure des commandes réservées aux modérateurs (suggest & ticket) :
`/suggest send` => `/suggest`
`/suggest ****` => `/suggestmod ****`
* Déplacement de toutes les commandes d'émotions dans la commande slash `/interact` suite à l'accès aux slash-commandes via leur sous-commande.
* Optimisation du cache de Discord.

### 🐛 Corrections <a id="corrections"></a>

* Corrections de bugs qui empêchaient le changement de catégories dans le help.
* Correction d'un bug présent dans la suppression de tous les stickyroles d'un membre. 
* Correction d'un bug présent lors de l'enregistrement des slash commandes pour les privateroom.
* Correction d'un bug présent dans le `/gameprofil` qui empêchait l'enregistrement des profils sans plateforme.
* Correction d'un bug qui empêchait l'affichage de certaines URL d'annonces Epic-Games.
* Ajout d'un avertissement si un rôle ayant la permission "admin" est en train d'être ajouté aux rôlereact.
* Correction d'un bug présent dans le système de configuration d'un sélecteur pour le message d'ouverture de tickets.

## [4.15.7 - 29/04/2022](https://discord.com/channels/422112414964908042/599942732559024138/969370128091336734) <a id="4-15-7"></a>

### ✨ Nouveautés <a id="nouveautes"></a>

* Une amélioration des onglets de l'Embed Creator sur le panel fait son apparition dans cette version. 10 onglets au total, un nouveau design (desktop + mobile) et un scroll de la barre !
* Ajout de deux nouveaux jeux à la commande `/games` et `!apps` (Land-io et Putt Party).
* Très grosse réduction du délai établi pour les annonces Epic Games de 6h à moins de 10min.
* Il est désormais possible de ne sélectionner uniquement les domaines de liens interdits (bot + panel).
* Il est maintenant possible d'éditer le nom des rôle-reactions via un simple clic (au lieu d'un double précédemment).
* Ajout de la possibilité de coller une liste de mots clés sur le panel (pour les champs de mots clés) et tout sera ajouté.
* Ajout de la possibilité de choisir parmi plusieurs résultats dans la commande de `météo` et `tv`.
* Amélioration de tous les sélecteurs sur le panel afin que le déroulant s'ouvre en haut quand il n'y a pas de place en bas.

### 🐛 Corrections <a id="corrections"></a>

* L'affichage de la commande `daily` a été repris dans la version Slash de cette commande.
* Les images présentes dans les intégrations de liens pouvaient parfois être ré-upload lors de la censure.
* Le nombre de membres dans les commandes `serverinfo` est désormais plus lisible pour les serveurs ayant un certain nombre de membres.
* Certains problèmes d'affichages concernant des boutons qui sont toujours affichés, malgré que la commande ait été annulée, ont été corrigés.
* Des problèmes lors de la sauvegarde de plus de 100 messages dans un ticket ont été corrigés.
* Il est maintenant possible de définir l'argent de départ à 0 dans la commande `admineconomy config`.
* Correction du bug dans l'URL des jeux gratuits d'Epic-Games.
* Ajout de la somme totale d'argent dans le footer de l'embed du `daily`.
* Support de tous les émojis avec couleurs de peau, genrés et non genrés.
* Il est à présent possible d'avoir des émojis sous la forme `:emoji:` dans la boutique et dans le sélecteur.
- Changement de l'émoji utilisé lorsqu'il n'est pas possible d'afficher un émoji personnalisé pour la devise de l'économie `$` de `💰`.
* Ajout de la possibilité de lancer une commande de `/stats` sans pseudo afin de prendre l'exécuteur de la commande comme membre par défaut.
* Suppression des émojis dans le nom du serveur pour la génération du token d'interserveur.
* Correction d'un bug qui empêchait la suppression des récompenses et articles depuis le panel.
* Correction du bug qui empêchait de scroll jusqu'aux boutons de validation.

### ✨ Nouvelle slash-commands <a id="slash-commands"></a>
(Premium accès anticipé) (`!slash` pour les activer)

* Utilitaires : `backup`, `qrcode`, `send message`, `send embed`, `avatar`, `color`, `maths`, `react` et `weather` .
* Fun : `birthday`, `giveaway`, `survey`, `joke`, `love`, `rolldice`, `tv` et `youtube`.
* Interaction: `interserver`, `remindme`, `report`, `restrictemoji`, `rules`, `suggest` et `ticket`.

### ✨ Nouveau module open-source pour la météo 
 [(DraftBot/weather-js)](https://github.com/DraftBot/weather) (typescript, promesses, parsing xml rapide, suppression des dépendances dépréciées : request, xml2js etc...)


## [4.15.6 - 13/04/2022](https://discord.com/channels/422112414964908042/599942732559024138/963607891615559680) <a id="4-15-6-1"></a>

### 🗒️ Corrections  <a id="corrections"></a>

* Correction du bug critique qui désactivait certains serveurs premium (dans le cache uniquement) à 18h lors de la ronde de vérification des serveurs premiums.
* Correction d'un bug global sur le bot qui pouvait altérer certains gestionnaires de cache et donc ralentir certaines actions.
* Grosse amélioration des messages d'erreurs lis à la création de webhooks pour toutes les fonctionnalités les utilisant (logs, modération, commandes de conversations, inter-serveurs).
* Correction d'un problème présent dans plusieurs systèmes liés aux webhooks.

## [4.15.6 - 12/04/2022](https://discord.com/channels/422112414964908042/599942732559024138/963246541852774510) <a id="4-15-6"></a>

### ✨ Nouveautés  <a id="nouveautes"></a>

* Nouvelle fonctionnalité de stock d'articles (premium).
* Nouvelles commandes Slash: `Économie`, `Inventaire` ainsi que `Conversations`.

### 🗒️ Améliorations  <a id="ameliorations"></a>

* Amélioration du `!clear <search>` qui vérifie maintenant le contenu des embeds et ne tient plus compte des minuscules & majuscules.
* Refonte complète de la commande de statistiques `!overwatch` (présentation, émojis de héros + ranked).
* Refonte complète de la commande `/updatexp` pour une meilleure expérience utilisateur.
* Ajout de la possibilité de parler pendant une partie de `!pendu` en répondant aux messages.
* Correction de l'affichage de tous les liens pour les différentes versions (prod, ptb, canary, dev)
* Correction d'un bug au niveau des cooldowns des slash-commandes.
* Correction d'un bug au niveau de la sauvegarde du placeholder des sélecteurs de Rôles-Réactions sur le panel.
* Correction d'un bug qui empêchait les commandes de déplacement et de copie de messages de traiter les messages issus de slash-commandes.

### ✨ Nouvelle slash-commands <a id="slash-commands"></a>
(Premium accès anticipé) (`!slash` pour les activer)

* Economie : `money`, `topmoney`, `shop`, `daily`, `pay`, `dropmoney` et `updatemoney`.
* Inventaire : `inventory`, `give`, `updateinventory`.
* Conversations : `clear channel`, `clear conversation`, `clear messages`, `copy`, `move`, `quote` et `save conversation`.

## [4.15.5 - 01/04/2022](https://discord.com/channels/422112414964908042/599942732559024138/959225660742701116) <a id="4-15-5"></a>

### ✨ Nouveautés  <a id="nouveautes"></a>

* Ajout d'une toute nouvelle page de classement de l'économie.

### 🗒️ Corrections  <a id="corrections"></a>

* Le message confirmant la création d'un ticket via un bouton est de nouveau affiché uniquement à l'utilisateur concerné.
* Un utilisateur spammant lors d'une partie de `pendu` ne retournera plus "undefined" dans la liste des lettres.
* Une meilleure expérience utilisateur (UX) est dorénavant disponible dans la commande `/gameprofil` pour la sélection de la plateforme de jeu.
* Il est de nouveau possible de supprimer une commande personnalisée via la commande `!customcommand delete`.
* Le nombre d'expérience ou d'argent maximum que peut avoir un utilisateur a été corrigé, le nombre affiché était supérieur au nombre réellement maximum.
* Un problème d'affichage dans la commande `/dropxp` a été corrigé si le nombre indiqué était supérieur à un million.
* Un problème présent dans le sélecteur de rôles du panel a été corrigé, il provoquait des problèmes dans le cas où il n'y avait pas de valeur.
* Un souci lors de l'ajout de rolereacts sous forme de réactions a été corrigé, les rôles seront de nouveaux correctement attribués.
* Les logs de suppression de messages envoyés par des bots ne seront plus envoyés afin d'éviter des logs indésirables.
* La commande `!channelinfo` est de nouveau utilisable avec tous les salons.
* Le bouton de sauvegarde sur le panel possède maintenant une animation de chargement afin d'éviter tout spam menant à plusieurs envois consécutifs de la même requête.
* La reconfiguration du système de captcha se fait à présent sans accroche, il pouvait arriver que certaines vérifications d'accès aux salons échouent.
* Ajout de sécurités afin de ne pas pouvoir dupliquer les tickets lors de leur validation.
* Les rôles récompenses étaient réattribués à l'utilisateur dès son retour, même lorsque son expérience était réinitialisée.
* Les logs ne devraient plus se désactiver sans raison et la raison de la désactivation est maintenant plus complète.
* Ajout d'une sécurité dans le cas où un ticket ne peut pas être créé et ajout d'une file d'attente afin d'éviter le spam.
* Amélioration des messages de confirmation d'activation d'anniversaire avec l'ajout de la date et de l'âge.
* Ajout de messages d'erreurs afin d'empêcher les interserveurs dans les fils.
* Les Live-Presence peuvent à nouveau fonctionner normalement, les variables de la description personnalisée se remplaçaient et empêchaient le bon fonctionnement de la fonctionnalité.
* Correction de plusieurs fautes d'orthographe et améliorations de nombreuses phrases.

### ✨ Nouvelle slash-commands <a id="slash-commands"></a>
(Premium accès anticipé) (`!slash` pour les activer)

* Niveaux : `level`, `toplevel`, `rewards`, `dropxp` et `updatexp`.
* Émotions : `cuddle`, `feed`, `hug`, `kiss`, `pat`, `poke`, `slap` et `tickle`.
* Statistiques : /stats `apex`, `brawlhalla`, `brawlstars`, `clashofclans`, `clashroyale`, `division2`, `fortnite`, `lol`, `osu`, `overwatch`, `paladins`, `r6` et `wolfy`.

## [4.15.4 - 18/03/2022](https://discord.com/channels/422112414964908042/599942732559024138/954169560670560286) <a id="4-15-4"></a>

### 🗒️ Changements <a id="changements"></a>

* Amélioration de l'affichage globale des rôle-réactions de boutons & sélecteur
* Correction d'un bug présent dans la commande Clash Royale lorsque l'api de Supercell ne nous fournit pas le deck du joueur.
* Correction d'un bug présent lors de la suppression d'un rôle-réaction avec la commande.
* Correction d'un bug présent lors du lancement d'un échange d'items.
* Correction d'un bug empêchant les commandes d'informations de s'exécuter en mp.
* Correction d'un bug qui empêchait la commande `!rules` de fonctionner lorsque le règlement avait été modifié avec l'Embed Creator.
* Correction d'un bug présent dans les rôle-réactions de boutons & sélecteur lorsque le rôle était supprimé.
* Correction d'un bug interne présent lors de la validation d'ouverture d'un ticket.
* Correction d'un bug présent dans le système chargé de demander l'identifiant ou le lien d'un message dans certains systèmes.
* Correction d'un bug présent dans le système d'importation des niveaux de MEE6.
* Correction d'un bug présent dans le système d'anniversaire lorsque DraftBot n'a pas les permissions requises.
* Désactivation de la commande `!apps` dans les messages privés.

## [4.15.3 - 17/03/2022](https://discord.com/channels/422112414964908042/599942732559024138/953831121131565076) <a id="4-15-3"></a>

### 🗒️ Changements <a id="changements"></a>

* Correction d'un bug qui empêchait de créer un rôle réaction à partir d'un message d'utilisateur sur le panel.
* Augmentation des limites de tailles des settings autorisés afin d'éviter à certains gros serveurs de dépasser cette limite.
* Ajout d'un message d'erreur lorsque la commande `clearchannel` est exécutée dans un fil.
* Ajout d'un message personnalisé si le membre ne peut être mute pour un problème de permissions.
* Correction d'un bug d'affichage de la date de fin dans les rappels.
* Correction d'un bug, principalement dans la commande `shop`, en cas de changement de page après un achat
* Correction d'un bug d'affichage de certains messages d'erreurs du système de tickets.
* Correction d'un bug avec la commande `quote` lors de l'utilisation de liens de messages.
* Correction d'un bug au niveau du `rolereact remove` pour la suppression de boutons.

## [4.15.2 - 14/03/2022](https://discord.com/channels/422112414964908042/599942732559024138/952738228883038279) <a id="4-15-2"></a>

### 🗒️ Changements <a id="changements"></a>

* Refonte du message de confirmation de réception de la commande `!daily` (amélioration globale + ajout de la couleur personnalisée de l'économie)
* Refonte complète de la commande de statistiques Brawlhalla (Ranked 1v1 & 2v2 , émojis pour les rangs :platinum:, les légendes :artemis:  et les armes :scythe:, prévision des glories :glories:, ect...).
* Ajout de 6 nouveaux brawlers à la commande de statistiques Brawlstars (:M_:, :A_:, :L_:, :F_:, :E_:, :G_:).
* Nombreuses corrections au niveau des modes uniques sur les rôle-reactions.
* Correction d'un bug qui empêchait de supprimer un interserveur.
* Correction d'un bug dans  la commande `!sell` qui empêchait l'échange.
* Correction d'un bug dans la commande `!shop` qui empêchait l'achat d'un article.
* Correction d'un bug au niveau de la restriction des rôles des annonces de lives via présence.
* Correction d'un soucis au niveau de la saisie de date (dans la commande `!birthday` notamment).
* Correction de la taille de la fenêtre popup du site suite à l'ajout de la permission de créer des slash-commandes.
* Correction de plusieurs bugs d'affichage présents sur la page de rôle-réactions.
* Correction d'un bug au niveau de la suppression d'un émoji dans le sélecteur d'émojis sur le panel.

## [4.15.1 - 10/03/2022](https://discord.com/channels/422112414964908042/599942732559024138/951318493003911218) <a id="4-15-1"></a>

### 🐛 Corrections <a id="corrections"></a>

* Correction d'un bug au niveau des logs de changement de description de salon
* Correction du bug d'affichage de la page de niveaux
* Correction d'un bug au niveau de la commande warn
* Correction d'un bug qui empêchais d'exécuter des commandes personnalisées.
* Correction d'affichage des textes dans certains messages des tickets.
* Correction d'un bug au niveau de l'édition des messages depuis l'embed creator.
* Correction de fautes d'orthographe oubliées.
* Correction d'un bug au niveau d'une vérification de sécurité dans la commande backup.
* Correction d'un bug présent lors de l'annulation de la commande d'interserver
* Correction d'un bug qui empêchait de valider les nombres écrits avec les points à chaque centaine (`100.000`)
* Correction d'un bug qui empêchait d'exécuter la commande profil en mp.

## [4.15.0 - 09/03/2022](https://discord.com/channels/422112414964908042/599942732559024138/950919931065692241) <a id="4-15-0"></a>

### **✨ Slash commands** <a id="slash-commands"></a>
Comme imposé par Discord, les commandes Slash vont petit à petit faire leur apparition dans cette version. 
Elles seront dans un premier temps restreint aux serveurs premiums jusqu'à ce que leur développement soit finalisé.

Dans cette version, nous vous proposons les principales commandes des catégories de commandes **"Bot"** et **"Informations"**.
D'autres commandes arriveront dans les prochaines sous-versions.

Pour les configurer, vous devrez utiliser la commande `!slash`.
DraftBot vous proposera alors de les activer en cliquant sur le bouton "Activer".
### **Rôle Réactions :**<a id="role-reactions"></a>

Refonte complète du système de rôles réactions permettant l'ajout des boutons et sélecteurs.

**Boutons:**
 * Personnaliser la couleur du bouton.
 * Personnaliser l'émoji présent dans le bouton.
 * Personnaliser le nom du bouton.

**Sélecteur:**
 * Personnaliser le texte du sélecteur.
 * Personnaliser l'émoji de l'option de chaque rôle présent dans le sélecteur.
 * Personnaliser le nom de l'option de chaque rôle présent dans le sélecteur.
 * Personnaliser la description de l'option de chaque rôle présent dans le sélecteur.

**Modes:**
 * Ajout du mode exclusif permettant de limiter l'utilisateur à un seul rôle du sélecteur ou des boutons.

### **Panel Web :** <a id="panel-web"></a>

* Ajout de l'interface de Rôles Réactions (avec toutes les nouveautés).
* Ajout de la possibilité de choisir la couleur du système de niveaux et d'économie sur le panel.
* Ajout de la fonctionnalité vocalrole au panel.
* Ajout de la fonctionnalité localité au panel.
* Amélioration de l'ergonomie et de l'accessibilité des sélecteurs du panel (pointeur, raccourcis clavier, curseur adaptatif à la recherche, optimisation de l'espace disponible).
* Amélioration de l'animation d'ouverture et de fermeture des options sur le panel.
* Amélioration de l'affichage des notifications et de la barre de sauvegarde sur le panel.
* Correction d'un bug au niveau du chargement des utilisateurs après la place 100 des systèmes de niveaux et d'économie sur le panel.
* Désactivation des boutons de sauvegarde en cas d'erreurs et affichage de ces dernières au survol des boutons.
* Désactivation et ajout d'une animation chargement sur les boutons lorsque la requête est en cours afin d'éviter de spammer le bouton.
* Configuration de la somme d'argent de la commande !daily

### **Captcha :** <a id="captcha"></a>

* Mention du membre dans le message du captcha.
* Ajout d'un log en cas d'exclusion du captcha.
* Ajout d'un warning dans le footer du captcha quand il y a des majuscules et des minuscules.

### **Mute :** <a id="mute"></a>

* Utilisation du mute de Discord pour la commande `!mute`.
* Modification de la permission par défaut de la commande !mute de `Gérer les messages` à `Exclure temporairement des membres`
* Suppression des auto-sanctions mute définitif ainsi que les mutes supérieurs à 28 jours dû à l'introduction du mute de Discord qui limite à 28 jours.

### **Autres gros changements :** <a id="changements"></a>

* Augmentation des limites de social notifs pour les serveurs premiums : YouTube: 5, Twitch: 5, Reddit: 10
* Ajout de la fonctionnalité de Mention des modérateurs au système de tickets (nécessite une reconfiguration).
* Ajout de la commande !daily qui permet à vos utilisateurs de recevoir un montant configuré chaque jour.
* Ajout de la possibilité de mettre des social-notifs dans des threads.
* Amélioration du système de création de règlement (système interactif).
* Amélioration du système de backup avec l'ajout de messages de confirmation pour toutes les actions de restauration ou de suppression et ajout de l'argument delete pour supprimer une sauvegarde.
* Amélioration de l'ergonomie du système de règlement + passage à un bouton pour les nouveaux règlements.
* Amélioration des règles d'acceptations des supercell ID (4 à 8 caractères)
* Augmentation de l'affichage de la boutique en mode dark de 30 à 60s.
* Optimisation des performances des systèmes d'économie & niveaux.
* Refonte de toutes les descriptions et details dans le !help <commande>.
* Correction d'un bug qui permettait de garder l'image de bienvenue et d'aurevoir après l'expiration du premium.
* Suppression du message de confirmation du !clearchannel après 10 secondes d'affichage.
* Suppression des questions qui sont annulées via cancel.

## [4.14.11 - 16/02/2022](https://discord.com/channels/422112414964908042/599942732559024138/943311130200272956) <a id="4-14-11"></a>

### 🗒️ Changements <a id="changements"></a>

* Amélioration de l'affichage du coût d'un article dans le sélecteur de la boutique.
* Correction d'un problème au niveau du comptage des membres dans le système membercount quand celui-ci est sous la forme d'une catégorie.
* Ajout de la possibilité de choisir si l'on souhaite comptabiliser les bots dans le membercount quand celui-ci est sous la forme d'une catégorie.
* Renforcement de la vérification des jeux Epic-Games dans la fonctionnalité socialnotif.
* Correction d'un souci au niveau de l'actualisation des jeux dans les messages d'annonces des Lives Présence (socialnotif presence).
* Retrait du message d'alerte lorsque le délai de 60 secondes pour acheter un article dans la boutique est écoulé ; le sélecteur est désactivé.
* Correction de quelques fautes d'orthographe. 

## [4.14.10 - 06/02/2022](https://discord.com/channels/422112414964908042/599942732559024138/939676492986736641) <a id="4-14-10"></a>

### 🗒️ Changements <a id="changements"></a>

* Refonte du système d'auto-modération de liens, les domaines ignorés ignoreront également tous les sous domaines.
* Ajout de la possibilité d'ajouter une note à un utilisateur ayant quitté le serveur.
* Changement des durées des offres de premium: un mois de premium correspond aujourd'hui à 30 jours et plus au nombre de jours présent dans le mois actuel.
* Correction d'un bug bloquant les liens provenant de Discord lorsqu'ils avaient un sous domaine (exemple : `support.discord.com`)
* Correction d'un bug au niveau des logs de stickers qui empêchait leur envoi.
* Correction d'un bug au niveau des messages récurrents qui laissait passer les messages avec un contenu de plus de 2000 caractères menant directement à la suppression du message récurrent.
* Correction d'un bug au niveau des embeds des social-notifs presence.
* Correction d'un bug au niveau des interserveurs lors de l'envoi d'un sticker.
* Correction d'un bug qui menait à l'arrêt de la restauration d'une sauvegarde dès son lancement (`backup`).
* Correction d'un bug au niveau de la configuration du système de captcha et du rôle Mute.
* Correction d'un bug qui menait à la désactivation du système de logs après un redémarrage sous certaines conditions.
* Correction d'un bug qui empêchait de dépasser 72h dans le système de messages récurrents. (depuis le panel uniquement)
* Correction d'un bug qui empêchait de citer un message d'un autre salon. (`quote`)

## [4.14.9 - 31/01/2022](https://discord.com/channels/422112414964908042/599942732559024138/937512009258373170) <a id="4-14-9"></a>

### 🗒️ Changements <a id="changements"></a>

* Ajout de la possibilité d'accepter/refuser une suggestion depuis un autre salon que le salon réceptacle. (`suggestion accept/refuse`)
* Réduction du délai minimum d'`une heure` à `30min` avant la republication d'une annonce de live. (`socialnotif présence`)
* Correction d'un bug qui empêchait la création/mise en place du système de captcha.
* Correction d'un bug qui permettait de mettre des valeurs décimales en dessous d'une heure pour les messages récurrents.
* Correction d'un bug qui empêchait l'envoi d'un log quand un message récurrent était supprimé en raison de la suppression de son salon.
* Correction de plusieurs fautes d'orthographe.

## [4.14.8 - 25/01/2022](https://discord.com/channels/422112414964908042/599942732559024138/935318155360866374) <a id="4-14-8"></a>

### 🗒️ Changements <a id="changements"></a>

* Ajout du nouveau jeu de Uno (Ocho) à la commande `!apps`.
* Ajout de la possibilité de citer des messages venant de fils (`!quote`).
* Ajout d'un message lorsque le message du plateau de jeu est supprimé (`puissance4`, `morpion`, `chifumi`).
* Correction d'un problème dans le système d'annonces de jeux gratuits Epic-Games qui menait à une ratelimit à 17:00.
* Correction d'un bug au niveau du système de présence sur le panel.
* Correction d'un bug qui permettait de garder les images de bienvenue et d'au revoir même lorsque l'on avait plus le premium.
* Correction d'un bug au niveau de la modification d'un social notif subreddit sur le panel.
* Correction de plusieurs fautes d'orthographe.

## [4.14.7 - 10/01/2022](https://discord.com/channels/422112414964908042/599942732559024138/930233341070934056) <a id="4-14-7-1"></a>

### 🗒️ Changements <a id="changements"></a>

* Ajout de la possibilité de modifier la couleur du système de niveau sur le panel.
* Ajout d'un message informatif lorsque aucune sauvegarde n'a été faite pour faire une restoration.
* Correction d'un bug lors de la création de récompenses et d'articles sur le panel. 
* Correction d'un bug au niveau des commandes `!adminreward update` & `!adminshop update`.
* Correction d'un bug au niveau du bouton Annuler présent dans la pagination des inventaires.
* Correction d'un bug qui empêchait d'utiliser des tags Supercell anciens qui ne font que 6 caractères.
* Correction d'un bug qui réinitialisait l'icône de l'économie lorsque l'icône était un émoji non personnalisé.
* Correction d'un bug au niveau de l'affichage des personnes ayant pris le premium sur la page `/premium`.
* Amélioration du design des récompenses sur la page de niveaux.
* Amélioration des systèmes de questions afin qu'il ne prenne pas les réponses à d'autres messages.

## [4.14.7 - 09/01/2022](https://discord.com/channels/422112414964908042/599942732559024138/929868856237883462) <a id="4-14-7"></a>

### 🗒️ Changements <a id="changements"></a>

* Ajout de messages détaillés au-dessus du bouton de sauvegarde lors de la création de récompenses ou d'articles sur le panel.
* Ajout de l'âge dans la commande `profil` lorsqu'il est disponible dans la commande `birthday`
* Ajout de questions supplémentaires à la commande `membercount` afin de créer les compteurs à l'endroit qui vous intéresse + Optimisation de l'ergonomie globale de la commande.
* Ajout de la possibilité de choisir si l'on souhaite que le message récurrent soit envoyé lorsque le dernier message est déjà ce même message.
* Amélioration de la détection des émojis dans tous les sélecteurs (`shop`, `sell`, `adminshop`, `admininventory`, `adminbirthday`, `adminreward`).
* Amélioration des messages d'erreur dans les systèmes de social-notifs.
* Refonte complète de l'API permettant la communication avec DraftBot.
* Mise en place d'un système permettant l'introduction d'un panel-web futur pour les rôles-réactions.
* Correction d'un bug qui empêchait de modifier son social-notif YouTube si l'on n'était pas premium.
* Correction d'un bug critique qui pouvait empêcher le chargement de votre serveur sur le panel.
* Correction d'un bug au niveau des messages récurrents qui pouvaient se supprimer dans le cas où personne n'avait parlé dans le salon depuis le redémarrage.
* Correction d'un problème au niveau du champ d'upvotes minimum requis pour le social notif Reddit.
* Correction d'un bug qui pouvait faire afficher un nombre de serveurs incorrect lors d'un double achat de premiums.
* Correction d'un bug au niveau de la fermeture de tickets avec les boutons lorsque le membre a quitté le serveur.

## [4.14.6 - 28/12/2021](https://discord.com/channels/422112414964908042/599942732559024138/925515616687890462) <a id="4-14-6"></a>

### 🗒️ Changements <a id="changements"></a>

* Ajout d'informations à propos du fonctionnement de la commande `streamrole` sur le fait qu'il ne prenne pas en compte les partages d'écrans sur les serveurs.
* Ajout des logs de suppressions d'embeds et de fichiers sur un message existant.
* Correction de la prévisualisation des commandes `admincalendar` et `calendar` & disparition de ces commandes dans la commande `help` puisque la période de Noël est terminée.
* Ajout d'une sécurité si @DraftBot n'a pas la permission d'envoyer un message dans le salon permettant d'accepter ou non un ticket.
* Correction d'un bug dans la commande `adminticket message` si la raison ajoutée est déjà présente dans le sélecteur permettant d'ouvrir un ticket.
* Affichage des messages supprimés & modifiés dans les logs des messages cités.
* Correction de bugs avec les notifications sociales CommitStrip, EpicGames & Reddit.
* Correction d'un soucis dans la commande `adminsanctions` si une sanction n'avait pas de raison.
* Correction d'un bug si un bouton dépassait les 80 caractères (notamment dans la commande `admintickets message`)
* Correction d'un bug important dans le système d'auto-modération qui permettait de le contourner.
* Correction d'un bug dans les logs de threads si l'option "Tout le monde peut le désarchiver" était modifiée.
* Correction de fautes d'orthographes.

## [4.14.5 - 18/12/2021](https://discord.com/channels/422112414964908042/599942732559024138/921559912063066162) <a id="4-14-5"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Ajout du nombre de votes sur l'affichage des résultats de la commande `!survey`.
* Amélioration des explications concernant le fonctionnement de la commande `!liverole`.
* Ajout des émojis personnalisés dans les sélecteurs des systèmes `!adminbirthday`, `!admininventory`, `!adminshop`, `!sell`, `!adminreward`.
* Ajout d'une confirmation de l'exécution des commandes `clearconv`/`delconv`/`copyconv`/`moveconv`.
* Ajout de nombreux émojis à la liste autorisée dans les systèmes de DraftBot.
* Amélioration du message de confirmation de la suppression d'un message récurrent.
* Amélioration du système de détection de messages récurrents similaires qui permet d'éviter un repost du même message.
* Changement de la fréquence de mise à jour du `!membercount` suite à une limitation de Discord qui est de 10min.

### 🐛 Corrections <a id="corrections"></a>

* Correction d'un bug au niveau de l'enregistrement de chaines Twitch inexistantes qui pouvait dans certains cas ne pas renvoyer de message d'erreur.
* Correction d'un bug qui empêchait l'enregistrement des limites de messages récurrents lors de leur création avec la commande.
* Correction d'un bug au niveau de l'option `all` du roleperms sur les anciens serveurs.
* Correction d'un bug au niveau des webhooks lorsque les membres n'étaient pas encore en cache.
* Correction de nombreuses fautes d'orthographe.

## [4.14.4 - 03/12/2021](https://discord.com/channels/422112414964908042/599942732559024138/916117302418767893) <a id="4-14-4-2"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Amélioration des rôles temporaires dans le calendrier de l'avent, un rôle temporaire ne fera plus retirer le rôle aux personnes qui l'avaient de manière permanente. 
* Optimisation de l'ergonomie de la configuration de la commande `!socialnotif presence`.
* Optimisation de l'ergonomie de la commande `!rolereact`

### 🐛 Corrections <a id="corrections"></a>

* Bug qui empêchait la suppression d'une case de calendrier de l'avent lorsqu'il n'y avait qu'une seule case.
* Bug qui empêchait d'utiliser la commande `!quote` sur un message envoyé par un webhook.
* Bug qui pouvait parfois empêcher le gain d'argent dans les fils Discord.
* Amélioration globale des messages informant que le premium est requis pour certaines options (message moins imposant).
* Bug qui pouvait survenir lors du dépassement du délais de 60 secondes dans la configuration des `!channelsperms`.
* Bug qui empêchait l'envoi des logs de la commande (`!pay`) si la raison était une image.
* Bug qui pouvait faire apparaitre un id incorrect dans la commande `!sanctions` si le modérateur ayant fait la sanction n'était plus sur le serveur.
* Plusieurs fautes d'orthographe.

## [4.14.4 - 30/11/2021](https://discord.com/channels/422112414964908042/599942732559024138/915021997778542653) <a id="4-14-4-1"></a>

### 🐛 Corrections <a id="corrections"></a>

* Amélioration des boutons d'activation et de désactivation dans les systèmes `!suggest` & `!report`.
* Problème lors de la création d'un message récurrent à partir d'un message d'utilisateur (`!repeatmsg`).
* Bug au niveau du message de confirmation du système de tickets.
* Bug présent au lancement de certaines commandes de manière aléatoire.
* Bug au niveau de la sauvegarde de son profil Rainbow Six Siège dans le gameprofil. 
* Amélioration du message d'erreur dans la commande `!vocalrole`.

## [4.14.4 - 26/11/2021](https://discord.com/channels/422112414964908042/599942732559024138/913813896480063549) <a id="4-14-4"></a>

### ✨ Nouveautés pour la fonctionnalité de calendrier de l'avent <a id="nouveautes"></a>

* Nouveau Design
* Utilisation du sélecteur pour la suppression de plusieurs cases en même temps
* Ajout de deux nouvelles surprises possibles : Rôle temporaire & Item d'inventaire
* Accessibilité à la commande `!admincalendar` à partir du 26 novembre (une annonce bientôt

### 🗒️ Changements <a id="changements"></a>

* Acceptation des url de chaines Twitch partagées depuis un mobile: (`m.twitch.tv`).
* Ajout de plus de détails dans les raisons accompagnants certaines actions faites sur les serveurs Discord afin de mieux comprendre leurs origines dans les logs.
* Plusieurs corrections d'orthographe dans la commande `!admintickets`.
* Ajout des nouvelles permissions de Discord aux commandes affichant des permissions.
* Correction d'un bug dans la commande sondage bloquant parfois le processus de fin manuelle du sondage.
* Désactivation des commandes d'émotions en messages privés.
* Correction d'un bug dans le système de sélection des catégories Dealabs depuis la commande.

## [4.14.3 - 12/11/2021](https://discord.com/channels/422112414964908042/599942732559024138/908848082781892678) <a id="4-14-3-1"></a>

### 🗒️ Changements <a id="changements"></a>

* Correction d'un soucis qui n'envoyait pas les images dans l'interserver
* Correction d'un problème si un post Reddit n'a pas de description
* Correction d'un problème dans la commande `quote` ou il n'était pas possible d'utiliser la variable <salon>
* Correction d'un bug au niveau du captcha si on choisissait un salon existant lors de sa configuration
* Ajout d'un avertissement dans la commande `adminticket` message à propos d'une description trop grande pour une raison dans un sélecteur pour ouvrir un ticket. 
* Certains appareils (ex: PC) n'affiche pas la description du sélecteur en totalité.
* Correction de fautes d'orthographes
* Correction d'un bug au niveau de la restauration de backup
* Ajout lors des backup, la sauvegarde de: bannières d'invitations, de serveurs, de l'onglet découverte

## [4.14.3 - 06/11/2021](https://discord.com/channels/422112414964908042/599942732559024138/906331726719103047) <a id="4-14-3"></a>

### 🎟️ Tickets <a id="tickets"></a>

* Ajout de l'ouverture des tickets avec un bouton ou un sélecteur !
* Remplacement des réactions par des boutons pour la gestion des tickets.
* Ajout de la possibilité de sauvegarder jusqu'à 300 messages d'un ticket lors de sa fermeture.
* Ajout de la possibilité de personnaliser les messages d'ouverture et de confirmation de ticket.

### ✨ Nouveautés <a id="nouveautes"></a>

* Ajout de la commande `emojirestrict` : permet de limiter des émojis à certains rôles uniquement.
* Ajout de la possibilité d'indiquer le lien d'un message au lieu de son identifiant.
* Ajout de la possibilité de modifier le nombre de membres max dans les salons privés.
* Ajout d'un nouveau jeu dans la commande `apps` : Checkers In The Park (jeu de Dames).
* Amélioration du design des annonces Epic Games.
* Suppression de tous les messages de confirmations du captcha au profit d'un message résumé en fin de configuration.

### 🐛 Corrections <a id="corrections"></a>

* Problèmes de statuts dans la commande `shards` ainsi que sur la page `/statuts`.
* Panne globale présente sur le panel depuis plus d'une semaine.
* Bug permettant de participer à un `dropxp` ou `dropmoney` lorsque l'on a atteint la limite.
* Problème avec certaines preview d'images/vidéos d'annonces Reddit.
* Conflits entre les lives présence et les annonces YouTube.
* Bugs dans les commandes `adminshop` et `adminsanctions`.

## [4.14.2 - 30/10/2021](https://discord.com/channels/422112414964908042/599942732559024138/903780072467595275) <a id="4-14-2"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Ajout de la possibilité de jouer contre quelqu'un aléatoirement aux jeux `puissance4`, `morpion`, `chifumi` + amélioration globale des interfaces
* Les threads ne sont plus comptabilisés dans le système de membercount
* Les rôles gérés par des intégrations Twitch ne faussent plus le nombre de bots sur le serveur
* Ajout de la possibilité de choisir créer un message récurrent depuis un autre salon
* Transformation de l'option Annuler des sélecteur en bouton
* Suppression de la possibilité de créer un message récurrent dans un thread
* Amélioration de l'affichage des articles dans le sélecteur du shop avec les émojis lorsqu'ils sont au début du nom
* Amélioration des explications dans de nombreux messages nécessitant une réponse de l'utilisateur
* Amélioration de nombreux boutons et options de sélecteurs sur l'ensemble du bot + amélioration des systèmes de paginations
* Remplacement de tous les derniers affichages de photo de profile d'utilisateurs par ceux définis sur le serveur
* Optimisation des requêtes entre le panel et DraftBot afin de réduire la latence des petites connexions

### 🐛 Corrections <a id="corrections"></a>

* Bug dans la génération des sauvegarde de conversations
* Bug lors de la sélection du message dans le système de sondages
* Bug dans le système de sélection de texte dans plusieurs commandes

## [4.14.1 - 26/10/2021](https://discord.com/channels/422112414964908042/599942732559024138/902547817640366100) <a id="4-14-1"></a>

### 🐛 Corrections <a id="corrections"></a>

* Sélection des rôles dans la commande `socialnotif twitch` & `streamrole` (possibilité désormais de sélectionner les rôles gérés et au-dessus du membre)
* Avatar dans certaines commandes pour supporter les photos de profil sur le serveur
* Fautes d'orthographes dans les commandes `rappel` et `socialnotif`
* Retrait du sélecteur dans la commande `quote` si un seul résultat est trouvé parmi le champ de recherche
* Réintégration du `help here`
* Lien de Twitch dans la liste des chaines enregistré
* Soucis avec les commandes personnalisées qui empêchait l'envoie si le message défini n'avait pas d'embed
* Soucis dans les privateroom lors de la configuration si le serveur n'est pas premium
* Soucis dans la commande `morpion` qui empêchait le second joueur de jouer
* Soucis dans la commande `help` si le serveur a configuré une icône d'économie personnalisée et qu'elle n'existe plus
* Soucis dans la commande `socialnotif reddit` et le panel web qui ignorait la valeur du nombre minimum d'upvotes
* Bug au niveau du reset d'xp
* Bug au niveau du reset des récompenses
* Bug lors la création du `vocalrole`
* Bug au niveau des boosters d'argent
* Bug au niveau de la commande ban lorsqu'elle n'était pas exécutée en une fois.
* Bug au niveau de la récupération des membres
* Bug au niveau des interserveurs
* Bug dans la commande `quote` lors d'une recherche avec l'identifiant d'un message

## [4.14.0 - 26/10/2021](https://discord.com/channels/422112414964908042/599942732559024138/902346531628273664) <a id="4-14-0"></a>

### ✨ Nouveautés <a id="nouveautes"></a>

* Ajout de la commande `chifumi`
* Ajout des notifications sociales : YouTube, Twitch, Lives, Reddit, Epic Games, CommitStrip & Dealabs (`socialnotif`)
* Ajout de boutons/sélecteurs pour l'ensemble des commandes de DraftBot
* Support des Threads pour l’auto-modération, commandes de conversations et plus
* Ajout de la commande `note` pour ajouter des notes à l’historique de sanctions d’un utilisateur sans le notifier
* Ajout de la commande `tv` pour obtenir des informations sur un film ou une série
* Refonte du `vocalrole`
* Ajout de la possibilité de modifier le nom des salons issus du `privateroom`
* Ajout d’une option au système de suggestion permettant d’ouvrir un thread lors d’une nouvelle suggestion
* Ajout des logs de conférence, de création, d'autocollants et de threads
* Ajout des logs d'actions sur le panel pour les nouvelles fonctionnalités (welcome, goodbye, social-notifs, suggestions)

### ♻️ Améliorations <a id="ameliorations"></a>

* Refonte de la commande help avec un nouveau design et groupe "Jeux"
* Ajout des logs de threads, autocollants et conférences
* Les salons des compteurs de membres sont maintenant ignorés dans les logs
* Ajout de "Call Of Duty" au profil de jeux
* Amélioration du message lorsque @DraftBot est mentionné
* Ajout de la possibilité d'ignorer des threads pour le gain d'expérience ou d'argent
* Réinstauration des commandes dans les messages privés de DraftBot
* Amélioration de la commande `qrcode` : Ajout d'un mode lien & Wi-Fi
* Refonte des commandes `sanctions`, `premium` et `shop` avec de nouveaux designs
* Retrait de la commande `buy` suite à la refonte de la commande `shop` avec un sélecteur
* Augmentation du temps d'affichage des messages d'erreurs de permissions de 6s à 15s
* Ajout de la possibilité de ne pas supprimer le rôle « Non validé » du captcha lors de sa désactivation
* Amélioration du système de logs afin qu'il ne logue plus les suppressions de messages de commandes.
* Le tag des utilisateurs sanctionnés sera toujours affiché dans l'historique des sanctions et sera toujours affiché, même lorsque l'utilisateur n'aura plus de lien avec DraftBot
* Création ou réutilisation d'un salon pour les logs urgents
* Traduction des arguments de commandes en français
* Ajout de la possibilité de remplacer un `temprole`
* Blocage de l'achat d'un rôle dans le `shop` si le membre le possède déjà
* Utilisation de l'avatar du membre sur le serveur dans le `userinfo`
* Ajout des icônes de rôles dans le `roleinfo`
* Ajout du nombre de threads dans la commande `serverinfo`
* Ajout de boutons pour passer à l'étape d'ajout dans les commandes `socialnotif youtube/twitch/reddit`, `automod filter` et `wordreact`
* Ajout de la possibilité de reset toute la configuration de logs d'un serveur
* Ajout de messages dans le salon du ticket lorsqu'une action le concernant est réalisée 

### 🐛 Corrections <a id="corrections"></a>

* Correction d’un souci dans l’interserver pour les images de plus de 8 Mo ou de plus de 2000 caractères 
* Correction d’un bug qui ne donnait pas les objets d’inventaires dans certaines situations (giveaway, cadeaux d’anniversaires)
* Correction d'un bug de duplication des logs d'`unban`
* Correction d'un bug au niveau des messages récurrents, qui envoyait un message récurrent quand le dernier message en était aussi un.
* Correction d'un bug dans la commande `birthday` au niveau de l'affichage
* Correction d'un bug qui permettait d'accéder au leaderboard d'un serveur lorsque les niveaux étaient désactivés
* Correction d'une faille de sécurité dans le système d'anti-invitations Discord où un simple `\` ou `//` avant le code permettait de brouiller le système.
* Correction d'un bug au niveau de la création des webhooks de logs
* Correction d'un bug qui peut survenir au niveau du `ban`/`tempban` lorsque le membre n'est pas sur le serveur.

### 🌐  Panel <a id="panel"></a>

* Ajout de la possibilité de personnaliser le message de bienvenue et d'au revoir : couleur de l'embed, couleur de fond, image de fond, recadrage de l'image
* Ajout de la possibilité de configurer les notifications sociales (social-notifs) : YouTube, Twitch, Présences, Reddit, Epic Games, Dealabs, CommitStrip.
* Support des nouveaux salons pour l'ensemble des fonctionnalités : Threads publics, threads privés, threads de news, salons de conférence.
* Ajout d'une pastille d'info afin d'informer l'utilisateur de la raison d'une limitation.
* Ajout d'un message d'avertissement en cas de réactions déjà utilisés dans le système de suggestions.
* Ajout de la fonctionnalité ouverture de thread pour les suggestions.
* Changement de l'icône pour le changement de couleur des fonctionnalités.
* Amélioration de l'interface du panel sur téléphone.
* Ajout d'un tri des serveurs dans la barre latérale en fonction du nombre de membres.
* Ajout d'une transition lors de l'affichage des boutons de connexion sur le panel 

## [4.13.18 - 14/09/2021](https://discord.com/channels/422112414964908042/599942732559024138/887127715965177876) <a id="4-13-18"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Ajout de la commande `!youtube`.
* Optimisation de la vitesse de chargement de la liste des serveurs sur le panel.
* Ajout de la possibilité de supprimer l'image de fond des messages d'arrivée et de départ.
* Suppression du salon `#shards` (pour une question de performances), préférez utiliser la page status du site web.
* Ajout de sécurités supplémentaires concernant les permissions des membercount.
* Grosse amélioration du système de gestion des shards (devrait permettre de réduire les problèmes causés par la latence de Discord).

### ♻️ Corrections <a id="corrections"></a>

* Correction d'un bug au niveau de la commande `clearchannel` qui déplaçait progressivement le salon vers le haut.

## [4.13.17 - 02/09/2021](https://discord.com/channels/422112414964908042/599942732559024138/882793415744581693) <a id="4-13-17"></a>

### ♻️ Corrections <a id="corrections"></a>

* Correction d'un bug au niveau des statistiques du jeu Rainbow Six Siège.
* Correction d'un bug dans le gameprofil lorsque la plateforme était rentrée en majuscules.
* Correction d'un bug d'affichage dans la boutique quand un rôle temporaire était supprimé.
* Ajout d'une sécurité à la commande `!8ball` lorsqu'un sticker ou une image est envoyé en guise de question.
* Ajout de sécurités supplémentaires lors de la création d'un ticket.
* Ajout de logs d'erreurs lors d'erreurs lorsque l'attribution des cadeaux d'anniversaire échoue.
* Ajout de sécurités dans le système de rôle en vocal.
* Correction d'un bug dans le système d'interserveurs lorsqu'une liaison est coupée.
* Correction d'un bug au niveau de la désactivation de serveurs premiums sous certaines conditions.
* Correction d'un bug au niveau du délais de 60 secondes dans la commande `!rappel`.

## [4.13.16 - 25/08/2021](https://discord.com/channels/422112414964908042/599942732559024138/879873667499192330) <a id="4-13-16"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Ajout de la question d'affichage de l'âge à chaque changement de date d'anniversaire.
* Amélioration du système de messages de bienvenue et d'au revoir pour que les messages soient tout de même envoyés lorsque l'image ne peut pas être générée.
* Optimisation du changement des images sur le panel et pour les systèmes avec fond personnalisé (`!welcome`, `!goodbye`).
* Réécriture complète du système de captcha avec permettant d'ajout d'erreurs plus précises concernant chaque cas d'erreur.
* Déplacement de la commande `!quote` vers la catégorie Conversations
* Ajout de sécurité au niveau de la validation des pseudos dans la commande `!paladins`.

### ♻️ Corrections <a id="corrections"></a>

* Correction de l'importation de la version pour le système de release dans Sentry
* Correction d'un problème au niveau de la création du rôle mute.
* Correction d'un bug au niveau de l'affichage d'un giveaway avec comme récompense un rôle supprimé.
* Correction d'un bug au niveau du suivi des actions temporaires.
* Correction d'un bug présent sur le panel au niveau du sélecteur de couleurs de l'Embed Creator.
* Correction de plusieurs fautes d’orthographe sur le panel et sur le bot.

## [4.13.15 - 24/08/2021](https://discord.com/channels/422112414964908042/599942732559024138/879495954565308506) <a id="4-13-15"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Ajout de l'argument `delete` à la commande `!description`.
* Ajout d'une sécurité au système de giveaway lorsque l'embed est supprimé.
* Optimisation du système de captcha.
* Ajout de sécurités lors de la modification des permissions de salons lorsqu'ils sont créés pour les systèmes de captcha & mute.
* Ajout de la permission voir le salon aux permissions requises de DraftBot pour l’exécution des commandes de déplacement de conversations.
* Passage de 250 à 200 caractères pour le nom d'un article dans la boutique afin d'éviter une erreur de longueur.

### ♻️ Corrections <a id="corrections"></a>

* Correction d'un bug qui empêchait l'affichage des statistiques Wolfy d'un utilisateur qui avait pour rôle favori l'héritier.
* Correction de la commande `!adminrole clear`.
* Correction des priorités des messages d'erreurs de la commande `!moveconv`.
* Correction d'un problème avec la commande `!paladins` qui indique que le joueur est introuvable alors qu'il existe bel et bien.

## [4.13.14 - 16/08/2021](https://discord.com/channels/422112414964908042/599942732559024138/876830777453727744) <a id="4-13-14"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Optimisation de la commande de configuration du captcha.
* Optimisation de la rapidité de la commande `!buy`.
* Amélioration du clearchannel, le salon est maintenant supprimé avant sa duplication afin d'éviter les problèmes de limites de salons.
* Ajout d'une sécurité qui permet de vérifier les permissions avant le lancement de la normalisation d'un pseudo.
* Ajout d'une sécurité à la suppression du rôle de captcha lors de la désactivation du système.
* Ajout d'une sécurité au niveau des permissions d'envoi des messages récurrents.
* Ajout de sécurités au système de salons privés lorsque DraftBot n'a pas les permissions nécessaires.
* Ajout de sécurités au niveau des requêtes des images d'émotions.
* Ajout de nombreuses sécurités lors de l'envoi de messages d'erreurs.

### ♻️ Corrections <a id="corrections"></a>

* Bug présent dans le système de channelperms une fois les 30 secondes d'attente dépassées.
* Bug présent au niveau de la mise à jour des permissions des salons pour le mute et le captcha si DraftBot n'avait pas la permission administrateur.
* Bug dans le userinfo lorsque l'utilisateur n'a aucun badge.
* Bug au niveau des statistiques qui permettait dans certaines conditions d'envoyer la plate-forme dans un mauvais format.
* Bug au niveau du système de logs de rôles lors de la création d'un rôle sans permission.
* Bug au niveau des récompenses de niveaux uniques.
* Bug au niveau des logs de ratio depuis le panel.
* Bug au niveau des logs de salons et de rôles lors de l'affichage des permissions.
* Bug dans la commande `!moveconv` lorsque les messages étaient plus vieux que de 2 semaines.

## [4.13.13 - 15/08/2021](https://discord.com/channels/422112414964908042/599942732559024138/876244147776913458) <a id="4-13-13"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Amélioration de la gestion des erreurs afin de mieux gérer les futurs problèmes et interventions.
* Amélioration de tous les messages d'erreurs, ils apportent maintenant la solution exacte pour chaque cas spécifique.
* Amélioration des fréquences d'actualisation des compteurs de membres.
* Vérification des permissions avant de supprimer les messages dans l'automod.
* Ajout de la permission "Attacher des fichiers" aux permissions requises par défaut pour l'execution de toutes les commandes.
* Ajout de sécurités aux commandes de statistiques et de jeux lorsque le message de base est supprimé.
* Ajout d'une sécurité à la commande `normalize` si la normalisation n'est pas possible.
* Ajout de sécurités aux commandes `games`, `suggest`, `react`, `membercount` et `giveaway` dans le cas où DraftBot n'aurait pas les permissions requises
* Ajout de 10 shards supplémentaires.

### ♻️ Corrections <a id="corrections"></a>

* Une erreur de conception dans le système de récompenses
* Plusieurs bugs concernant la commande de statistiques `paladins`
* Mentions des interserveurs provoquant un affichage moins propre sur téléphone
* Problème d'affichage des logs de modifications de permissions pour les salons
* Un glitch qui permettait de rentrer des nombres à virgules sur le panel
* Un problème d'édition des messages sur l'embed creator sous certaines conditions
* Bug retirant l'image des logs sur le Panel lorsque le salon choisit était modifié

## [4.13.12 - 13/08/2021](https://discord.com/channels/422112414964908042/599942732559024138/875809308573589534) <a id="4-13-12"></a>

### ✨ Améliorations <a id="ameliorations"></a>

* Amélioration de la gestion de problèmes dans le système de giveaway.
* Amélioration de la gestion des erreurs au niveau des actions temporaires (tempmute, tempban, temprole, rappel).
* Optimisation du système de votes.

### ♻️ Corrections <a id="corrections"></a>

* Bug présent dans le système de logs de salons lors de l'affichage des permissions.
* Bug présent dans la suppression des messages du moveconv.
* Bug présent dans la commande de statistiques du jeu Rainbow Six Siège.
* Bug présent qui provoquait des spam des mp lors d'un glitch de dépassement de limite de serveurs premium avec des serveurs supprimés.

## [4.13.11 - 12/08/2021](https://discord.com/channels/422112414964908042/599942732559024138/875189320527527956) <a id="4-13-11"></a>

### ✨ Changements <a id="changements"></a>

* Refonte du système de détection des infractions (il gagne en rapidité et en réactivité)

### ♻️ Corrections <a id="corrections"></a>

* Bug d'affichage de noms de l'infractions dans certains cas dans le système d'auto-modération.
* Plusieurs fautes d'orthographe.


## [4.13.10 - 05/08/2021](https://discord.com/channels/422112414964908042/599942732559024138/872613706696130580) <a id="4-13-10"></a>

### ✨ Changements <a id="changements"></a>

* Optimisation du chargement de la page premium.
* Optimisation du chargement de DraftBot.fr en ne chargeant Stripe que dans la page premium.
* Amélioration de la liste des liens dans la commande `!help`
* Changement des arguments `desactivate` en `deactivate` dans les commandes `!birthday` et `!premium`.
* Nombre de brawlers dans la commande de statistiques de Brawlstars.
* Ajout des nouvelles variables manquantes au système d'anniversaire (`{date}`, `{time}`, `{timestamp}`)
* Désactivation des messages de bienvenue lorsque DraftBot n'a pas les permissions nécessaires.
* Logs d'`Arrivés & départs` renommés en `Arrivées & départs`.

### ♻️ Corrections <a id="corrections"></a>

* Bug présent lors d’une commande personnalisée avec une image seulement.
* Bug au niveau de la backup avec les salons stage et threads.
* Bug de duplication d'images dans la commande `suggest accept/refuse`.
* Bug dans le sélectionneur de rôles qui prenait un rôle aléatoire lorsqu'un Sticker ou Fichier était donné.
* Quelques fautes d'orthographe.

## [4.13.9 - 28/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/869715964403519578) <a id="4-13-9"></a>

### ✨ Nouveautés <a id="nouveautes"></a>

* Ajout des 3 nouveaux brawlers sur les statistiques: Squeak, Buzz et Griff.
* Changement de la valeur minimale du bingo (1 - 10000).
* Blocage de la création d'une commande personnalisée lorsque le nom est déjà utilisé par une commande.
* La commande delconv permet maintenant de supprimer des messages ayant été envoyés avant les 100 derniers messages.

### ♻️ **Corrections** <a id="corrections"></a>

* Correction d'un bug d'affichage au niveau de la variable `{time}`.

## [4.13.8 - 26/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/869011100082003988) <a id="4-13-8"></a>

### ✨ Nouveautés <a id="nouveautes"></a>

* Amélioration du système du système anti-invites afin de bloquer toutes les invitations non officielles.
(`discord.io`, `dsc.gg`, `dsc.ink`, `dsc.lol`, `discord.limited`, `discord.homes`, `discord.fyi`)

### ♻️ **Corrections** <a id="corrections"></a>

* Bug d'affichage de couleur dans la commande `!adminlogs` lors qu’aucune couleur n'a été définie.
* Bug du nombre d'items dans dans la commande de création d'un item pour les récompenses.
* Bug présent dans la commande `say` lorsqu'une image est envoyé sans contenu.
* Bug présent au niveau de la fonctionnalité d'évents qui empêchait son arrêt.
* Bug au niveau des rôles temporaires en conflits avec la suppression manuelle du rôle.
* Bug lors de l'affichage des noms de rôles avec les récompenses de niveau.
* Bug présent lors de la récupération de rôles uniques au retour d'un membre sur le serveur.
* Bug des membres non comptabilisés dans les fonctionnalités event et giveaway.
* Bug présent lorsque l'on sélectionne plusieurs rôles/salons.
* Bug présent au niveau de la variable `**{time}**`.

## [4.13.7 - 24/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/868274024986312704) <a id="4-13-7"></a>

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

## [4.13.6 - 15/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/865345866026188830) <a id="4-13-6"></a>

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

## [4.13.5 - 14/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/864627722562830356) <a id="4-13-5"></a>

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

## [4.13.4 - 12/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/863922198565879819) <a id="4-13-4"></a>

### ♻️ **Changements** <a id="changements"></a>

* Correction d'un bug présent lors de l'utilisation de la fonctionnalité ban dans le cas où le membre est au dessus de DraftBot.
* Correction d'un bug présent dans l'autorole lorsque tous les rôles ont été supprimés.
* Correction du problème présent lors d'un changement de salon pour les logs.
* Multiples vérifications ajoutés au système de captcha afin d'assurer son bon fonctionnement.
* Ajout des salons vocaux et stages dans le sélecteur du panel web.
* Correction d'un bug présent dans le système d'administration des tickets.

## [4.13.3 - 12/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/863922198565879819) <a id="4-13-3"></a>

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

## [4.13.2 - 08/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/862487688057847828) <a id="4-13-2"></a>

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

## [4.13.1 - 06/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/861773314578055168) <a id="4-13-1"></a>

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

## [4.13.0 - 05/07/2021](https://discord.com/channels/422112414964908042/599942732559024138/861667820970704946) <a id="4-13-0"></a>

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

## [4.12.1 - 17/04/2021](https://discord.com/channels/422112414964908042/599942732559024138/832926338842492928) <a id="4-12-1"></a>

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

## [4.12.0 - 25/03/2021](https://discord.com/channels/422112414964908042/599942732559024138/824600432503685120) <a id="4-12-0"></a>

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

## [4.11.6 - 24/12/2020](https://discord.com/channels/422112414964908042/599942732559024138/791726801915084800) <a id="4-11-6"></a>

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

## [4.11.5 - 19/10/2020](https://discord.com/channels/422112414964908042/599942732559024138/769006813194092574) <a id="4-11-5"></a>

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

## [4.11.4 - 27/09/2020](https://discord.com/channels/422112414964908042/599942732559024138/759890185008840736) <a id="4-11-4"></a>

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

## [4.11.3 - 02/08/2020](https://discord.com/channels/422112414964908042/599942732559024138/740500989265707039) <a id="4-11-3"></a>

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

## [4.11.2 - 24/06/2020](https://discord.com/channels/422112414964908042/599942732559024138/725133760386957385) <a id="4-11-2"></a>

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
