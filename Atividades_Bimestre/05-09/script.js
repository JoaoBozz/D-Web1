function calcularMULTA() {
    let inputVelocidadeMax = document.getElementById('velocidade_max')
    let inputVelocidadeVeic = document.getElementById('velocidade_veic')
    let divSaida = document.getElementById('saida')

    let velocidade_max = Number(inputVelocidadeMax.value)
    let velocidade_veic = Number(inputVelocidadeVeic.value)

    let porcentage_de_excesso = ((velocidade_veic - velocidade_max) / velocidade_max) * 100

    if (velocidade_veic <= velocidade_max) {
        divSaida.innerText = 'Não tem multa'
    }

    else if (velocidade_veic <= 0.2 * velocidade_max + velocidade_max) {
        divSaida.innerText = 'Você excedeu a ' + porcentage_de_excesso + '% a velocidade máxima. Sua multa é de R$130,16'
    }
    else if (velocidade_veic > 0.2 * velocidade_max + velocidade_max && velocidade_veic <= 0.5 * velocidade_max + velocidade_max) {
        divSaida.innerText = 'Você excedeu a ' + porcentage_de_excesso + '% a velocidade máxima. Sua multa é de R$196,23'
    }

    else {
        divSaida.innerText = 'Você excedeu ' + porcentage_de_excesso + '% a velocidade máxima. Sua multa é de R$880,41'
    }
}
