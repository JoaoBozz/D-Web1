function toSnakeCase(str){
    let n = str.length
    let snake_case = ""
    for (let c = 0; c < n; c++){
        if (str[c] == ' '){
            snake_case += '_'
        }
        else if (str[c] == str[c].toUpperCase()){
            snake_case += str[c].toLowerCase()
        }
        else{
            snake_case += str[c]
        }
    }
    return snake_case
}

console.log(toSnakeCase("Hello World"))
console.log(toSnakeCase("JavaScript is fun"))