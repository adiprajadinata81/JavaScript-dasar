let kalkulator = {
  namaOperasi: 'penjumlahan',
  jumlah: function(angka1, angka2) {
    return angka1 + angka2;
  },
  jumlah2: function(angka3, angka4){
    return angka3 * angka4;
  },
  jumlah3: function(angka5, angka6){
    return angka5 / angka6;
  }
};

console.log(kalkulator.jumlah3(27, 3));
console.log(kalkulator.jumlah2(3, 3));
console.log(kalkulator.jumlah(2, 3));
console.log(kalkulator.namaOperasi);
