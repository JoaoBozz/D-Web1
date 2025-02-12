// Array que contém todas as perguntas do quiz
const perguntas = [
    {
        pergunta: "Quantos itens precisamos doar no centro comunitário do Stardew Valley? (1 Vinho = 1 item, 100 madeiras = 1 item, etc)",
        respostas: ["125", "130", "135", "140"],
        correta: 0
    },
    {
        pergunta: "Quantas moedas temos no jogo base e na DLC de Cuphead?",
        respostas: ["42, 14", "40, 18", "42, 18", "40, 16"],
        correta: 3
    },
    {
        pergunta: "O que é necessário para acessar todos os Lados C de Celeste?",
        respostas: ["Coletar todos os Corações de Cristal", "Completar todos os Lados B", "Encontrar todas as Fita Cassete", "Pegar 175 morangos"],
        correta: 1
    },
    {
        pergunta: "Qual desses eventos acontecem no outono do Stardew Valley?",
        respostas: ["Aniversário da Penny", "Aniversário da Caroline", "Festival de Truta", "Dança-das-Medusas-da-Lua"],
        correta: 0
    },
    {
        pergunta: "Para conquistar uma nota 'S' no Cuphead, NÃO é preciso:",
        respostas: ["Jogar o jogo na dificuldade especialista", "Fazer um bom tempo", "Utilizar pelo menos 5 EX", "Terminar com 3 vidas ou mais"],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da versão corrompida de Madeline que aparece durante o Celeste?",
        respostas: ["Sombra", "Dark Madeline", "Badeline", "eniledaM"],
        correta: 2
    },
    {
        pergunta: "O que é preciso fazer para concluir a conquista 'Rivalidade' no Hollow Knight?",
        respostas: ["Relembre o passado e una o Abismo", "Derrote Zote no Colisseu dos tolos", "Complete a provação do Tolo", "Derrote o Cavaleiro Vazio e torne-se o Receptáculo"],
        correta: 1
    },
    {
        pergunta: "Em Cuphead, qual desses boss não possuem uma fase secreta?",
        respostas: ["Paula Protagonista", "Baronesa Bombom", "Genésio, o Magnífico", "Máfia da Raiz"],
        correta: 1
    },
    {
        pergunta: "Porque a porcentagem máxima de conclusão em Hollow Knight é 112%?",
        respostas: ["Começou como um bug, porém os desenvolvedores acharam diferente e deixaram assim mesmo", "Pois Hollow Knight tem 12 letras", "Pois o jogo base completo tem uma conclusão de 100% e as DLSs 12%", "Pois os 100% são conseguidos ao derrotar o Hollow Knight e os 112% a Radiância Absoluta"],
        correta: 2
    },
    {
        pergunta: "Qual é o número máximo de amuletos que é possível equipar ao mesmo tempo no Hollow Knight?",
        respostas: ["8", "9", "10", "12"],
        correta: 3
    },
    {
        pergunta: "Qual é o nome da primeira cidade que encontramos no começo do Hollow Knight?",
        respostas: ["Hallownest", "Cidade das lágrimas", "Dirtmouth", "Pharloom"],
        correta: 2
    },
    {
        pergunta: "Qual desses não são filtros no Cuphead?",
        respostas: ["Preto e Branco", "2 faixas", "Cálice", "Retrô"],
        correta: 3
    },
    {
        pergunta: "No Centro Comunitário no Stardew Valley, qual desses itens não são doados no conjunto de tinta?",
        respostas: ["Girassol", "Pena de Pato", "Fruto do Cacto", "Cogumelo Vermelho"],
        correta: 2
    },
    {
        pergunta: "Existe uma sala secreta no Celeste, conhecida por 'sala dourada', como é possível encontrá-la?",
        respostas: ["Após terminar o capítulo 9 com o morango dourado", "Após zerar o jogo Piko-8", "Após pegar todos os 202 morangos e entrar no prólogo", "Até hoje, ainda ninguém descobriu como chegar nela"],
        correta: 0
    },
    {
        pergunta: "Em Celeste, no lado B do capítulo 'O cume', é ensinado uma nova 'habilidade', conhecida pela comunidade por:",
        respostas: ["Hiper Dash", "Extended Hiper Dash", "Fast Fall", "Wall Bounce"],
        correta: 3
    },
    {
        pergunta: "Quantos morangos dourados existem no jogo Celeste?",
        respostas: ["19", "20", "25", "26"],
        correta: 3
    },
    {
        pergunta: "Quantos fragmentos de máscara e fragmentos de receptáculo existem no Hollow Knight?",
        respostas: ["16, 9", "16, 12", "12, 16", "12, 12"],
        correta: 0
    },
    {
        pergunta: "No Stardew Valley, qual a quantidade máxima de corações somados que é possível ter com os animais em um celeiro de luxo?",
        respostas: ["40", "50", "60", "80"],
        correta: 2
    },
    {
        pergunta: "Qual dessas falas não existem no Cuphead?",
        respostas: ["Não confie naquele pirata rabugento! Com certeza ira passar a perna em você! ou melhor, o gancho!", "Não Acredito! Somos um quarteto de novo!", "Ah, Vocês encontraram o caminho do pacifismo! Deveras Impressionante!", "Agora já conseguem ver o mundo como eu!"],
        correta: 0
    },
    {
        pergunta: "No Stardew Valley, qual destas opções NÃO é um dos requisitos para casar com um NPC?",
        respostas: ["Ter a casa atualizada uma vez", "Ter pelo menos 10 corações com o NPC", "Comprar um buquê na loja do Pierre", "Dar um pingente ao NPC"],
        correta: 1
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
            if (pontuacao === 0){
                // Exibe a pontuação final quando o quiz terminar
                perguntaElemento.textContent = `Quiz concluído! Você acertou ${pontuacao} de ${perguntas.length} perguntas. Você realmente é um noob nos jogos`;
            }
            else if(pontuacao <=10){
                // Exibe a pontuação final quando o quiz terminar
                perguntaElemento.textContent = `Quiz concluído! Você acertou ${pontuacao} de ${perguntas.length} perguntas. Você conhece alguns jogos`;
            }
            else if(pontuacao <= 20){
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
