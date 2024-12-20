function isPalindrome(str){
    let reverso = ""
    let n = str.length
    for (n--; n >= 0; n--){
        reverso += str[n]
    }
    if (reverso == str){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome("arara"))
console.log(isPalindrome("hello"))