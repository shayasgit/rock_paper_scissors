console.log('Rock Paper Scissors');

let playerSelection = getPlayerSelection();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let choice = ['ROCK', 'PAPER', 'SCISSORS'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerSelection() {
    let choice = prompt("Enter player choice from 'ROCK | PAPER | SCISSORS", "");
    if(choice == '' || choice == null) {
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