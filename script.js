function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
 }

const choices = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(choices);
const playerSelection = prompt("Please choose between Rock, Paper, or Scissors.");
 
 function playRound(playerSelection, computerSelection){
    let response = console.log("Computer chose " + computerSelection
    + " which beats " + playerSelection + ". Try again!");
    if(computerSelection === playerSelection) {
        console.log("Tie!")
    }
         else if(computerSelection === "Rock" && playerSelection.toUpperCase() === "SCISSORS") {
          response;
        }
             else if(computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK") {
                response;
            }
                 else if(computerSelection === "Scissors" && playerSelection.toUpperCase() === "PAPER") {
                   response;
                }
                    else{console.log("You chose " + playerSelection
                    + " which beats " + computerSelection + ". Congrats!")}
 }
 
return(playRound(playerSelection, computerSelection));