---
layout: page
title:  "Codes et référentiels"
lang: fr
permalink: "/codes-et-referentiels/"
trans_url: "/code-and-repositories/"
---

##  Comment *Suivre la conformité en matière de sécurité Web* fonctionne

**Données**

*Suivre la conformité en matière de sécurité Web* évalue actuellement les sous-domaines `.gc.ca` et `.canada.ca` qui sont accessibles au public sur HTTP. Ces domaines et sous-domaines sont fournis par le Bureau de la transformation numérique du SCT.

**Architecture**

Ce produit comprend trois parties : un scanneur de domaine qui analyse une liste des domaines et analyse leur comportement (*tracker*), une instance Cosmos DB qui héberge les résultats de l’analyse, et une application Web qui affiche les résultats (*track-web*).

**Pile**

*tracker* est rédigée pour Python 3.5 et versions suivantes.

*track-web* est une application Flask rédigée pour Python 3.6 et les versions suivantes.

## Référentiels

Il existe deux référentiels individuels qui composent *Suivre la conformité en matière de sécurité Web*.

**[tracker](https://github.com/cds-snc/tracker)**

Ce référentiel détient l’outil d’analyse de domaine et produit les données qui remplissent le tableau. L’outil d’analyse évalue le comportement des quatre « points d’extrémité » de chaque domaine et sous-domaine : `http://`, `http://www`, `https://` et `https://www`. Les données provenant de ces points d’extrémité permettent de qualifier le comportement global d’un domaine ou sous-domaine. Ces mesures sont effectuées à l’aide de [domain-scan](https://github.com/18F/domain-scan), un outil de source libre fondé sur Python et tenu à jour par la General Services Administration des États-Unis. Domain-scan permet de coordonner et de mettre en parallèle efficacement [pshtt](https://github.com/dhs-ncats/pshtt), [sslyze](https://github.com/nabla-c0d3/sslyze), et d’autres outils pour les grandes analyses de lots.

Le référentiel *[tracker](https://github.com/cds-snc/tracker/tree/master/docs)* contient d’autres documents concernant :
* les définitions des données d’entrée et de sortie;
* la manière dont les domaines et les sous-domaines sont appariés aux propriétaires de domaine;
* les principes de base pour configurer les scanneurs Lambda pour l’énorme analyse parallèle;
* la manière de modifier les composantes existantes ou ajouter de nouvelles composantes au système d’analyse;
* la manière d’effectuer un dépliement local.

**[track-web](https://github.com/cds-snc/track-web)**

Ce référentiel comprend l’appli Flask. *Track-web* prend la sortie de l’outil d’analyse de domaine et affiche les résultats dans des tableaux et des graphiques dans *Suivre la conformité en matière de sécurité Web*.

Le référentiel *[track-web](https://github.com/cds-snc/track-web/tree/master/docs)* contient d’autres documents concernant :

* la manière de créer d’autres pages Web, styles, graphiques et tables de données;
* la manière d’ajouter Google Analytics et faire le suivi des événements (le téléchargement et le filtrage des événements sont intégrés);
* la manière d’effectuer un dépliement local.
