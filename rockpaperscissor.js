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




# Rock-Paper-Scissor

codice ottimale per rockpaperscissor

window.onload = beginningAnimation();
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlrt = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retry-btn");
const desc = document.querySelector("#desc3");
const container = document.querySelector("#results-container");

body.addEventListener("click", skipAnime());
body.addEventListener("keydown", skipAnime());

function skipAnime() {
  const span = document.querySelectorAll("span");

  span.forEach((span) => span.classList.add("skip"));
}

function beginningAnimation() {
  fadeIn();
  //need to turn nodelist of spans into an array so we can access last value for ontransitionend
  const desc1 = document.querySelector("#desc1");
  let desc1Span = desc1.querySelectorAll("span");

  desc1Span = Array.from(desc1Span);

  const desc2 = document.querySelector("#desc2");
  const desc3 = document.querySelector("#desc3");

  desc1Span[desc1Span.length - 1].ontransitionend = () => {
    desc1.classList.add("fade-out");

    desc1.addEventListener("animationend", () => {
      desc1.classList.add("disappear");
      desc1.classList.remove("animate");
      desc2.classList.remove("disappear");
      desc2.classList.add("animate");
      fadeIn();
      /* need to collect nodelist of span 
in the same function we activate fadein()
or else nodelist will be empty */
      let desc2Span = desc2.querySelectorAll("span");
      desc2Span = Array.from(desc2Span);

      desc2Span[desc2Span.length - 1].ontransitionend = () => {
        desc2.classList.add("fade-out");
        desc2.addEventListener("animationend", () => {
          desc2.classList.add("disappear");
          desc2.classList.remove("animate");
          desc3.classList.remove("disappear");
          desc3.classList.add("animate");
          fadeIn();

          let desc3Span = desc3.querySelectorAll("span");
          desc3Span = Array.from(desc3Span);

          desc3Span[desc3Span.length - 1].ontransitionend = () => {
            const cta = document.querySelector("#cta");

            cta.classList.add("drop-down");

            cta.addEventListener("animationend", () => {
              const gameCtn = document.querySelector("#game-container");

              setTimeout(function () {
                gameCtn.classList.add("fade-in");
              }, 300);
            });
          };
        });
      };
    });
  };
}
function fadeIn() {
  let text = document.querySelector(".animate");

  let strText = text.textContent;
  let splitText = strText.split("");
  text.textContent = "";
  //append span tags to each character in the string
  for (i = 0; i < splitText.length; i++) {
    text.innerHTML += `<span>${splitText[i]}</span>`;
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    //stops the function from running once the end of the string has been reached
    if (char === splitText.length) {
      complete();
      return;
    }
  }
  function complete() {
    clearInterval(timer);
    timer = null;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();

    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  });
});

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    displayResults("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore = ++computerScore;
    keepCpuScore();
    if (computerScore === 1) {
      displayResults(
        `Oh no! You lost.
        ${capitalize(computerSelection)} beats ${playerSelection}.`
      );
    } else if (computerScore === 2) {
      displayResults(
        `Arghh. ${capitalize(
          computerSelection
        )} beats ${playerSelection}. Give it another shot!`
      );
    } else if (computerScore === 3) {
      displayResults(
        `${capitalize(
          computerSelection
        )} beats ${playerSelection}. It's ok. You got this!!`
      );
    } else if (computerScore === 4) {
      displayResults(
        `Oh no. It's match point!! ${capitalize(
          computerSelection
        )} beats ${playerSelection}. Don't let us down!`
      );
    } else {
      displayResults(`${computerSelection} beats ${playerSelection}`);
    }
  } else {
    playerScore = ++playerScore;
    keepPlayerScore();
    if (playerScore === 1) {
      displayResults(
        `Lets go!!! You won.
        ${capitalize(playerSelection)} beats ${computerSelection}.`
      );
    } else if (playerScore === 2) {
      displayResults(
        `You're pretty good at this. ${capitalize(
          playerSelection
        )} beats ${computerSelection}.`
      );
    } else if (playerScore === 3) {
      displayResults(
        `${capitalize(
          playerSelection
        )} beats ${computerSelection}! Has mankind found its savior??`
      );
    } else if (playerScore === 4) {
      displayResults(
        `${capitalize(
          playerSelection
        )} beats ${computerSelection}. One more and you're a hero!`
      );
    } else {
      displayResults(`${playerSelection} beats ${computerSelection}`);
    }
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str) {
  container.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });
  container.textContent = str;
}

function declareWinner() {
  rplContent();
  if (playerScore > computerScore) {
    endDesc.textContent = "You win! Mankind lives another day!!";
    returnMainBtn.innerText = "Play Again";
  } else {
    endDesc.textContent = "You lost...who will save mankind now?";
    returnMainBtn.innerText = "Try Again?";
  }
  fadeIn();

  let endDescSpan = endDesc.querySelectorAll("span");
  endDescSpan = Array.from(endDescSpan);

  endDescSpan[endDescSpan.length - 1].ontransitionend = () => {
    returnMainBtn.classList.add("fade-in");
    /*returnMainBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 00,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-in",
    });*/
  };
}

function rplContent() {
  main.classList.add("disappear");
  endAlrt.classList.remove("disappear");
  desc.classList.remove("animate");
  endDesc.classList.add("animate");

  returnMainBtn.addEventListener("click", () => {
    main.classList.remove("disappear");
    endAlrt.classList.add("disappear");
    desc.classList.add("animate");
    returnMainBtn.classList.remove("fade-in");
    resetGame();
  });
}

function resetGame() {
  fadeIn();
  container.textContent = "";
  playerScore = 0;
  computerScore = 0;
  keepPlayerScore();
  keepCpuScore();
}

function keepPlayerScore() {
  let playerScoreBox = document.querySelector("#player-score");

  playerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });

  playerScoreBox.textContent = playerScore;
}
function keepCpuScore() {
  let computerScoreBox = document.querySelector("#computer-score");

  computerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });

  computerScoreBox.textContent = computerScore;
}