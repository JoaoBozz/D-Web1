function findIndex(arr, element){
    let n = arr.length
    let index = 0
    for (let i = 0; i < n; i++){
        if (arr[i] == element){
            index = i
            return index
        }
    }
    if (index == 0){
        return -1
    }
}

console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1