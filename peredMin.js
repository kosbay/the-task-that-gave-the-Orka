const fMin = (arr) => {
    let min = Number.MAX_SAFE_INTEGER;
    let minx = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
       if( min > arr[i]) {
           min = arr[i];
       } else if(minx > arr[i] && min < minx) {
           minx = arr[i];
       }
    }
    
    return minx
}

console.log(fMin([5, 1, 2, 3, 4]))