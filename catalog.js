const OBJECT_FILES = `
agrafeuse-chantier.png
antivol-velo-vert.png
aspirateur-pbl.png
ballon-foot-annees-80.png
baskets-blanches-pbl.png
beret-francais.png
biberon.png
boite-gouter.png
bombe-peinture-jaune.png
bonnet-gris-pbl.png
boucles-oreilles-lamas.png
bracelet-argent.png
bracelet-cuir.png
bracelet-fantaisie.png
cadenas.png
casque-velo.png
casquette-jaune-pbl.png
casquette-trucker-pbl.png
chapeau-trop-grand.png
chaussures-randonnee.png
chaussures-running.png
chauve-souris-empaillee.png
chemise-carreaux.png
chemisette-zebre.png
coiffe-plumes-aigle.png
costume-tigre.png
coupe-champion-quartier.png
couteau-chef-pbl.png
crayons.png
cutter-jaune-noir.png
dent-dinosaure.png
ecouteurs-sans-fil-pbl.png
enceinte-bluetooth-pbl.png
fer-repasser-pbl.png
figurine-el-tigro-blanco.png
figurine-formule-1.png
figurine-homme-lapin.png
frisbee-rouge.png
gilet-jaune.png
gourde-metal-bleu-ciel.png
gourde-plastique-grise.png
gps-pbl.png
harnais-chien-k9.png
imprimante-3d-emballee.png
jeu-cartes.png
kimono-karate.png
kit-plongee.png
lampe-torche.png
lot-casseroles.png
lot-couteaux-azteques.png
lot-fourchettes.png
lunettes-aviateur.png
mallette-affaires.png
mariniere.png
meuble-kit.png
montre-connectee-pbl.png
montre-digitale-pbl.png
mug-lapin-noir-blanc.png
mug-lapin-noir.png
niveau-bulle.png
paire-claquettes.png
pate-thermique-pbl.png
patins-roulettes-80.png
peluche-licorne.png
perceuse.png
pince-multiprise.png
pinceau-artiste.png
pompe-velo.png
ponceuse-electrique.png
pull-marin.png
rapporteur-metal.png
raquette-tennis.png
robe-princesse.png
saxophone.png
scie-sauteuse-pbl.png
seche-cheveux.png
selle-cheval.png
smartphone-pbl.png
statuette-oreille-cassee.png
statuette-tribale.png
stylo-4-couleurs-or.png
sweat-capuche-qualite.png
sweat-capuche-simple.png
timbre-tour-eiffel.png
tote-bag-marmotte.png
truelle-neuve.png
tshirt-gris-pbl.png
tube-colle-pbl.png
tubes-peinture.png
voiture-teleguidee.png
`.trim().split(/\s+/);

const CATALOG_META = {
  "crayons.png": {name:"Lot de 12 crayons de couleurs",cat:"Scolaire",rarity:"peu-commun",collection:"rentree-2026"},
  "seche-cheveux.png": {name:"Sèche-cheveux PB&L",cat:"Maison",rarity:"sans-rarete"},
  "cadenas.png": {name:"Cadenas en laiton",cat:"Maison",rarity:"sans-rarete"},
  "pompe-velo.png": {name:"Pompe à vélo portable",cat:"Loisir",rarity:"sans-rarete"},
  "ecouteurs-sans-fil-pbl.png": {name:"Écouteurs sans fil PB&L",cat:"Loisir",rarity:"peu-commun"},
  "enceinte-bluetooth-pbl.png": {name:"Enceinte Bluetooth PB&L",cat:"Loisir",rarity:"peu-commun"},
  "montre-connectee-pbl.png": {name:"Montre connectée PB&L",cat:"Maison",rarity:"peu-commun"},
  "gps-pbl.png": {name:"GPS PB&L",cat:"Divers",rarity:"peu-commun"},
  "smartphone-pbl.png": {name:"Smartphone PB&L",cat:"Maison",rarity:"rare"},
  "mug-lapin-noir-blanc.png": {name:"Mug au lapin bélier noir et blanc",cat:"Maison",rarity:"courant"},
  "mug-lapin-noir.png": {name:"Mug au lapin bélier noir",cat:"Maison",rarity:"courant"},
  "dent-dinosaure.png": {name:"Dent de dinosaure",cat:"Collection",rarity:"legendaire",collection:"dinosaure"},
  "figurine-el-tigro-blanco.png": {name:"Figurine El Tigro Blanco",cat:"Collection",rarity:"unique",uniqueKey:"el-tigro-blanco"},
  "coiffe-plumes-aigle.png": {name:"Coiffe aux plumes d’aigle",cat:"Collection",rarity:"legendaire"},
  "stylo-4-couleurs-or.png": {name:"Stylo quatre couleurs en or",cat:"Scolaire",rarity:"legendaire"}
};

