const olahraga = 'basketball';
let nomorPunggung = 'nomor Punggung saya adalah ';
function namaAtlet(){
 let atlet = 'lionelMessi';
 const noMessi = 10;

if(olahraga === 'basketball'){
 atlet = 'kobeBryant';
 const noKobe = 24;
 console.log(nomorPunggung + noKobe);
 }
return atlet;
}
console.log(namaAtlet());

