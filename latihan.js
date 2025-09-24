const olahraga = 'basketball';
let nomorPunggung = 'nomor Punggung saya adalah ';
let nama = 'nama saya adalah ';

function namaAtlet(){
 let atlet = 'lionelMessi';
 const noMessi = 10;
 console.log(nama + atlet);

if(olahraga === 'basketball'){
 atlet = 'kobeBryant';
 const noKobe = 24;
 console.log(nomorPunggung + noKobe);
 console.log(nama + atlet);
 }
 return atlet;
}
console.log(namaAtlet());

