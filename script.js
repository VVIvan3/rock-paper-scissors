function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return 'rock'
    } else if (randInt === 1) {
        return 'paper'
    } else {
        return 'scissors'
    };
}

function getPlayerChoice() {
    return prompt('rock, paper, or scissors?').toLowerCase()
}

function playRound() {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    if (playerSelection === computerSelection) {
        return 0
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 2
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 2
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 2
    } else {
        return 1
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let onGoing = true
    while (onGoing) {
        let round = playRound()
        if (round === 1) {
            ++computerScore
        } else if (round === 2) {
            ++playerScore
        }
    console.log(`Player score is: ${playerScore} Computer score is: ${computerScore}`)
    if (playerScore === 5 ) {
        console.log('Player won!');
        onGoing = false
    } else if (computerScore === 5) {
        console.log('Computer won!');
        onGoing = false
    }
    }
}
game()