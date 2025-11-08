let bilangan = [30, 1, 2, 3.5, 10, 100];


let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil)); 
console.log(bilangan.sort(urutDariTerbesar));
let isSortedDesc = true;

for (let i = 1; i < bilangan.length; i++) {
  if (bilangan[i - 1] < bilangan[i]) {
    isSortedDesc = false;
    break;
  }
}

if (isSortedDesc) {
  console.log("Array sudah urut dari terbesar ke terkecil");
} else {
  console.log("Array TIDAK urut dari terbesar ke terkecil");
}
