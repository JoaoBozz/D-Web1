const estoque = [
    {id: 1, nome: "Giz", quantidade: 12},
    {id: 2, nome: "Borracha", quantidade: 43},
    {id: 3, nome: "Lápis", quantidade: 64}
]

function atualizarQuantidade(id_at, quant_at){
    const n = estoque.length
    for (let i = 0; i < n; i++){
        if (estoque[i].id === id_at){
            estoque[i].quantidade = quant_at
            return estoque[i]
        }
    }
    return "Produto não encontradoo."
}

console.log(atualizarQuantidade(2, 20))
console.log(estoque)