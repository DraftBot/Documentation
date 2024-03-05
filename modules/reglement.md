---
description: >-
  Mettez en place un système de règlement avec validation. Les nouveaux
  arrivants pourront obtenir un rôle une fois qu'ils auront pris connaissance
  des règles du serveur.
---

# 📝 Règlement

## Création du règlement

Pour commencez, vous allez devoir effectuer la commande <mark style="color:orange;">/reglement créer</mark>. **DraftBot** vous donne ensuite la possibilité d'ajouter le rôle que vous souhaitez attribuer aux membres, une fois qu'ils ont pris connaissance du règlement et qu'ils ont cliqué sur le bouton "<mark style="color:green;">Accepter le règlement</mark>".


![Résultat de la commande /reglement créer](../.gitbook/assets/rules/rules-create.png)

## Ajouter des règles

Maintenant que l'embed est créé, vous avez besoin d'ajouter des règles afin de conserver une bonne stabilité dans votre communauté. Pour cela, utilisez la commande <mark style="color:orange;">/reglement ajouter</mark>, DraftBot vous demandera : le message du règlement, le titre et la description de votre règle.

![Aperçu de la commande /reglement créer](../.gitbook/assets/rules/rules-add-1.png)

{% hint style="warning" %}
Pour le message du règlement, il s'agit de récupérer **l'identifiant** de l'embed du règlement que vous avez créé.
Pour savoir comment récupérer un identifiant : [Cliquez ici !](../../autres/recuperer-un-identifiant.md#message)
{% endhint %}

![Résultat d'ajout d'une règle](../.gitbook/assets/rules/rules-add-2.png)

{% hint style="info" %}
Lorsque l'ajout d'une règle est effectuée, **DraftBot** propose deux choix : ajouter une autre règle ou remettre à plus tard.

{% endhint %}

{% hint style="warning" %} Le titre est limité à 256 caractères, tandis que la description est limitée à 1 024 caractères. {% endhint %}

## Modifier une règle


Vous pouvez modifier vos règles à tout moment, que se soit pour faire une correction ou bien pour le rendre plus esthétique selon vos envies. Pour ce faire, utilisez la commande <mark style="color:orange;">/reglement modifier</mark>. La procédure est assez semblable à la commande <mark style="color:orange;">/reglement ajouter</mark>, à la différence qu'un nouveau champ apparaît : **"règle"**.


Ce champ vous permet de sélectionner **la règle** que vous souhaitez modifier.

![Aperçu de la commande /reglement modifier](../.gitbook/assets/rules/rules-modify.png)

![Résultat de la modification d'une règle](../.gitbook/assets/rules/rules-modify-2.png)

## Retirer une règle


Si vous souhaitez retirer une règle obsolète ou inutile, vous pouvez utiliser la commande <mark style="color:orange;">/reglement retirer</mark>. Il vous suffit alors de récupérer **l'identifiant** du message du règlement et sélectionner la **règle**.

![Aperçu de la commande /reglement retirer](../.gitbook/assets/rules/rules-remove.png)