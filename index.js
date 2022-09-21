const playerName = prompt('Please write your name');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playGame))
const weapons = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerOption() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function playGame(playerOption) {
    let playerSelection = weapons[playerOption.target.value];
    let computerSelection = getComputerOption();

    const pScore = document.querySelector('.playerScore');
    const cScore = document.querySelector('.computerScore');
    const roundMessage = document.querySelector('.roundMessage');
    let roundResult = "";

    const playerWon = (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper');

    if (playerSelection === computerSelection) {
        roundResult = `Draw! You both chose the ${playerSelection}.`
    } else if (playerWon) {
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    roundMessage.innerText = roundResult;
    pScore.innerText = `${playerName} score: ${playerScore}`;
    cScore.innerText = `Computer score: ${computerScore}`;

    if(playerScore === 5 || computerScore === 5) {
        buttons.forEach(button => button.removeEventListener('click', playGame))
        finishGame(playerScore, computerScore);
    }
}

function finishGame(playerScore, computerScore) {
    const finalResult = document.querySelector('.finalResult');

    if (playerScore > computerScore) {
        finalResult.innerText = `Game Over! ${playerName} has won the tournament ${playerScore} to ${computerScore}!`;
    } else {
        finalResult.innerText = `Game Over! Computer has won the tournament ${computerScore} to ${playerScore}!`;
    }

    const restartButton = document.querySelector('.restart');
    restartButton.style.display = 'block';
    restartButton.onclick = () => location.reload();
}