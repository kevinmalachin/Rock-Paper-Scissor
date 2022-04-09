function computerPlay(){
  BimBumBam=Math.floor(Math.random()*3);
  if (BimBumBam==0)
  return "Rock";
  else if (BimBumBam==1)
  return "Scissor";
  else (BimBumBam==2)
  return "Paper";
}
console.log(computerPlay())


  function playRound(playerSelection,computerSelection){
    // rendi case insensitive
  return "You lose! x beats y";
  }
  const playerSelection = prompt ("Please, enter your choice");
  const computerSelection = computerPlay();

  console.log(playRound(playerSelection, computerSelection));
  

  function game(){
    playRound()
    for (let i = 0; i < 5; i++) {
      text += "The choice is" + i + "<br>";
      console.log(computerPlay())
   }
  }














  // first ask for a player input

// set possible choises
// this order is not casual, the object on the left wins to the one on the right
// the first wins over the last, like a loop
const optionsRPS = ["rock", "paper", "scissors"];

// create a prompt
const promptQuestion = require("prompt-sync")();
// ask user to choose
const stringInput = promptQuestion("rock, paper or scissors? choose one: ");

// continue only if the string is rock, paper or scissors
if(stringInput == optionsRPS[0] || stringInput == optionsRPS[1]  || stringInput == optionsRPS[2]) {
    // Transform choise frome string to integer
    let pInput = 0;
    switch(stringInput){ // evaluate the user input as a string
        case optionsRPS[0]: // if equal to first option (rock)
            pInput = 0; // set 0
            break;
        case optionsRPS[1]: // and so on...
            pInput = 1;
            break;
        case optionsRPS[2]:
            pInput = 2;
            break;
    }

    // Define computer input
    const cInput = Math.floor(Math.random()*3);

    // There are two main outocomes: 1) player and computer have chosen the same 2) or not
    // This is scenario 1)
    if (cInput == pInput) { // in case computer and player input are the same
        console.log("Computer also chose "+optionsRPS[cInput]+". It's a tie! ")// it's a tie!
    } else { // This is scenario 2) inputs differ, there is a winner

        // define three more subset scenarios:
        // player choose paper: if cInput == 0, player win, otherwise lose
        // player choose rock: if cInput == 2, player win, otherwise lose
        // player choose scissors: if cInput == 1, player win, otherwise lose
        // we have three win scenarios, and three lose scenarios
        // just put the two group together inside if statements
        if( // let's start from the positive outcomes for the player
            (optionsRPS[pInput] == "paper" && cInput == 0) || 
            (optionsRPS[pInput] == "rock" && cInput == 2) ||
            (optionsRPS[pInput] == "scissors" && cInput == 1)
        ) {
            console.log(optionsRPS[pInput]+" beats "+optionsRPS[cInput]+". You won!")
        } else{ // otherwise player lose
            console.log(optionsRPS[cInput]+" beats "+optionsRPS[pInput]+". You lose!")
        } 
    }
} else {
    console.log("invalid input! Cannot play...")
}