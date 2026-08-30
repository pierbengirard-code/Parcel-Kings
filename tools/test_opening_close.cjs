const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('game.js','utf8');
const functions=['closeModal','reveal','sellRevealedNow'].map(name=>source.split(/\r?\n/).find(line=>line.startsWith(`function ${name}(`))).join('\n');
let closed=0,sold=0;
const cross={hidden:true};
const context={selectedLot:{price:50},revealedItem:{id:1},lotsDirty:false,modalReturnTab:'inventory',
 $:selector=>selector==='#closeModal'?cross:{classList:{remove(){closed++}}},
 document:{body:{classList:{remove(){}}}},switchTab(){},sellItem(){sold++}};
vm.createContext(context);vm.runInContext(functions,context);
vm.runInContext('closeModal()',context);assert.equal(closed,0,'outside click cannot close a paid opening');
context.revealedItem=null;vm.runInContext('closeModal()',context);assert.equal(closed,0,'animation cannot be dismissed');
context.revealedItem={id:1};vm.runInContext('reveal()',context);assert.equal(closed,1,'store button closes');assert.equal(context.selectedLot,null);assert.equal(cross.hidden,false);
context.selectedLot={price:50};context.revealedItem={id:2};vm.runInContext('sellRevealedNow()',context);assert.equal(closed,2);assert.equal(sold,1);
vm.runInContext('closeModal()',context);assert.equal(closed,3,'stock inspection/test can still close');
console.log('Ouverture : fermeture accidentelle bloquée, rangement et vente fonctionnels.');
