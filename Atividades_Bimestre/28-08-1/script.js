function calcularJC(){
    let inputCapital = document.getElementById("capital")
    let inputTaxadejuros = document.getElementById("taxa_de_juros")
    let inputNumerodeperíodos = document.getElementById("numero_periodos")
    let divSaida = document.getElementById("saida")
    let divSaida2 = document.getElementById("saida2")

    let capital = Number (inputCapital.value)
    let taxa_de_juros = Number (inputTaxadejuros.value)
    let numero_periodos = Number (inputNumerodeperíodos.value)

    let montante = capital * ((1 + (taxa_de_juros/100)) ** numero_periodos)
    let ganho = montante - capital

    divSaida.innerText = `Montante: ${montante.toFixed()}`;
    divSaida2.innerText = `Ganho: ${ganho.toFixed()}`;
}