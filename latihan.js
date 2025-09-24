const olahraga = 'basketball';

function namaAtlet(){
 let atlet = 'lionelMessi';
 const noMessi = 10;
 
 if(olahraga === 'basketball'){
 atlet = 'kobeBryant';
 const noKobe = 24;
 }
 return atlet;
}
console.log(namaAtlet());
console.log(olahraga);
