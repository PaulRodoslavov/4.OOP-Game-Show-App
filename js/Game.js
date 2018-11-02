class Game {
   constructor (phraseUl) {
      this.phrases = [
                        'I love Odessa',
                        'Hello World',
                        'Eat Fresh',
                        'Have a Break Have a Kit Kats',
                        'It Gives You Wings'
                     ];
      this.missed = 5;
   }

   //Randomly retrieve one of phrases stored in phrases array

   getRandomPhrase() {
      const randomUndex = Math.floor(Math.random() * this.phrases.length);
      this.phrasesRandom = new Phrase(this.phrases[randomUndex]);
   }

   //Generate random phrase for current game and add it to display

   startGame(){
      this.getRandomPhrase();
      this.phrasesRandom.addPhraseToDisplay(phraseUl, scoreboard);
   }

   // Check to see if button/letter clicked matches one in the phrase
   //if yes reveal and check for win, if no subtract life counter

   handleInteraction(pressedLet){
      if (this.phrasesRandom) {
         if (this.phrasesRandom.checkLetter(pressedLet)) {
            [...phraseUl.querySelectorAll('li')].map(el => {
               if (el.innerText.toUpperCase() === pressedLet.toUpperCase()) {
                  this.phrasesRandom.showMatchedLetter(el, pressedLet, key);
                  this.checkForWin();
               }
            });
         } else {
            this.removeLife(pressedLet);
         }
      }
   }

   // Function removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.

   removeLife(pressedLet) {
      key.map(el => {
         if (el.innerText === pressedLet) {
            el.className = ('key wrong');
         }
      });
      if (scoreboard[this.missed - 1]) scoreboard[this.missed - 1].src = 'images/lostHeart.png';

      this.missed -= 1;
      if (this.missed < 1) this.gameOver('flex', 'lose', 'You Lost! Better Luck Next Time');
   }

   // Displays a Win or Loss messages depending if they correctly selected all letters or ran out of tries.

   gameOver(display, className, innerHTML){
      btnReset.innerText = 'Play Again';
      overlay.style.display = display;
      overlay.className = className;
      gameOver.innerHTML = innerHTML;

   }

    // Function checks to see if the player has selected all of the letters for win condition

   checkForWin() {
      const checkGuessed = document.querySelectorAll('.hide.letter');
      if(!checkGuessed.length) {
         console.log(this.phrasesRandom);
         this.gameOver('flex', 'win', `You Win! The phrase was "${this.phrasesRandom.phrase}". Congratulations!`);
      }
   }
}
