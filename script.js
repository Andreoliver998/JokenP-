// ==========================================
// JOKENPÔ - Desenvolvido por André Oliveira
// ==========================================
// Este script controla toda a lógica do jogo:
// - Captura as escolhas do jogador e da máquina
// - Determina o vencedor
// - Atualiza a pontuação dinamicamente
// - Fornece feedback visual
// ==========================================

// ==============================
// VARIÁVEIS GLOBAIS
// ==============================

// Seleciona os elementos HTML que exibem as pontuações
const yourScoreSpan = document.querySelector('.value-your');
const machineScoreSpan = document.querySelector('.value-marchine');

// Armazena as pontuações do jogador e da máquina
let yourScore = 0;
let machineScore = 0;

// ==============================
// FUNÇÃO PRINCIPAL DO JOGO
// ==============================

// Esta função é chamada toda vez que o jogador clica em um botão
function playHuman(humanChoice) {
    // Cria uma escolha aleatória para a máquina
    const machineChoice = playMachine();

    // Determina o resultado da rodada
    const result = determineWinner(humanChoice, machineChoice);

    // Atualiza a interface (pontuação e mensagens)
    updateScore(result);

    // Exibe um feedback no console (para depuração)
    console.log(`Você: ${humanChoice} | Alexa: ${machineChoice} => ${result}`);
}

// ==============================
// ESCOLHA ALEATÓRIA DA MÁQUINA
// ==============================

// A máquina (Alexa) escolhe entre 'rock', 'paper' e 'scissors'
function playMachine() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3); // Gera número 0, 1 ou 2
    return choices[randomIndex];
}

// ==============================
// LÓGICA PARA DEFINIR O VENCEDOR
// ==============================

// Define quem venceu com base nas combinações possíveis
function determineWinner(human, machine) {

    if (human === machine) {
        return 'Empate! 🤝';
    }

    // Condições de vitória do jogador
    if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper') )
        
        
        
        {
        yourScore++; // Incrementa a pontuação do jogador
        return 'Você venceu! 🏆';
    }

    // Caso contrário, a máquina vence
    machineScore++;
    return 'Alexa venceu! 🤖';
}

// ==============================
// ATUALIZAÇÃO VISUAL DAS PONTUAÇÕES
// ==============================

function updateScore(resultText) {
    // Atualiza o texto das pontuações
    yourScoreSpan.textContent = yourScore;
    machineScoreSpan.textContent = machineScore;

    // Cria um pequeno aviso visual na tela com o resultado
    showResultMessage(resultText);
}

// ==============================
// MENSAGEM VISUAL DO RESULTADO
// ==============================

// Cria uma mensagem temporária no topo do container
function showResultMessage(message) {
    // Remove mensagens antigas, se existirem
    const oldMsg = document.querySelector('.result-message');
    if (oldMsg) oldMsg.remove();

    // Cria novo elemento para a mensagem
    const msgElement = document.createElement('p');
    msgElement.classList.add('result-message');
    msgElement.textContent = message;

    // Aplica estilo diretamente no JS (pode ir para o CSS, se desejar)
    msgElement.style.color = '#fff';
    msgElement.style.fontSize = '1.4rem';
    msgElement.style.textShadow = '0 0 15px #00f';
    msgElement.style.animation = 'brilhar 1.5s infinite alternate';

    // Insere a mensagem dentro do container principal
    const container = document.querySelector('.Container');
    container.insertBefore(msgElement, container.children[2]);

    // Remove a mensagem automaticamente após 2,5 segundos
    setTimeout(() => msgElement.remove(), 2500);
}

// ==============================
// FIM DO SCRIPT
// ==============================
// Este código é modular, fácil de expandir e ideal para fins didáticos.
// Sugestão: adicionar efeitos sonoros ou histórico de partidas em versões futuras.
