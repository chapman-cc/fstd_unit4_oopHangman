/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// ---------------
// DOM
// ---------------
const resetButton = document.querySelector("#btn__reset");
const overlay = document.querySelector("#overlay");
const phraseSection = document.querySelector("#phrase");
const qwerty = document.querySelector("#qwerty");
const scoreBoard = document.querySelector("#scoreboard");


// ---------------
// APP
// ---------------
const game = new Game();
game.createPhrases();

resetButton.addEventListener("click", ()=> {
    game.startGame()
})

qwerty.addEventListener("click", e => {
    if (e.target.className === "key") {
        console.log(e.target)
        game.handleInteraction(e.target.textContent)
    }
})
document.addEventListener("keyup", e => {
    if (/^[A-Za-z]$/.test(e.key)) {        
        game.handleInteraction(e.key.toLowerCase())
    }
})