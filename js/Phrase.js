class Phrase {
   constructor (el) {
      this.phrase = el;
   }
   // Adds phrase to display by breaking it up into individual letters and/or spaces and then output to HTML

   addPhraseToDisplay(phraseUl) {
      const litters = this.phrase
                           .split('')
                           .map(el => {
                              if (/^\w$/.test(el)) return `<li class="hide letter ${el}">${el}</li>`;
                              else return `<li class="hide space"></li>`;
                           });
      phraseUl.innerHTML = litters.join('');
   }

   // Checks to see if letter selected by player matches a letter in phrase

   checkLetter(selected) {
      return this.phrase.toUpperCase().match(selected.toUpperCase());
   }

    // Reveals letter on board if it matches selected letter

   showMatchedLetter(showLetr, pressedLet, key){
      if(showLetr.innerHTML.toUpperCase() === pressedLet.toUpperCase()) {
         showLetr.classList.remove('hide');
         showLetr.classList.add('show');
      }
      key.map(el => {
         if (el.innerText === pressedLet) {
            el.className = ('key chosen');
         }
      });
   }
}
