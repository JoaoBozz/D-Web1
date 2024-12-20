function isPalindrome(str){
    let reverso = ""
    let n = str.length
    for (let i; n >= 0; n--){
        reverso += str[n]
    }
    return reverso
}

console.log(reverseString("javascript"))
console.log(reverseString("hello"))
