function Hangman(word) {
    var guessedString = '_'.repeat(word.length),
        errors = 6,
        wrongSymbols = [];

    this.guess = function(guessedChar) {
        if (!errors) {
            console.log('Game Over!');
            return this;
        }

        var isGuessed = false;
            guessedString = guessedString.split('');

        if (word.indexOf(guessedChar) > -1) {
            word.split('').forEach(function(char, i) {
                if (guessedChar === char) {
                    isGuessed = true;
                    guessedString[i] = word[i];
                }
            });
        }
        
        guessedString = guessedString.join('');

        if (isGuessed) {
            console.log(guessedString);
        } else {
            errors--;
            wrongSymbols.push(guessedChar);
            console.log(
                `Wrong letter, errors left ${errors} | ${wrongSymbols}`
            )
        }

        return this;
    }

    this.getGuessedString = function() {
        return guessedString;
    };

    this.getErrorsLeft = function() {
        return errors;
    };

    this.getWrongSymbols = function() {
        return wrongSymbols;
    };

    this.getStatus = function() {
        return `${guessedString} | errors left ${errors}`;
    }

    this.startAgain = function(newWord) {
        guessedString = '_'.repeat(newWord.length);
        errors = 6;
        wrongSymbols = [];
    }
}

var hangman = new Hangman('webpurple');

module.exports = hangman;