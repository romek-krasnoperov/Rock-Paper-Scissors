// Accessing the buttons and the tex labels
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");

let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const signs = [ROCK, PAPER, SCISSORS];

// Assign playRound to EventListener
document.getElementById("button-container").addEventListener("click", clickListener)
function clickListener(e) {
    // Exit if no button was clicked
    if (e.target.tagName !== "BUTTON") {
        return;
    }
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

// get random Computer choices
function computerPlay(){
    return signs[(Math.floor(Math.random()*3))]
}
/* one with "if" statement 
function computerPlay() {
    return (Math.floor(Math.random() * 3) == 1) ? ROCK
        : (Math.floor(Math.random() * 3) == 2) ? PAPER
            : SCISSORS;
}
*/

// Change labels + count "won"
function playerWin() {
    ++playerWinAmount;
    playerScore.innerHTML = "Your score is: " + playerWinAmount;
};

function computerWin() {
    ++computerWinAmount;
    computerScore.innerHTML = "The computer score is: " + computerWinAmount;
}

function tieWin() {
    ++tieAmount;
    tieText.innerHTML = "Tie rounds: " + tieAmount;
}

// Function that checks winning very inelegantly

function playRound(playerSelection, computerSelection) {
    if  (playerSelection==computerSelection){
        tieWin();
    } else if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors")
    ) {
        playerWin();
    } else {
        computerWin();
    }

    if (computerWinAmount == 5) {
        alert("You lost! Better luck next time :(");
        reset();
    } else if (playerWinAmount == 5) {
        alert("You won! Congratulations! :)")
        reset();
    }
}

//Reset a game
function reset() {
    playerScore.innerHTML = "Your score is: 0";
    computerScore.innerHTML = "The computer score is: 0";
    tieText.innerHTML = "Tie rounds: 0";
    location.reload();
}