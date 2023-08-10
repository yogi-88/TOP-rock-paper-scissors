// function that will randomly generate rock, paper, scissors for Computer
function getComputerChoice () {
    let choices = ['rock', 'paper','scissors'];
    return(choices[Math.floor(Math.random() * choices.length)])
}

getComputerChoice();

// function to play a single round of game between Computer and player
function playRound (playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection ==='paper' && computerSelection === 'rock') 
    || (playerSelection ==='scissors' && computerSelection === 'paper')){
        return ("Player wins");
    } else if ((playerSelection ==='rock' && computerSelection === 'paper') || (playerSelection =='paper' && computerSelection === 'scissors') 
    || (playerSelection =='scissors' && computerSelection == 'rock')) {
        return ("Player loses")
    } else {
        return ("There is a tie")
    }
}
    


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(`playerSelection:  ${playerSelection}, computerSelection: ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection))
