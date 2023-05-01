// create variables

const button = document.querySelector('#idPcTurn');

const rpg = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

// player and computer


function playerSelection(){
    let input = prompt("Pick your choice!").toLocaleLowerCase();
    if(input==="scissor" || input==="paper" || input==="rock") {
        document.getElementById("idMyTurn").innerHTML = `Your pick is ${input}!`;
    } else if (input != "rock" || input != "scissor" || input != "paper"){
        alert("You must pick Rock, Paper or Scissor");
    }
    console.log(input);
};

console.log(playerSelection());

function computerSelection(){
    let computerPick = Math.floor(Math.random() * 3) + 1;
        if(computerPick === 1) {
            console.log('rock');
        } else if (computerPick === 2) {
            console.log('paper');
        } else if (computerPick === 3) {
            console.log('scissor');
        }
};



// determines the round esit

function checkWinner(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        console.log(`${playerSelection} vs. ${computerSelection}. It's a tie!`);
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        console.log(`${playerSelection} vs. ${computerSelection}. You lose! Try again next time.`);
        computerScore++;
    } else {
        console.log(`${playerSelection} vs. ${computerSelection}. You win!`);
        playerScore++;
    };
};



// store the result on the page