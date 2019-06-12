---
description: Une api destiné aux développeurs !
---

# API

{% api-method method="get" host="https://api.draftbot.fr" path="/commands" %}
{% api-method-summary %}
Liste de toutes les commandes
{% endapi-method-summary %}

{% api-method-description %}
Permet de récupérer la liste de toutes les commandes, ainsi que leur description, les aliases ! 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Commandes récupérés avec succès.
{% endapi-method-response-example-description %}

```javascript
[
    {
        "name": "botinfo",
        "aliases": ["botinfos", "liens"],
        "groupID": "bot",
        "description": "Afficher quelques informations importantes concernant le bot.",
        "examples": ["botinfo"],
        "guildOnly": false,
        "ownerOnly": false,
        "clientPermissions": ["SEND_MESSAGES", "EMBED_LINKS"],
        "userPermissions": null,
        "nsfw": false,
        ...
    },
    ...
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.draftbot.fr" path="/levels/:guild" %}
{% api-method-summary %}
Niveaux et récompenses
{% endapi-method-summary %}

{% api-method-description %}
Permet de récupérer la liste de touts les membres, leurs niveaux et les récompenses possibles en fonction des niveaux !
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="guild" type="integer" required=true %}
ID de la guild dont vous souhaitez avoir les niveaux, récompenses
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    guild: {
        "name": "DraftBot™ - Support",
        "pp": "https://cdn.discordapp.com/icons/422112414964908042/e3e979299d59bb62b664cfb20ea38ae5.webp?size=256"
    },
    users: [
        {
            "id": "207190782673813504",
            "username": "DraftMan",
            "pp": "https://cdn.discordapp.com/avatars/207190782673813504/1b5460c9eebe544b57e0cae8b07154a3.webp",
            "level": 19,
            "currentLevelXp": 1154,
            "levelXp": 2855,
            "totalXp": 22149
        },
        ...
    ],
    rewards: [
        {
            "role": "Actif",
            "level": "10"
        },
        ...
    ],
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "status": 404,
    "statusText": "NOT FOUND"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

