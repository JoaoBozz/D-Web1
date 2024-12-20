function getEvenNumbers(arr){
    let n = arr.length
    let arr_pares = []
    for (let i = 0; i < n; i++){
        if (arr[i] % 2 == 0){
            arr_pares.push(arr[i])
        }
    }
    return arr_pares
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]