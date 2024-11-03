function removeDuplicates(arr){
    let dupla = ""
    let n = arr.length
    let anterior = 0
    for (let i = 0; i < n; i++){
        if (dupla != arr[i]){
            arr[anterior] = arr[i]
            anterior++
        }
        dupla = arr[i]
    }
    arr.length = anterior
    return arr
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]