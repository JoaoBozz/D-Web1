const botao = document.getElementById('btn-boas-vindas');
const campoNome = document.getElementById('nome-completo');
const saida = document.getElementById('saida');

function boasVindas() {
    const nome = campoNome.value;
    saida.innerText = 'Seja bem-vindo ' + nome;
}