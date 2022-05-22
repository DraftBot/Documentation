---
description: >-
  Cette catégorie de commandes vous permet de modérer au mieux votre serveur
  Discord.
---

# Modération

## Auto-Modération

Le système d'auto-modération de DraftBot vous permet d'automatiser certaines actions de modérations telles que l'envoi d'invitations Discord, de spam, de liens externes et bien d'autres choses.

### Configuration via Discord <a href="#automoderation-discord" id="automoderation-discord"></a>

Si vous souhaitez configurer l'auto-modération via Discord directement, vous pouvez utiliser la commande `automoderation` sur votre serveur :&#x20;

![Exécution de la commande automoderation sur un serveur Discord](<../.gitbook/assets/image (46).png>)

Vous aurez alors le choix entre plusieurs infractions :&#x20;

* ****[**filter**](moderation.md#filter) : Filtre de vocabulaire interdit
* ****[**invites**](moderation.md#invites) : Anti-invitations Discord
* ****[**links**](moderation.md#links) : Anti-liens externes
* ****[**spam**](moderation.md#spam) : Anti-spam
* ****[**mentions**](moderation.md#mentions) : Anti-spam de mentions
* ****[**emojis**](moderation.md#emojis) : Anti-spam d'emojis

### Configuration via le panel web <a href="#automoderation-panel" id="automoderation-panel"></a>

DraftBot possède un panel web accessible en allant sur [draftbot.fr](https://draftbot.fr/) et qui vous permet notamment de configurer facilement le système d'auto-modération.

![Accéder au panel web de DraftBot via draftbot.fr](<../.gitbook/assets/Sans titre-output.gif>)

Il vous suffira ensuite de cliquer sur votre serveur Discord puis d'accéder à la page "Auto-Modération".

![](<../.gitbook/assets/image (48).png>)

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
Pour le configurer davantage, vous pouvez utiliser la commande `automoderation links config` ou bien depuis le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2\&response\_type=token\&access\_type\&client\_id=318312854816161792\&redirect\_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser\&scope=identify%20guilds\&state=P2CBWjkz5yl2sDdwMsZNO\&code\_challenge\_method=implicit) en cliquant sur l'engrenage des liens externes. Vous aurez alors accès à ces paramètres :

* Noms de domaines autorisés
* Rôles ignorés
* Salons ignorés
* Message censuré ou supprimé

![Configuration des liens externes via le panel web](<../.gitbook/assets/image (54).png>)

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
* Messages contenant les mentions excessives supprimés ou non

![Configuration de l'anti-spam de mentions via le panel web](<../.gitbook/assets/image (56).png>)

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

![Configuration de l'anti-spam d'emojis via le panel web de DraftBot](<../.gitbook/assets/image (57).png>)

## Sanctionner un membre

### Permissions des commandes

{% hint style="warning" %}
Cette liste regroupe les **principales commandes** de modération de **DraftBot** pouvant être utile à vos modérateurs.\
Vous pouvez cependant donner la permission à un rôle d'utiliser ces commandes malgré qui n'a pas la permission requise en utilisant la commande [`roleperms`](roleperms.md) ou depuis la catégorie "Commandes" sur le panel web !
{% endhint %}

| Commandes                          | Permissions requises par défaut |
| ---------------------------------- | :-----------------------------: |
| ban/tempban/unban                  |        Bannir des membres       |
| mute/tempmute/unmute               |        Gérer les messages       |
| kick                               |       Expulser des membres      |
| warn/unwarn                        |        Gérer les messages       |
| note                               |        Gérer les messages       |
| sanction (interface de modération) |        Gérer les messages       |
| sanctions (afficher les sanctions) |        Gérer les messages       |

### Interface de sanction

Vous pouvez sanctionner un membre avec la commande `sanction <membre>`\
Vous obtiendriez alors cette interface :&#x20;

![Interface de modération avec la commande sanction](<../.gitbook/assets/image (44).png>)

Il vous restera plus qu'à sélectionner la réaction correspondante à la sanction que vous souhaitez infliger au membre. &#x20;

### Bannir un membre

Vous pouvez bannir un membre avec la commande `ban` ou `tempban` si vous souhaitez bannir temporairement un membre.\
\
Si vous souhaitez révoquer le bannissement d'un membre par la suite, vous pouvez le débannir avec la commande `unban` ou depuis l'onglet Bannissement de votre serveur Discord.

### Avertir un membre

Vous pouvez avertir un membre avec la commande `warn <Membre> <Raison>`\
Le membre recevra un message privé avec le motif de son avertissement.\
\
Si vous voulez retirer un avertissement d'un membre avec la commande `adminsanction remove`.\
L'avertissement sera retiré de la commande `sanctions`

### Ajouter une note à un membre

Vous pouvez ajouter une note à un membre dans son historique de sanction (commande `sanctions`) avec la commande `note`

ça permet de donner une note à un membre visible par les modérateur sans avertir le membre en message privé

Vous pourrez retirer une note d'un membre avec la commande \`adminsanction remove\`

### Rendre muet un membre

Vous pouvez rendre muet un membre avec la commande `mute` ou `tempmute` si la sanction est temporaire.\
\
Vous pourrez, si vous le souhaitez, retirer le mute de cette personne avec la commande `unmute`

Pour plus d'informations concernant ce type de sanction ainsi que sa configuration, vous pouvez vous rendre sur l'article dédié au mute:&#x20;

{% content-ref url="mute.md" %}
[mute.md](mute.md)
{% endcontent-ref %}

## Afficher les sanctions

Vous pouvez voir les sanctions effectuées sur votre serveur avec la commande `sanctions`

{% hint style="info" %}
Vous pouvez compléter cette commande par un pseudo ou une mention pour voir les sanctions d'une personne précise.
{% endhint %}

|                      `sanctions` sans argument                     |                                  `sanctions` \<Membre>                                  |
| :----------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| <p></p><p><img src="../.gitbook/assets/image (25).png" alt=""></p> | <p></p><p><img src="../.gitbook/assets/image (27).png" alt="" data-size="original"></p> |

