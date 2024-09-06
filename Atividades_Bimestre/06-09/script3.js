let condicao1 = true
let condicao2 = true
let condicao3 = false
let condicao4 = true
let condicao5 = true
let condicao6 = false
let condicao7 = true

console.log('1')
console.log('2')

if (condicao1 == true){
    if (condicao3 == true){
        if (condicao7 == true){
            console.log('A')
        }
        else{
            console.log('B')
        }
    }
    else if (condicao6 == true){
        console.log('C')
    }
    else{
        console.log('D')
    }
}
else if (condicao2 == true){
    if (condicao5 == true){
        console.log('E')
    }
    else{
        console.log('F')
    }
}
else if (condicao4 == true){
    console.log('G')
}
else{
    console.log('H')
}

console.log('3')
console.log('4')