// Source unique de tous les objets du jeu.
// Chaque fiche : name, image, cat, rarity ; puis les propriétés optionnelles
// (collection, icon, uniqueKey, prix spécifiques, etc.) à conserver si présentes.
// Les probabilités par rareté sont définies dans game.js.
const ITEMS = [
  {
    "name": "Console portable",
    "image": "assets/objects/game-boy-color.png",
    "cat": "Rétro gaming",
    "rarity": "peu-commun",
    "icon": "🎮",
    "min": 120,
    "max": 240
  },
  {
    "name": "Cassette collector",
    "image": "assets/objects/cassette-collector.png",
    "cat": "Rétro gaming",
    "rarity": "sans-rarete",
    "icon": "📼",
    "model": "assets/models/cassette-collector.glb",
    "min": 18,
    "max": 55
  },
  {
    "name": "Manette vintage",
    "image": "assets/objects/manette-vintage.png",
    "cat": "Rétro gaming",
    "rarity": "courant",
    "icon": "🕹️",
    "model": "assets/models/manette-vintage.glb",
    "min": 45,
    "max": 95
  },
  {
    "name": "Montre mécanique",
    "image": "assets/objects/montre-mecanique.png",
    "cat": "Horlogerie",
    "rarity": "peu-commun",
    "icon": "⌚",
    "model": "assets/models/montre-mecanique.glb",
    "min": 160,
    "max": 380
  },
  {
    "name": "Réveil années 60",
    "image": "assets/objects/reveil-annees-60.png",
    "cat": "Horlogerie",
    "rarity": "sans-rarete",
    "icon": "⏰",
    "model": "assets/models/reveil-annees-60.glb",
    "min": 25,
    "max": 75
  },
  {
    "name": "Chronomètre suisse",
    "image": "assets/objects/chronometre-suisse.png",
    "cat": "Horlogerie",
    "rarity": "exceptionnel",
    "icon": "⏱️",
    "model": "assets/models/chronometre-suisse.glb",
    "min": 310,
    "max": 620
  },
  {
    "name": "Appareil argentique",
    "image": "assets/objects/appareil-argentique.png",
    "cat": "Photo",
    "rarity": "courant",
    "icon": "📷",
    "model": "assets/models/appareil-argentique.glb",
    "min": 70,
    "max": 170
  },
  {
    "name": "Caméra Super 8",
    "image": "assets/objects/camera-super-8.png",
    "cat": "Photo",
    "rarity": "peu-commun",
    "icon": "📹",
    "model": "assets/models/camera-super-8.glb",
    "min": 140,
    "max": 330
  },
  {
    "name": "Objectif japonais",
    "image": "assets/objects/objectif-japonais.png",
    "cat": "Photo",
    "rarity": "rare",
    "icon": "🔭",
    "model": "assets/models/objectif-japonais.glb",
    "min": 290,
    "max": 710
  },
  {
    "name": "Vinyle première édition",
    "image": "assets/objects/vinyle-premiere-edition.png",
    "cat": "Musique",
    "rarity": "peu-commun",
    "icon": "💿",
    "model": "assets/models/vinyle-premiere-edition.glb",
    "min": 110,
    "max": 280
  },
  {
    "name": "Radio transistor",
    "image": "assets/objects/radio-transistor.png",
    "cat": "Musique",
    "rarity": "sans-rarete",
    "icon": "📻",
    "model": "assets/models/radio-transistor.glb",
    "nativeModel": "assets/models/radio-transistor-native.glb",
    "min": 22,
    "max": 65
  },
  {
    "name": "Guitare miniature signée",
    "image": "assets/objects/guitare-miniature-signee.png",
    "cat": "Musique",
    "rarity": "exceptionnel",
    "icon": "🎸",
    "model": "assets/models/guitare-miniature-signee.glb",
    "min": 650,
    "max": 1300
  },
  {
    "name": "Lampe de brocante",
    "image": "assets/objects/lampe-brocante.png",
    "cat": "Curiosités",
    "rarity": "sans-rarete",
    "icon": "🏮",
    "model": "assets/models/lampe-brocante.glb",
    "min": 15,
    "max": 48
  },
  {
    "name": "Boussole ancienne",
    "image": "assets/objects/boussole-ancienne.png",
    "cat": "Curiosités",
    "rarity": "courant",
    "icon": "🧭",
    "model": "assets/models/boussole-ancienne.glb",
    "min": 55,
    "max": 125
  },
  {
    "name": "Masque cérémoniel",
    "image": "assets/objects/masque-ceremoniel.png",
    "cat": "Curiosités",
    "rarity": "rare",
    "icon": "🎭",
    "model": "assets/models/masque-ceremoniel.glb",
    "min": 280,
    "max": 690
  },
  {
    "name": "Vase ébréché",
    "image": "assets/objects/vase-ebreche.png",
    "cat": "Curiosités",
    "rarity": "sans-rarete",
    "icon": "🏺",
    "min": 12,
    "max": 44
  },
  {
    "name": "Carte sportive",
    "image": "assets/objects/carte-sportive.png",
    "cat": "Collections",
    "rarity": "rare",
    "icon": "🃏",
    "model": "assets/models/carte-sportive.glb",
    "min": 90,
    "max": 260
  },
  {
    "name": "Figurine scellée",
    "image": "assets/objects/figurine-scellee.png",
    "cat": "Collections",
    "rarity": "exceptionnel",
    "icon": "🦸",
    "model": "assets/models/figurine-scellee.glb",
    "min": 250,
    "max": 580
  },
  {
    "name": "Prototype console n°001",
    "image": "assets/objects/prototype-console-unique.png",
    "cat": "Rétro gaming",
    "rarity": "unique",
    "icon": "👾",
    "model": "assets/models/prototype-console-unique.glb",
    "uniqueKey": "console-001",
    "min": 2400,
    "max": 4200
  },
  {
    "name": "Montre d'aviateur",
    "image": "assets/objects/montre-aviateur-unique.png",
    "cat": "Horlogerie",
    "rarity": "legendaire",
    "icon": "💫",
    "model": "assets/models/montre-aviateur-unique.glb",
    "uniqueKey": "aviator-watch",
    "min": 3800,
    "max": 6500
  },
  {
    "name": "Disque d'or original",
    "image": "assets/objects/disque-or-unique.png",
    "cat": "Musique",
    "rarity": "unique",
    "icon": "🌟",
    "model": "assets/models/disque-or-unique.glb",
    "uniqueKey": "gold-record",
    "min": 5000,
    "max": 9000
  },
  {
    "name": "Mug cassé Lapin",
    "image": "assets/objects/mug-casse.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "☕",
    "multiplierMin": 0.2,
    "multiplierMax": 0.4,
    "min": 1,
    "max": 25
  },
  {
    "name": "Maillot de foot dédicacé",
    "image": "assets/objects/maillot-foot-dedicace.png",
    "cat": "Sport",
    "rarity": "unique",
    "icon": "👕",
    "uniqueKey": "maillot-10-dedicace",
    "fixedPrice": 1998,
    "min": 1998,
    "max": 1998
  },
  {
    "name": "Magazine de mots fléchés",
    "image": "assets/objects/magazine-mots-fleches.png",
    "cat": "Loisir",
    "rarity": "sans-rarete",
    "icon": "📰",
    "fixedPrice":10,
    "min": 10,
    "max": 10
  },
  {
    "name": "Paire de baskets de champion",
    "image": "assets/objects/baskets-montantes.png",
    "cat": "Sport",
    "rarity": "legendaire",
    "icon": "👟",
    "uniqueKey": "baskets-rouges-blanches",
    "min": 500,
    "max": 3000
  },
  {
    "name": "Casque de pilote",
    "image": "assets/objects/casque-pilote.png",
    "cat": "Sport",
    "rarity": "unique",
    "icon": "🏎️",
    "uniqueKey": "casque-pilote-jaune",
    "min": 3000,
    "max": 9000
  },
  {
    "name": "Ciseaux pour gaucher",
    "image": "assets/objects/ciseaux-gaucher.png",
    "cat": "Scolaire",
    "rarity": "unique",
    "icon": "✂️",
    "uniqueKey": "ciseaux-gaucher-rouges",
    "min": 1500,
    "max": 5000
  },
  {
    "name": "Console rétro",
    "image": "assets/objects/console-retro.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🎮",
    "min": 180,
    "max": 650
  },
  {
    "name": "Bocal à anchois",
    "image": "assets/objects/bocal-anchois-vide.png",
    "cat": "Spirituel",
    "rarity": "unique",
    "icon": "🫙",
    "uniqueKey": "bocal-anchois-vide",
    "min": 2000,
    "max": 7000
  },
  {
    "name": "Ventilateur",
    "image": "assets/objects/ventilateur-2026.png",
    "cat": "Maison",
    "rarity": "legendaire",
    "icon": "🌀",
    "uniqueKey": "ventilateur-2026",
    "min": 700,
    "max": 3500
  },
  {
    "name": "BD de l'Homme-Lapin",
    "image": "assets/objects/bd-homme-lapin.png",
    "cat": "Loisir",
    "rarity": "legendaire",
    "icon": "📕",
    "uniqueKey": "bd-homme-lapin-1e",
    "min": 900,
    "max": 5000
  },
  {
    "name": "Botte d'Astronaute",
    "image": "assets/objects/botte-astronaute.png",
    "cat": "Espace",
    "rarity": "unique",
    "icon": "🥾",
    "uniqueKey": "botte-astronaute-rouge",
    "min": 5000,
    "max": 15000
  },
  {
    "name": "Un crane de bouc",
    "image": "assets/objects/crane-bouc-noir.png",
    "cat": "Spirituel",
    "rarity": "legendaire",
    "icon": "🐐",
    "uniqueKey": "crane-bouc-noir",
    "fixedPrice": 666,
    "min": 666,
    "max": 666
  },
  {
    "name": "Wilson",
    "image": "assets/objects/wilson-volley.png",
    "cat": "Loisir",
    "rarity": "unique",
    "icon": "🏐",
    "uniqueKey": "wilson-volley",
    "min": 3000,
    "max": 10000
  },
  {
    "name": "Brosse à dents électrique",
    "image": "assets/objects/brosse-dents-electrique.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🪥",
    "min": 12,
    "max": 45
  },
  {
    "name": "Sirop d'érable",
    "image": "assets/objects/sirop-erable.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🍁",
    "min": 8,
    "max": 28
  },
  {
    "name": "Mug lapin bélier roux",
    "image": "assets/objects/mug-lapin-belier.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "☕",
    "multiplierMin": 0.4,
    "multiplierMax": 0.7,
    "min": 10,
    "max": 35
  },
  {
    "name": "Clé USB 1 To",
    "image": "assets/objects/cle-usb-1to.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "💾",
    "min": 45,
    "max": 140
  },
  {
    "name": "Barrette de RAM",
    "image": "assets/objects/barrette-ram.png",
    "cat": "Informatique",
    "rarity": "exceptionnel",
    "icon": "🧠",
    "min": 240,
    "max": 780
  },
  {
    "name": "Portefeuille en cuir",
    "image": "assets/objects/portefeuille-cuir.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "👛",
    "min": 65,
    "max": 190
  },
  {
    "name": "Combinaison de ski",
    "image": "assets/objects/combinaison-ski.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🎿",
    "min": 110,
    "max": 320
  },
  {
    "name": "Téléphone à cadran",
    "image": "assets/objects/telephone-cadran.png",
    "cat": "Maison",
    "rarity": "rare",
    "icon": "☎️",
    "min": 160,
    "max": 480
  },
  {
    "name": "Clé USB 256 Go",
    "image": "assets/objects/cle-usb-256go.png",
    "cat": "Informatique",
    "rarity": "sans-rarete",
    "icon": "💾",
    "min": 12,
    "max": 42
  },
  {
    "name": "Livre de recettes",
    "image": "assets/objects/livre-recettes-spaghetti.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "📖",
    "min": 6,
    "max": 25
  },
  {
    "name": "Livre de recettes · Desserts",
    "image": "assets/objects/livre-recettes-desserts.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🍰",
    "min": 6,
    "max": 25
  },
  {
    "name": "Cassette vidéo",
    "image": "assets/objects/cassette-prestigitation.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "📼",
    "min": 140,
    "max": 460
  },
  {
    "name": "Chemisette à fleurs",
    "image": "assets/objects/chemisette-fleurs.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕",
    "min": 8,
    "max": 38
  },
  {
    "name": "Chemisette à motifs canards",
    "image": "assets/objects/chemisette-canards.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "🦆",
    "min": 8,
    "max": 38
  },
  {
    "name": "Veste en cuir",
    "image": "assets/objects/veste-motard.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "🧥",
    "min": 80,
    "max": 260
  },
  {
    "name": "Grille-pain",
    "image": "assets/objects/grille-pain-boite.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🍞",
    "min": 35,
    "max": 110
  },
  {
    "name": "Poêle en inox",
    "image": "assets/objects/poele-inox.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🍳",
    "min": 45,
    "max": 130
  },
  {
    "name": "Carte graphique",
    "image": "assets/objects/carte-graphique.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "🖥️",
    "min": 40,
    "max": 180
  },
  {
    "name": "Processeur",
    "image": "assets/objects/processeur.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "🧩",
    "min": 35,
    "max": 220
  },
  {
    "name": "Alimentation PC",
    "image": "assets/objects/alimentation-pc.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "🔌",
    "min": 30,
    "max": 140
  },
  {
    "name": "Carte mère",
    "image": "assets/objects/carte-mere.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "💻",
    "min": 45,
    "max": 210
  },
  {
    "name": "Écran PC 1 000 Hz",
    "image": "assets/objects/ecran-pc-1000hz.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "🖥️",
    "min": 80,
    "max": 350
  },
  {
    "name": "Ventilateur PC",
    "image": "assets/objects/ventilateur-pc.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "🌀",
    "min": 12,
    "max": 65
  },
  {
    "name": "Nokia 3310 bleu",
    "image": "assets/objects/nokia-3310.png",
    "cat": "Informatique",
    "rarity": "rare",
    "icon": "📱",
    "min": 120,
    "max": 480
  },
  {
    "name": "Stylo plume",
    "image": "assets/objects/stylo-plume.png",
    "cat": "Scolaire",
    "rarity": "courant",
    "icon": "✒️",
    "collection": "rentree-2026",
    "min": 4,
    "max": 28
  },
  {
    "name": "Souris d'ordinateur gaming",
    "image": "assets/objects/souris-gaming.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "🖱️",
    "min": 20,
    "max": 95
  },
  {
    "name": "Clavier d'ordinateur gaming",
    "image": "assets/objects/clavier-gaming.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "⌨️",
    "min": 35,
    "max": 150
  },
  {
    "name": "Casque et micro gaming",
    "image": "assets/objects/casque-micro-gaming.png",
    "cat": "Informatique",
    "rarity": "courant",
    "icon": "🎧",
    "min": 30,
    "max": 140
  },
  {
    "name": "Affiche du film RRRrrrr!!!",
    "image": "assets/objects/affiche-rrrrrr.png",
    "cat": "Loisir",
    "rarity": "exceptionnel",
    "icon": "🎬",
    "min": 350,
    "max": 1600
  },
  {
    "name": "1 Bitcoin",
    "image": "assets/objects/bitcoin.png",
    "cat": "Informatique",
    "rarity": "unique",
    "icon": "🪙",
    "uniqueKey": "bitcoin-physique",
    "min": 3000,
    "max": 12000
  },
  {
    "name": "Un serpent venimeux",
    "image": "assets/objects/serpent-venimeux.png",
    "cat": "Loisir",
    "rarity": "legendaire",
    "icon": "🐍",
    "uniqueKey": "serpent-darknet",
    "min": 900,
    "max": 4200
  },
  {
    "name": "Un sac mortuaire",
    "image": "assets/objects/sac-mortuaire.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "⚰️",
    "min": 30,
    "max": 140
  },
  {
    "name": "Poster de Tilk dans Stargate",
    "image": "assets/objects/poster-tilk.png",
    "cat": "Loisir",
    "rarity": "exceptionnel",
    "icon": "🌌",
    "min": 300,
    "max": 1400
  },
  {
    "name": "Télévision cathodique",
    "image": "assets/objects/television-cathodique.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "📺",
    "min": 8,
    "max": 55
  },
  {
    "name": "Télévision 8K",
    "image": "assets/objects/television-8k.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "📺",
    "min": 20,
    "max": 90
  },
  {
    "name": "Jeu de société \"Ça fait 2\"",
    "image": "assets/objects/jeu-ca-fait-2.png",
    "cat": "Loisir",
    "rarity": "exceptionnel",
    "icon": "🎲",
    "min": 280,
    "max": 1350
  },
  {
    "name": "Câble RJ45 croisé",
    "image": "assets/objects/cable-rj45-croise.png",
    "cat": "Informatique",
    "rarity": "sans-rarete",
    "icon": "🧵",
    "min": 2,
    "max": 18
  },
  {
    "name": "Carte ancienne du continent africain",
    "image": "assets/objects/carte-afrique-ancienne.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🗺️",
    "min": 35,
    "max": 160
  },
  {
    "name": "Maillot de foot d'Auxerre",
    "image": "assets/objects/maillot-auxerre.png",
    "cat": "Vêtements",
    "rarity": "legendaire",
    "icon": "👕",
    "uniqueKey": "maillot-auxerre-retro",
    "min": 700,
    "max": 4500
  },
  {
    "name": "Un lot de Pogs",
    "image": "assets/objects/lot-pogs.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "⭕",
    "min": 130,
    "max": 620
  },
  {
    "name": "Ballon de football de 1998",
    "image": "assets/objects/ballon-1998.png",
    "cat": "Loisir",
    "rarity": "legendaire",
    "icon": "⚽",
    "uniqueKey": "ballon-foot-1998",
    "fixedPrice": 1998,
    "min": 1998,
    "max": 1998
  },
  {
    "name": "Panneau entrée de ville · Abbeville",
    "image": "assets/objects/panneau-abbeville.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🪧",
    "min": 45,
    "max": 190
  },
  {
    "name": "Cigarette électronique",
    "image": "assets/objects/cigarette-electronique.png",
    "cat": "Loisir",
    "rarity": "sans-rarete",
    "icon": "💨",
    "min": 8,
    "max": 45
  },
  {
    "name": "Sapin désodorisant",
    "image": "assets/objects/sapin-desodorisant.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🌲",
    "min": 1,
    "max": 8
  },
  {
    "name": "Sac de voyage",
    "image": "assets/objects/sac-voyage-sandstorm.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🧳",
    "min": 75,
    "max": 240
  },
  {
    "name": "Bouteille d'eau SIGNE",
    "image": "assets/objects/bouteille-eau-signe.png",
    "cat": "Loisir",
    "rarity": "exceptionnel",
    "icon": "💧",
    "min": 250,
    "max": 1300
  },
  {
    "name": "Figurine du chevalier noir",
    "image": "assets/objects/figurine-chevalier-noir.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🗡️",
    "min": 160,
    "max": 680
  },
  {
    "name": "Pépite d'or de 72 kg",
    "image": "assets/objects/pepite-or-72kg.png",
    "cat": "Loisir",
    "rarity": "unique",
    "icon": "🪙",
    "uniqueKey": "pepite-or-72kg",
    "min": 8000,
    "max": 25000
  },
  {
    "name": "Chaussettes France 2018",
    "image": "assets/objects/chaussettes-france-2018.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "🧦",
    "min": 55,
    "max": 180
  },
  {
    "name": "Un cartable d’école",
    "image": "assets/objects/cartable-louison.png",
    "cat": "Vêtements",
    "rarity": "exceptionnel",
    "icon": "🎒",
    "collection": "rentree-2026",
    "min": 25,
    "max": 95
  },
  {
    "name": "Roue de secours",
    "image": "assets/objects/roue-secours.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🛞",
    "min": 12,
    "max": 55
  },
  {
    "name": "Chemise safari",
    "image": "assets/objects/chemise-safari.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕",
    "min": 30,
    "max": 110
  },
  {
    "name": "Spray anti-moustique",
    "image": "assets/objects/spray-anti-moustique.png",
    "cat": "Loisir",
    "rarity": "sans-rarete",
    "icon": "🦟",
    "min": 3,
    "max": 18
  },
  {
    "name": "Billet pour voyager dans l'espace",
    "image": "assets/objects/billet-espace.png",
    "cat": "Loisir",
    "rarity": "legendaire",
    "icon": "🚀",
    "uniqueKey": "billet-voyage-espace",
    "fixedPrice": 500000,
    "min": 500000,
    "max": 500000
  },
  {
    "name": "DVD Lost · Saison 1",
    "image": "assets/objects/dvd-the-lost-saison1.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "💿",
    "min": 45,
    "max": 160
  },
  {
    "name": "Miroir cassé",
    "image": "assets/objects/miroir-casse.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🪞",
    "min": 2,
    "max": 30
  },
  {
    "name": "Miroir avec contours en or",
    "image": "assets/objects/miroir-contours-or.png",
    "cat": "Maison",
    "rarity": "rare",
    "icon": "🪞",
    "min": 180,
    "max": 750
  },
  {
    "name": "Pistolet USP",
    "image": "assets/objects/pistolet-usp.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🔫",
    "min": 35,
    "max": 140
  },
  {
    "name": "Multiprise",
    "image": "assets/objects/multiprise.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🔌",
    "min": 4,
    "max": 25
  },
  {
    "name": "Tournevis",
    "image": "assets/objects/tournevis.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🪛",
    "min": 2,
    "max": 18
  },
  {
    "name": "Briquet tempête",
    "image": "assets/objects/briquet-tempete.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🔥",
    "min": 60,
    "max": 220
  },
  {
    "name": "Gilet pare-balles",
    "image": "assets/objects/gilet-pare-balles.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🦺",
    "min": 50,
    "max": 190
  },
  {
    "name": "Place de concert de Michael Jackson",
    "image": "assets/objects/ticket-concert-michael-jackson.png",
    "cat": "Loisir",
    "rarity": "legendaire",
    "icon": "🎟️",
    "uniqueKey": "ticket-concert-michael-jackson-2009",
    "fixedPrice": 2009,
    "min": 2009,
    "max": 2009
  },
  {
    "name": "Skateboard",
    "image": "assets/objects/skateboard.png",
    "cat": "Loisir",
    "rarity": "sans-rarete",
    "icon": "🛹",
    "min": 8,
    "max": 55
  },
  {
    "name": "Paire de Lunettes connectées",
    "image": "assets/objects/lunettes-connectees.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "👓",
    "min": 90,
    "max": 320
  },
  {
    "name": "Billet de 500 francs",
    "image": "assets/objects/billet-500-francs.png",
    "cat": "Loisir",
    "rarity": "exceptionnel",
    "icon": "💶",
    "min": 350,
    "max": 1800
  },
  {
    "name": "Boîte de briques · Retour vers le futur",
    "image": "assets/objects/boite-briques-retro-futur.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🧱",
    "min": 90,
    "max": 320
  },
  {
    "name": "Tête de lion empaillée",
    "image": "assets/objects/tete-lion-empaillee.png",
    "cat": "Loisir",
    "rarity": "exceptionnel",
    "icon": "🦁",
    "min": 500,
    "max": 2400
  },
  {
    "name": "Six bâtons de dynamite",
    "image": "assets/objects/dynamite-6.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🧨",
    "min": 180,
    "max": 760
  },
  {
    "name": "Four micro-ondes",
    "image": "assets/objects/four-micro-ondes.png",
    "cat": "Loisir",
    "rarity": "sans-rarete",
    "icon": "📻",
    "min": 8,
    "max": 60
  },
  {
    "name": "Caquelon",
    "image": "assets/objects/caquelon.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🫕",
    "min": 35,
    "max": 130
  },
  {
    "name": "Maillot de bain Tina Arena",
    "image": "assets/objects/maillot-bain-tina-arena.png",
    "cat": "Vêtements",
    "rarity": "rare",
    "icon": "🩱",
    "min": 170,
    "max": 720
  },
  {
    "name": "Robe d’avocat",
    "image": "assets/objects/robe-avocat.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "⚖️",
    "min": 85,
    "max": 280
  },
  {
    "name": "Tableau de Claude Monet",
    "image": "assets/objects/tableau-monet.png",
    "cat": "Loisir",
    "rarity": "unique",
    "icon": "🖼️",
    "uniqueKey": "tableau-claude-monet",
    "min": 5000,
    "max": 22000
  },
  {
    "name": "Kalashnikov Airsoft",
    "image": "assets/objects/kalashnikov-airsoft.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🎯",
    "min": 100,
    "max": 380
  },
  {
    "name": "Casse-tête chinois du Japon",
    "image": "assets/objects/casse-tete-japonais.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🧩",
    "min": 140,
    "max": 620
  },
  {
    "name": "Vraie dent de requin en plastique",
    "image": "assets/objects/dent-requin-plastique.png",
    "cat": "Loisir",
    "rarity": "sans-rarete",
    "icon": "🦈",
    "min": 1,
    "max": 15
  },
  {
    "name": "Figurine Ankylosaure",
    "image": "assets/objects/figurine-ankylosaure.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🦕",
    "collection": "dinosaure",
    "min": 25,
    "max": 110
  },
  {
    "name": "Figurine de Diplodocus",
    "image": "assets/objects/figurine-diplodocus.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🦕",
    "collection": "dinosaure",
    "min": 25,
    "max": 110
  },
  {
    "name": "Figurine d’Aquilops",
    "image": "assets/objects/figurine-aquilops.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🦕",
    "collection": "dinosaure",
    "min": 25,
    "max": 110
  },
  {
    "name": "Figurine de Vélociraptor",
    "image": "assets/objects/figurine-velociraptor.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🦖",
    "collection": "dinosaure",
    "min": 25,
    "max": 110
  },
  {
    "name": "Figurine de Tricératops",
    "image": "assets/objects/figurine-triceratops.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🦕",
    "collection": "dinosaure",
    "min": 40,
    "max": 150
  },
  {
    "name": "Figurine de Stégosaure",
    "image": "assets/objects/figurine-stegosaure.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🦕",
    "collection": "dinosaure",
    "min": 40,
    "max": 150
  },
  {
    "name": "Figurine de Ptérodactyle",
    "image": "assets/objects/figurine-pterodactyle.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🪽",
    "collection": "dinosaure",
    "min": 40,
    "max": 150
  },
  {
    "name": "Figurine de Brachiosaure",
    "image": "assets/objects/figurine-brachiosaure.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🦕",
    "collection": "dinosaure",
    "min": 90,
    "max": 260
  },
  {
    "name": "Figurine de T-Rex",
    "image": "assets/objects/figurine-t-rex.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🦖",
    "collection": "dinosaure",
    "min": 90,
    "max": 260
  },
  {
    "name": "Figurine de poulet",
    "image": "assets/objects/figurine-poulet-dent.png",
    "cat": "Loisir",
    "rarity": "exceptionnel",
    "icon": "🐔",
    "collection": "dinosaure",
    "min": 250,
    "max": 580
  },
  {
    "name": "Taille-crayon pour feutre",
    "image": "assets/objects/taille-feutre.png",
    "cat": "Scolaire",
    "rarity": "exceptionnel",
    "icon": "✏️",
    "min": 280,
    "max": 1500
  },
  {
    "name": "Bouteille de plongée",
    "image": "assets/objects/bouteille-plongee.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🤿",
    "min": 55,
    "max": 210
  },
  {
    "name": "Puzzle 1 pièce",
    "image": "assets/objects/puzzle-1-piece.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🧩",
    "min": 150,
    "max": 650
  },
  {
    "name": "Le Saint-Suaire du Christ",
    "image": "assets/objects/saint-suaire.png",
    "cat": "Vêtements",
    "rarity": "unique",
    "icon": "📜",
    "uniqueKey": "saint-suaire-du-christ",
    "fixedPrice": 0,
    "min": 0,
    "max": 0
  },
  {
    "name": "Agrafeuse chantier",
    "image": "assets/objects/agrafeuse-chantier.png",
    "cat": "Scolaire",
    "rarity": "courant",
    "icon": "✏️"
  },
  {
    "name": "Antivol de vélo",
    "image": "assets/objects/antivol-velo-vert.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅"
  },
  {
    "name": "Aspirateur PB&L",
    "image": "assets/objects/aspirateur-pbl.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Ballon de foot années 80",
    "image": "assets/objects/ballon-foot-annees-80.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅"
  },
  {
    "name": "Baskets blanches PB&L",
    "image": "assets/objects/baskets-blanches-pbl.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Beret Francais",
    "image": "assets/objects/beret-francais.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Biberon",
    "image": "assets/objects/biberon.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Boîte à goûter",
    "image": "assets/objects/boite-gouter.png",
    "cat": "Scolaire",
    "rarity": "courant",
    "icon": "✏️",
    "collection": "rentree-2026"
  },
  {
    "name": "Calculatrice scientifique",
    "image": "assets/objects/calculatrice-pbl1988.png",
    "cat": "Scolaire",
    "rarity": "peu-commun",
    "icon": "✏️",
    "collection": "rentree-2026"
  },
  {
    "name": "Bombe de peinture Jaune",
    "image": "assets/objects/bombe-peinture-jaune.png",
    "cat": "Scolaire",
    "rarity": "sans-rarete",
    "icon": "✏️"
  },
  {
    "name": "Bonnet gris PB&L",
    "image": "assets/objects/bonnet-gris-pbl.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Boucles d'oreilles Lamas",
    "image": "assets/objects/boucles-oreilles-lamas.png",
    "cat": "Collection",
    "rarity": "exceptionnel",
    "icon": "🏺"
  },
  {
    "name": "Bracelet argent",
    "image": "assets/objects/bracelet-argent.png",
    "cat": "Collection",
    "rarity": "peu-commun",
    "icon": "🏺"
  },
  {
    "name": "Bracelet cuir",
    "image": "assets/objects/bracelet-cuir.png",
    "cat": "Collection",
    "rarity": "peu-commun",
    "icon": "🏺"
  },
 {
    "name": "Bracelet fantaisie",
    "image": "assets/objects/bracelet-fantaisie.png",
    "cat": "Collection",
    "rarity": "sans-rarete",
    "icon": "🏺"
    "multiplierMin": 0.2,
    "multiplierMax": 0.4,
  },
  {
    "name": "Cadenas en laiton",
    "image": "assets/objects/cadenas.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Casque de vélo",
    "image": "assets/objects/casque-velo.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅"
  },
  {
    "name": "Casquette jaune PB&L",
    "image": "assets/objects/casquette-jaune-pbl.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Casquette trucker PB&L",
    "image": "assets/objects/casquette-trucker-pbl.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Chapeau trop Grand",
    "image": "assets/objects/chapeau-trop-grand.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Chaussures de randonnée",
    "image": "assets/objects/chaussures-randonnee.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Chaussures de running",
    "image": "assets/objects/chaussures-running.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Chauve souris empaillée",
    "image": "assets/objects/chauve-souris-empaillee.png",
    "cat": "Maison",
    "rarity": "rare",
    "icon": "🏠"
  },
  {
    "name": "Chemise à carreaux",
    "image": "assets/objects/chemise-carreaux.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Chemisette zèbre",
    "image": "assets/objects/chemisette-zebre.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Coiffe aux plumes d’aigle",
    "image": "assets/objects/coiffe-plumes-aigle.png",
    "cat": "Collection",
    "rarity": "legendaire",
    "icon": "🏺"
  },
  {
    "name": "Costume tigre",
    "image": "assets/objects/costume-tigre.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Coupe \"Champion du Quartier\"",
    "image": "assets/objects/coupe-champion-quartier.png",
    "cat": "Maison",
    "rarity": "rare",
    "icon": "🏠"
  },
  {
    "name": "Couteau de chef PB&L",
    "image": "assets/objects/couteau-chef-pbl.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Cutter",
    "image": "assets/objects/cutter-jaune-noir.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Dent de dinosaure",
    "image": "assets/objects/dent-dinosaure.png",
    "cat": "Collection",
    "rarity": "legendaire",
    "icon": "🏺"
  },
  {
    "name": "Écouteurs sans fil PB&L",
    "image": "assets/objects/ecouteurs-sans-fil-pbl.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🎲"
  },
  {
    "name": "Enceinte Bluetooth PB&L",
    "image": "assets/objects/enceinte-bluetooth-pbl.png",
    "cat": "Loisir",
    "rarity": "peu-commun",
    "icon": "🎲"
  },
  {
    "name": "Fer à repasser PB&L",
    "image": "assets/objects/fer-repasser-pbl.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Figurine \"El Tigro Blanco\"",
    "image": "assets/objects/figurine-el-tigro-blanco.png",
    "cat": "Collection",
    "rarity": "unique",
    "icon": "🏺",
    "uniqueKey": "el-tigro-blanco"
  },
  {
    "name": "Figurine Formule 1",
    "image": "assets/objects/figurine-formule-1.png",
    "cat": "Collection",
    "rarity": "rare",
    "icon": "🏺"
  },
  {
    "name": "Figurine Homme-Lapin",
    "image": "assets/objects/figurine-homme-lapin.png",
    "cat": "Collection",
    "rarity": "rare",
    "icon": "🏺"
  },
  {
    "name": "Frisbee rouge",
    "image": "assets/objects/frisbee-rouge.png",
    "cat": "Sport",
    "rarity": "sans-rarete",
    "icon": "🏅"
  },
  {
    "name": "Gilet jaune",
    "image": "assets/objects/gilet-jaune.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Gourde",
    "image": "assets/objects/gourde-metal-bleu-ciel.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Gourde en plastique",
    "image": "assets/objects/gourde-plastique-grise.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "GPS PB&L",
    "image": "assets/objects/gps-pbl.png",
    "cat": "Divers",
    "rarity": "peu-commun",
    "icon": "📦"
  },
  {
    "name": "Harnais pour chien \"K9\"",
    "image": "assets/objects/harnais-chien-k9.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Imprimante 3D emballée",
    "image": "assets/objects/imprimante-3d-emballee.png",
    "cat": "Technologie",
    "rarity": "rare",
    "icon": "📱"
  },
  {
    "name": "Jeu de cartes",
    "image": "assets/objects/jeu-cartes.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Kimono de karate",
    "image": "assets/objects/kimono-karate.png",
    "cat": "Vêtements",
    "rarity": "exceptionnel",
    "icon": "👕"
  },
  {
    "name": "Kit de plongée",
    "image": "assets/objects/kit-plongee.png",
    "cat": "Sport",
    "rarity": "peu-commun",
    "icon": "🏅"
  },
  {
    "name": "Lampe torche",
    "image": "assets/objects/lampe-torche.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Lot de casseroles",
    "image": "assets/objects/lot-casseroles.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Lot de cahiers",
    "image": "assets/objects/lot-cahiers.png",
    "cat": "Scolaire",
    "rarity": "courant",
    "icon": "✏️",
    "collection": "rentree-2026"
  },
  {
    "name": "Lot de 32 crayons de couleurs",
    "image": "assets/objects/lot-crayons-couleurs.png",
    "cat": "Scolaire",
    "rarity": "peu-commun",
    "icon": "✏️",
    "collection": "rentree-2026"
  },
  {
    "name": "Lot de couteaux Azteques",
    "image": "assets/objects/lot-couteaux-azteques.png",
    "cat": "Maison",
    "rarity": "rare",
    "icon": "🏠"
  },
  {
    "name": "Lot de fourchettes",
    "image": "assets/objects/lot-fourchettes.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Lunettes \"Aviateur\"",
    "image": "assets/objects/lunettes-aviateur.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Mallette d'affaires",
    "image": "assets/objects/mallette-affaires.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Maillot de Barcelone",
    "image": "assets/objects/maillot-barcelone.png",
    "cat": "Sport",
    "rarity": "rare",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Lens",
    "image": "assets/objects/maillot-lens.png",
    "cat": "Sport",
    "rarity": "exceptionnel",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Lille",
    "image": "assets/objects/maillot-lille.png",
    "cat": "Sport",
    "rarity": "exceptionnel",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Londres",
    "image": "assets/objects/maillot-londres.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Madrid Est",
    "image": "assets/objects/maillot-madrid-est.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Madrid Nord",
    "image": "assets/objects/maillot-madrid-nord.png",
    "cat": "Sport",
    "rarity": "rare",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Manchester Est",
    "image": "assets/objects/maillot-manchester-est.png",
    "cat": "Sport",
    "rarity": "peu-commun",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Manchester Ouest",
    "image": "assets/objects/maillot-manchester-ouest.png",
    "cat": "Sport",
    "rarity": "peu-commun",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Milan",
    "image": "assets/objects/maillot-milan.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Munich",
    "image": "assets/objects/maillot-munich.png",
    "cat": "Sport",
    "rarity": "peu-commun",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Paris",
    "image": "assets/objects/maillot-paris.png",
    "cat": "Sport",
    "rarity": "exceptionnel",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Maillot de Rome",
    "image": "assets/objects/maillot-rome.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅",
    "collection": "maillots-villes"
  },
  {
    "name": "Marinière",
    "image": "assets/objects/mariniere.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Meuble en kit",
    "image": "assets/objects/meuble-kit.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Montre connectée PB&L",
    "image": "assets/objects/montre-connectee-pbl.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Montre digitale PB&L",
    "image": "assets/objects/montre-digitale-pbl.png",
    "cat": "Collection",
    "rarity": "peu-commun",
    "icon": "🏺"
  },
  {
    "name": "Mug lapin bélier noir et blanc",
    "image": "assets/objects/mug-lapin-noir-blanc.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Mug lapin bélier noir",
    "image": "assets/objects/mug-lapin-noir.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Niveau à bulle",
    "image": "assets/objects/niveau-bulle.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Paire de claquettes",
    "image": "assets/objects/paire-claquettes.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Pâte Thermique PB&L",
    "image": "assets/objects/pate-thermique-pbl.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Patins à roulettes 80",
    "image": "assets/objects/patins-roulettes-80.png",
    "cat": "Sport",
    "rarity": "rare",
    "icon": "🏅"
  },
  {
    "name": "Peluche de licorne",
    "image": "assets/objects/peluche-licorne.png",
    "cat": "Maison",
    "rarity": "exceptionnel",
    "icon": "🏠"
  },
  {
    "name": "Perceuse",
    "image": "assets/objects/perceuse.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Pince multiprise",
    "image": "assets/objects/pince-multiprise.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Pinceau d'artiste",
    "image": "assets/objects/pinceau-artiste.png",
    "cat": "Scolaire",
    "rarity": "sans-rarete",
    "icon": "✏️"
  },
  {
    "name": "Pompe à vélo portable",
    "image": "assets/objects/pompe-velo.png",
    "cat": "Loisir",
    "rarity": "sans-rarete",
    "icon": "🎲"
  },
  {
    "name": "Ponceuse électrique",
    "image": "assets/objects/ponceuse-electrique.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Pull marin",
    "image": "assets/objects/pull-marin.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Rapporteur",
    "image": "assets/objects/rapporteur-metal.png",
    "cat": "Scolaire",
    "rarity": "rare",
    "icon": "✏️",
    "collection": "rentree-2026"
  },
  {
    "name": "Raquette de tennis",
    "image": "assets/objects/raquette-tennis.png",
    "cat": "Sport",
    "rarity": "peu-commun",
    "icon": "🏅"
  },
  {
    "name": "Robe de princesse",
    "image": "assets/objects/robe-princesse.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Saxophone",
    "image": "assets/objects/saxophone.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Scie sauteuse PB&L",
    "image": "assets/objects/scie-sauteuse-pbl.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Sèche-cheveux PB&L",
    "image": "assets/objects/seche-cheveux.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Selle de cheval",
    "image": "assets/objects/selle-cheval.png",
    "cat": "Sport",
    "rarity": "peu-commun",
    "icon": "🏅"
  },
  {
    "name": "Smartphone PB&L",
    "image": "assets/objects/smartphone-pbl.png",
    "cat": "Maison",
    "rarity": "rare",
    "icon": "🏠"
  },
  {
    "name": "Statuette \"Oreille Cassée\"",
    "image": "assets/objects/statuette-oreille-cassee.png",
    "cat": "Collection",
    "rarity": "exceptionnel",
    "icon": "🏺"
  },
  {
    "name": "Statuette tribale",
    "image": "assets/objects/statuette-tribale.png",
    "cat": "Collection",
    "rarity": "rare",
    "icon": "🏺"
  },
  {
    "name": "Stylo 4 couleurs",
    "image": "assets/objects/stylo-4-couleurs-or.png",
    "cat": "Scolaire",
    "rarity": "rare",
    "icon": "✏️",
    "collection": "rentree-2026"
  },
  {
    "name": "Trousse",
    "image": "assets/objects/trousse-2026.png",
    "cat": "Scolaire",
    "rarity": "courant",
    "icon": "✏️",
    "collection": "rentree-2026"
  },
  {
    "name": "Livre de Français",
    "image": "assets/objects/livre-francais-bourrasque.png",
    "cat": "Scolaire",
    "rarity": "peu-commun",
    "icon": "✏️",
    "collection": "rentree-2026"
  },
  {
    "name": "Sweat à capuche haut de gamme",
    "image": "assets/objects/sweat-capuche-qualite.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Sweat Capuche",
    "image": "assets/objects/sweat-capuche-simple.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Timbre \"Tour Eiffel\"",
    "image": "assets/objects/timbre-tour-eiffel.png",
    "cat": "Collection",
    "rarity": "rare",
    "icon": "🏺"
  },
  {
    "name": "Tote Bag  motif marmotte",
    "image": "assets/objects/tote-bag-marmotte.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Truelle neuve",
    "image": "assets/objects/truelle-neuve.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "T-shirt gris PB&L",
    "image": "assets/objects/tshirt-gris-pbl.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Tube de colle PB&L",
    "image": "assets/objects/tube-colle-pbl.png",
    "cat": "Scolaire",
    "rarity": "sans-rarete",
    "icon": "✏️"
  },
  {
    "name": "Tubes de peinture",
    "image": "assets/objects/tubes-peinture.png",
    "cat": "Scolaire",
    "rarity": "peu-commun",
    "icon": "✏️"
  },
  {
    "name": "Voiture Téléguidée",
    "image": "assets/objects/voiture-teleguidee.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Ampoule",
    "image": "assets/objects/ampoule.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Tapis volant en panne",
    "image": "assets/objects/tapis-volant-en-panne.png",
    "cat": "Maison",
    "rarity": "legendaire",
    "icon": "🏠"
  },
  {
    "name": "Livre \"Apprendre le code\"",
    "image": "assets/objects/apprendre-le-code.png",
    "cat": "Loisir",
    "rarity": "exceptionnel",
    "icon": "🎲"
  },
  {
    "name": "Carte \"Pomonké\"",
    "image": "assets/objects/carte-pomonke.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🎲"
  },
  {
    "name": "Baladeur MP3",
    "image": "assets/objects/baladeur-mp3.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🎲"
  },
  {
    "name": "Mixeur",
    "image": "assets/objects/mixeur-cuisine.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Chaise de marque « Sanchez »",
    "image": "assets/objects/chaise-sanchez.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Fauteuil de bureau",
    "image": "assets/objects/fauteuil-bureau-haut-de-gamme.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Echarpe en soie",
    "image": "assets/objects/echarpe-soie-pbl.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Archive 1988",
    "image": "assets/objects/archive-1988.png",
    "cat": "Collection",
    "rarity": "rare",
    "icon": "🏺"
  },
  {
    "name": "Débardeur avec manches",
    "image": "assets/objects/debardeur-manches-longues.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Boule de bowling",
    "image": "assets/objects/boule-bowling.png",
    "cat": "Sport",
    "rarity": "sans-rarete",
    "icon": "🏅"
  },
  {
    "name": "Plante carnivore",
    "image": "assets/objects/plante-carnivore.png",
    "cat": "Maison",
    "rarity": "rare",
    "icon": "🏠"
  },
  {
    "name": "Aquarium",
    "image": "assets/objects/aquarium-vide-equipe.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Parfum",
    "image": "assets/objects/parfum-pbl.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Verres à cocktails",
    "image": "assets/objects/quatre-verres-cocktails.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Vidéo projecteur",
    "image": "assets/objects/video-projecteur.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Sac de golf avec clubs et balles",
    "image": "assets/objects/sac-golf-clubs-balles.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅"
  },
  {
    "name": "L’épée Excalibur",
    "image": "assets/objects/epee-excalibur.png",
    "cat": "Collection",
    "rarity": "unique",
    "uniqueKey": "epee-excalibur",
    "icon": "🏺"
  },
  {
    "name": "Joyaux de la couronne de France",
    "image": "assets/objects/huit-joyaux-couronne-france.png",
    "cat": "Collection",
    "rarity": "unique",
    "uniqueKey": "huit-joyaux-couronne-france",
    "icon": "🏺"
  },
  {
    "name": "Wok \"Toh-Ni\"",
    "image": "assets/objects/wok-toh-ni.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Citroën 2CV",
    "image": "assets/objects/figurine-citroen-2cv.png",
    "cat": "Collection",
    "rarity": "peu-commun",
    "icon": "🏺"
  },
  {
    "name": "Sceptre royal",
    "image": "assets/objects/sceptre-royal.png",
    "cat": "Collection",
    "rarity": "legendaire",
    "icon": "🏺"
  },
  {
    "name": "Chapeau du roi Louison XVI",
    "image": "assets/objects/chapeau-louison-xvi.png",
    "cat": "Collection",
    "rarity": "unique",
    "uniqueKey": "chapeau-louison-xvi",
    "icon": "🏺"
  },
  {
    "name": "Machine à café",
    "image": "assets/objects/machine-cafe-cafeskiveu.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Bouteille de vin",
    "image": "assets/objects/bouteille-vin-haut-de-gamme.png",
    "cat": "Maison",
    "rarity": "rare",
    "icon": "🏠"
  },
  {
    "name": "Endives \"Yves Lande\"",
    "image": "assets/objects/sachet-cinq-endives.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Lot d’équipements pour chasseur",
    "image": "assets/objects/equipement-chasseur.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🎲"
  },
  {
    "name": "Billets d’avion datant de 2009 - vol Paris - Rio de Janeiro",
    "image": "assets/objects/billets-paris-rio-2009.png",
    "cat": "Maison",
    "rarity": "legendaire",
    "icon": "🏠"
  },
  {
    "name": "Livre « la guitare-couture pour les nuls »",
    "image": "assets/objects/livre-guitare-couture.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🎲"
  },
  {
    "name": "Paire de lunettes pour une éclipse",
    "image": "assets/objects/lunettes-eclipse.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Paire de jumelles",
    "image": "assets/objects/jumelles.png",
    "cat": "Loisir",
    "rarity": "courant",
    "icon": "🎲"
  },
  {
    "name": "Sachet de sel",
    "image": "assets/objects/sachet-sel-orf.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Sèche linge pour nudiste",
    "image": "assets/objects/seche-linge-nudistes.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Boîte au lettre de Xavier Dupont de Ligonnes",
    "image": "assets/objects/boite-lettres-xavier.png",
    "cat": "Maison",
    "rarity": "legendaire",
    "icon": "🏠"
  },
  {
    "name": "Drapeau de la Picardie",
    "image": "assets/objects/drapeau-picardie.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Triangle électrique",
    "image": "assets/objects/triangle-electrique.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Climatiseur",
    "image": "assets/objects/climatiseur.png",
    "cat": "Maison",
    "rarity": "exceptionnel",
    "icon": "🏠"
  },
  {
    "name": "Lot de poupées russes",
    "image": "assets/objects/poupees-russes.png",
    "cat": "Loisir",
    "rarity": "sans-rarete",
    "icon": "🎲"
  },
  {
    "name": "Paire d’oreillers",
    "image": "assets/objects/paire-oreillers.png",
    "cat": "Maison",
    "rarity": "courant",
    "icon": "🏠"
  },
  {
    "name": "Collection de papillons",
    "image": "assets/objects/collection-papillons.png",
    "cat": "Collection",
    "rarity": "rare",
    "icon": "🏺"
  },
  {
    "name": "Casque et des lunettes de motocross",
    "image": "assets/objects/casque-lunettes-motocross.png",
    "cat": "Sport",
    "rarity": "peu-commun",
    "icon": "🏅"
  },
  {
    "name": "Cloche à fromage",
    "image": "assets/objects/cloche-fromage.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Tapis de course électrique",
    "image": "assets/objects/tapis-course-electrique.png",
    "cat": "Sport",
    "rarity": "peu-commun",
    "icon": "🏅"
  },
  {
    "name": "Arrosoir",
    "image": "assets/objects/arrosoir-impossible.png",
    "cat": "Maison",
    "rarity": "exceptionnel",
    "icon": "🏠"
  },
  {
    "name": "Biographie du petit Gregory",
    "image": "assets/objects/biographie-petit-gregory.png",
    "cat": "Loisir",
    "rarity": "rare",
    "icon": "🎲"
  },
  {
    "name": "Bague royale",
    "image": "assets/objects/bague-royale.png",
    "cat": "Bijoux",
    "rarity": "exceptionnel",
    "icon": "📦"
  },
  {
    "name": "Machette",
    "image": "assets/objects/machette.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Manteau polaire",
    "image": "assets/objects/manteau-polaire-pbl.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Perruque pour chevelu",
    "image": "assets/objects/perruque-chevelu.png",
    "cat": "Maison",
    "rarity": "peu-commun",
    "icon": "🏠"
  },
  {
    "name": "Cannes à pêche",
    "image": "assets/objects/deux-cannes-peche.png",
    "cat": "Sport",
    "rarity": "courant",
    "icon": "🏅"
  },
  {
    "name": "Fer à lisser PB&L",
    "image": "assets/objects/fer-lisser-pbl.png",
    "cat": "Maison",
    "rarity": "sans-rarete",
    "icon": "🏠"
  },
  {
    "name": "Legging \"léopard\"",
    "image": "assets/objects/legging-leopard.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Legging \"nid d'abeille\"",
    "image": "assets/objects/legging-nid-abeille.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Legging \"rétro\"",
    "image": "assets/objects/legging-retro.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Robe fleurie",
    "image": "assets/objects/robe-fleurie.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Robe blanche",
    "image": "assets/objects/robe-blanche.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Robe à pois",
    "image": "assets/objects/robe-pois.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Robe de soirée",
    "image": "assets/objects/robe-soiree.png",
    "cat": "Vêtements",
    "rarity": "rare",
    "icon": "👕"
  },
  {
    "name": "Chaussures ballerines",
    "image": "assets/objects/chaussures-ballerines.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Chaussures spartiates",
    "image": "assets/objects/chaussures-spartiates.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Chaussures à talons",
    "image": "assets/objects/chaussures-talons.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Chaussures de soirée",
    "image": "assets/objects/chaussures-soiree.png",
    "cat": "Vêtements",
    "rarity": "rare",
    "icon": "👕"
  },
  {
    "name": "Jupe de mamie",
    "image": "assets/objects/jupe-mamie.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Jupe de printemps",
    "image": "assets/objects/jupe-printemps.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Jupe à pailettes",
    "image": "assets/objects/jupe-paillettes.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Kilt Écossais",
    "image": "assets/objects/kilt-ecossais.png",
    "cat": "Vêtements",
    "rarity": "rare",
    "icon": "👕"
  },
  {
    "name": "Culotte de mamie",
    "image": "assets/objects/culotte-mamie.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Sac à main",
    "image": "assets/objects/sac-main-noir.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Sac shopping",
    "image": "assets/objects/sac-shopping.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Sac \"bandouillère\"",
    "image": "assets/objects/sac-bandouliere.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Serre-tête \"Oreilles-de-chat\"",
    "image": "assets/objects/serre-tete-chat.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Serre-tête fantaisie",
    "image": "assets/objects/serre-tete-fantaisie.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Serre-tête chic",
    "image": "assets/objects/serre-tete-chic.png",
    "cat": "Vêtements",
    "rarity": "peu-commun",
    "icon": "👕"
  },
  {
    "name": "Crop-top super-héroïne",
    "image": "assets/objects/crop-top-super-hero.png",
    "cat": "Vêtements",
    "rarity": "exceptionnel",
    "icon": "👕"
  },
  {
    "name": "Débardeur pour femme",
    "image": "assets/objects/debardeur-femme.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Collier ras-de-cou",
    "image": "assets/objects/collier-ras-cou.png",
    "cat": "Bijoux",
    "rarity": "sans-rarete",
    "icon": "📦"
  },
  {
    "name": "Collier de perles",
    "image": "assets/objects/collier-perles.png",
    "cat": "Bijoux",
    "rarity": "courant",
    "icon": "📦"
  },
  {
    "name": "Collier maillons de chaine",
    "image": "assets/objects/collier-maillons-coeur.png",
    "cat": "Bijoux",
    "rarity": "peu-commun",
    "icon": "📦"
  },
  {
    "name": "Collier de soirée",
    "image": "assets/objects/collier-soiree.png",
    "cat": "Bijoux",
    "rarity": "rare",
    "icon": "📦"
  },
  {
    "name": "Foulard bohémien",
    "image": "assets/objects/foulard-bohemienne.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Écharpe à franges",
    "image": "assets/objects/echarpe-franges.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  },
  {
    "name": "Écharpe à motifs",
    "image": "assets/objects/echarpe-jacquard.png",
    "cat": "Vêtements",
    "rarity": "courant",
    "icon": "👕"
  },
  {
    "name": "Chemise de nuit à rayures",
    "image": "assets/objects/chemise-nuit-rayures.png",
    "cat": "Vêtements",
    "rarity": "sans-rarete",
    "icon": "👕"
  }
];
