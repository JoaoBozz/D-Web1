function CALCULARclassificacao(i){
        if (i < 5){
            console.log('Ainda não tem classificalção')
        }
        else if (5 <= i && i <= 7){
            console.log('Infantil A')
        }
        else if (8 <= i && i <= 10){
            console.log('Infantil B')
        }
        else if (11 <= i && i <= 13){
            console.log('Juvenil A')
        }
        else if (14 <= i && i <= 17){
            console.log('Juvenil B')
        }
        else{
            console.log('Adulto')
        }
}

CALCULARclassificacao(17)