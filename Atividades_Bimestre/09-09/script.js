const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const resultContainerElement = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const finalScoreElement = document.getElementById('final-score');
const finalMessageElement = document.getElementById('final-message');

let currentQuestionIndex = 0;
let shuffledQuestions, currentQuestion;
let score = 0;
let totalQuestions = 4;  // Atualizado para o número de perguntas

const questions = [
    { 
        question: 'Quantos morangos tem no lado A do capítulo "Núcleo" em Celeste? (Sem morango dourado)', 
        answers: [
            { text: '13', correct: false }, 
            { text: '10', correct: false }, 
            { text: '7', correct: false }, 
            { text: '5', correct: true }
        ] 
    },
    { 
        question: 'Qual é o nome da versão corrompida de Madeline que aparece durante o Celeste?', 
        answers: [
            { text: 'Sombra', correct: false }, 
            { text: 'Dark Madeline', correct: false }, 
            { text: 'Badeline', correct: true }, 
            { text: 'eniledaM', correct: false }
        ] 
    },
    { 
        question: 'O que é necessário para acessar todos os Lados C de Celeste?', 
        answers: [
            { text: 'Coletar todos os Corações de Cristal', correct: false }, 
            { text: 'Completar todos os Lados B', correct: true }, 
            { text: 'Encontrar todas as Fita Cassete', correct: false }, 
            { text: 'Pegar 175 morangos', correct: false }
        ] 
    },
    { 
        question: 'Em Celeste, no lado B do capítulo "O cume", é ensinado uma nova "habilidade", conhecida pela comunidade por:', 
        answers: [
            { text: 'Hiper Dash', correct: false }, 
            { text: 'Extended Hiper Dash', correct: false }, 
            { text: 'Fast Fall', correct: false }, 
            { text: 'Wall Bounce', correct: true }
        ] 
    }
];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.classList.add('btn-answer');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        score++;
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showFinalResult();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showFinalResult() {
    questionContainerElement.classList.add('hide');
    resultContainerElement.classList.remove('hide');
    finalScoreElement.innerText = `Você acertou ${score} de ${totalQuestions} perguntas.`;
    finalMessageElement.innerText = getFinalMessage();
}

function getFinalMessage() {
    if (score === totalQuestions) {
        return "Excelente! Você acertou todas as perguntas!";
    } else if (score >= totalQuestions * 0.75) {
        return "Muito bom! Você acertou a maioria das perguntas!";
    } else if (score >= totalQuestions * 0.5) {
        return "Bom esforço! Mas você pode melhorar!";
    } else {
        return "Não foi desta vez, tente novamente!";
    }
}

function restartQuiz() {
    resultContainerElement.classList.add('hide');
    startButton.classList.remove('hide');
}
