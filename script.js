function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
 }

const choices = ["Rock", "Paper", "Scissors"];
const computerSelection = getComputerChoice(choices);
const playerSelection = prompt("Please choose between Rock, Paper, or Scissors.");
 
 function playRound(playerSelection, computerSelection){
    let response = "Computer chose " + computerSelection
    + " which beats " + playerSelection + ". Try again!";
    if(computerSelection === playerSelection) {
        console.log("Tie!")
    }
         else if(computerSelection === "Rock" && playerSelection.toUpperCase() === "SCISSORS") {
            console.log(response);
        }
             else if(computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK") {
                console.log(response);
            }
                 else if(computerSelection === "Scissors" && playerSelection.toUpperCase() === "PAPER") {
                    console.log(response);
                }
                    else{console.log("You chose " + playerSelection
                    + " which beats " + computerSelection + ". Congrats!")}
 }

console.log(playRound(playerSelection, computerSelection));