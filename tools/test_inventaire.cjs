const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('inventaire.js','utf8'),game=fs.readFileSync('game.js','utf8');
const ctx={};vm.createContext(ctx);
vm.runInContext(source+'\n'+game.slice(0,game.indexOf('let state=load()'))+'\n'+game.slice(game.indexOf('function hydrateSave('),game.indexOf('function load('))+'\nglobalThis.api={ITEMS,hydrateSave,RARITIES};',ctx);
const items=JSON.parse(JSON.stringify(ctx.api.ITEMS));
assert(items.length>0);
assert.equal(new Set(items.map(i=>i.name)).size,items.length);
assert.equal(new Set(items.map(i=>i.image)).size,items.length);
for(const i of items){
 for(const k of ['name','image','cat','rarity'])assert.equal(typeof i[k],'string',`${i.name}: ${k}`);
 assert(ctx.api.RARITIES.some(r=>r.key===i.rarity),i.name);
 assert(fs.existsSync(i.image),i.image);
}
// Migration audit: optional local snapshot, not another runtime catalogue.
if(fs.existsSync('outputs/inventory-before-migration.json')){
 const before=JSON.parse(fs.readFileSync('outputs/inventory-before-migration.json','utf8'));
 // Two name corrections from GitHub, explicitly preserved during the merge.
 for(const item of before){
  if(item.name==='Foulard Bohemienne')item.name='Foulard Bohemien';
  if(item.name==='Jeu de société Ça fait 2')item.name='Jeu de société "Ça fait 2"';
 }
 assert.deepEqual(items,before,'Every property and the draw order must be preserved');
}
const saved={inventory:items.map((i,n)=>({...i,id:n,value:n+12,parcelPrice:100})),showcase:[],badges:['chasseur-dinosaures'],collectionDiscoveries:items.filter(i=>i.collection).map(i=>i.name)};
const loaded=ctx.api.hydrateSave(saved);
assert.equal(loaded.inventory.length,items.length);
loaded.inventory.forEach((i,n)=>{assert.equal(i.id,n);assert.equal(i.value,n+12);assert.equal(i.name,items[n].name);assert.equal(i.image,items[n].image);assert.equal(i.rarity,items[n].rarity)});
assert.equal(loaded.badges[0],'chasseur-dinosaures');
const renamed=ctx.api.hydrateSave({inventory:[{id:41,name:'Foulard Bohemienne',value:42}],showcase:[{id:42,name:'Jeu de société Ça fait 2',value:120}],discoveredItems:['Foulard Bohemienne','Jeu de société Ça fait 2'],lastDrawnName:'Jeu de société Ça fait 2'});
assert.equal(renamed.inventory[0].name,'Foulard Bohemien');
assert.equal(renamed.showcase[0].name,'Jeu de société "Ça fait 2"');
assert.equal(renamed.inventory[0].value,42);
assert.equal(renamed.showcase[0].value,120);
assert.equal(renamed.lastDrawnName,'Jeu de société "Ça fait 2"');
assert(renamed.discoveredItems.includes('Foulard Bohemien'));
for(const [key,count] of Object.entries({'dinosaure':10,'rentree-2026':10,'maillots-villes':12}))assert.equal(items.filter(i=>i.collection===key).length,count);
const html=fs.readFileSync('jeu.html','utf8'),sw=fs.readFileSync('sw.js','utf8');
assert(html.indexOf('src="inventaire.js')<html.indexOf('src="game.js'));
assert(!/catalog(?:-20260830)?\.js/.test(html+sw+game));
console.log(`${items.length} objets : champs, images, ordre, sauvegardes, collections et chargement OK.`);
