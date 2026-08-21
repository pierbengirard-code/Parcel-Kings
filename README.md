# Parcel Kings

Prototype jouable d'un jeu d'ouverture de colis et de revente.

`index.html` présente désormais l'univers et les règles du jeu. Le bouton principal
ouvre `jeu.html`, qui contient l'expérience jouable complète.

## Lancer le jeu

Double-cliquez toujours sur `LANCER_JEU.bat`. Le jeu s'ouvrira sur son serveur
local à l'adresse stable `http://127.0.0.1:4173/`. Utiliser toujours ce lanceur
permet à Brave de retrouver la même sauvegarde et de charger les modèles 3D.
Le serveur fonctionne invisiblement en arrière-plan : aucune console Windows ne
doit rester ouverte pendant la partie.

Évitez d'ouvrir `index.html` directement, d'utiliser une fenêtre privée ou de
remplacer `127.0.0.1` par `localhost` : le navigateur considérerait alors qu'il
s'agit d'un autre site, avec une sauvegarde séparée.

## Contenu du prototype

- achat à l'aveugle de trois colis identiques autour de 50 $, 100 $ et 200 $ ;
- animation d'ouverture et objets de différentes raretés ;
- inventaire, estimation et revente dynamique ;
- expérience, niveaux et réputation ;
- collections à compléter ;
- classement saisonnier local ;
- cadeau quotidien et renouvellement des arrivages ;
- interface adaptée aux ordinateurs et aux téléphones.
- garage 3D interactif avec conteneur ouvrable et caméra manipulable.
- sept raretés probabilisées : Sans rareté, Courant, Peu commun, Rare, Exceptionnel, Légendaire et Unique ;
- valeur des objets calculée comme multiplicateur du prix payé ;
- limites quotidiennes pour les gains Légendaires et Uniques ;
- bouton de test permettant d'ajouter 1 000 $ de crédits ;
- vitrine longue durée avec transfert des objets depuis et vers le stock.
- classements séparés pour les ventes et la valeur totale des vitrines.
- révélation agrandie avec observation tactile/souris en véritable 3D ;
- collection complète de 21 objets premium sur fond transparent dans `assets/objects/`.
- collection complète de 21 modèles GLB rotatifs dans `assets/models/`.
- modèles d'objets régénérés en haute définition avec textures 1024 px, sans réduction géométrique ;
- décor immersif de dépôt et conteneur ouvert dans `assets/backgrounds/` ;
- objets du stock cadrés entièrement dans des cartes agrandies.
