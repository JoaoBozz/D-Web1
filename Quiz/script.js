// Array que contém todas as perguntas do quiz
const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",  // A pergunta
        respostas: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],  // Opções de resposta
        correta: 1  // Índice da resposta correta (0 = "Rio de Janeiro", 1 = "Brasília", etc.)
    },
    {
        pergunta: "Quantos continentes existem?",
        respostas: ["5", "6", "7", "8"],
        correta: 2  // Resposta correta é a terceira (7 continentes)
    },
    {
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        respostas: ["Terra", "Marte", "Júpiter", "Saturno"],
        correta: 2  // Resposta correta é a terceira (Júpiter)
    }
];

// Variáveis que controlam o estado do quiz
let perguntaAtual = 0;  // Índice da pergunta atual
let pontuacao = 0;  // Contador de respostas corretas

// Seleciona os elementos HTML que vamos manipular
const perguntaElemento = document.getElementById("pergunta");  // Elemento onde a pergunta será exibida
const botoesResposta = document.querySelectorAll(".btn_de_resposta");  // Botões onde as respostas serão exibidas

// Função que carrega a pergunta e as opções de resposta
function carregarPergunta() {
    const perguntaAtualData = perguntas[perguntaAtual];  // Obtém os dados da pergunta atual
    perguntaElemento.textContent = perguntaAtualData.pergunta;  // Exibe a pergunta

    // Atualiza os botões de resposta com as opções
    botoesResposta.forEach((botao, index) => {
        botao.textContent = perguntaAtualData.respostas[index];  // Define o texto do botão com a resposta
        botao.classList.remove("correta", "errada");  // Remove as classes de resposta anterior (se houver)
        botao.disabled = false;  // Habilita os botões para a próxima resposta
    });
}

// Função que verifica a resposta do usuário
function verificarResposta(event) {
    const escolha = Number(event.target.dataset.choice);  // Obtém a escolha do usuário (índice da resposta)
    const perguntaAtualData = perguntas[perguntaAtual];  // Obtém os dados da pergunta atual

    // Se a resposta estiver correta, adiciona a classe "correta" ao botão
    if (escolha === perguntaAtualData.correta) {
        event.target.classList.add("correta");
        pontuacao++;  // Incrementa a pontuação
    } else {
        // Caso a resposta esteja errada, adiciona a classe "errada" e marca a resposta correta
        event.target.classList.add("errada");
        botoesResposta[perguntaAtualData.correta].classList.add("correta");
    }

    // Desativa todos os botões após a escolha
    botoesResposta.forEach(botao => botao.disabled = true);

    // Aguarda 3 segundos antes de carregar a próxima pergunta
    setTimeout(() => {
        perguntaAtual++;  // Avança para a próxima pergunta
        if (perguntaAtual < perguntas.length) {
            carregarPergunta();  // Carrega a próxima pergunta
        } else {
            if (pontuacao == 0){
                // Exibe a pontuação final quando o quiz terminar
                perguntaElemento.textContent = `Quiz concluído! Você acertou ${pontuacao} de ${perguntas.length} perguntas. Você realmente é um noob nos jogos`;
            }
            else if(pontuacao === 1){
                // Exibe a pontuação final quando o quiz terminar
                perguntaElemento.textContent = `Quiz concluído! Você acertou ${pontuacao} de ${perguntas.length} perguntas. Você conhece alguns jogos`;
            }
            else if(pontuacao === 2){
                // Exibe a pontuação final quando o quiz terminar
                perguntaElemento.textContent = `Quiz concluído! Você acertou ${pontuacao} de ${perguntas.length} perguntas. Você é bom em alguns jogos`;
            }
            else{
                // Exibe a pontuação final quando o quiz terminar
                perguntaElemento.textContent = `Quiz concluído! Você acertou ${pontuacao} de ${perguntas.length} perguntas. Você é espetacular quando o assunto é jogos`;
            }
            // Esconde os botões de resposta após o quiz
            botoesResposta.forEach(botao => botao.style.display = "none");
        }
    }, 2000);  // Espera 3 segundos para carregar a próxima pergunta
}

// Adiciona o listener de clique nos botões de resposta
botoesResposta.forEach(botao => {
    botao.addEventListener("click", verificarResposta);  // Ao clicar, chama a função para verificar a resposta
});

// Inicia o quiz, carregando a primeira pergunta
carregarPergunta();
