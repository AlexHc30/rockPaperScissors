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


