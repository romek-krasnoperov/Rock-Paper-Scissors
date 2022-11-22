function getComputerChoice() {
    return (Math.floor(Math.random()*3) == 1) ? "Rock"
    : (Math.floor(Math.random()*3) == 2) ? "Paper"
    : "Scissors";
}

//let playerSelection = "Rock";
const computerSelection = getComputerChoice();
let playerScore = 1;
let computerScore = 1;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLocaleLowerCase();
    playerSelection = playerSelection.toLocaleLowerCase();
    if  (playerSelection==computerSelection){
        return "Tie Game!";
    } else if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors")
    ) {
        console.log("Player won this round!");
        return playerScore++;
    } else {
        console.log("Computer won this round!");
        return computerScore++;
    }
}

function playGame() {
    for (let i=0; i<5; i++) {
        let playerSelection = prompt ("Please choose by typing either: Rock, Paper or Scissors");
        playRound(playerSelection, computerSelection);
    }
    
    let winner = "Player won this game!";
    if (playerScore<computerScore) {
        winner = "Computer won this game!";
    }
    return winner;
}

playGame();