let namaBilangan = 'hasil dari penjumlahan 8 ditambah 1 adalah = ';
let kalkulator = {
 namaOperasi: 'penjumlahan',
 bilangan: function(angka1, angka2){
  return angka1 + angka2;
 }
};
console.log(kalkulator.namaOperasi);
console.log(namaBilangan + kalkulator.bilangan(8, 1));
