const qos = (arr) => {
    const nov = [];
    for(let i = 0; i < arr.length; i++) {
        if(i == 0){
            nov.push(arr[i]);
        } else{ 
            nov.push(arr[i] + arr[i - 1]);
        }
        
    }
    return nov;
}

console.log(qos([0, 1, 2, 3, 4, 5]))