/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const quotes = [
            'Thank You Mario! But our princess is in another castle',
            'It’s a-me, Mario!',
            'This is your fault. I’m going to kill you.',
            'Get over here!',
            'HADOUKEN!',
            'You were almost a Jill sandwich!'
        ];
        quotes.forEach(quote => {
            this.phrases.push(new Phrase(quote));
        })
    }

    /**
    * Selects random phrase from phrases property
    */
    getRandomPhrase() {
        const rand = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[rand];
    }
    
    startGame() {
        overlay.style.display = "none"
        const phrase = this.getRandomPhrase();
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    }

    handleInteraction(e) {
        const hasLetter = this.activePhrase.checkLetter(e);
        if (hasLetter) {
            this.disableQwerty(e, hasLetter);
            this.activePhrase.showMatchedLetter(e);
            this.checkForWin();
        } else {
            this.disableQwerty(e, hasLetter);
            this.removeLife();
        } 
    }

    checkForWin() {
        const hiddenLetters = phraseSection.querySelectorAll("li.hide");
        if (hiddenLetters.length === 0) 
            this.gameOver(1);
    }
    removeLife() {
        const listImg = scoreBoard.querySelectorAll("img");
        listImg[this.missed].setAttribute("src", "./images/lostHeart.png")
        this.missed += 1;
        if (this.missed === 5) 
            this.gameOver(0)
    }
    restoreLife() {
        const listImg = scoreBoard.querySelectorAll("img");
        listImg.forEach(img => img.setAttribute("src", "./images/liveHeart.png"))
        
    }
    erasePhrase() {
        phraseSection.querySelector("ul").innerHTML = "";

    }
    gameOver(verdict) {
        const gameOverMessage = overlay.querySelector("#game-over-message");
        if (verdict) {
            gameOverMessage.textContent = "You Win";
            overlay.className = "win";
        } else {
            gameOverMessage.textContent = "You Lose";
            overlay.className = "lose";
        }
        resetButton.textContent = "Reset Game"
        overlay.style.display = "inherit";

        this.missed = 0;
        this.erasePhrase();
        this.cleanKeyboard();
        this.restoreLife();

        
        
    }

    disableQwerty(e, hasLetter) {
        const element = e.target;
        hasLetter? element.classList.add("chosen") : element.classList.add("wrong")        
    }

    cleanKeyboard() {
        qwerty.querySelectorAll("button").forEach(button => button.className = "key")
    }



}