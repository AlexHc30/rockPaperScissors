let computerOptions = ["rock", "paper", "scissors"];
let playerSelection;
window.onload = game();

function computerPlay() {
    return computerOptions[Math.floor(Math.random() * 3)];
}


function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        console.log(computerSelection);
        playerSelection = prompt("Please choose between 'rock', 'paper' or 'scissors'.").toLowerCase();
        console.log(playerSelection);
        let roundResult = "";
        let playerWon = (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper');
        console.log(playerWon);
        if (playerSelection === computerSelection) {
            roundResult = 'Draw! You both chose the same.'
        } else if (playerWon) {
            roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
            playerWins++;
        } else {
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerWins++;
        }
        alert(roundResult);
    }
    gameOver(playerWins, computerWins);
}

function gameOver(playerWins, computerWins) {
    if (playerWins > computerWins) {
        alert(`Game Over! Player has won the tournament ${playerWins} to ${computerWins}!`);
    } else if (computerWins > playerWins) {
        alert(`Game Over! Computer has won the tournament ${computerWins} to ${playerWins}!`);
    } else {
        alert(`Game Over! Player has won the tournament ${computerWins} to ${playerWins}!`);
    }
}