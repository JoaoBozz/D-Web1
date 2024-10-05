let condicao1 = false
let condicao2 = true
let condicao3 = true
let condicao4 = true
let condicao5 = false
let condicao6 = true
let condicao7 = true

console.log('1')
console.log('2')

if (condicao1 == true){
    if (condicao3 == true){
        if (condicao7 == true){
            resposta = 'A'
        }
        else{
            resposta = 'B'
        }
    }
    else if (condicao6 == true){
        resposta = 'C'
    }
    else{
        resposta = 'D'
    }
}
else if (condicao2 == true){
    if (condicao5 == true){
        resposta = 'E'
    }
    else{
        resposta = 'F'
    }
}
else if (condicao4 == true){
    resposta = 'G'
}
else{
    resposta = 'H'
}

switch (resposta) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    case 'E':
        console.log('E');
        break;
    case 'F':
        console.log('F');
        break;
    case 'G':
        console.log('G');
        break;
    case 'H':
        console.log('H');
        break;
}

console.log('3')
console.log('4')