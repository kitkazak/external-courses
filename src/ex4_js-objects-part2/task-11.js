var countChars = function(str) {
    var chars = str.split(''),
    charCounters = {};

    chars.forEach(char => {
        if (!(char in charCounters)) {
            charCounters[char] = 1;
        } else {
            charCounters[char]++;
        } 
    });

    for (var key in charCounters) {
        if (charCounters.hasOwnProperty(key)) {
            console.log(key + ': ' + charCounters[key]);
        }    
    }

    return undefined;
}

module.exports = countChars; 