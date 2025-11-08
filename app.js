let bilangan = [2,3,1,4,6,5,8,7,10,9];
let urutanDariTerkecil = function(a, b){
    return a - b;
};
console.log(bilangan.sort(urutanDariTerkecil));

let bilanganLain = [2,3,1,4,6,5,8,7,10,9];
bilanganLain.sort(function(a, b){
    return a - b;
});
console.log(bilanganLain.sort(urutanDariTerkecil));
