console.log('Rock Paper Scissors');

function getComputerChoice() {
    let choice = ['ROCK', 'PAPER', 'SCISSORS'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerSelection() {
    let choice = prompt("Enter player choice from 'ROCK | PAPER | SCISSORS", "");
    if (choice == null) {
        alert("Game cancelled by player")
        return 'CANCELLED';
    }
    choice = choice.toLocaleUpperCase();
    if (choice == 'ROCK' || choice == 'PAPER' || choice == 'SCISSORS') {
        return choice;
    } else {
        alert("Enter from given choices");
        return getPlayerSelection();
    }
}


function playRound(playerSelection, computerSelection) {
    let winner = document.querySelector('.winner');
    let result = document.querySelector('.result');
    let playerScoreDisplay = document.querySelector('.player-score');
    let computerScoreDisplay = document.querySelector('.computer-score');
    let playerSelectionDisplay = document.querySelector('.player-selection');
    let computerSelectionDisplay = document.querySelector('.computer-selection');

    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }

    else if (playerSelection == computerSelection) {
        playerScore += 0;
        computerScore += 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        playerSelectionDisplay.textContent = playerSelection;
        computerSelectionDisplay.textContent = computerSelection;
        result.textContent = `It's TIE!`;
        result.style.color = 'gray';
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        playerScore += 0;
        computerScore += 1;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        playerSelectionDisplay.textContent = playerSelection;
        computerSelectionDisplay.textContent = computerSelection;
        result.textContent = "You Loose! Paper beats Rock";
        result.style.color = 'red';

    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        playerScore += 1;
        computerScore += 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        playerSelectionDisplay.textContent = playerSelection;
        computerSelectionDisplay.textContent = computerSelection;
        result.textContent = `You Win! Rock beats Scissors`;
        result.style.color = 'green';

    } else if (playerSelection == 'PAPER' && computerSelection == "ROCK") {
        playerScore += 1;
        computerScore += 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        playerSelectionDisplay.textContent = playerSelection;
        computerSelectionDisplay.textContent = computerSelection;
        result.textContent = "You Win! Paper beats Rock";
        result.style.color = 'green';

    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        playerScore += 0;
        computerScore += 1;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        playerSelectionDisplay.textContent = playerSelection;
        computerSelectionDisplay.textContent = computerSelection;
        result.textContent = "You Loose! Scissor beats Paper";
        result.style.color = 'red';

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        playerScore += 0;
        computerScore += 1;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        playerSelectionDisplay.textContent = playerSelection;
        computerSelectionDisplay.textContent = computerSelection;
        result.textContent = "You Loose! Rock beats Scissors";
        result.style.color = 'red';

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        playerScore += 1;
        computerScore += 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        playerSelectionDisplay.textContent = playerSelection;
        computerSelectionDisplay.textContent = computerSelection;
        result.textContent = "You Win! Scissors beats Paper";
        result.style.color = 'green';

    } else {
        return 'Game Cancelled by the player'
    }
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            winner.textContent = 'Winner is Player';
            winner.style.color = 'green';
        } else if (playerScore < computerScore) {
            winner.textContent = 'Winner is Computer';
            winner.style.color = 'green';
        } else {
            winner.textContent = `It's TIE!`;
            winner.style.color = 'green';
        }
    }
}

// function playGame() {
//     let playerSelection = getPlayerSelection();
//     let computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     return playRound(playerSelection, computerSelection)
// }


// for (let i = 0; i < 5; i++) {
//     console.log(playGame());
// }






let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
})