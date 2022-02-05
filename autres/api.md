---
description: Une api destinée aux développeurs !
---

# API

{% swagger baseUrl="https://api.draftbot.fr" path="/base/commands" method="get" summary="Les commandes" %}
{% swagger-description %}
Permet de récupérer la liste de toutes les commandes, ainsi que leur description, alias, ... ! 
{% endswagger-description %}

{% swagger-response status="200" description="Commandes récupérées avec succès." %}
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
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.draftbot.fr" path="/base/shards" method="get" summary="Shards" %}
{% swagger-description %}
Permet de récupérer le statut de tous les shards de DraftBot, comprend toutes les informations visibles sur la page status du site.
{% endswagger-description %}

{% swagger-parameter in="path" name="" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
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
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.draftbot.fr" path="/levels" method="get" summary="Niveaux et récompenses" %}
{% swagger-description %}
Permet de récupérer la liste de tous les membres, leurs niveaux et les récompenses possibles en fonction des niveaux !
{% endswagger-description %}

{% swagger-parameter in="query" name="guild_id" type="integer" %}
ID du serveur dont vous souhaitez recevoir les niveaux ainsi que les récompenses
{% endswagger-parameter %}

{% swagger-parameter in="query" name="user_id" type="integer" %}
ID de l'utilisateur ciblé
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
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
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```javascript
{
    "status": 404,
    "statusText": "NOT FOUND"
}
```
{% endswagger-response %}
{% endswagger %}
