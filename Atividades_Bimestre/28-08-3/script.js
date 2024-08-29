function calcularCUSTO(){
    let inputDistancia = document.getElementById('distancia')
    let inputAutonomia = document.getElementById('autonomia')
    let inputPedagio = document.getElementById('pedagio')
    let divSaida = document.getElementById('saida')

    let distancia = Number (inputDistancia.value)
    let autonomia = Number (inputAutonomia.value)
    let pedagio = Number (inputPedagio.value)

    let custo = distancia / autonomia * 4.08 + pedagio

    divSaida.innerText = 'Custo total: ' + custo
}