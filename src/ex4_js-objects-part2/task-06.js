var capitalizeEachWord = function(str) {
    var words = str.split(' ');

    words = words.map(function(word) {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    })

    return words.join(' ');
}

module.exports = capitalizeEachWord; 