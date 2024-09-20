function alcool_melhor_que_gasolina(valorAlcool, valorGasolina){
    if(valorAlcool < 0.7 * valorGasolina){
        return true
    }
    else{
        return false
    }
}

console.log(alcool_melhor_que_gasolina(4.1, 6))