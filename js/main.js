  /*----- constants -----*/
  const maxWrong = 6;
  
  const IMGS = [];




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
    worngGuesses = [];
    gameStatus = null;
    wordStatus = [];
    render();
  };
  init() 
