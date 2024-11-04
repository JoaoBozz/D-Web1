function reverseArray(arr){
    let arr_inverso = []
    for (let n = arr.length - 1; n >= 0; n--){
        arr_inverso.push(arr[n])
    }
    return arr_inverso
}

console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]