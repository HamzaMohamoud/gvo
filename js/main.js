/*----- constants -----*/
const maxWrong = 6;

const IMGS = [
  "img/spaceman-0.png",
  "img/spaceman-1.png",
  "img/spaceman-2.png",
  "img/spaceman-3.png",
  "img/spaceman-4.png",
  "img/spaceman-5.png",
  "img/spaceman-6.png"
];

  /*----- state variables -----*/
  let answer = " ";
  let mistakes = 0; 
  let wrongGuesses = [];
  let allGuesses = [];
  let wordStatus = null;
  let gameStatus;

  /*----- cached elements  -----*/

  


  /*----- event listeners -----*/


  /*----- functions -----*/

  function init() {
    allGuesses = [];
    wrongGuesses = [];
    gameStatus = null;
    wordStatus = [];
    render();
  };


  init() 

  function render() {
    const gameStatusElement = document.getElementById("gameStatus");
    const astronautImageElement = document.getElementById("astronautImage");
    const guessedLettersElement = document.getElementById("guessed-letters");
  
    gameStatusElement.textContent = gameStatus || "";
    astronautImageElement.src = IMGS[mistakes];
    guessedLettersElement.textContent = wrongGuesses.join(" ");
  
    // Additional rendering logic based on wordStatus (e.g., displaying the correctly guessed letters)
  
    // Check if the game is over and update the message accordingly
    if (gameStatus === "win") {
      document.getElementById("message").textContent = "Congratulations! You won!";
    } else if (gameStatus === "lose") {
      document.getElementById("message").textContent = "Game over! You lost!";
    } else {
      document.getElementById("message").textContent = "";
    }
  }
  