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
        alert("Tie!")
    }
         else if(computerSelection === "Rock" && playerSelection.toUpperCase() === "SCISSORS") {
            alert(response);
        }
             else if(computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK") {
                alert(response);
            }
                 else if(computerSelection === "Scissors" && playerSelection.toUpperCase() === "PAPER") {
                    alert(response);
                }
                    else{alert("You chose " + playerSelection
                    + " which beats " + computerSelection + ". Congrats!")}
 }

console.log(playRound(playerSelection, computerSelection));