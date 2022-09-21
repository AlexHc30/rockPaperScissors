const playerName = prompt('Please write your name');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game))
const weapons = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function game(playerOption) {
    let playerSelection = weapons[playerOption.target.value];
    console.log(playerSelection)
    console.log(playerOption.target.value)
    let computerSelection = computerPlay();

    const pScore = document.querySelector('.playerScore');
    // pScore.innerText = `${playerName} score: ${playerScore}`;
    const cScore = document.querySelector('.computerScore');
    // cScore.innerText = `Computer score: ${computerScore}`;
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
        buttons.forEach(button => button.removeEventListener('click', game))
        gameOver(playerScore, computerScore);
    }
}

function gameOver(playerScore, computerScore) {
    const finalResult = document.querySelector('.finalResult');

    if (playerScore > computerScore) {
        finalResult.innerText = `Game Over! ${playerName} has won the tournament ${playerScore} to ${computerScore}!`;
    } else {
        finalResult.innerText = `Game Over! Computer has won the tournament ${computerScore} to ${playerScore}!`;
    }

    const restartButton = document.querySelector('.restart');
    restartButton.style.display = 'block';
    restartButton.onclick = () => location.reload()
}