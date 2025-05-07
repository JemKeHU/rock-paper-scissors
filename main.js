let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Choice rock, paper, or scissors");

    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") { 
        choice = choice.toLowerCase();
        return choice;
    } else {
        return "Unknown";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors");
        } else if (computerChoice === "paper") {
            computerScore++;
            console.log("You lost! Paper beats rock");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats rock");
        } else if (computerChoice === "scissors") {
            computerScore++;
            console.log("You lost! Scissors beats paper");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper");
        } else if (computerChoice === "rock") {
            computerScore++;
            console.log("You lost! Rock beats scissors");
        }
    }

    console.log("H: " + humanScore + ", C: " + computerScore);
}

playRound(getHumanChoice(), getComputerChoice());