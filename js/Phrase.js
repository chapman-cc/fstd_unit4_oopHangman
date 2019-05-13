/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.replace(/[^A-Za-z\s]/g, "").toLowerCase();
    }

    addPhraseToDisplay() {
        const array = this.phrase.split("");
        const ul = phraseSection.querySelector("ul");

        array.forEach(letter => {
            const li = document.createElement("li");
            li.textContent = letter;
            if (letter === " ") {
                li.classList.add("space")
            } else {
                li.classList.add("hide", "letter", letter)
            }
            ul.appendChild(li);
        })
    }



    checkLetter(e) {
        const letter = e.target.textContent;
        return this.phrase.includes(letter);
    }

    showMatchedLetter(e) {
        const letter = e.target.textContent;
        const list = phraseSection.querySelectorAll("li");
        list.forEach(li => {
            if (li.classList.contains(letter)) {
                li.classList.remove("hide");
                li.classList.add("show");
            }
        })
    }
}