// ROCK PAPER SCISSORS

let choices = ["rock", "paper", "scissors"]
const computerChoiceButton = document.querySelector('#computer-choice');
const computerChoiceImg = document.querySelector('#computer-choice-img');
const playerRockButton = document.querySelector('.rock');
const playerPaperButton = document.querySelector('.paper');
const playerScissorsButton = document.querySelector('.scissors');
const scoreContainer = document.querySelector('.score');
let playerButtons = [playerRockButton, playerPaperButton, playerScissorsButton];
// let playerSelection = "rock";
let playerSelection;
let computerSelection;
let computerWinCount = 0;
let playerWinCount = 0;

// Show choices again and remove previous computer choice 
function showChoicesAgain() {
    playerButtons.forEach(function(item){
        item.classList.remove("hide");
    })
    computerChoiceImg.src = "";
}
function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random()*2);
    computerChoiceImg.src = "img/" + randomComputerChoice + ".png";
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

playerButtons.forEach(function(item) {
    item.addEventListener('click', () => {
        playerRockButton.classList.add('hide');
        playerPaperButton.classList.add('hide');
        playerScissorsButton.classList.add('hide');
        item.classList.remove('hide');
        playerSelection = item.classList[0];
        console.log(playerSelection);
        computerSelection = getComputerChoice();
        computerChoiceImg.src = "img/" + computerSelection + ".png";
        console.log(playRound(playerSelection, computerSelection));
        scoreContainer.innerText = String(playerWinCount) + "/" + String(playerWinCount + computerWinCount);
        setTimeout(showChoicesAgain, 1000);
        console.log(playerWinCount);
        if(playerWinCount + computerWinCount == 5){
            if(playerWinCount > computerWinCount){
                scoreContainer.innerText = "You won " + playerWinCount + " out of 5 Rounds. Congratulations. Reload for a new game.";
            } else {
                scoreContainer.innerText = "You only won " + playerWinCount + " out of 5 Rounds. While your opponent won " + computerWinCount + " Rounds. Reload for a new game.";
            }
        }
    });
})

