const minPlusMax = (arr) => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0

    for(let i = 0; i < arr.length; i++) {
        if( min > arr[i]) {
            min = arr[i];
        }
        if( max < arr[i]) {
            max = arr[i]
        }
        
    }  
    
    return max + min
}


console.log(minPlusMax([5, 6, 7, 8, 9, 10]))


funcd([0, 1, 200], 2)

