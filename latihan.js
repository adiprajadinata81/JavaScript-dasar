let kalkulator = {
  namaOperasi: 'penjumlahan',
  jumlah: function(angka1, angka2) {
    return angka1 + angka2;
  },
  jumlah2: function(angka3, angka4){
    return angka3 * angka4;
  }
};

console.log(kalkulator.jumlah2(3, 3));
console.log(kalkulator.jumlah(2, 3));
console.log(kalkulator.namaOperasi);
