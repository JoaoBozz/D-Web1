const perguntas = [
    {
        pergunta: "Qual o maior meme do mundo?",
        respostas: ["Trollface", "Caneta azul", "Filinho de papai", "+1000 de aura"],
        correta: 0
    },
    {
        pergunta: "Quantos continentes existem?",
        respostas: ["5", "6", "7", "8"],
        correta: 2
    },
    {
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        respostas: ["Terra", "Marte", "Júpiter", "Saturno"],
        correta: 2
    }
]

let perguntaAtual = 0
let pontuacao = 0

const perguntaElemento = document.getElementById("pergunta")
const botoesResposta = document.querySelectorAll(".btn_de_resposta")
const botaoProximo = document.getElementById("btn_proximo")

