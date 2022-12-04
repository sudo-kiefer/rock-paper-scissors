let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {

function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
 }

const choices = ["Rock", "Paper", "Scissors"];
const computerSelection = getComputerChoice(choices);
const playerSelection = prompt("Round " + (i+1) + ": Please choose between Rock, Paper, or Scissors.");
 
function playRound(playerSelection, computerSelection){
    
    let response = "Computer chose " + computerSelection
    + " which beats " + playerSelection + ". Try again!";
    if(computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
        console.log("Tie!");
        i = (i-1);
    }
        else if (playerSelection.toUpperCase() !== "ROCK" && playerSelection.toUpperCase() !== "PAPER" && playerSelection.toUpperCase() !== "SCISSORS") {
            console.log(playerSelection + " is not a valid option. Please try again.");
            i = (i-1);
        }
            else if(computerSelection === "Rock" && playerSelection.toUpperCase() === "SCISSORS") {
                console.log(response);
                computerScore = computerScore + 1;
            }
                else if(computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK") {
                    console.log(response);
                    computerScore = computerScore + 1;
                }
                    else if(computerSelection === "Scissors" && playerSelection.toUpperCase() === "PAPER") {
                        console.log(response);
                        computerScore = computerScore + 1;
                    }
                        else{console.log("You chose " + playerSelection+ " which beats " + computerSelection + ". Congrats!"); playerScore = playerScore + 1;}
 }

console.log(playRound(playerSelection, computerSelection));
console.log("Player: " + playerScore);
console.log("Computer: " + computerScore);

    }

    if(playerScore === computerScore) {
        alert("Tie Game!")
    }
    else if(playerScore > computerScore) {
        alert("You Win!")
    }
    else if(playerScore < computerScore) {
        alert("You Lose. Better luck next time!")
    }
}

