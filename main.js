let buttons = document.querySelector("#buttons");
let roundPara = document.querySelector(".round-para");
let humanScorePara = document.querySelector("#human-score");
let computerScorePara = document.querySelector("#computer-score");
let winnerBoard = document.querySelector(".winner-board");
let overallWinner = document.querySelector(".overall-winner");
let resetButton = document.querySelector(".reset-button");
resetButton.disabled = true;

let humanScore = 0;
let computerScore = 0;
let roundCount = 1;

buttons.addEventListener("click", (e) => {
    let target = e.target;
    let choice = "";
    switch(target.id) {
        case "rock":
            choice = "rock";
            break;
        case "paper":
            choice = "paper";
            break;
        case "scissors":
            choice = "scissors";
            break;
    } 
    
    if (roundCount <= 5) {
        playRound(choice, getComputerChoice());
        roundCount++;
    } else {
        let gameWinner = "";
        let enabledButtons = document.querySelectorAll("#buttons button");
        for (const button of enabledButtons) {
            button.disabled = true;
        }
        if (humanScore > computerScore) {
            gameWinner = "You win!";
        } else if (humanScore < computerScore) {
            gameWinner = "You lost...";
        } else {
            gameWinner = "It's a tie... How...";
        }
        overallWinner.textContent = gameWinner;
        resetButton.disabled = false;

        resetButton.addEventListener("click", () => {
            for (const button of enabledButtons) {
                button.disabled = false;
            }
            roundCount = 1;
            computerScore = 0;
            humanScore = 0;
            roundPara.textContent = "Round 1";
            humanScorePara.textContent = "Human score: 0";
            computerScorePara.textContent = "Computer score: 0";
            winnerBoard.textContent = "Choose.";
            overallWinner.textContent = "";
            resetButton.disabled = true;
        });
    }

});

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    roundPara.textContent = `Round ${roundCount}`;
    if (humanChoice === computerChoice) {
        winnerBoard.textContent = "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            winnerBoard.textContent = "You win! Rock beats scissors";
        } else if (computerChoice === "paper") {
            computerScore++;
            winnerBoard.textContent = "You lost! Paper beats rock";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            winnerBoard.textContent = "You win! Paper beats rock";
        } else if (computerChoice === "scissors") {
            computerScore++;
            winnerBoard.textContent = "You lost! Scissors beats paper";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            winnerBoard.textContent = "You win! Scissors beats paper";
        } else if (computerChoice === "rock") {
            computerScore++;
            winnerBoard.textContent = "You lost! Rock beats scissors";
        }
    }
    humanScorePara.textContent = `Human score: ${humanScore}`;
    computerScorePara.textContent = `Computer score: ${computerScore}`;
}