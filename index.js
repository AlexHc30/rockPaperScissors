function computerPlay() {
    let random = Math.floor(Math.random() * 3 + 1)
    let computerSelection = "";
    if (random === 1) {
        computerSelection = "rock";
    } else if (random === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    console.log(computerSelection)
    return computerSelection;
}

const computerSelection = computerPlay();
const playerSelection = prompt("Please choose between 'rock', 'paper' or 'scissors'.").toLowerCase();
playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    let roundResult = "";
    let playerWon = (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper');
    console.log(playerWon)
    if (playerSelection === computerSelection) {
        roundResult = 'Draw! You both chose the same.'
    } else if (playerWon) {
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    alert(roundResult);
}
