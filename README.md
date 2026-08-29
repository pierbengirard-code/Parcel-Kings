# Parcel Kings

Jeu web statique d'achat à l'aveugle de colis perdus, de revente et de collection.

## Lancer en local

Double-cliquez sur `LANCER_JEU.bat`, puis utilisez toujours l'adresse
`http://127.0.0.1:4173/`. La progression est enregistrée localement par le
navigateur et sauvegardée dans IndexedDB.

## Préparer une publication

Double-cliquez sur `PREPARER_PUBLICATION.bat`. Cette vérification :

- régénère uniquement les vignettes qui ont changé ;
- contrôle les 215 images d'objets et leurs vignettes ;
- recherche les fichiers référencés mais absents ;
- bloque la publication lorsqu'une erreur est détectée.

Après le message « Parcel Kings est prêt à être publié », utilisez
`PUBLIER_LE_JEU.bat` ou GitHub Desktop pour envoyer les changements.

## Architecture utile

- `index.html` : page de présentation ;
- `jeu.html` : interface du jeu ;
- `game.js` : règles, sauvegarde et interactions ;
- `catalog.js` : catalogue des objets ajoutés récemment ;
- `assets/objects/` : originaux PNG haute définition ;
- `assets/object-thumbs/` : vignettes WebP légères pour l'interface ;
- `assets/models/` : modèles chargés seulement lors d'une inspection 3D ;
- `sw.js` : cache de production à la demande ;
- `manifest.webmanifest` : installation du jeu comme application web.

Le jeu est compatible avec un hébergement statique tel que GitHub Pages. Tous
les chemins sont relatifs afin de fonctionner sous un sous-dossier de dépôt.
