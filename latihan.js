let user = {
  nama: 'adi',
  umur: 18,
  fungsiA() {
    console.log(`Nama saya ${this.nama}. Saya berumur ${this.umur} tahun`);
  }
};

user.fungsiA();

