const sport = 'formula1';
let kalimat = 'nama Pembalap Adalah ';
let kalimat2 = 'mempunyai Poin Balap sebanyak 255 ';

function namaPembalap(){
 let pembalap = 'oscarPiastri';
 const noOscar = '81';
 console.log(sport);

 if(sport === 'formula1'){
 pembalap = 'maxVerstappen ';
 const noMax = '1';
 console.log(sport);
 }
 return pembalap;
}


let no81 = 'oscarPiastri';

function pembalapMclaren(){
 return 'nama Pembalap adalah ' + no81 + ' ' + 'dengan poin sebanyak 324 ';
}

console.log(pembalapMclaren());
console.log(kalimat + namaPembalap() + kalimat2);
console.log(sport);
