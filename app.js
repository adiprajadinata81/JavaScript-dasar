let bilanganTerkecil = [2,1,3,5,4,8,7,6,9,10];
bilanganTerkecil.sort(function(a, b){
    return a - b;
});
console.log(bilanganTerkecil);

let bilangan = [2,1,3,5,4,7,6,8,9,10];
let urutanTerbesar = function(a, b){
    return b - a;
};
console.log(bilangan.sort(urutanTerbesar));

let bilanganBerurut = [1,2,3,4,5,6,7,8,9,10];
bilanganBerurut.sort(function(x, y){
    return y - x;
});
console.log(bilanganBerurut);