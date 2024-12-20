usuarios = [
    {nome: "Timão", idade: 15, email: "Timão@gmail.com",},
    {nome: "Beto", idade: 14, email: "Beto@gmail.com",},
    {nome: "Puma", idade: 13, email: "Puma@gmail.com",},
]

const usuarios_noIdade = usuarios.map(usuario => {
    return { nome: usuario.nome, email: usuario.email }
})

console.log(usuarios_noIdade)