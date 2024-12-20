function getInitials(name){
    let n = name.length
    let iniciais = ""
    for (let c = 0; c < n; c++){
        if (name[c] == name[c].toUpperCase() && name[c] != " "){
            iniciais += name[c]
        }
    }

    return iniciais
}

console.log(getInitials("João Silva"))
console.log(getInitials("Maria Oliveira"))