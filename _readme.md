# Guide de datavisualisation par Toulouse DataViz 

parrainé par Pierre Fabre

Code basé sur [Notion Starter Kit](https://transitivebullsh.it/nextjs-notion-starter-kit)
MIT © [Travis Fischer](https://transitivebullsh.it)

## Procédure

1. Mettre à jour la page Notion et activer la publication durant l'export
2. Récupérer l'URL
3. Modifier le fichier [site.config.ts](./site.config.ts)
``` 
  rootNotionPageId:
    'toulouse-dataviz.notion.site/3ae40501bf7547368428bcec177e6328?v=117abe6706ef4ece846d8266217ea8ac&pvs=4',
``` 

4. Installer Node.js (we recommend >= 16).
5. Cloner ce repo
6. Aller sur la branche "pf"
7. Lancer le build en beta et tester en local `npm run export:full:beta` - le site est dispo sur docs/beta
8. Tester le déploiement sur githubpages en poussant le code sur le repo et en allant sur https://github.com/Toulouse-Dataviz/guide/beta
9. Lancer le build et tester en local `npm run export:full:prod` - le site est dispo sur docs
10. Tester le déploiement sur githubpages en poussant le code sur le repo et en allant sur https://github.com/Toulouse-Dataviz/guide
