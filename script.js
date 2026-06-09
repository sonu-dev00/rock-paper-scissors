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
let humanScore = 0;
let computerScore = 0;
let gameOver = false;
//play round-logic
const alienScore = document.querySelector("#alienscore");
const compScore = document.querySelector("#compscore");
const result = document.querySelector("#result")
function playRound(humanChoice, computerChoice){
    if((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
       result.textContent = `you won ${humanChoice} beats ${computerChoice}`;
    } else if(humanChoice === computerChoice) {
       result.textContent = ("its a tie")
    }
    else {
        computerScore++;
       result.textContent = `you lose ${computerChoice} beats ${humanChoice}`
    }
   alienScore.textContent = `HUMAN: ${humanScore}`;
   compScore.textContent = `COMPUTER: ${computerScore}`;
    if(humanScore === 5) {
        gameOver = true;
        result.textContent = "you won";
    } else if(computerScore === 5) {
        gameOver = true;
        result.textContent = "you loose";
    }
}        
        const rock = document.querySelector("#rock");
        const paper = document.querySelector("#paper");
        const scissors = document.querySelector("#scissors");
       
        rock.addEventListener("click", () => {
            
            if(gameOver === true) {
                return;
            }
            playRound("rock", getComputerChoice());
            
        })
        paper.addEventListener("click", () => {
            
            if(gameOver === true) {
                return;
            }
            playRound("paper", getComputerChoice());
        })
        scissors.addEventListener("click" , () => {
            
            if(gameOver === true) {
                return;
            }
            playRound("scissors", getComputerChoice());
        })

        const restart = document.querySelector("#restart");
        restart.addEventListener('click', () => {
           humanScore = 0;
           computerScore = 0;
           gameOver = false;

           alienScore.textContent = `HUMAN: ${humanScore}`
           compScore.textContent = `COMPUTER: ${computerScore}`

           result.textContent = "GAME RESTARTED";
        })
