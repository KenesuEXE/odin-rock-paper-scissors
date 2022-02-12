// Computer randomly picks
const choices = ["Rock", "Paper", "Scissors"];
function pickRandom(){
    return choices[Math.floor(Math.random() * choices.length)]
}

// Determine result of round
function determineResult(playerPick, computerPick) {
    if (playerPick == "Rock") {
        
        if (computerPick == "Rock") return "draw";
        else if (computerPick == "Paper") return "lose";
        else if (computerPick == "Scissors") return "win";
        
    } else if (playerPick == "Paper") {
        
        if (computerPick == "Rock") return "win";
        else if (computerPick == "Paper") return "draw";
        else if (computerPick == "Scissors") return "lose";
        
    } else if (playerPick == "Scissors") {
        
        if (computerPick == "Rock") return "lose";
        else if (computerPick == "Paper") return "win";
        else if (computerPick == "Scissors") return "draw";
        
    }
    return "ERROR"; // If either somehow doesn't pick any
}

let playerScore = 0;
let computerScore = 0;

// Listens for click event and determines result
const buttonInput = document.querySelectorAll("button.pick");
for (let input of buttonInput) {
    input.addEventListener("click", function (e) {
        const playerPick = e.target.id;
        const computerPick = pickRandom();

        
        let result = determineResult(playerPick, computerPick);
        
        let text = "";
        //assert error here
        if (result == "win") {
            text = `${playerPick} vs ${computerPick}. You win!`;
            playerScore++;
        } else if (result == "draw") {
            text = `${playerPick} vs ${computerPick}. It's a draw.`;
        } else if (result == "lose") {
            text = `${playerPick} vs ${computerPick}. You lose.`;
            computerScore++;
        }

        const div = document.querySelector("div.result-container");
        
        const score = document.querySelector("h1.score");
        score.innerHTML = `${playerScore} - ${computerScore}`;

        const playerDisplay = document.querySelector("div.player-display");
        const computerDisplay = document.querySelector("div.computer-display");
        playerDisplay.innerHTML = `<img src="images/${playerPick}.png">${playerPick}`;
        computerDisplay.innerHTML = `<img src="images/${computerPick}.png">${computerPick}`;

        const roundResult = document.querySelector("p.round-result");
        roundResult.innerHTML = text;
        
        const gameResult = document.querySelector("h2.game-result");

        if (playerScore >= 5) {
            gameResult.innerHTML = "You won against the computer!";
            disableButton();
        } else if (computerScore >= 5) {
            gameResult.innerHTML = "You have lost against the computer."
            disableButton();
        }

    });
}

const reset = document.querySelector("button.reset");
reset.addEventListener("click", function (e) {
    playerScore = 0;
    computerScore = 0;
    
    const score = document.querySelector("h1.score");
    score.innerHTML = "0 - 0";

    const roundResult = document.querySelector("p.round-result");
    roundResult.innerHTML = "Pick rock, paper, or scissors.";

    const gameResult = document.querySelector("h2.game-result");
    gameResult.innerHTML = "";

    const playerDisplay = document.querySelector("div.player-display");
    const computerDisplay = document.querySelector("div.computer-display");
    playerDisplay.innerHTML = "";
    computerDisplay.innerHTML = "";


    const buttons = document.querySelectorAll("button.pick");
    for (const button of buttons) {
         button.disabled = false;
    }

    const resetButton = document.querySelector("button.reset");
    resetButton.disabled = true;
})

function disableButton () {
    const pickButtons = document.querySelectorAll("button.pick");
    for (const button of pickButtons) {
        button.disabled = true;
    }

    const resetButton = document.querySelector("button.reset");
    resetButton.disabled = false;

    
}