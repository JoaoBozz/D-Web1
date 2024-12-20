function countOccurrences(arr, element){
    let n = arr.length
    let n_ocorrencias = 0
    for (let i = 0; i < n; i++){
        if (arr[i] == element){
            n_ocorrencias++
        }
    }
    return n_ocorrencias
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2