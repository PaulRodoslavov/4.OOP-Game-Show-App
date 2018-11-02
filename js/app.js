// DOM elements

const game = new Game();
const phraseUl = document.querySelector('#phrase ul');
const gameOver = document.querySelector('#game-over-message');
const qwerty = document.querySelector('#qwerty');
const overlay = document.querySelector('#overlay');
const scoreboard = [...document.querySelectorAll('#scoreboard ol li img')];
const key = [...document.querySelectorAll('.key')];
const btnReset = document.getElementById('btn__reset');

// Click event to start game

btnReset.addEventListener('click', () => {
   const countMistake  = 5;
   overlay.style.display = 'none';

   resetDisplay();
   game.startGame(countMistake);
});

// Responds to clicks on the on screen keyboard and call function to disable button selected

qwerty.addEventListener('click', el => {
   if (el.target.className === 'key') {
       markButton(el.target.innerText);

   }
});

// Responds to clicks on the on screen keyboard and call function to disable button selected

document.addEventListener('keyup', el => {
      if(/^\D$/.test(el.key)) {
         markButton(el.key);
      }
});

// Responds to physical keyboard input and call function to disable key pressed

function markButton(el) {
   game.handleInteraction(el, phraseUl, scoreboard, key, btnReset);
   key.map(element => {
      if (element.innerText === el) element.disabled = 'true';
   });
}

// Function hides the start screen overlay. and resets the phrase/keys/lives display on replays

function resetDisplay(){
   game.missed = 5;
   scoreboard.map(el => el.src = 'images/liveHeart.png');
   key.map(el => {
      el.classList.remove('wrong', 'chosen');
      el.disabled = false;
   });
}
