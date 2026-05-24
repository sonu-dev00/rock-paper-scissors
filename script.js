//computer choice logic 
function getComputerChoice() {
    let compValue = Math.floor(Math.random() * 3);
    if(compValue === 0){
        return "rock";
    }else if(compValue === 1) {
        return "paper"
    }else {
        return "scissors";
    }
}

//HUMAN LOGIC 
function getHumanChoice() {
    let humanValue = prompt("enter rock , paper or scissors: ")
    return humanValue.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

//play round logic
function playRound(humanChoice, computerChoice){
    if((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`you won ${humanChoice} beats ${computerChoice}`);
    } else if(humanChoice === computerChoice) {
        console.log("its a tie")
    }
    else {
        computerScore++;
        console.log(`you lose ${computerChoice} beats ${humanChoice}`)
    }
    console.log(`HUMAN: ${humanScore}`);
    console.log(`COMPUTER: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore) {
        console.log("you won the game")
        console.log(`your final score: ${humanScore}`)
    } else if (computerScore > humanScore) {
        console.log("computer won the game");
        console.log(`computer final score: ${computerScore}`);
    } else {
        console.log("it's a tie")
    }
    
};
playGame();