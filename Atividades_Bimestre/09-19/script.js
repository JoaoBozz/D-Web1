function tabuada(n) {
    
    let contador = 1
    console.log("\n Tabuada do ", n)
    
    while(contador <= 10){
        console.log(n, ' x ',contador, ' = ',n * contador)
        contador += 1
    }
}

tabuada(3)

//OU 

function tabuadas(y) {
    
    let contadores
    console.log("\n Tabuada do ", y)
    
    for(contadores = 1; contadores <= 10; contadores += 1){
        console.log(y, ' x ',contadores, ' = ',y * contadores)
    }
}

tabuadas(7)