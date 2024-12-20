function CALCULARescala(){
    let inputMedida = document.getElementById('medida')
    let divSaida = document.getElementById('saida')

    let medida = Number(inputMedida.value)

    let escala = 5
    let divisao = 100 / escala
    let MedidaNaPlanta = medida / divisao

    divSaida.innerText = MedidaNaPlanta + " cm"
}