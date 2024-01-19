let playerScore = 0;
let computerScore = 0;
let isWon = false;

const scoreBox = document.querySelector('.scoreBox');
const gameButtons = document.querySelectorAll('.btn');
const scoreText = document.querySelector('#scoreText');
const logText = document.querySelector('#logText');

gameButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        switch (event.target.id) {
            case 'rock':
                playRound('rock')
                break;
            case 'paper':
                playRound('paper')
                break;
            case 'scissors':
                playRound('scissors')
                break;
        };
        checkResults();
    })
});

function gameRestart() {
    isWon = false;
    playerScore = 0;
    computerScore = 0;
    scoreText.textContent = 'Click button to begin';
}

function logging(playerSelection, computerSelection, condition='computer') {
    const listElement = document.createElement('li');
    if (condition === 'player') {
        listElement.textContent = `You won this round, ${playerSelection} beat ${computerSelection}`;
    } else if (condition === 'noOne') {
        listElement.textContent = `It was a tie, ${playerSelection} and ${computerSelection}`;
    } else {
        listElement.textContent = `Computer won this round, ${computerSelection} beat ${playerSelection}`;
    };
    logText.insertBefore(listElement, logText.firstChild);
}
function checkResults() {
    if (isWon) {
        gameRestart()
    }
    scoreText.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`
    if (playerScore === 5 ) {
        scoreText.textContent = 'Player Won! | Click any button to restart';
        isWon = true;
    } else if (computerScore === 5) {
        scoreText.textContent = 'Computer Won! | Click any button to restart';
        isWon = true;
    };
}


function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return 'rock';
    } else if (randInt === 1) {
        return 'paper';
    } else {
        return 'scissors';
    };
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection && !isWon) {
        logging(playerSelection, computerSelection, 'noOne');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' && !isWon) {
        ++playerScore;
        logging(playerSelection, computerSelection, 'player');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper' && !isWon) {
        ++playerScore;
        logging(playerSelection, computerSelection, 'player');
    } else if (playerSelection === 'paper' && computerSelection === 'rock' && !isWon) {
        ++playerScore;
        logging(playerSelection, computerSelection, 'player');
    } else if (!isWon) {
        ++computerScore;
        logging(playerSelection, computerSelection);
    }
}