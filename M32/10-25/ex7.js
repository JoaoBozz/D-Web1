function capitalizeWords(str){
    let n = str.length
    let frase = ''
    let novaPALAVRA = true
    for (let c = 0; c < n; c++){
        if (str[c] == ' '){
            frase += ' '
            novaPALAVRA = true
        }
        else if (novaPALAVRA){
            frase += str[c].toUpperCase()
            novaPALAVRA = false
        }
        else{
            frase += str[c].toLowerCase()
        }
    }
    return frase
}

console.log(capitalizeWords("hello world"))
console.log(capitalizeWords("javaScript is awesome"))