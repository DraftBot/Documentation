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

{% swagger-parameter in="path" name="" type="string" required="false" %}

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
