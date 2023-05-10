// *----- constants -----*/
const WORD_CHOICE =  [
      'France',
      'Brazil',
      'Japan',
      'Australia',
      'Canada',
      'Germany',
      'India',
      'Italy',
      'Mexico',
      'Spain',
      'Somalia',
      'Ghana',
      'Uganda'
  ]
const maxWrong = 6;
const IMGS = [
  "img/spaceman.png/spaceman-0.jpg",
  "img/spaceman.png/spaceman-1.jpg",
  "img/spaceman.png/spaceman-2.jpg",
  "img/spaceman.png/spaceman-3.jpg",
  "img/spaceman.png/spaceman-4.jpg",
  "img/spaceman.png/spaceman-5.jpg",
  "img/spaceman.png/spaceman-6.jpg",
];
/*----- state variables -----*/
let answer = " ";
let mistakes = 0;
let wrongGuesses = [];
let allGuesses = [];
let wordStatus = null;
let gameStatus;
let categories = false;
/*----- cached elements  -----*/
const message = document.getElementById('message');
const guess = document.getElementById('spotLight');
const letterButtons = document.querySelectorAll('.button-grid > button');
const spaceman = document.querySelector('img');
const guessedLettersContainer = document.querySelector('.guessed-letters-container');
const guessedLetters = document.getElementById('guessed-letters');
const Gstatus = document.getElementById('gameStatus');


/*----- event listeners -----*/
document.querySelector('.button-grid').addEventListener('click', handleClick)


// catButton.addEventListener('click', handleCatagorie)

/*----- functions -----*/

function handleCatagorie(evt) {
catagories = evt.target.textContent
console.log(WORD_CHOICE[catagories]);
console.log(evt.target);
message.style.visibility = 'hidden';
  answer = WORD_CHOICE[catagories][Math.floor(Math.random() * WORD_CHOICE[catagories].length)].split('')
  wordStatus = answer.map(ltr => ltr === " " ? " " : " _ ")
  render();
}

init()

function handleClick (evt) {
  const letter = evt.target.textContent
  console.log (letter) 
  // const target = evt.target;
  // allGuesses.push(target);
  if (gameStatus || evt.target.tagName !== "BUTTON" || wrongGuesses.includes(letter) || wordStatus.includes(letter)) return;
  if (answer.join('').toLowerCase().includes(letter)) {
            console.log('right answer')
      answer.forEach((elm, idx) => {
     if (elm.toLowerCase() === letter) wordStatus[idx] = elm;
    })
    if (answer.join('') === wordStatus.join('')) {
      gameStatus = 'W';
    }
  } else {
    console.log("wronganswer")
      wrongGuesses.push(letter);
      if (wrongGuesses.length === 6) {
          gameStatus = 'L'
      }
  }
  render();
}

function init() {
allGuesses= [];
wrongGuesses = [];
gameStatus = null;
let idx = Math.floor(Math.random() * WORD_CHOICE.length)
console.log(idx)
answer = WORD_CHOICE[idx].split("")
console.log(answer)
wordStatus = answer.map(letter => " _ ")
render();
}

init()

function render() {
  // renderButtons();
  // document.querySelector('section').style.visibility = catagories ? 'visible': 'hidden';
  // document.querySelector('.catBtns').style.visibility = catagories ? 'hidden' : 'visible';
  guess.textContent = wordStatus ? wordStatus.join("") : ''
  spaceman.src = `img/spaceman-${wrongGuesses.length}.png`;
  renderMessage();
  // playButton.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function renderButtons() {
  console.log("hello");
letterButtons.forEach( (button) => {
  console.log(button);
  if (!catagories || wordStatus.includes(button.textContent.toLowerCase()) || wrongGuesses.includes(button.textContent.toLowerCase())){
      console.log('money')
      button.style.visibility = 'hidden';
  } else {
      button.style.visibility = 'visible';
  }
})
}

function renderMessage() {
  if (gameStatus === 'W') {
      Gstatus.textContent = 'WIN'
  } else if (gameStatus === 'L'){
      Gstatus.textContent = 'LOSE'
  } else {
      Gstatus.textContent = ''
  }
}

