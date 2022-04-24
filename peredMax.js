const pmax = (arr) => {
    let nam = Number.MIN_SAFE_INTEGER;
    let peredMax = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        if(peredMax < arr[i] && peredMax < nam ) {
            peredMax = arr[i];

        } else if(nam < arr[i]) {
            nam = arr[i];
        }
    }

    return peredMax;
}

console.log(pmax([1, 2, 3, 4, 5]))

