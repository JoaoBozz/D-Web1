function mergeArrays(arr1, arr2){
    let n1 = arr1.length
    let n2 = arr2.length
    let arr_junto = []
    for (let i = 0; i < n1; i++){
        arr_junto.push(arr1[i])
    }
    for (let c = 0; c < n2; c++){
        arr_junto.push(arr2[c])
    }
    return arr_junto
}

console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]