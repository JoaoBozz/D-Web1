const carrinho = {
    itens: [
        { nome: "Shorts", preco: 49 },
        { nome: "Calça", preco: 79 },
    ],

    calcularTotal() {
        let total = 0
        for (let i = 0; i < this.itens.length; i++) {
            total += this.itens[i].preco
        }
        return total
    }
};

console.log(carrinho)
console.log(carrinho.calcularTotal())
