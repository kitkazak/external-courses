var reverseStr = function(str) {
    var chars = str.split('');
    chars = chars.reverse().join('');

    return chars;
}

module.exports = reverseStr; 