const ekiMass = (arr1, arr2) => {
    const nov = []
    for(i = 0; i < arr1.length; i++) {
        nov.push(arr1[i] + arr2[i]);
    }
    return nov
}

console.log(ekiMass([0, 2, 3, 4, ], [0, 1, 1, 1]))