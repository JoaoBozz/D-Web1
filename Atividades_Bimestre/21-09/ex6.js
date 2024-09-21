function FATORIALn(n){
    
    let contador = 1
    let fatorial = 1

    while (contador <= n){
        fatorial *= contador
        contador += 1
    }

    return fatorial
}

console.log(FATORIALn(9))