function calcularTROCO(){
    let inputTroco = document.getElementById("troco")
    let divSaida = document.getElementById("saida")
    let divSaida2 = document.getElementById("saida2")
    let divSaida3 = document.getElementById("saida3")

    let troco = Number (inputTroco.value)

    let cedulas_20 = troco / 20
    let resto = troco % 20
    let cedulas_10 = resto / 10
    let moedas = resto % 10

    divSaida.innerText = "Cédulas de 20: " + Math.floor(cedulas_20)
    divSaida2.innerText = "Cédulas de 10: " + Math.floor(cedulas_10)
    divSaida3.innerText = "Moedas: " + Math.floor(moedas)
}