function countOccurrences(str, char){
    let contadorLetras = 0
    let n = str.length
    for (n--; n >= 0; n--){
        if (str[n] == char){
            contadorLetras++
        }
    }

    return contadorLetras
}

console.log(countOccurrences("banana", "a"))
console.log(countOccurrences("hello world", "l"))