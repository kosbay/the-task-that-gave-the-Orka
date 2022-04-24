 const kosyndy = (arr, a ) => {
     for(let i = 0 ; i < arr.length; i++) {
         arr[i] = arr[i] + a
     }

     return arr
 }

console.log(kosyndy([2, 3, 4, 5, 6], 5))
console.log(kosyndy([2, 3, 4, 5, 6], 0))
