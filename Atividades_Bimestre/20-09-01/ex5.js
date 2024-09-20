function converterMEDIDAS(cm, texto){

    let m
    let mm
    let km
    
    if(texto == "m"){
        m = cm / 100
        return m
    }
    else if(texto == "mm"){
        mm = cm * 10
        return mm
    }
    else if(texto == "km"){
        km = cm / 100000
        return km
    }
    else{
        return "Unidade de medida errada"
    }
}

console.log(converterMEDIDAS(124125, "km"))