const findMin = (arr) => {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        } 
    }
    return min;

}

console.log(findMin([5, 6, 8, 12, 3]))