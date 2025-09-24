const olahraga = 'basketball';
let atlet = 'nama atlet ';
let namaOlahraga = 'olahraga Yang Ditekuni ';

function namaAtlet(){
 let atlet = 'lionelMessi';
 const noMessi = 10;
 
 if(olahraga === 'basketball'){
 atlet = 'kobeBryant';
 const noKobe = 24;
 }
 return atlet;
}
console.log(atlet + namaAtlet());
console.log(namaOlahraga + olahraga);
