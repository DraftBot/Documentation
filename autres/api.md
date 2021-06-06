---
description: Une api destinée aux développeurs !
---

# API

{% api-method method="get" host="https://api.draftbot.fr" path="/base/commands" %}
{% api-method-summary %}
Les commandes
{% endapi-method-summary %}

{% api-method-description %}
Permet de récupérer la liste de toutes les commandes, ainsi que leur description, alias, ... ! 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Commandes récupérées avec succès.
{% endapi-method-response-example-description %}

```javascript
[
    {
        "id": "bot",
        "name": "Bot",
        "description": "Informations par rapport au bot et au discord",
        "guarded": true,
        "commands": [
            {
                "name": "help",
                "description": "Afficher la liste des commandes.",
                "examples": "help, help botinfo",
                "aliases": "commande, commands, commandes"
            },
            ...
        ],
    },
    ...
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.draftbot.fr" path="/base/shards" %}
{% api-method-summary %}
Shards
{% endapi-method-summary %}

{% api-method-description %}
Permet de récupérer le statut de tous les shards de DraftBot, comprend toutes les informations visibles sur la page status du site.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
[
    {
        "shard_id": 0,
        "guilds": 12,
        "members": 2772,
        "ping": 112,
        "memory": 44.52,
        "uptime": "2020-12-27T18:33:44.565Z",
        "lastUpdate": "2020-12-27T23:46:44+01:00",
        "state": true
    }
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.draftbot.fr" path="/levels" %}
{% api-method-summary %}
Niveaux et récompenses
{% endapi-method-summary %}

{% api-method-description %}
Permet de récupérer la liste de tous les membres, leurs niveaux et les récompenses possibles en fonction des niveaux !
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="guild\_id" type="integer" required=true %}
ID du serveur dont vous souhaitez recevoir les niveaux ainsi que les récompenses
{% endapi-method-parameter %}

{% api-method-parameter name="user\_id" type="integer" required=false %}
ID de l'utilisateur ciblé
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "guild": {
        "name": "DraftBot™ - Support",
        "icon": "https://cdn.discordapp.com/icons/422112414964908042/a_3dd55dadfcbd56d873098b2a2a3601d7.png?size=256"
    },
    "rewards": [
        {
            "level": "10"
            "reward": "Rôle Actif",
        },
        ...
    ],
    "totalUsersCount": 2500,
    "users": [
        {
            "id": "207190782673813504",
            "username": "DraftMan",
            "displayName": "DraftMan",
            "avatar": "https://cdn.discordapp.com/avatars/207190782673813504/1b5460c9eebe544b57e0cae8b07154a3.webp",
            "level": 19,
            "currentLevelXp": 1154,
            "levelXp": 2855,
            "totalXp": 22149
        },
        ...
    ],
    "page": 0
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

