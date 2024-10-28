function replaceChar(str, oldChar, newChar){
    let frase = ''

    for (let i = 0; i < str.length; i++){
        if (str[i] == oldChar){
            frase += newChar
        }
        else{
            frase += str[i]
        }
    }
    return frase
}

console.log(replaceChar("hello world", "l", "z"))
console.log(replaceChar("banana", "a", "o"))