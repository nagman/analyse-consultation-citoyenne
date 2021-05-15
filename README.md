# Analyse consultation citoyenne

Un petit script en node.js d'analyse des résultats de la consultation citoyenne sur la légalisation du cannabis récréatif de 2021

Tous les résultats sont dans le fichier `dataRapport.json`.
Il est à comparer avec `dataFrance.json`, qui résume des chiffres globaux sur la France (population par sexe, âge et consommation).

Mais si vous voulez vérifier par vous-même, et modifier les méthodes d'analyse, suivez les consignes ci-dessous.

## 1. Récupérer les résultats

Il faut d'abord télécharger les résultats sur le site de l'Assemblé Nationale au format csv : https://data.assemblee-nationale.fr/autres/consultations-citoyennes/cannabis-recreatif

Le fichier fait 250Mo, donc je n'ai pas pris la peine de l'intégrer dans le git.

Il faudra peut-être aussi reformater le fichier, car il est encodé en ANSI (la galère que ça a été pour le passer en UTF-8).

Le fichier doit être placé à la racine du projet, avec comme nom `résultats.csv`.

## 2. Installer les node_modules

Bon ben là je vais pas vous expliquer comment faire.

Si vous connaissez node.js, vous savez faire.
Sinon, passez votre chemin, ou demandez à un développeur qui connaît node.js.

## 3. Lancer le script

`node index.js` ou `npm run start` ou `yarn start`

## 4. Patienter

Y a plus de 253 000 lignes dans ce csv. Faut que le script passe à travers tout le fichier.

## 5. Résultats

Le résultat est exporté dans le fichier `dataRapport.json`.
