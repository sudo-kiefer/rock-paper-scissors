function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    if(computerSelection === playerSelection) {
        console.log("Tie!")
    }
         else if(computerSelection === "Rock" && playerSelection.toUpperCase() === "SCISSORS") {
            console.log("Computer chose " + computerSelection
             + " which beats " + playerSelection + ". Try again!");
        }
             else if(computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK") {
                console.log("Computer chose " + computerSelection
             + " which beats " + playerSelection + ". Try again!");
            }
                 else if(computerSelection === "Scissors" && playerSelection.toUpperCase() === "PAPER") {
                    console.log("Computer chose " + computerSelection
             + " which beats " + playerSelection + ". Try again!");
                }
                    else{console.log("You chose " + playerSelection
                    + " which beats " + computerSelection + ". Congrats!")}
}


let choices = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice(choices);
