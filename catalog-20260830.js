// Validated creations: Excel 2026-08-30 plus approved corrections.
const TODAY_OBJECT_CATALOG = [
  {
    "name": "Ampoule",
    "image": "assets/objects/ampoule.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Tapis volant en panne",
    "image": "assets/objects/tapis-volant-en-panne.png",
    "cat": "Maison",
    "rarity": "legendaire"
  },
  {
    "name": "Apprendre le code",
    "image": "assets/objects/apprendre-le-code.png",
    "cat": "Loisir",
    "rarity": "exceptionnel"
  },
  {
    "name": "Carte \"Pomonké\"",
    "image": "assets/objects/carte-pomonke.png",
    "cat": "Loisir",
    "rarity": "courant"
  },
  {
    "name": "Baladeur MP3",
    "image": "assets/objects/baladeur-mp3.png",
    "cat": "Loisir",
    "rarity": "courant"
  },
  {
    "name": "Mixeur",
    "image": "assets/objects/mixeur-cuisine.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Chaise de marque « Sanchez »",
    "image": "assets/objects/chaise-sanchez.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Fauteuil de bureau",
    "image": "assets/objects/fauteuil-bureau-haut-de-gamme.png",
    "cat": "Maison",
    "rarity": "peu-commun"
  },
  {
    "name": "Echarpe en soie",
    "image": "assets/objects/echarpe-soie-pbl.png",
    "cat": "Maison",
    "rarity": "peu-commun"
  },
  {
    "name": "Archive 1988",
    "image": "assets/objects/archive-1988.png",
    "cat": "Collection",
    "rarity": "rare"
  },
  {
    "name": "Débardeur avec manches",
    "image": "assets/objects/debardeur-manches-longues.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Boule de bowling",
    "image": "assets/objects/boule-bowling.png",
    "cat": "Sport",
    "rarity": "sans-rarete"
  },
  {
    "name": "Plante carnivore",
    "image": "assets/objects/plante-carnivore.png",
    "cat": "Maison",
    "rarity": "rare"
  },
  {
    "name": "Aquarium",
    "image": "assets/objects/aquarium-vide-equipe.png",
    "cat": "Maison",
    "rarity": "peu-commun"
  },
  {
    "name": "Parfum",
    "image": "assets/objects/parfum-pbl.png",
    "cat": "Maison",
    "rarity": "courant"
  },
  {
    "name": "Verres à cocktails",
    "image": "assets/objects/quatre-verres-cocktails.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Vidéo projecteur",
    "image": "assets/objects/video-projecteur.png",
    "cat": "Maison",
    "rarity": "courant"
  },
  {
    "name": "Sac de golf avec clubs et balles",
    "image": "assets/objects/sac-golf-clubs-balles.png",
    "cat": "Sport",
    "rarity": "courant"
  },
  {
    "name": "L’épée Excalibur",
    "image": "assets/objects/epee-excalibur.png",
    "cat": "Collection",
    "rarity": "unique",
    "uniqueKey": "epee-excalibur"
  },
  {
    "name": "Joyaux de la couronne de France",
    "image": "assets/objects/huit-joyaux-couronne-france.png",
    "cat": "Collection",
    "rarity": "unique",
    "uniqueKey": "huit-joyaux-couronne-france"
  },
  {
    "name": "Wok",
    "image": "assets/objects/wok-toh-ni.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Citroën 2CV",
    "image": "assets/objects/figurine-citroen-2cv.png",
    "cat": "Collection",
    "rarity": "peu-commun"
  },
  {
    "name": "Sceptre royal",
    "image": "assets/objects/sceptre-royal.png",
    "cat": "Collection",
    "rarity": "legendaire"
  },
  {
    "name": "Chapeau du roi Louison XVI",
    "image": "assets/objects/chapeau-louison-xvi.png",
    "cat": "Collection",
    "rarity": "unique",
    "uniqueKey": "chapeau-louison-xvi"
  },
  {
    "name": "Machine à café",
    "image": "assets/objects/machine-cafe-cafeskiveu.png",
    "cat": "Maison",
    "rarity": "courant"
  },
  {
    "name": "Bouteille de vin",
    "image": "assets/objects/bouteille-vin-haut-de-gamme.png",
    "cat": "Maison",
    "rarity": "rare"
  },
  {
    "name": "Endives en sachet",
    "image": "assets/objects/sachet-cinq-endives.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Lot d’équipement pour chasseur",
    "image": "assets/objects/equipement-chasseur.png",
    "cat": "Loisir",
    "rarity": "courant"
  },
  {
    "name": "Billets d’avion datant de 2009 - vol Paris - Rio de Janeiro",
    "image": "assets/objects/billets-paris-rio-2009.png",
    "cat": "Maison",
    "rarity": "legendaire"
  },
  {
    "name": "Livre « la guitare-couture pour les nuls »",
    "image": "assets/objects/livre-guitare-couture.png",
    "cat": "Loisir",
    "rarity": "courant"
  },
  {
    "name": "Paire de lunette pour une éclipse",
    "image": "assets/objects/lunettes-eclipse.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Paire de jumelles",
    "image": "assets/objects/jumelles.png",
    "cat": "Loisir",
    "rarity": "courant"
  },
  {
    "name": "Sachet de sel",
    "image": "assets/objects/sachet-sel-orf.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Sèche linge pour nudiste",
    "image": "assets/objects/seche-linge-nudistes.png",
    "cat": "Maison",
    "rarity": "peu-commun"
  },
  {
    "name": "Boîte au lettre de Xavier Dupont de Ligonnes",
    "image": "assets/objects/boite-lettres-xavier.png",
    "cat": "Maison",
    "rarity": "legendaire"
  },
  {
    "name": "Drapeau de la Picardie",
    "image": "assets/objects/drapeau-picardie.png",
    "cat": "Maison",
    "rarity": "courant"
  },
  {
    "name": "Triangle électrique",
    "image": "assets/objects/triangle-electrique.png",
    "cat": "Maison",
    "rarity": "peu-commun"
  },
  {
    "name": "Climatiseur",
    "image": "assets/objects/climatiseur.png",
    "cat": "Maison",
    "rarity": "exceptionnel"
  },
  {
    "name": "Lot de poupées russes",
    "image": "assets/objects/poupees-russes.png",
    "cat": "Loisir",
    "rarity": "sans-rarete"
  },
  {
    "name": "Paire d’oreillers",
    "image": "assets/objects/paire-oreillers.png",
    "cat": "Maison",
    "rarity": "courant"
  },
  {
    "name": "Collection de papillons",
    "image": "assets/objects/collection-papillons.png",
    "cat": "Collection",
    "rarity": "rare"
  },
  {
    "name": "Casque et des lunettes de motocross",
    "image": "assets/objects/casque-lunettes-motocross.png",
    "cat": "Sport",
    "rarity": "peu-commun"
  },
  {
    "name": "Cloche à fromage",
    "image": "assets/objects/cloche-fromage.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Tapis de course électrique",
    "image": "assets/objects/tapis-course-electrique.png",
    "cat": "Sport",
    "rarity": "peu-commun"
  },
  {
    "name": "Arrosoir",
    "image": "assets/objects/arrosoir-impossible.png",
    "cat": "Maison",
    "rarity": "exceptionnel"
  },
  {
    "name": "Biographie du petit Gregory",
    "image": "assets/objects/biographie-petit-gregory.png",
    "cat": "Loisir",
    "rarity": "rare"
  },
  {
    "name": "Bague royale",
    "image": "assets/objects/bague-royale.png",
    "cat": "Bijoux",
    "rarity": "exceptionnel"
  },
  {
    "name": "Machette",
    "image": "assets/objects/machette.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Manteau polaire",
    "image": "assets/objects/manteau-polaire-pbl.png",
    "cat": "Vêtements",
    "rarity": "courant"
  },
  {
    "name": "Perruque pour chevelu",
    "image": "assets/objects/perruque-chevelu.png",
    "cat": "Maison",
    "rarity": "peu-commun"
  },
  {
    "name": "Cannes à pêche",
    "image": "assets/objects/deux-cannes-peche.png",
    "cat": "Sport",
    "rarity": "courant"
  },
  {
    "name": "Fer à lisser PB&L",
    "image": "assets/objects/fer-lisser-pbl.png",
    "cat": "Maison",
    "rarity": "sans-rarete"
  },
  {
    "name": "Legging Léopard",
    "image": "assets/objects/legging-leopard.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Legging \"nid d'abeille\"",
    "image": "assets/objects/legging-nid-abeille.png",
    "cat": "Vêtements",
    "rarity": "courant"
  },
  {
    "name": "Legging rétro",
    "image": "assets/objects/legging-retro.png",
    "cat": "Vêtements",
    "rarity": "peu-commun"
  },
  {
    "name": "Robe fleurie",
    "image": "assets/objects/robe-fleurie.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Robe blanche",
    "image": "assets/objects/robe-blanche.png",
    "cat": "Vêtements",
    "rarity": "courant"
  },
  {
    "name": "Robe à pois",
    "image": "assets/objects/robe-pois.png",
    "cat": "Vêtements",
    "rarity": "peu-commun"
  },
  {
    "name": "Robe de soirée",
    "image": "assets/objects/robe-soiree.png",
    "cat": "Vêtements",
    "rarity": "rare"
  },
  {
    "name": "Chaussures ballerines",
    "image": "assets/objects/chaussures-ballerines.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Chaussures spartiates",
    "image": "assets/objects/chaussures-spartiates.png",
    "cat": "Vêtements",
    "rarity": "courant"
  },
  {
    "name": "Chaussures à talons",
    "image": "assets/objects/chaussures-talons.png",
    "cat": "Vêtements",
    "rarity": "peu-commun"
  },
  {
    "name": "Chaussures de soirée",
    "image": "assets/objects/chaussures-soiree.png",
    "cat": "Vêtements",
    "rarity": "rare"
  },
  {
    "name": "Jupe de mamie",
    "image": "assets/objects/jupe-mamie.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Jupe de printemps",
    "image": "assets/objects/jupe-printemps.png",
    "cat": "Vêtements",
    "rarity": "courant"
  },
  {
    "name": "Jupe à pailettes",
    "image": "assets/objects/jupe-paillettes.png",
    "cat": "Vêtements",
    "rarity": "peu-commun"
  },
  {
    "name": "Kilt Ecossais",
    "image": "assets/objects/kilt-ecossais.png",
    "cat": "Vêtements",
    "rarity": "rare"
  },
  {
    "name": "Culotte de mamie",
    "image": "assets/objects/culotte-mamie.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Sac à main",
    "image": "assets/objects/sac-main-noir.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Sac shopping",
    "image": "assets/objects/sac-shopping.png",
    "cat": "Vêtements",
    "rarity": "courant"
  },
  {
    "name": "Sac bandouillère",
    "image": "assets/objects/sac-bandouliere.png",
    "cat": "Vêtements",
    "rarity": "peu-commun"
  },
  {
    "name": "Serre-tête Oreilles-de-chat",
    "image": "assets/objects/serre-tete-chat.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Serre-tête fantaisie",
    "image": "assets/objects/serre-tete-fantaisie.png",
    "cat": "Vêtements",
    "rarity": "courant"
  },
  {
    "name": "Serre-tête chic",
    "image": "assets/objects/serre-tete-chic.png",
    "cat": "Vêtements",
    "rarity": "peu-commun"
  },
  {
    "name": "Crop-top super héro",
    "image": "assets/objects/crop-top-super-hero.png",
    "cat": "Vêtements",
    "rarity": "exceptionnel"
  },
  {
    "name": "Débardeur femme",
    "image": "assets/objects/debardeur-femme.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Collier Ras-de-cou",
    "image": "assets/objects/collier-ras-cou.png",
    "cat": "Bijoux",
    "rarity": "sans-rarete"
  },
  {
    "name": "Collier de perles",
    "image": "assets/objects/collier-perles.png",
    "cat": "Bijoux",
    "rarity": "courant"
  },
  {
    "name": "Collier Maillons de chaine",
    "image": "assets/objects/collier-maillons-coeur.png",
    "cat": "Bijoux",
    "rarity": "peu-commun"
  },
  {
    "name": "Collier de soirée",
    "image": "assets/objects/collier-soiree.png",
    "cat": "Bijoux",
    "rarity": "rare"
  },
  {
    "name": "Foulard Bohemienne",
    "image": "assets/objects/foulard-bohemienne.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Echarpe à franges",
    "image": "assets/objects/echarpe-franges.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  },
  {
    "name": "Echarpe jacquard",
    "image": "assets/objects/echarpe-jacquard.png",
    "cat": "Vêtements",
    "rarity": "courant"
  },
  {
    "name": "Chemise de nuit à rayures",
    "image": "assets/objects/chemise-nuit-rayures.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete"
  }
];
