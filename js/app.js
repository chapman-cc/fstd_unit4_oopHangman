/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// ---------------
// DOM
// ---------------
const resetButton = document.querySelector("#btn__reset");
const phraseSection = document.querySelector("#phrase")

// ---------------
// APP
// ---------------
const game = new Game();
resetButton.addEventListener("click", game.startGame);
game.createPhrases();
game.getRandomPhrase().addPhraseToDisplay();