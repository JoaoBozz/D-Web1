function GASOLINAouALCOOL(){
    let inputValorg = document.getElementById("valor_gasolina")
    let inputValora = document.getElementById("valor_alcool")
    let divsaida = document.getElementById("saida")

    let preco_gasolina = Number(inputValorg.value)
    let preco_alcool = Number(inputValora.value)

    if(preco_alcool < 0.7 * preco_gasolina){
        divsaida.innerText = "Álcool"
    }
    else{
        divsaida.innerText = "Gasolina"
    }
}