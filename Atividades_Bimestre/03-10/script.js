function CALCULARladoRETANG(){
    let inputLado1 = document.getElementById('LadoA')
    let inputLado2 = document.getElementById('LadoB')
    let divSaida = document.getElementById('saida')

    let lado1 = Number(inputLado1.value)
    let lado2 = Number(inputLado2.value)

    let area = lado1 * lado2

    divSaida.innerText = 'Area do retangulo: ' + area
}