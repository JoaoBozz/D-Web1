function MEDICAMENTO(peso, idade){
    let mg

    if(idade >= 12){
        if(peso >= 60){
            mg = 1000
        }
        else{
            mg = 875
        }
    }
    else{
        if(5 <= peso && peso <= 9){
            mg = 125
        }
        else if(9.1 <= peso && peso <= 16){
            mg = 250
        }
        else if(16.1 <= peso && peso <= 24){
            mg = 500
        }
        else if(peso > 24){
            mg = 750
        }
        else{
            return "Peso abaixo de 5 kg";
        }
    }

    let ml_por_dose = mg / 500
    let gotas_por_dose = ml_por_dose * 20

    return `O paciente deve tomar ${gotas_por_dose} gotas por dose.`;
}

console.log(MEDICAMENTO(74, 34))