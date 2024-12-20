function allEquals(arr){
    let n = arr.length
    let igual = arr[0]
    for (let i = 0; i < n; i++){
        if (igual != arr[i]){
            return false
        }
    }
    return true
}

console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false