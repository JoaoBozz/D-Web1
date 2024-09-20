function calcularTRIANGULO(l1, l2, l3){
    if(l1 + l2 > l3 && l1 + l3 > l2 && l3 + l2 > l1 && l1 > Math.abs(l2 - l3) && l2 > Math.abs(l1 - l3) && l3 > Math.abs(l2 - l1)){
        if(l1 == l2 && l3 == l2 && l1 == l3){
            return "Triângulo Equilátero"
        }
        else if(l1 == l2 || l2 == l3 || l3 == l1){
            return "Triângulo Isóceles"
        }
        else{
            return "Triângulo Escaleno"
        }
    }
    else{
        return "As medidas não formam um triângulo"
    }
}

console.log(calcularTRIANGULO(10, 16, 21))