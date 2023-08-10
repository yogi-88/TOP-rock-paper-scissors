// function that will randomly generate rock, paper, scissors for Computer
function getComputerChoice () {
    let choices = ['rock', 'paper','scissors'];
    console.log(choices[Math.floor(Math.random() * choices.length)])
}

getComputerChoice();