function average(arr){
    let n = arr.length
    let media = 0
    for (let i = 0; i < n; i++){
        media += arr[i]
    }
    return media / n
}

console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20