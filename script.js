let playerScore = 0;
// function that will randomly generate rock, paper, scissors for Computer
function getComputerChoice () {
    let choices = ['rock', 'paper','scissors'];
    return(choices[Math.floor(Math.random() * choices.length)]);
}

// function to play a single round of game between Computer and player
function playRound (playerSelection, computerSelection) {  
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection ==='paper' && computerSelection === 'rock') 
    || (playerSelection ==='scissors' && computerSelection === 'paper')){
        playerScore ++; // Increment playerScore
        return ("Player wins");
        
    } else if ((playerSelection ==='rock' && computerSelection === 'paper') || (playerSelection =='paper' && computerSelection === 'scissors') 
    || (playerSelection =='scissors' && computerSelection == 'rock')) {
        playerScore --; // Decrement playerScore
        return ("Player loses");
        
    } else {
        playerScore = 0; //Reset playerScore
        return ("There is a tie");
        
    }

}
//helper function to display result
function displayRoundResult(result){
    alert(result)
}
//function for user Input
function getPlayerChoice() {
    let playerSelection = prompt("Please enter your selection from Rock, Paper, Scissors.").toLowerCase();
    while(!['rock', 'paper','scissors'].includes(playerSelection)) {
        playerSelection = prompt("Invalid input. Please chose Rock, Paper, Scissors.").toLowerCase();
    }
    return playerSelection;
}
// function to display final score with message indicating whether player won or lost game
function displayFinalScore(score){
    if (score >0 ) {
        alert(`Congratulations! You won with ${score} points.`);
    } else if (score < 0){
        alert (`Oops! You lose with ${score} points.`);
    } else {
        alert (`It's a tie! Your score is ${score} points.`)
    }
}
// function game toplay a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    let roundsPlayed =0;
    
    while (roundsPlayed < 5){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        alert(`playerSelection:  ${playerSelection}, computerSelection: ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        displayRoundResult(result);

        roundsPlayed += 1
    }
    displayFinalScore(playerScore)
}
game();


