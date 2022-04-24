"use sctrict";

// massivtin ishindegi sandardy qosu

const mass = [1, 3, 7, 16];
let con = 0;

for(let i = 0; i < mass.length; i++) {
    con = con + mass[i];
}

console.log(con);

// 1  con = 0 + 1 = 1
// 2  con = 1 + 3
// 3  con = 4 + 7
// 4  con = 11 + 16 = 27
// array = massive
// function arqyla
// return degen birdene qaitaru, resultat qaitaru mysaly

const findSum = (arr) => {
    let con = 0;
    
    for(let i = 0; i < arr.length; i++) {
        con = con + arr[i];
    }

    return con;
}

const sum = findSum([3434, 4, 34, 34, 2]) // 3508
const sum2 = findSum([1, 2, 3, 4, 5, 6]) // 21

const basqaSumma = sum - 2000;

console.log('shyqqan summa', sum)
console.log('basqaSumma', basqaSumma)
console.log('sum2', sum2)
console.log('tikelei functan', findSum([2, 4, 6, 8]))