const RARITY_GROUPS = {
  "sans-rarete": new Set(`biberon.png bombe-peinture-jaune.png chapeau-trop-grand.png cutter-jaune-noir.png frisbee-rouge.png gilet-jaune.png gourde-plastique-grise.png jeu-cartes.png lampe-torche.png lot-fourchettes.png niveau-bulle.png paire-claquettes.png pinceau-artiste.png rapporteur-metal.png tote-bag-marmotte.png truelle-neuve.png tube-colle-pbl.png`.split(" ")),
  "peu-commun": new Set(`aspirateur-pbl.png baskets-blanches-pbl.png bracelet-argent.png bracelet-cuir.png chaussures-randonnee.png chaussures-running.png costume-tigre.png couteau-chef-pbl.png fer-repasser-pbl.png gourde-metal-bleu-ciel.png kit-plongee.png mallette-affaires.png montre-digitale-pbl.png pate-thermique-pbl.png perceuse.png ponceuse-electrique.png raquette-tennis.png robe-princesse.png saxophone.png scie-sauteuse-pbl.png selle-cheval.png sweat-capuche-qualite.png tubes-peinture.png voiture-teleguidee.png`.split(" ")),
  "rare": new Set(`chauve-souris-empaillee.png coupe-champion-quartier.png figurine-formule-1.png figurine-homme-lapin.png imprimante-3d-emballee.png lot-couteaux-azteques.png patins-roulettes-80.png statuette-tribale.png timbre-tour-eiffel.png`.split(" ")),
  "exceptionnel": new Set(`boucles-oreilles-lamas.png kimono-karate.png peluche-licorne.png statuette-oreille-cassee.png`.split(" "))
};

const TITLE_OVERRIDES = {
  pbl:"PB&L", gps:"GPS", tshirt:"T-shirt", bluetooth:"Bluetooth", k9:"K9", "3d":"3D"
};
const titleFromFile = file => file.replace(/\.png$/i,"").split("-").map(word=>TITLE_OVERRIDES[word]||word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
const categoryFromFile = file => /chauss|baskets|casquette|bonnet|beret|chemise|chemisette|costume|kimono|mariniere|robe|sweat|tshirt|pull/.test(file)?"Vêtements":/ballon|velo|running|raquette|frisbee|plongee|selle|patins/.test(file)?"Sport":/bracelet|boucles|montre|stylo|statuette|figurine|dent|timbre/.test(file)?"Collection":/crayon|rapporteur|agrafeuse|colle|peinture|pinceau/.test(file)?"Scolaire":/gps|smartphone|ecouteurs|enceinte|imprimante|bluetooth/.test(file)?"Technologie":"Maison";
const rarityFromFile = file => Object.entries(RARITY_GROUPS).find(([,files])=>files.has(file))?.[0]||"courant";
const iconFor = category => ({Maison:"🏠",Vêtements:"👕",Sport:"🏅",Collection:"🏺",Scolaire:"✏️",Technologie:"📱",Loisir:"🎲",Divers:"📦"}[category]||"📦");

const OBJECT_CATALOG = OBJECT_FILES.map(file=>{
  const explicit=CATALOG_META[file]||{};
  const cat=explicit.cat||categoryFromFile(file);
  const rarity=explicit.rarity||rarityFromFile(file);
  return {name:explicit.name||titleFromFile(file),icon:explicit.icon||iconFor(cat),image:`assets/objects/${file}`,cat,rarity,...(explicit.collection?{collection:explicit.collection}:{}),...(explicit.uniqueKey?{uniqueKey:explicit.uniqueKey}:{})};
});
