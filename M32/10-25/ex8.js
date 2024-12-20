function trimSpaces(str) {
    let frase = ""
    let noMeio = false
    for (let c = 0; c < str.length; c++) {
        if (str[c] != ' ') {
            frase += str[c]
            noMeio = true
        } else if (noMeio) {
            frase += ' '
            noMeio = false
        }
    }
    if (frase[frase.length - 1] == ' ') {
        frase = frase.slice(0, -1)
    }
    return frase
}

console.log(trimSpaces("   JavaScript    é     divertido    "))
console.log(trimSpaces("   Programação     é   interessante  "))
