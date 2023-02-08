---
description: >-
  Choisissez des rôles qui seront automatiquement ajouté lorsqu'un nouveau
  membre rejoint le serveur, un salon vocal, ou lance un live vidéo
---

# 🏷 Rôles automatiques

![Menu d'accueil de la configuration des Rôles automatiques](<../../.gitbook/assets/autorole/view.png>)

## <mark style="color:blue;">A l'arrivée</mark>

#### Ajouter ou retirer un rôle attribué à l'arrivée

{% tabs %}
{% tab title="Via la commande /config" %}
Veuillez d'abord vous rendre dans <mark style="color:orange;">/config</mark> ➜ 🏷️ Rôles Automatiques ➜ <mark style="color:blue;">"À l'arrivée"</mark>.

Pour ajouter un rôle automatique à l'arrivée d'un membre, vous pouvez cliquer sur "Ajouter".

Par contre si souhaitez retirer un rôle donné lorsqu'un membre rejoint votre serveur, vous pouvez cliquer sur "Retirer".

Si vous souhaitez par contre retirer **tous** les rôles automatiques à l'arrivée, cliquez sur "Réinitialiser".

{% hint style="info" %}
La limite des rôles automatiques est de 3 pour les serveurs non-premium et 10 pour les serveurs premiums.
{% endhint %}

![Menu d'accueil de la configuration des rôles automatiques à l'arrivée](../../.gitbook/assets/autorole/join.png)
{% endtab %}

{% tab title="Via le panel" %}
Veuillez d'abord vous rendre sur le [<mark style="color:orange;">panel</mark>](https://draftbot.fr/dashboard/user/) ➜ Arrivées & départs ➜ Bas de la page.

Sélectionnez ensuite le rôle que vous souhaitez rendre automatique à l'arrivée d'un nouveau membre.

{% hint style="info" %}
Si les rôles apparaissent en rouge, cela signifie que DraftBot n'a pas les permissions de donner ce rôle ou bien que ce dernier est en dessous des rôles que l'on souhaite attribuer.
{% endhint %}

![Configuration des rôles Automatiques à l'arrivée sur le panel](../../.gitbook/assets/autorole/dashboard_join.png)

{% endtab %}
{% endtabs %}

## <mark style="color:blue;">En vocal</mark>

#### Ajouter ou retirer un rôle attribué lorsqu'un membre est en vocal

{% tabs %}
{% tab title="Via la commande /config" %}
Veuillez d'abord vous rendre dans <mark style="color:orange;">/config</mark> ➜ 🏷️ Rôles Automatiques ➜ <mark style="color:blue;">"En vocal"</mark>.

Pour ajouter un rôle automatique à un membre en vocal, vous pouvez cliquer sur "Configurer".
*Vous avez la possibilité de sélectionner un rôle déjà existant ou d'en créer un directement.*

Pour retirer un rôle automatique à l'arrivée d'un membre, vous pouvez cliquer sur "Modifier".
*Vous avez la possibilité de supprimer le rôle du serveur une fois le système désactivé.*

#### Restreindre des salons aux membres en vocal

Pour restreindre des salons aux membres en vocal, cliquez sur "Restreindre des salons aux membres en vocal" puis sélectionnez le salon en question. Seuls les membres possédant ce rôle pourront le voir.

![![Menu d'accueil de la configuration des rôles automatiques en vocal](../../.gitbook/assets/autorole/voice.png)](../../.gitbook/assets/autorole/voice.png)
{% endtab %}

{% tab title="Via le panel" %}
Veuillez d'abord vous rendre sur le [<mark style="color:orange;">panel</mark>](https://draftbot.fr/dashboard/user/) ➜ Communautaire ➜ Bas de la page.

Sélectionnez ensuite le rôle que vous souhaitez rendre automatique à l'arrivée d'un nouveau membre.


{% hint style="info" %}
Si les rôles apparaissent en rouge, cela signifie que DraftBot n'a pas les permissions de donner ce rôle ou bien que ce dernier est en dessous des rôles que l'on souhaite attribuer.
{% endhint %}

![Configuration des rôles automatiques de vocal, sur le panel](../../.gitbook/assets/autorole/dashboard_voice.png)

{% endtab %}
{% endtabs %}

## <mark style="color:blue;">En live</mark>

Les rôles automatiques de live vous permettent de donner un rôle à un membre lorsqu'il est en direct sur YouTube ou encore sur Twitch.

Veuillez d'abord vous rendre dans <mark style="color:orange;">/config</mark> ➜ 🏷️ Rôles Automatiques ➜ <mark style="color:blue;">"En live"</mark>.

Pour ajouter un rôle automatique à un membre en live, vous pouvez cliquer sur "Configurer".
*Vous avez la possibilité de sélectionner un rôle déjà existant ou d'en créer un nouveau.*

#### Restreindre un rôle de live à certains utilisateurs

Vous pouvez autoriser **DraftBot** à donner le rôle de live au membre uniquement s'il en possède un autre. Pour faire cela, cliquez sur le bouton "Restreindre le rôle".

Si vous souhaitez retirer cette restriction, cliquez de nouveau sur "Restreindre le rôle" puis "Retirer".
*Vous avez également la possibilité de les réinitialiser.*


![Menu d'accueil de la configuration des rôles automatiques en live](../../.gitbook/assets/autorole/live.png)