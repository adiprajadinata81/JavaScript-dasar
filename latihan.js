const user = {
   nama: "Stefan",
   umur: 21,
   makananFavorit: "Pizza",
   perkenalanDiri: () => { 
      return `Nama saya ${this.nama}. Saya berumur ${this.umur}. Saya suka ${this.makananFavorit}`;
   }
};

// panggil method tersebut di dalam fungsi yang kita inginkan
function fungsiA() {
  // isi dari fungsiA
  console.log(user.perkenalanDiri());
}

function fungsiB() {
  // isi dari fungsiB
  console.log(user.perkenalanDiri());
}

function fungsiC() {
  // isi dari fungsiC
  console.log(user.perkenalanDiri());
}
