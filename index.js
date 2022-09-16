const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game))
const options = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function game(playerOption) {
    let playerSelection = options[playerOption.target.className];
    let computerSelection = computerPlay();

    let roundResult = "";
    const playerWon = (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper');

    if (playerSelection === computerSelection) {
        roundResult = 'Draw! You both chose the same.'
    } else if (playerWon) {
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    const pScore = document.querySelector('.playerScore');
    pScore.innerText = `Player score: ${playerScore}`;
    const cScore = document.querySelector('.computerScore');
    cScore.innerText = `Computer score: ${computerScore}`;
    const roundMessage = document.querySelector('.roundMessage');
    roundMessage.innerText = roundResult;

    if(playerScore === 5 || computerScore === 5) {
        buttons.forEach(button => button.removeEventListener('click', game))
        gameOver(playerScore, computerScore);
    }
}

function gameOver(playerScore, computerScore) {
    const finalResult = document.querySelector('.finalResult');

    if (playerScore > computerScore) {
        finalResult.innerText = `Game Over! Player has won the tournament ${playerScore} to ${computerScore}!`;
    } else {
        finalResult.innerText = `Game Over! Computer has won the tournament ${computerScore} to ${playerScore}!`;
    }

    const restartButton = document.querySelector('.restart');
    restartButton.style.display = 'block';
    restartButton.onclick = () => location.reload()
}