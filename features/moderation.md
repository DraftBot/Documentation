---
description: >-
  Cette catégorie de commandes vous permet de modérer au mieux votre serveur
  Discord.
---

# Modération

## Auto-Modération

Le système d'auto-modération de DraftBot vous permet d'automatiser certaines actions de modérations telles que l'envoi d'invitations Discord, de spam, de liens externes et bien d'autres choses.

### Configuration via Discord <a id="automoderation-discord"></a>

Si vous souhaitez configurer l'auto-modération via Discord directement, vous pouvez utiliser la commande `automoderation` sur votre serveur : 

![Ex&#xE9;cution de la commande automoderation sur un serveur Discord](../.gitbook/assets/image%20%2847%29.png)

Vous aurez alors le choix entre plusieurs infractions : 

* \*\*\*\*[**filter**](moderation.md#filter) : Filtre de vocabulaire interdit
* \*\*\*\*[**invites**](moderation.md#invites) : Anti-invitation Discord
* \*\*\*\*[**links**](moderation.md#links) : Anti-liens externes
* \*\*\*\*[**spam**](moderation.md#spam) : Anti-spam
* \*\*\*\*[**mentions**](moderation.md#mentions) : Anti-spam de mentions
* \*\*\*\*[**emojis**](moderation.md#emojis) : Anti-spam d'emojis

### Configuration via le panel web <a id="automoderation-panel"></a>

DraftBot possède un panel web accessible en allant sur [draftbot.fr](https://draftbot.fr/) et qui vous permets notamment de configurer facilement le système d'auto-modération.

![Acc&#xE9;der au panel web de DraftBot via draftbot.fr](../.gitbook/assets/sans-titre-output.gif)

Il vous suffira ensuite de cliquer sur votre serveur Discord puis d'accéder à la page "Auto-Modération".

![](../.gitbook/assets/image%20%2851%29.png)

### Types d'infractions

#### Filtre de vocabulaire <a id="filter"></a>

Le filtre de vocabulaire vous permet de supprimer ou de censurer les messages contenants des mots interdits sur votre serveur Discord.   
  
Pour le configurer, il vous suffit d'utiliser la commande `automoderation filter config` ou alors depuis le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2&response_type=token&access_type&client_id=318312854816161792&redirect_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser&scope=identify%20guilds&state=P2CBWjkz5yl2sDdwMsZNO&code_challenge_method=implicit) en cliquant sur l'engrenage de cette infraction. Vous aurez alors accès à ces paramètres : 

* Rôles immunisés 
* Salons immunisés 
* Message censuré ou supprimé

![Configuration du filtre de vocabulaire sur le panel web de DraftBot](../.gitbook/assets/image%20%2856%29.png)

{% hint style="warning" %}
Si vous souhaitez bloquer les mots interdits sur votre serveur, pensez à activer cette fonctionnalité via le bouton en haut à droite sur le panel web ou avec la commande `automoderation filter on` 
{% endhint %}

Une fois configuré, vous pouvez ajouter un mot à ce filtre via la commande `automoderation filter add` ou via l'interface dédié sur le panel web.

#### Anti-invitation Discord <a id="invites"></a>

L'anti-invitation Discord vous permet, si activée, de supprimer ou de censurer les messages qui contiennent une invitation Discord.  
  
Pour activer ce système, vous pouvez utiliser la commande `automoderation invites on` ou via le bouton en haut à droite dédié aux invitations Discord sur le panel web dans la page de l'auto-modération.  
  
Vous pourrez si vous le souhaitez, configurer davantage le système d'invitation à l'aide de la commande `automoderation invites config` ou via le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2&response_type=token&access_type&client_id=318312854816161792&redirect_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser&scope=identify%20guilds&state=P2CBWjkz5yl2sDdwMsZNO&code_challenge_method=implicit) de DraftBot avec comme paramètres possibles : 

* Rôles ignorés
* Salons ignorés
* Message censuré ou non

![Configuration de l&apos;anti-invitation Discord via le panel web](../.gitbook/assets/image%20%2857%29.png)

#### Anti-liens externes <a id="links"></a>

L'anti liens externes vous permet de supprimer ou de censurer les messages qui contiennent des liens qui ne sont pas autorisés sur votre serveur \(hormis les invitations vers des serveurs Discord\).  
  
Si vous souhaitez l'activer, vous pouvez exécuter la commande `automoderation links on` sur votre serveur ou bien utiliser le panel web, sur le bouton en haut à droite de l'onglet **Liens externes** sur la page dédié à l'auto-modération.  
  
Pour le configurer davantage, vous pouvez utiliser la commande `automoderation links config` ou bien depuis le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2&response_type=token&access_type&client_id=318312854816161792&redirect_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser&scope=identify%20guilds&state=P2CBWjkz5yl2sDdwMsZNO&code_challenge_method=implicit) en cliquant sur l'engrenage des liens externes. Vous aurez alors accès à ces paramètres :

* Noms de domaines autorisés
* Rôles ignorés
* Salons ignorés
* Message censuré ou supprimé

![Configuration des liens externes via le panel web](../.gitbook/assets/image%20%2848%29.png)

#### Anti-spam de messages <a id="spam"></a>

L'anti-spam de DraftBot vous permet de lutter l'envoie massif de messages d'un membre en les supprimant automatiquement.  
  
Vous pouvez activer l'auto-modération de cette infraction sur votre serveur Discord à l'aide de la commande `automoderation spam on` ou bien depuis le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2&response_type=token&access_type&client_id=318312854816161792&redirect_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser&scope=identify%20guilds&state=P2CBWjkz5yl2sDdwMsZNO&code_challenge_method=implicit) de DraftBot en cliquant sur le bouton qui se situe en haut à droite de la partie consacré au spam de messages.   
  
Si vous le voulez, vous pouvez configurer l'anti-spam avec la commande `automoderation spam config` ou en cliquant sur l'engrenage de cette infraction sur la page de l'auto-modération de votre serveur. Vous aurez alors accès à ces options : 

* Intervalle de temps
* Limite de messages durant l'intervalle de temps
* Rôles immunisés par le spam
* Salons immunisés par le spam de messages

![Configuration de l&apos;anti-spam de messages sur le panel web de DraftBot](../.gitbook/assets/image%20%2850%29.png)

#### Anti-spam de mentions <a id="mentions"></a>

DraftBot possède un anti-spam de mentions vous permettant d'automatiser la modération contre l'utilisation abusive de mentions.  
  
Pour activer l'anti-spam de mentions, il vous suffit d'utiliser la commande `automoderation mentions on` ou bien sur le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2&response_type=token&access_type&client_id=318312854816161792&redirect_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser&scope=identify%20guilds&state=P2CBWjkz5yl2sDdwMsZNO&code_challenge_method=implicit) en cliquant sur le bouton dédié à ce type d'infraction.  
  
Si vous souhaitez configurer davantage l'anti-spam de mentions pour votre serveur Discord, vous pouvez utiliser la commande `automoderation mentions config` ou bien en cliquant sur l'engrenage de l'anti-spam de mentions sur le panel web de DraftBot. Vous aurez alors accès à ces paramètres : 

* Intervalle de temps
* Limite de mentions
* Rôles ignorés
* Salons ignorés
* Messages contenant les mentions supprimés ou non

![Configuration de l&apos;anti-spam de mentions via le panel web](../.gitbook/assets/image%20%2853%29.png)

#### Anti-spam d'emojis <a id="emojis"></a>

L'anti-spam d'emojis vous permet de supprimer les messages contenant trop d'emojis sur votre serveur Discord.  
  
Si vous souhaitez activer l'anti-spam d'emojis, vous pouvez aller sur le [panel web](https://discord.com/oauth2/authorize?protocol=oauth2&response_type=token&access_type&client_id=318312854816161792&redirect_uri=https%3A%2F%2Fwww.draftbot.fr%2Flogin%2Fuser&scope=identify%20guilds&state=P2CBWjkz5yl2sDdwMsZNO&code_challenge_method=implicit) de DraftBot en l'activant via le bouton dédié au spam d'emojis ou bien d'utiliser la commande `automoderation emojis on`  
  
Pour configurer davantage l'anti-spam d'emojis, vous pouvez cliquer sur l'engrenage à cette infraction sur le panel ou bien utiliser la commande `automoderation emojis config` sur votre serveur. Vous aurez alors la possibilité de changer ses paramètres : 

* Pourcentage d'emojis
* Limite d'emojis par message
* Rôles ignorés
* Salons ignorés

![Configuration de l&apos;anti-spam d&apos;emojis via le panel web de DraftBot](../.gitbook/assets/image%20%2855%29.png)

## Auto-Sanctions \(ARCHIVE\)

En complément de [l'auto-modération](moderation.md#auto-moderation) de DraftBot, vous avez la possibilité d'infliger automatiquement une sanction à un membre, en allant de l'avertissement jusqu'au bannissement définitif, si un membre enfreint trop de fois votre configuration de l'auto-modération.

### Configuration via le panel web <a id="autosanctions-panel"></a>

Si vous n'êtes pas sur le panel web de DraftBot, il vous suffit d'aller sur le [site de DraftBot](https://draftbot.fr/) puis de cliquer sur le bouton "Panel".

**📌TODO: GIF ACCES AU PANEL WEB**

Il vous suffira ensuite de cliquer sur votre serveur puis de vous rendre sur la page d'auto-modération.

![Page des auto-sanctions sur le panel web](../.gitbook/assets/image%20%2854%29.png)

Il vous suffira ensuite de compléter les différents champs requis pour créer une auto-sanction :

* **Sanction** : Sanction appliqué au membre ne respectant pas l'auto-sanction configuré
* **Durée** _\(si ban ou mute temporaire\)_ : Durée de la sanction temporaire
* **Nombre d'infractions** : Nombre d'infractions commises par le membre dans l'[auto-modération](moderation.md#auto-moderation)
* **Infraction** : [Type de l'infraction](moderation.md#types-dinfractions) \(_infractions_ signifie n'importe quel type d'infraction\)
* **Intervalle** : ???

![Ajout d&apos;une auto-sanction via le panel web de DraftBot](../.gitbook/assets/brave_peved9i4nu.png)

### Configuration via Discord <a id="autosanctions-discord"></a>

Si vous souhaitez configurer l'auto-sanction directement depuis Discord, il faut suffit d'utiliser la commande `autosanction`

**📌TODO: COMMANDE AUTOSANCTION**

## Sanctionner un membre

### Permissions des commandes

{% hint style="warning" %}
Cette liste regroupe les **principales commandes** de modération de **DraftBot** pouvant être utile à vos modérateurs.  
Vous pouvez cependant donner la permission à un rôle d'utiliser ces commandes malgré qui n'a pas la permission requise en utilisant la commande [`roleperms`](roleperms.md) !
{% endhint %}

| Commandes | Permissions requises par défaut |
| :--- | :---: |
| ban/tempban/unban | Bannir des membres |
| mute/tempmute/unmute | Gérer les messages |
| kick | Expulser des membres |
| warn/unwarn | Gérer les messages |
| sanction \(interface de modération\) | Gérer les messages |
| sanctions \(afficher les sanctions\) | Gérer les messages |

### Interface de sanction

Vous pouvez sanctionner un membre avec la commande `sanction <membre>`  
Vous obtiendriez alors cette interface : 

![Interface de mod&#xE9;ration avec la commande sanction](../.gitbook/assets/image%20%2840%29.png)

Il vous restera plus qu'à sélectionner la réaction correspondante à la sanction que vous souhaitez infliger au membre.  

### Bannir un membre

Vous pouvez bannir un membre avec la commande `ban` ou alors `tempban` si vous souhaitez bannir temporairement le membre.  
  
Si vous souhaitez retirer le bannissement d'un membre par la suite, vous pouvez le débannir avec la commande `unban` ou depuis l'onglet Bannissement de votre serveur Discord.

### Avertir un membre

Vous pouvez avertir un membre avec la commande `warn <Membre> <Raison>`  
Le membre recevra un message privé avec le motif de son avertissement.  
  
Si vous voulez retirer un avertissement d'un membre avec la commande `unwarn`  
L'avertissement sera retiré de la commande `sanctions`

### Rendre muet un membre

Vous pouvez rendre muet un membre avec la commande `mute` ou `tempmute` si la sanction est temporaire.  
  
Vous pourrez, si vous le souhaitez, retirer le mute de cette personne avec la commande `unmute`

Pour plus d'informations concernant ce type de sanction ainsi que sa configuration, vous pouvez vous rendre sur l'article dédié au mute: 

{% page-ref page="mute.md" %}

## Afficher les sanctions

Vous pouvez voir les sanctions effectuées sur votre serveur avec la commande `sanctions`

{% hint style="info" %}
Vous pouvez compléter cette commande par un pseudo ou une mention pour voir les sanctions d'une personne précise.
{% endhint %}

<table>
  <thead>
    <tr>
      <th style="text-align:center"><code>sanctions</code> sans argument</th>
      <th style="text-align:center"><code>sanctions</code> &lt;Membre&gt;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center">
        <p></p>
        <p>
          <img src="../.gitbook/assets/image (26).png" alt/>
        </p>
      </td>
      <td style="text-align:center">
        <p></p>
        <p>
          <img src="../.gitbook/assets/image (28).png" alt/>
        </p>
      </td>
    </tr>
  </tbody>
</table>

