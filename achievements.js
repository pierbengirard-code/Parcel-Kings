// Succès.xlsx, colonnes A/B/C. IDs stables : numéros de lignes de la source initiale.
const ACHIEVEMENTS = [
  {
    "id": "succes-2",
    "name": "La truite remonte le ruisseau pas à pas",
    "description": "Ouvrir 9 cartons",
    "criteria": "Avoir ouvert au moins 9 cartons au total en tout",
    "metric": "opened",
    "target": 9
  },
  {
    "id": "succes-3",
    "name": "Champion de l'ouverture",
    "description": "Ouvrir 98 cartons",
    "criteria": "Avoir ouvert au moins 98 cartons au total en tout",
    "metric": "opened",
    "target": 98
  },
  {
    "id": "succes-4",
    "name": "Débaleur fou",
    "description": "Ouvrir 1001 cartons",
    "criteria": "Avoir ouvert au moins 1001 cartons au total en tout",
    "metric": "opened",
    "target": 1001
  },
  {
    "id": "succes-5",
    "name": "Né pour ouvrir !",
    "description": "Ouvrir 1988 cartons",
    "criteria": "Avoir ouvert au moins 1988 cartons au total en tout",
    "metric": "opened",
    "target": 1988
  },
  {
    "id": "succes-6",
    "name": "Accro, moi ?",
    "description": "Ouvrir 10 000 cartons",
    "criteria": "Avoir ouvert au moins 10000 cartons au total en tout",
    "metric": "opened",
    "target": 10000
  },
  {
    "id": "succes-7",
    "name": "Mangeur de scotch",
    "description": "Ouvrir 20 000 cartons",
    "criteria": "Avoir ouvert au moins 20000 cartons au total en tout",
    "metric": "opened",
    "target": 20000
  },
  {
    "id": "succes-8",
    "name": "Ne faire qu'un avec le carton",
    "description": "Ouvrir 55 555 cartons",
    "criteria": "Avoir ouvert au moins 55555 cartons au total en tout",
    "metric": "opened",
    "target": 55555
  },
  {
    "id": "succes-9",
    "name": "Petite crampe au poignet",
    "description": "Ouvrir 400 000 cartons",
    "criteria": "Avoir ouvert au moins 400000 cartons au total en tout",
    "metric": "opened",
    "target": 400000
  },
  {
    "id": "succes-10",
    "name": "Millionnaire d'une certaine façon",
    "description": "Ouvrir 1 000 000 cartons",
    "criteria": "Avoir ouvert au moins 1000000 cartons au total en tout",
    "metric": "opened",
    "target": 1000000
  },
  {
    "id": "succes-11",
    "name": "J'ai pas ouvert tout ça en un jour",
    "description": "Ouvrir 4 600 000 cartons",
    "criteria": "Avoir ouvert au moins 4600000 cartons au total en tout",
    "metric": "opened",
    "target": 4600000
  },
  {
    "id": "succes-12",
    "name": "Tour du monde !",
    "description": "Ouvrir 16 300 000 cartons",
    "criteria": "Avoir ouvert au moins 16300000 cartons au total en tout",
    "metric": "opened",
    "target": 16300000
  },
  {
    "id": "succes-14",
    "name": "DINOSAUR ! RAAWWRRR !!",
    "description": "Obtenir le badge Chasseur de Dinosaures",
    "criteria": "Avoir obtenu le badge \"Chasseur de Dinosaures\"",
    "metric": "badge",
    "target": 1,
    "badge": "chasseur-dinosaures"
  },
  {
    "id": "succes-15",
    "name": "Prêt pour l'école",
    "description": "Obtenir le badge Rentrée 2026",
    "criteria": "Avoir obtenu le badge \"Rentrée 2026\"",
    "metric": "badge",
    "target": 1,
    "badge": "rentree-2026"
  },
  {
    "id": "succes-16",
    "name": "Un vrai supporter",
    "description": "Obtenir le badge Tour d’Europe",
    "criteria": "Avoir obtenu le badge \"Tour d'Europe\"",
    "metric": "badge",
    "target": 1,
    "badge": "tour-europe"
  },
  {
    "id": "succes-18",
    "name": "Richesse là !",
    "description": "Dépenser 1337 crédits en ouverture de colis",
    "criteria": "Avoir dépensé 1337$ en ouverture de colis au total en tout",
    "metric": "spent",
    "target": 1337
  },
  {
    "id": "succes-19",
    "name": "Flambeur",
    "description": "Dépenser 10 000 crédits en ouverture de colis",
    "criteria": "Avoir dépensé 10000$ en ouverture de colis au total en tout",
    "metric": "spent",
    "target": 10000
  },
  {
    "id": "succes-20",
    "name": "Quand on aime on ne compte pas",
    "description": "Dépenser 50 001 crédits en ouverture de colis",
    "criteria": "Avoir dépensé 50001$ en ouverture de colis au total en tout",
    "metric": "spent",
    "target": 50001
  },
  {
    "id": "succes-21",
    "name": "Ca va je gère j'vous dit !",
    "description": "Dépenser 100 000 crédits en ouverture de colis",
    "criteria": "Avoir dépensé 100000$ en ouverture de colis au total en tout",
    "metric": "spent",
    "target": 100000
  },
  {
    "id": "succes-22",
    "name": "Une ligne de plus sur le relevé de compte",
    "description": "Dépenser 1 000 000 crédits en ouverture de colis",
    "criteria": "Avoir dépensé 1000000$ en ouverture de colis au total en tout",
    "metric": "spent",
    "target": 1000000
  },
  {
    "id": "succes-23",
    "name": "Tout est sous contrôle",
    "description": "Dépenser 9 999 999 crédits en ouverture de colis",
    "criteria": "Avoir dépensé 9999999$ en ouverture de colis au total en tout",
    "metric": "spent",
    "target": 9999999
  },
  {
    "id": "succes-25",
    "name": "C'est pas la taille qui compte",
    "description": "Avoir 1 objet dans son stock",
    "criteria": "Avoir au moins 1 objet dans son stock",
    "metric": "stock",
    "target": 1
  },
  {
    "id": "succes-26",
    "name": "Un petit côté écureuil",
    "description": "Avoir 100 objets dans son stock",
    "criteria": "Avoir au moins 100 objets dans son stock",
    "metric": "stock",
    "target": 100
  },
  {
    "id": "succes-27",
    "name": "Il reste de la place",
    "description": "Avoir 200 objets dans son stock",
    "criteria": "Avoir au moins 200 objets dans son stock",
    "metric": "stock",
    "target": 200
  },
  {
    "id": "succes-28",
    "name": "Il va me falloir un deuxième garage",
    "description": "Avoir 300 objets dans son stock",
    "criteria": "Avoir au moins 300 objets dans son stock",
    "metric": "stock",
    "target": 300
  },
  {
    "id": "succes-30",
    "name": "Elle est belle hein ?",
    "description": "Avoir 8 objets dans sa vitrine",
    "criteria": "Avoir 8 objets dans sa vitrine",
    "metric": "showcase",
    "target": 8
  },
  {
    "id": "succes-32",
    "name": "Prends-ça mamie !",
    "description": "Avoir une vitrine vallant au moins 7 950 crédits",
    "criteria": "Avoir une vitrine vallant au moins 7 950$",
    "metric": "showcaseValue",
    "target": 7950
  },
  {
    "id": "succes-33",
    "name": "Je me la pète un peu...",
    "description": "Avoir une vitrine vallant au moins 12 345 crédits",
    "criteria": "Avoir une vitrine vallant au moins 12345$",
    "metric": "showcaseValue",
    "target": 12345
  },
  {
    "id": "succes-34",
    "name": "COMBIEN ?!",
    "description": "Avoir une vitrine vallant au moins 20 000 crédits",
    "criteria": "Avoir une vitrine vallant au moins 20000$",
    "metric": "showcaseValue",
    "target": 20000
  },
  {
    "id": "succes-36",
    "name": "Import-Export",
    "description": "Revendre pour au moins 10 000 crédits",
    "criteria": "Avoir revendu pour au moins 10000$ de colis",
    "metric": "sales",
    "target": 10000
  },
  {
    "id": "succes-37",
    "name": "Minimiser les pertes",
    "description": "Revendre pour au moins 50 000 crédits",
    "criteria": "Avoir revendu pour au moins 50000$ de colis",
    "metric": "sales",
    "target": 50000
  },
  {
    "id": "succes-38",
    "name": "Je suis pas dans le positif mais presque",
    "description": "Revendre pour au moins 100 000 crédits",
    "criteria": "Avoir revendu pour au moins 100000$ de colis",
    "metric": "sales",
    "target": 100000
  },
  {
    "id": "succes-39",
    "name": "L'argent ça va, ça vient",
    "description": "Revendre pour au moins 300 000 crédits",
    "criteria": "Avoir revendu pour au moins 300000$ de colis",
    "metric": "sales",
    "target": 300000
  },
  {
    "id": "succes-40",
    "name": "Que faire de tout ce fric ?",
    "description": "Revendre pour au moins 1 000 000 crédits",
    "criteria": "Avoir revendu pour au moins 1000000$ de colis",
    "metric": "sales",
    "target": 1000000
  },
  {
    "id": "succes-42",
    "name": "Ca fait 2 !",
    "description": "Avoir un objet en double dans sa vitrine",
    "criteria": "Avoir au moins un objet en double dans sa vitrine, on s'en fiche de la valeur",
    "metric": "showcaseDuplicates",
    "target": 2
  },
  {
    "id": "succes-43",
    "name": "Ma meilleure moitié",
    "description": "Avoir quatre fois le même objet dans sa vitrine",
    "criteria": "Avoir au moins quatre fois le même objet dans sa vitrine, on s'en fiche de la valeur",
    "metric": "showcaseDuplicates",
    "target": 4
  },
  {
    "id": "succes-44",
    "name": "Octogone",
    "description": "Avoir 8 fois le même objet dans la vitrine quand celle ci dépasse les 8888 crédits",
    "criteria": "Avoir au moins huit fois le même objet dans la vitrine et la vitrine a une valeur d'au moins 8888$",
    "metric": "showcaseDuplicates",
    "target": 8,
    "minValue": 8888
  },
  {
    "id": "succes-46",
    "name": "Je crois que je l'ai déjà celui-là !",
    "description": "Avoir 10 fois le même objet en stock",
    "criteria": "Avoir au moins 10 fois le même objet en stock, peu importe sa valeur",
    "metric": "stockDuplicates",
    "target": 10
  },
  {
    "id": "succes-47",
    "name": "C'est mon trésor à moi",
    "description": "Avoir 100 objets \"sans rareté\" dans le stock",
    "criteria": "Avoir au moins 100 objets de rareté \"sans rareté\" dans le stock, au total. On compte les objets en double comme 2 objets, etc.",
    "metric": "stockRarity",
    "rarity": "sans-rarete",
    "target": 100
  },
  {
    "id": "succes-48",
    "name": "Dixballage rarussi !",
    "description": "Avoir 10 objets Rare dans le stock",
    "criteria": "Avoir au moins 10 objets Rare dans le stock",
    "metric": "stockRarity",
    "rarity": "rare",
    "target": 10
  },
  {
    "id": "succes-49",
    "name": "Les 4 couleurs primaires",
    "description": "Avoir au moins un objet courant, un peu commun, un rare et un exceptionnel dans le stock",
    "criteria": "Avoir au moins un objet de rareté \"courant\" et un objet de rareté \"peu commun\" et un objet de rareté \"rare\" et un objet de rareté \"exceptionnel\" dans le stock, en même temps.",
    "metric": "stockVariety",
    "rarities": [
      "courant",
      "peu-commun",
      "rare",
      "exceptionnel"
    ],
    "target": 4
  },
  {
    "id": "succes-50",
    "name": "Arc-en-ciel",
    "description": "Avoir un objet de chaque rareté dans le stock ou la vitrine",
    "criteria": "Avoir au moins un objet de chaque rareté (légendaire et uniques inclus) dans le stock ou dans la vitrine. Le stock et la vitrine sont tous les deux pris en compte.",
    "metric": "ownedVariety",
    "rarities": [
      "sans-rarete",
      "courant",
      "peu-commun",
      "rare",
      "exceptionnel",
      "legendaire",
      "unique"
    ],
    "target": 7
  },
  {
    "id": "succes-52",
    "name": "C'est une bonne journée",
    "description": "Trouver un objet légendaire",
    "criteria": "Avoir au moins un objet de rareté légendaire sans le stock ou dans la vitrine. Le stock et la vitrine sont tous les deux pris en compte,",
    "metric": "ownedRarity",
    "target": 1,
    "rarity": "legendaire"
  },
  {
    "id": "succes-53",
    "name": "Je suis une légende",
    "description": "Avoir 5 objets légendaire",
    "criteria": "Avoir au moins cinq objets de rareté légendaire sans le stock ou dans la vitrine. Le stock et la vitrine sont tous les deux pris en compte,",
    "metric": "ownedRarity",
    "target": 5,
    "rarity": "legendaire"
  },
  {
    "id": "succes-54",
    "name": "Encore un p'tit jaune ?",
    "description": "Avoir 10 objets légendaire",
    "criteria": "Avoir au moins dix objets de rareté légendaire sans le stock ou dans la vitrine. Le stock et la vitrine sont tous les deux pris en compte,",
    "metric": "ownedRarity",
    "target": 10,
    "rarity": "legendaire"
  },
  {
    "id": "succes-55",
    "name": "Legen... wait for it... DARY ! LEGENDARY !",
    "description": "Avoir 15 objets légendaire",
    "criteria": "Avoir au moins quinze objets de rareté légendaire sans le stock ou dans la vitrine. Le stock et la vitrine sont tous les deux pris en compte,",
    "metric": "ownedRarity",
    "target": 15,
    "rarity": "legendaire"
  },
  {
    "id": "succes-57",
    "name": "C'est moi qui l'ai !",
    "description": "Trouver un objet unique",
    "criteria": "Avoir au moins un objet de rareté unique sans le stock ou dans la vitrine. Le stock et la vitrine sont tous les deux pris en compte.",
    "metric": "ownedRarity",
    "target": 1,
    "rarity": "unique"
  },
  {
    "id": "succes-58",
    "name": "Sainte trinité",
    "description": "Avoir 3 objets uniques",
    "criteria": "Avoir au moins trois objets de rareté unique sans le stock ou dans la vitrine. Le stock et la vitrine sont tous les deux pris en compte.",
    "metric": "ownedRarity",
    "target": 3,
    "rarity": "unique"
  },
  {
    "id": "succes-59",
    "name": "Mon chiffre porte bonheur",
    "description": "Avoir 7 objets uniques",
    "criteria": "Avoir au moins sept objets de rareté unique sans le stock ou dans la vitrine. Le stock et la vitrine sont tous les deux pris en compte.",
    "metric": "ownedRarity",
    "target": 7,
    "rarity": "unique"
  }
];

