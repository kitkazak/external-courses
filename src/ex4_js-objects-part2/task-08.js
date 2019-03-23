var lowerCamelCase = function(str) {
    var words = str.split(' ');

    words.forEach(function(word, i) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1).toLowerCase();
    });

    words[0] = words[0].toLowerCase();

    return words.join('');
}

module.exports = lowerCamelCase; 