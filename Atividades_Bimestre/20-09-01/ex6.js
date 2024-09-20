function verBISSEXTO(ano){
    if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)){
        return "É bissexto";
    }
    else{
        return "Não é bissexto"
    }
}

console.log(verBISSEXTO(2020))