function achievementStats(s){
  const stock=(s.inventory||[]).filter(i=>!i.testPreview),showcase=(s.showcase||[]).filter(i=>!i.testPreview);
  const rarity=i=>({normal:'sans-rarete',commun:'courant',inhabituel:'peu-commun','légendaire':'legendaire'})[i.rarity]||i.rarity;
  const counts=items=>items.reduce((out,i)=>{const key=rarity(i);out[key]=(out[key]||0)+1;return out},{});
  const duplicates=items=>{const counts=new Map();for(const i of items){const key=i.uniqueKey||i.image||i.name;counts.set(key,(counts.get(key)||0)+1)}return Math.max(0,...counts.values())};
  return {opened:Number(s.cartonsOpened)||0,spent:Number(s.parcelSpending)||0,sales:Number(s.totalSales)||0,
    stock:stock.length,showcase:showcase.length,showcaseValue:showcase.reduce((sum,i)=>sum+(Number(i.value)||0),0),
    stockDuplicates:duplicates(stock),showcaseDuplicates:duplicates(showcase),stockRarity:counts(stock),ownedRarity:counts([...stock,...showcase]),badges:new Set(s.badges||[])};
}
function achievementProgress(def,stats){
  let value;
  if(def.metric==='badge')value=stats.badges.has(def.badge)?1:0;
  else if(def.metric==='stockVariety')value=def.rarities.filter(r=>stats.stockRarity[r]>0).length;
  else if(def.metric==='ownedVariety')value=def.rarities.filter(r=>stats.ownedRarity[r]>0).length;
  else if(def.rarity)value=stats[def.metric][def.rarity]||0;
  else value=stats[def.metric]||0;
  return {value,complete:value>=def.target&&(def.minValue==null||stats.showcaseValue>=def.minValue)};
}
function evaluateAchievements(s,now=Date.now()){
  if(!s.achievements||typeof s.achievements!=='object'||Array.isArray(s.achievements))s.achievements={};
  if(!Number.isFinite(s.parcelSpending)||s.parcelSpending<0)s.parcelSpending=0;
  const stats=achievementStats(s),unlocked=[];
  for(const def of ACHIEVEMENTS){
    if(!Object.prototype.hasOwnProperty.call(s.achievements,def.id)&&achievementProgress(def,stats).complete){s.achievements[def.id]=now;unlocked.push(def)}
  }
  return unlocked;
}
const achievementEscape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let achievementNoticeTimer;
function checkAchievements(){
  const unlocked=evaluateAchievements(state);
  if(unlocked.length){
    const notice=document.getElementById('achievementNotice');
    if(notice){
      notice.querySelector('strong').textContent=unlocked.length===1?'Succès débloqué !':`${unlocked.length} succès débloqués !`;
      notice.querySelector('span').textContent=unlocked.length===1?unlocked[0].name:'Ta progression vient d’être récompensée.';
      notice.hidden=false;clearTimeout(achievementNoticeTimer);achievementNoticeTimer=setTimeout(()=>notice.hidden=true,6500);
    }
  }
  return unlocked.length>0;
}
function renderAchievements(){
  const grid=document.getElementById('achievementsGrid');if(!grid)return;
  const stats=achievementStats(state),unlocks=state.achievements||{},count=ACHIEVEMENTS.filter(a=>Object.prototype.hasOwnProperty.call(unlocks,a.id)).length;
  document.getElementById('achievementCount').textContent=count;
  document.getElementById('achievementSummary').textContent=`${count} / ${ACHIEVEMENTS.length} succès débloqués`;
  const number=n=>Math.floor(n).toLocaleString('fr-FR');
  grid.innerHTML=ACHIEVEMENTS.map(def=>{
    const earned=Object.prototype.hasOwnProperty.call(unlocks,def.id),progress=achievementProgress(def,stats);
    const percent=earned?100:Math.min(100,progress.value/def.target*100,def.minValue?stats.showcaseValue/def.minValue*100:100);
    const currency=['spent','sales','showcaseValue'].includes(def.metric)?' $':'';
    const detail=earned?'Débloqué · définitivement acquis':`${number(Math.min(progress.value,def.target))} / ${number(def.target)}${currency}`;
    const extra=!earned&&def.minValue?` · Vitrine : ${number(stats.showcaseValue)} / ${number(def.minValue)} $`:'';
    return `<article class="achievement-card ${earned?'earned':''}"><div class="achievement-emblem" aria-hidden="true">${earned?'✦':'◇'}</div><div class="achievement-content"><small>${earned?'SUCCÈS ACQUIS':'À DÉBLOQUER'}</small><h3>${achievementEscape(def.name)}</h3><p>${achievementEscape(def.description)}</p><progress max="100" value="${percent}" aria-label="Progression : ${achievementEscape(def.name)}"></progress><div class="achievement-progress">${detail}${extra}</div></div></article>`;
  }).join('');
}
