const biblioteca = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", anoPublicacao: 1813 },
]
let titulos = []
let n = biblioteca.length
for (let i = 0; i < n; i++){
    titulos.push(biblioteca[i].titulo)
}
console.log(titulos)