var insertStrAfter = function(str, insertStr, wordIndex) {
    var words = str.split(" "), 
    wordsToInsert = insertStr.split(" ");

    for (var i = 0; i < wordsToInsert.length; i++) {
        words.splice(wordIndex + 1 + i, 0, wordsToInsert[i]);
    }

    return words.join(" ");

}

module.exports = insertStrAfter; 