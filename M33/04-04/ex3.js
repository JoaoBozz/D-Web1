let n = 7
let eprimo = "É primo"
for(c = 2; n > c; c++){
    if(n % c == 0){
        eprimo = "Não é primo"
        break
    }
}
console.log(eprimo)