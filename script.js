let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;
let holdScore = false; //display previous score until first round of new game begins

const rockTarget = document.querySelector(".rock");
rockTarget.addEventListener('click', rockFunction);
function rockFunction() {
    playRound(playerSelection = "Rock");
}

const paperTarget = document.querySelector(".paper");
paperTarget.addEventListener('click', paperFunction);
function paperFunction() {
    playRound(playerSelection = "Paper");
}

const scissorsTarget = document.querySelector(".scissors");
scissorsTarget.addEventListener('click', scissorsFunction);
function scissorsFunction() {
    playRound(playerSelection = "Scissors");
}

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
 }


function playRound(){

    if(holdScore === true) {
        roundCounter = 1;
        computerScore = 0;
        playerScore = 0;
        holdScore = false;
        const notification = document.getElementById("notifier");
        notification.innerText = "Please select an option to begin.";
    }

    const computerSelection = getComputerChoice(choices);

    let response = "Computer chose " + computerSelection
    + " which beats " + playerSelection + ". Try again!";
    if(computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
        console.log("Tie!");
        roundCounter = roundCounter;
    }
        else if (playerSelection.toUpperCase() !== "ROCK" && playerSelection.toUpperCase() !== "PAPER" && playerSelection.toUpperCase() !== "SCISSORS") {
            console.log(playerSelection + " is not a valid option. Please try again.");
        }
            else if(computerSelection === "Rock" && playerSelection.toUpperCase() === "SCISSORS") {
                console.log(response);
                computerScore = computerScore + 1;
                roundCounter = (roundCounter+1);
            }
                else if(computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK") {
                    console.log(response);
                    computerScore = computerScore + 1;
                    roundCounter = (roundCounter+1);
                }
                    else if(computerSelection === "Scissors" && playerSelection.toUpperCase() === "PAPER") {
                        console.log(response);
                        computerScore = computerScore + 1;
                        roundCounter = (roundCounter+1);
                    }
                        else{console.log("You chose " + playerSelection+ " which beats " + computerSelection + ". Congrats!"); 
                            playerScore = playerScore + 1;
                            roundCounter = (roundCounter+1);
                        }


    if(roundCounter === 5) {
        if(computerScore > playerScore) {
            holdScore = true;
            const notification = document.getElementById("notifier");
            notification.innerText = "COMPUTER WINS THE GAME! BETTER LUCK NEXT TIME!";

 
        } else {
            holdScore = true;
            const notification = document.getElementById("notifier");
            notification.innerText = "YOU WIN THE GAME!";
        }
    
            
    }
    

    const compscore = document.getElementById("computer-score");
    compscore.innerText = "Computer Score: " + computerScore;

    const playscore = document.getElementById("player-score");
    playscore.innerText = "Player Score: " + playerScore;

    const roundcount = document.getElementById("round-counter");
    roundcount.innerText = "Round: " + roundCounter;
    
};

