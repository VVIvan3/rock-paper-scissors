let playerScore = 0
let computerScore = 0
const scoreBox = document.querySelector('.scoreBox');
const gameButtons = document.querySelectorAll('.btn');
const scoreText = document.querySelector('#scoreText');
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
        checkResults()
    })
});


function checkResults() {
    scoreText.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`
    if (playerScore === 5 ) {
        scoreText.textContent = 'Player Won!';
    } else if (computerScore === 5) {
        scoreText.textContent = 'Computer Won!';
    }  
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

function getPlayerChoice() {
    return prompt('rock, paper, or scissors?').toLowerCase();
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return 0; //MAKE IT ANNOUNCE TIE
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
    } else {
        ++computerScore;
    }
}

function game() {
    let onGoing = true;
    while (onGoing) {
        let round = playRound()
        if (round === 1) {
            ++computerScore;
        } else if (round === 2) {
            ++playerScore;
        };
    console.log(`Player score is: ${playerScore} Computer score is: ${computerScore}`);
    if (playerScore === 5 ) {
        console.log('Player won!');
        onGoing = false;
    } else if (computerScore === 5) {
        console.log('Computer won!');
        onGoing = false;
    }
    };
}
// game();