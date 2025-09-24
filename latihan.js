const sport = 'formula1';

function namaPembalap(){
 let pembalap = 'oscarPiastri';
 const noOscar = '81';
 console.log(sport);

 if(sport === 'formula1'){
 pembalap = 'maxVerstappen';
 const noMax = '1';
 console.log(sport);
 }
 return pembalap;
}
console.log(namaPembalap());
console.log(sport);
