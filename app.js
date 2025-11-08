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