function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    if(computerSelection === playerSelection) {
        console.log("Tie!")
    }
         else if(computerSelection === "Rock" && toUpperCase(playerSelection) === "SCISSORS") {
            console.log("Computer chose " + getComputerChoice(choices)
             + " which beats " + playerSelection + ". Try again!");
        }
             else if(computerSelection === "Paper" && toUpperCase(playerSelection) === "ROCK") {
                console.log("Computer chose " + getComputerChoice(choices)
             + " which beats " + playerSelection + ". Try again!");
            }
                 else if(computerSelection === "Scissors" && toUpperCase(playerSelection) === "PAPER") {
                    console.log("Computer chose " + getComputerChoice(choices)
             + " which beats " + playerSelection + ". Try again!");
                }
                    else{console.log("You chose " + playerSelection
                    + " which beats " + getComputerChoice(choices) + ". Congrats!")}
}


let choices = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice(choices);
