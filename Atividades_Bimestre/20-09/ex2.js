function verificarTRIANGULO(l1, l2, l3){
    if(l1 + l2 > l3 && l1 + l3 > l2 && l3 + l2 > l1 && l1 > Math.abs(l2 - l3) && l2 > Math.abs(l1 - l3) && l3 > Math.abs(l2 - l1)){
        return true
    }
    else{
        return false
    }
}

console.log(verificarTRIANGULO(20, 10, 15))