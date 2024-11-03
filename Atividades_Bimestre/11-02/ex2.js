function findMax(arr){
    let n = arr.length
    let maior_n = 0
    for (let i = 0; i < n; i++){
        if (arr[i] > maior_n){
            maior_n = arr[i]
        }
    }
    return maior_n
}

console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10