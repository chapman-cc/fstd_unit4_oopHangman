/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.replace(/[^A-Za-z\s]/g, "").toLowerCase();
    }

    // * METHODS
    addPhraseToDisplay(phrase) {
        console.log(phrase);
        const array = phrase.phrase.split("");
        const ul = phraseSection.querySelector("ul");

        const list = array.map(letter => {
            const li = document.createElement("li");
            li.textContent = letter;
        })
        ul.appendChild(list);
    }



checkLetter() {
    //checks to see if the letter selected by the player matches a letter in the phrase.


}

showMatchedLetter() {
    // reveals the letter(s) on the board that matches the player's selection. 
    // To reveal the matching letter(s), 
    // select all of the letter DOM elements that have a CSS class name that matches the selected letter 
    // and replace each selected element's hide CSS class with the show CSS class.


}

}