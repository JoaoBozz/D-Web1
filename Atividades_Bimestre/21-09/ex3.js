function VALORESDESCPAR(n){

    let contador = n
    
    if(n % 2 == 0){
        contador -= 2
        while (contador > 1){
            console.log(contador)
            contador -= 2
        }
    }
    else{
        contador -= 1
        while (contador > 1){
            console.log(contador)
            contador -= 2
        }
    }
}

VALORESDESCPAR(35)