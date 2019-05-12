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
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const rand = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[rand];
    }
    
    startGame() {
        document.querySelector("#overlay").style.display = "none"
    }
    
}