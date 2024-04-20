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
    if (playerSelection == computerSelection) {
        playerScore += 0;
        computerScore += 0;
        return `It's TIE!`
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        playerScore += 0;
        computerScore += 1;
        return "You Loose! Paper beats Rock";
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        playerScore += 1;
        computerScore += 0;
        return `You Win! Rock beats Scissors`;
    } else if (playerSelection == 'PAPER' && computerSelection == "ROCK") {
        playerScore += 1;
        computerScore += 0;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        playerScore += 0;
        computerScore += 1;
        return "You Lose! Scissor beats Paper";
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        playerScore += 0;
        computerScore += 1;
        return "You Loose! Rock beats Scissors";
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        playerScore += 1;
        computerScore += 0;
        return "You Win! Scissors beats Paper";
    } else {
        return 'Game Cancelled by the player'
    }
}

function playGame() {
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    return playRound(playerSelection, computerSelection)
}

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    console.log(playGame());
}

console.log("Player Score is " + playerScore);
console.log("Computer Score is " + computerScore);

if (playerScore > computerScore) {
    console.log(`Winner is Player`);
} else if (playerScore < computerScore) {
    console.log(`Winner is Computer`)
} else {
    console.log(`It's TIE!`);
}