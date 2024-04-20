console.log('Rock Paper Scissors');

let playerSelection = getPlayerSelection();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let choice = ['ROCK', 'PAPER', 'SCISSORS'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerSelection() {
    let choice = prompt("Enter player choice from 'ROCK | PAPER | SCISSORS", "");
    if(choice == null) {
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

console.log(playerSelection);
console.log(computerSelection);

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's TIE!`
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return "You Loose! Paper beats Rock";
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return `You Win! Rock beats Scissors`;
    } else if (playerSelection == 'PAPER' && computerSelection == "ROCK") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return "You Lose! Scissor beats Paper";
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return "You Loose! Rock beats Scissors";
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return "You Win! Scissors beats Paper";
    } else {
        return 'Not Defined'
    }
}

console.log(playRound(playerSelection,computerSelection));