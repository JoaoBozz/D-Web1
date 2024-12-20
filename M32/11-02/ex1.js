function sumArray(arr){
    let n = arr.length
    let soma = 0
    for (let i = 0; i < n; i++){
        soma += arr[i]
    }
    return soma
}

console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
console.log(sumArray([10, -10, 10])); // Deve exibir: 10