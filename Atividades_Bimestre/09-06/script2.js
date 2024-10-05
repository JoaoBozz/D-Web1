let condicao1 = true
let condicao2 = false
let condicao3 = false

console.log('1')
console.log('2')

if (condicao1 == true){
    console.log('A')
    console.log('3')
    console.log('4')
}
else if (condicao2 == true){
    if (condicao3 == true){
        console.log('B')
        console.log('3')
        console.log('4')
    }
    else{
        console.log('C')
    }
}
else{
    console.log('D')
    console.log('3')
    console.log('4')
}
