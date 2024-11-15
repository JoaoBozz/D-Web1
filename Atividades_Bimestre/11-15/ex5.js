const produto = {
    nome: "Bike",
    preco: "R$1000",
    categoria: "Esporte",
}

for (let i in produto){
    console.log(`${i}: ${produto[i]}`)
}