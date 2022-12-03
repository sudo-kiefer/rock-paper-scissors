function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
 }
 
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
 
 let choices = ["rock", "paper", "scissors"];
 let computerSelection = getComputerChoice(choices);
 