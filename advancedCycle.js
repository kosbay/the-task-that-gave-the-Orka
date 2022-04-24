// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    // for(i = 0; i < data.length; i++){
    //     if(typeof(data[i]) == 'string' ){
    //         data[i] = `${data[i]} - done`
    //     } else{
    //         data[i] = data[i] * 2;
    //     }
        
    // }
    const result = []
    for(i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - 1];
    }
    console.log(result);

    // Не трогаем
    return data;
}

secondTask()