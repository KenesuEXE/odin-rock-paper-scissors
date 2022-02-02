const choices = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "ROCK"){
        if (computerSelection == "SCISSORS"){
            return `${playerSelection} VS ${computerSelection}. You Win!`;
        } else if (computerSelection == "PAPER"){
            return `${playerSelection} VS ${computerSelection}. You Lose.`;
        } else {
            return `${playerSelection} VS ${computerSelection}. It's a Draw.`;
        }
    } else if (playerSelection == "PAPER"){
        if (computerSelection == "SCISSORS"){
            return `${playerSelection} VS ${computerSelection}. You Lose.`;
        } else if (computerSelection == "PAPER"){
            return `${playerSelection} VS ${computerSelection}. It's a Draw`;
        } else {
            return `${playerSelection} VS ${computerSelection}. You Win!.`;
        }
    } else if (playerSelection == "SCISSORS"){
        if (computerSelection == "SCISSORS"){
            return `${playerSelection} VS ${computerSelection}. It's a Draw`;
        } else if (computerSelection == "PAPER"){
            return `${playerSelection} VS ${computerSelection}. You Win!`;
        } else {
            return `${playerSelection} VS ${computerSelection}. You Lose.`;
        }
    } else {
        console.log("Input error.");
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Pick!").toUpperCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}
