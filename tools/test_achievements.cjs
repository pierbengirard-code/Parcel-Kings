const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('achievements.js','utf8')+'\nglobalThis.api={ACHIEVEMENTS,achievementStats,achievementProgress,evaluateAchievements};',ctx);
const {ACHIEVEMENTS:defs,achievementStats:stats,achievementProgress:progress,evaluateAchievements:unlock}=ctx.api;
const fresh=()=>({inventory:[],showcase:[],badges:[],cartonsOpened:0,totalSales:0,parcelSpending:0});
const item=(rarity='courant',name='objet',value=1)=>({rarity,name,image:`assets/objects/${name}.png`,value});
function sample(d,target){const s=fresh();switch(d.metric){
case 'opened':s.cartonsOpened=target;break;case 'spent':s.parcelSpending=target;break;case 'sales':s.totalSales=target;break;
case 'badge':if(target)s.badges=[d.badge];break;
case 'stock':s.inventory=Array.from({length:target},()=>item());break;
case 'showcase':s.showcase=Array.from({length:target},()=>item());break;
case 'showcaseValue':s.showcase=[item('courant','objet',target)];break;
case 'stockDuplicates':s.inventory=Array.from({length:target},()=>item());break;
case 'showcaseDuplicates':s.showcase=Array.from({length:target},()=>item('courant','objet',d.minValue?d.minValue/Math.max(1,target):1));break;
case 'stockRarity':s.inventory=Array.from({length:target},()=>item(d.rarity));break;
case 'ownedRarity':s.inventory=Array.from({length:Math.ceil(target/2)},()=>item(d.rarity));s.showcase=Array.from({length:Math.floor(target/2)},()=>item(d.rarity));break;
case 'stockVariety':s.inventory=d.rarities.slice(0,target).map(r=>item(r));break;
case 'ownedVariety':s.inventory=d.rarities.slice(0,Math.min(4,target)).map(r=>item(r));s.showcase=d.rarities.slice(4,target).map(r=>item(r));break;
default:throw Error(d.metric)}return s}
assert.equal(defs.length,48);assert.equal(new Set(defs.map(d=>d.id)).size,48);
const rainbow=defs.find(d=>d.id==='succes-50');
const mixed=sample(rainbow,7);assert.equal(progress(rainbow,stats(mixed)).complete,true);
mixed.showcase=mixed.showcase.filter(i=>i.rarity!=='unique');assert.equal(progress(rainbow,stats(mixed)).complete,false);
mixed.showcase.push({...item('unique'),testPreview:true});assert.equal(progress(rainbow,stats(mixed)).complete,false);
const allDisplay=fresh();allDisplay.showcase=rainbow.rarities.map(r=>item(r));assert.equal(progress(rainbow,stats(allDisplay)).complete,true);
const allStock=fresh();allStock.inventory=rainbow.rarities.map(r=>item(r));assert.equal(progress(rainbow,stats(allStock)).complete,true);
assert.equal(defs.find(d=>d.id==='succes-48').name,'Dixballage rarussi !');
for(const d of defs){
 assert.equal(progress(d,stats(sample(d,d.target-1))).complete,false,`${d.id} below`);
 const s=sample(d,d.target);assert.equal(progress(d,stats(s)).complete,true,`${d.id} threshold`);
 assert(unlock(s,123).some(x=>x.id===d.id));assert.equal(s.achievements[d.id],123);
 assert.equal(unlock(s,456).length,0,'no repeated notification');
 const restored=JSON.parse(JSON.stringify({...fresh(),achievements:s.achievements}));unlock(restored,789);assert.equal(restored.achievements[d.id],123,'permanent after sale/reload');
}
const octo=defs.find(d=>d.id==='succes-44'),s=sample(octo,8);s.showcase.forEach(i=>i.value=1110);assert.equal(progress(octo,stats(s)).complete,false);s.showcase.forEach(i=>i.value=1111);assert.equal(progress(octo,stats(s)).complete,true);
const tests=fresh();tests.inventory=Array.from({length:500},()=>({...item('unique'),testPreview:true}));tests.showcase=tests.inventory;assert.equal(unlock(tests).length,0,'test objects excluded');
const historical={inventory:[],showcase:[],cartonsOpened:98,totalSales:10000,money:9999999};unlock(historical);assert.equal(historical.parcelSpending,0);assert(historical.achievements['succes-3']);assert(historical.achievements['succes-36']);assert(!historical.achievements['succes-18']);
console.log('48 succès : seuils avant/à, permanence, cumul stock/vitrine, doublons, Octogone, exclusion des tests et anciens compteurs OK.');
