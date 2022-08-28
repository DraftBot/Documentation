---
description: >-
  Cette catégorie de commandes vous permet de modérer au mieux votre serveur
  Discord.
---

# Modération

## Auto-Modération

Le système d'auto-modération, avec l'auto-sanctions de DraftBot vous permettent d'automatiser certaines actions de modération tels que la censure et l'attribution de sanctions pour l'envoi d'invitations Discord, de spam, de liens externes et bien d'autres choses.

**L'auto-modération** de DraftBot va s'occuper de censurer le message si besoin et d'attribuer une infraction. Pour l'attribution des sanctions en fonction des infractions, c'est [l'auto-sanctions](moderation.md#undefined) qui s'en occupe.

### Configuration via Discord <a href="#automoderation-discord" id="automoderation-discord"></a>

Si vous souhaitez configurer l'auto-modération via Discord directement, vous pouvez utiliser la commande `automoderation` ou `automod` sur votre serveur :&#x20;

![Exécution de la commande automoderation sur un serveur Discord](<../.gitbook/assets/image (33).png>)

Vous aurez alors le choix entre plusieurs infractions :&#x20;

* ****[**filter**](moderation.md#filter) : Filtre de vocabulaire interdit
* ****[**invites**](moderation.md#invites) : Anti-invitations Discord
* ****[**links**](moderation.md#links) : Anti-liens externes
* ****[**spam**](moderation.md#spam) : Anti-spam de messages
* ****[**mentions**](moderation.md#mentions) : Anti-spam de mentions
* ****[**emojis**](moderation.md#emojis) : Anti-spam d'emojis

Pour activer la détection et la censure des différents types d'infractions, vous devrez ensuite choisir l'argument `on` et pour configurer, ce sera avec l'argument `config.`

### Configuration via le panel web <a href="#automoderation-panel" id="automoderation-panel"></a>

DraftBot possède un panel web accessible en allant sur [draftbot.fr](https://draftbot.fr/) et qui vous permet notamment de configurer facilement le système d'auto-modération.

![Accéder au panel web de DraftBot via draftbot.fr](<../.gitbook/assets/Sans titre-output.gif>)

Il vous suffira ensuite de cliquer sur votre serveur Discord puis d'accéder à la page "Auto-Modération".

![](<../.gitbook/assets/image (49).png>)

### Types d'infractions

#### Filtre de vocabulaire <a href="#filter" id="filter"></a>

Le filtre de vocabulaire vous permet de supprimer ou de censurer les messages contenant des mots interdits sur votre serveur Discord. \
\
Pour le configurer, il vous suffit d'utiliser la commande `automoderation filter config` ou alors depuis le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2\&response\_type=token\&access\_type\&client\_id=318312854816161792\&redirect\_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser\&scope=identify%20guilds\&state=P2CBWjkz5yl2sDdwMsZNO\&code\_challenge\_method=implicit) en cliquant sur l'engrenage de cette infraction. Vous aurez alors accès à ces paramètres :&#x20;

* Rôles immunisés
* Salons immunisés
* Mots censurés ou message supprimé
* Mode stricte (interdit seulement les mots correspondants exactement aux mots interdits avec des espaces au début et à la fin)

![Configuration dedu filtre de vocabulaire sur le panel web de DraftBot](../.gitbook/assets/image\_2021-11-16\_102443.png)

![Configuration du filtre de vocabulaire interdit via le panel DraftBot](<../.gitbook/assets/image\_2022-01-15\_155007 (1).png>)

{% hint style="warning" %}
Si vous souhaitez bloquer les mots interdits sur votre serveur, pensez à activer cette fonctionnalité via le bouton en haut à droite sur le panel web ou avec la commande `automoderation filter on`&#x20;
{% endhint %}

Une fois configuré, vous pouvez ajouter un mot à ce filtre via la commande `automoderation filter add` ou via l'interface dédiée sur le panel web.

#### Anti-invitation Discord <a href="#invites" id="invites"></a>

L'anti-invitation Discord vous permet, si activé, de supprimer ou de censurer les messages qui contiennent une invitation Discord.\
\
Pour activer ce système, vous pouvez utiliser la commande `automoderation invites on` ou via le bouton en haut à droite dédié aux invitations Discord sur le panel web dans la page de l'auto-modération.\
\
Vous pourrez si vous le souhaitez, configurer davantage le système de restriction d'invitations à l'aide de la commande `automoderation invites config` ou via le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2\&response\_type=token\&access\_type\&client\_id=318312854816161792\&redirect\_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser\&scope=identify%20guilds\&state=P2CBWjkz5yl2sDdwMsZNO\&code\_challenge\_method=implicit) de DraftBot avec comme paramètres possibles :&#x20;

* Invitations autorisées
* Liens d'invitation censurés ou non
* Rôles ignorés
* Salons ignorés

![Configuration des restrictions d'invitations discord sur le panel web de DraftBot](../.gitbook/assets/image\_2021-11-16\_103516.png)

#### Anti-liens externes <a href="#links" id="links"></a>

L'anti liens externes vous permet de supprimer ou de censurer les messages qui contiennent des liens qui ne sont pas autorisés sur votre serveur (hormis les invitations vers des serveurs Discord).\
\
Si vous souhaitez l'activer, vous pouvez exécuter la commande `automoderation links on` sur votre serveur ou bien utiliser le panel web, sur le bouton en haut à droite de l'onglet **Liens externes** sur la page dédiée à l'auto-modération.\
\


Vous pourrez si vous le souhaitez, configurer davantage le système de restriction d'invitations à l'aide de la commande `automoderation invites config` ou via le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2\&response\_type=token\&access\_type\&client\_id=318312854816161792\&redirect\_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser\&scope=identify%20guilds\&state=P2CBWjkz5yl2sDdwMsZNO\&code\_challenge\_method=implicit) de DraftBot avec comme paramètres possibles :&#x20;

* Invitations autorisées
* Liens d'invitation censurés ou non
* Rôles ignorés
* Salons ignorés

![Configuration de l'anti-invitations Discord depuis le panel web](<../.gitbook/assets/image\_2022-01-15\_155505 (1).png>)

#### Anti-spam de messages <a href="#spam" id="spam"></a>

L'anti-spam de DraftBot vous permet de lutter contre l'envoi massif de messages d'un membre en les supprimant automatiquement.\
\
Vous pouvez activer l'auto-modération de cette infraction sur votre serveur Discord à l'aide de la commande `automoderation spam on` ou bien depuis le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2\&response\_type=token\&access\_type\&client\_id=318312854816161792\&redirect\_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser\&scope=identify%20guilds\&state=P2CBWjkz5yl2sDdwMsZNO\&code\_challenge\_method=implicit) de DraftBot, en cliquant sur le bouton qui se situe en haut à droite de la partie consacrée au spam de messages. \
\
Si vous le voulez, vous pouvez configurer l'anti-spam avec la commande `automoderation spam config` ou en cliquant sur l'engrenage de cette infraction sur la page de l'auto-modération de votre serveur. Vous aurez alors accès à ces options :&#x20;

* Intervalle de temps
* Limite de messages durant l'intervalle de temps
* Rôles immunisés par le spam
* Salons immunisés par le spam de messages

![Configuration de l'anti-spam de messages sur le panel web de DraftBot](<../.gitbook/assets/image (55).png>)

#### Anti-spam de mentions <a href="#mentions" id="mentions"></a>

DraftBot possède un anti-spam de mentions vous permettant d'automatiser la modération contre l'utilisation abusive de mentions.\
\
Pour activer l'anti-spam de mentions, il vous suffit d'utiliser la commande `automoderation mentions on` ou bien sur le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2\&response\_type=token\&access\_type\&client\_id=318312854816161792\&redirect\_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser\&scope=identify%20guilds\&state=P2CBWjkz5yl2sDdwMsZNO\&code\_challenge\_method=implicit) en cliquant sur le bouton dédié à ce type d'infraction.\
\
Si vous souhaitez configurer davantage l'anti-spam de mentions pour votre serveur Discord, vous pouvez utiliser la commande `automoderation mentions config` ou bien en cliquant sur l'engrenage de l'anti-spam de mentions sur le panel web de DraftBot. Vous aurez alors accès à ces paramètres :&#x20;

* Intervalle de temps
* Limite de mentions durant l'intervalle de temps
* Rôles ignorés
* Salons ignorés
* Supprimer les messages contenant les mentions excessives ou non

![Configuration de l'anti-spam de mentions via le panel web](<../.gitbook/assets/image (43).png>)

#### Anti-spam d'emojis <a href="#emojis" id="emojis"></a>

L'anti-spam d'emojis vous permet de supprimer les messages contenant trop d'emojis sur votre serveur Discord.\
\
Si vous souhaitez activer l'anti-spam d'emojis, vous pouvez aller sur le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2\&response\_type=token\&access\_type\&client\_id=318312854816161792\&redirect\_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser\&scope=identify%20guilds\&state=P2CBWjkz5yl2sDdwMsZNO\&code\_challenge\_method=implicit) de DraftBot en l'activant via le bouton dédié au spam d'emojis ou bien d'utiliser la commande `automoderation emojis on`.\
\
Pour configurer davantage l'anti-spam d'emojis, vous pouvez cliquer sur l'engrenage à cette infraction sur le panel ou bien utiliser la commande `automoderation emojis config` sur votre serveur. Vous aurez alors la possibilité de changer ses paramètres :&#x20;

* Pourcentage d'emojis
* Limite d'emojis par message
* Rôles ignorés
* Salons ignorés

![Configuration de l'anti-spam d'emojis via le panel web de DraftBot](<../.gitbook/assets/image (23).png>)

### Gestion des infractions

Chaque infraction détectée par l'auto-modération est comptée afin de permettre les sanctions automatiques par nombre d'infractions catégorisées. Deux commandes sont à disposition pour les gérer et les afficher:

* La commande `infractions <membres>` permet d'afficher les infractions d'un membre ![](<../.gitbook/assets/Capture d’écran (110).png>)
* Et la commande `admininfractions` permet de gérer les infractions d'un membre ou de tout le serveur. Plusieurs arguments sont proposés:
  * `remove` : Pour retirer des infractions à un membre&#x20;
  * `reset` : Pour supprimer toutes les infractions d'un membre&#x20;
  * `resetall` : Pour réinitialiser les infractions du serveur (admin)

Ensuite vous n'aurez qu'à suivre les instructions du bot

## Auto-sanctions

L'auto-sanctions permet de sanctionner automatiquement les membres à partir d'un certain nombre d'infractions, d'une catégorie spécifique ou non. Les infractions sont attribuées automatiquement par catégories si [l'auto-modération](moderation.md#auto-moderation) est activé pour les catégories précises.

#### Configurer des sanctions automatiques

Sur le panel, il vous suffit d'ajouter la sanction à attribuer automatiquement, le nombre d'infraction qu'il faut pour que la sanction soit attribuée et le type d'infraction. Vous pourrez sauvegarder la sanction automatique puis la modifier ensuite depuis la liste des sanctions automatiques.

![Configuration des sanctions automatiques depuis le panel DraftBot](../.gitbook/assets/image\_2022-01-15\_211428.png)

Sinon vous pouvez utiliser la commande `autosanctions` :

* `create` pour créer une sanction automatique&#x20;
* `delete` Pour supprimer une sanction automatique&#x20;
* `list` Pour afficher la liste des sanctions automatiques&#x20;
* `reset` Pour réinitialiser la liste des sanctions automatiques&#x20;

## Sanctionner un membre

### Permissions des commandes

{% hint style="warning" %}
Cette liste regroupe les **principales commandes** de modération de **DraftBot** pouvant être utile à vos modérateurs.\
Vous pouvez cependant donner la permission à un rôle d'utiliser ces commandes malgré qui n'a pas la permission requise en utilisant la commande[`roleperms`](roleperms.md) ou depuis la catégorie "Commandes" sur le [panel](https://draftbot.fr/dashboard) !
{% endhint %}

| C**ommandes**                      | P**ermissions requises par défaut** |
| ---------------------------------- | :---------------------------------: |
| ban/tempban/unban                  |          Bannir des membres         |
| mute/tempmute/unmute               |          Gérer les messages         |
| kick                               |         Expulser des membres        |
| warn/unwarn                        |          Gérer les messages         |
| note                               |          Gérer les messages         |
| sanction (interface de modération) |          Gérer les messages         |
| sanctions (afficher les sanctions) |          Gérer les messages         |

### Interface de sanction

Vous pouvez sanctionner un membre avec la commande `sanction <membre>`\
Vous obtiendriez alors cette interface :&#x20;

![Interface de modération avec la commande sanction](<../.gitbook/assets/Capture d’écran (104).png>)

Il vous restera plus qu'à sélectionner le bouton correspondant à la sanction que vous souhaitez infliger au membre. &#x20;

### Bannir un membre

Vous pouvez bannir un membre avec la commande `ban` ou `tempban` si vous souhaitez bannir temporairement un membre.\
\
Si vous souhaitez révoquer le bannissement d'un membre par la suite, vous pouvez le débannir avec la commande `unban` ou depuis l'onglet Bannissement de votre serveur Discord.

### Avertir un membre

Vous pouvez avertir un membre avec la commande `warn <Membre> <Raison>`\
Le membre recevra un message privé avec le motif de son avertissement.

### Ajouter une note à un membre

Vous pouvez ajouter une note à un membre dans son historique de sanction (commande `sanctions`) avec la commande `note`

ça permet de donner une note à un membre visible par les modérateur sans avertir le membre en message privé

Vous pourrez retirer une note d'un membre avec la commande \`adminsanction remove\`

{% hint style="info" %}
Vous pouvez retirer un avertissement d'un membre avec la commande`adminsanction remove`.\
L'avertissement sera retiré de la commande `sanctions`
{% endhint %}

### Noter un membre

Vous pouvez ajouter une note à un membre dans son historique de sanctions (commande `sanctions`) avec la commande `note`.

Cela permet de donner une note visible par les modérateur à un membre sans l'avertir en message privé.

{% hint style="info" %}
Vous pourrez retirer une note d'un membre avec la commande `adminsanction remove`
{% endhint %}

### Rendre muet un membre

Vous pouvez rendre muet un membre avec la commande `mute` ou `tempmute` si la sanction est temporaire.\
\
Vous pourrez, si vous le souhaitez, retirer le mute de cette personne avec la commande `unmute`

Pour plus d'informations concernant le mute ainsi que sa configuration, vous pouvez vous rendre sur l'article dédié:&#x20;

{% content-ref url="mute.md" %}
[mute.md](mute.md)
{% endcontent-ref %}

## Afficher les sanctions

Vous pouvez voir les sanctions effectuées sur votre serveur avec la commande `sanctions`

{% hint style="info" %}
Vous pouvez compléter cette commande par un pseudo ou une mention pour voir les sanctions d'une personne précise.
{% endhint %}

|          `sanctions` sans argument          |              `sanctions` \<Membre>             |
| :-----------------------------------------: | :--------------------------------------------: |
| ![](<../.gitbook/assets/sanctions (1).png>) | ![](<../.gitbook/assets/sanctions membre.png>) |

