// ROCK PAPER SCISSORS

let choices = ["Rock", "Paper", "Scissors"]
// let playerSelection = "rock";
let playerSelection;
let computerSelection;
let computerWinCount = 0;
let playerWinCount = 0;

function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random()*2);
    return choices[randomComputerChoice];
}

function playRound(playerSelection, computerSelection){
    // Rock and Scissors
    if(playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"){
        playerWinCount += 1;
        return "You win! Rock beats Scissors";
    } else if(computerSelection.toLowerCase() == "rock" &&
    playerSelection.toLowerCase() == "scissors"){
        computerWinCount += 1;
        return "You lose! Rock beats Scissors";
    }
    // Rock and Paper
    if(playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"){
        computerWinCount += 1;
        return "You lose! Paper beats Rock";
    } else if(computerSelection.toLowerCase() == "rock" &&
    playerSelection.toLowerCase() == "paper"){
        playerWinCount += 1;
        return "You win! Paper beats Rock";
    }
    // Paper and Scissors
    if(playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"){
        playerWinCount += 1;
        return "You win! Scissors beats Paper";
    } else if(computerSelection.toLowerCase() == "scissors" &&
    playerSelection.toLowerCase() == "paper"){
        computerWinCount += 1;
        return "You lose! Scissors beats Paper";
    } 

    // Same choices and illegitimate moves
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "It's a tie. Try again.";
    } else {
        console.log("That was not a legitimate move! Make a new move.");
    }
}

function game(){
    while(playerWinCount + computerWinCount != 5){
        playerSelection = prompt("What's your move?");
        computerSelection = getComputerChoice();
        console.log("You picked: " + playerSelection);
        console.log("Your opponent picked: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    // for(i = 0; i < 5; i++){
    //     playerSelection = prompt("What's your move?");
    //     computerSelection = getComputerChoice();
    //     console.log("You picked: " + playerSelection);
    //     console.log("Your opponent picked: " + computerSelection);
    //     console.log(playRound(playerSelection, computerSelection));
    // }
    if(playerWinCount > computerWinCount){
        console.log("You won " + playerWinCount + " out of 5 Rounds. Congratulations. Reload for a new game.");
    } else {
        console.log("You only won " + playerWinCount + " out of 5 Rounds. While your opponent won " + computerWinCount + " Rounds. Reload for a new game.")
    }

}


// PLAY 5 ROUNDS
game();
