const findMax = (arr) => {
     
    if(arr[0] < arr[1]) {
        return arr[1];
    } else {
        return arr[0];
    }
    // JStin osinig functiony
    // return Math.max(arr[0], arr[1])
}

//  console.log(findMax([5, 8]));
//  console.log(findMax([23, 10]));

 const findMaxArr = (arr) => {
     let max = 0
     for(let i = 0; i < arr.length; i++) {
         
         if (max < arr[i]) {
            max = arr[i]
         }
     }
     return max
 }
 console.log(findMaxArr([5, 6, 8, 23, 100, 0, 101, 99]))

