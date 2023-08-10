let playerScore = 0;
// function that will randomly generate rock, paper, scissors for Computer
function getComputerChoice () {
    let choices = ['rock', 'paper','scissors'];
    return(choices[Math.floor(Math.random() * choices.length)])
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



// function game toplay a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    let roundsPlayed =0;
    
    while (roundsPlayed < 5){
        let playerSelection = prompt("Please enter your selection from Rock Paper Scissors.");
        let computerSelection = getComputerChoice();
        alert(`playerSelection:  ${playerSelection}, computerSelection: ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        alert(result);

        roundsPlayed += 1
    }
    alert('You won with '+ playerScore +' points.')
}
game();


