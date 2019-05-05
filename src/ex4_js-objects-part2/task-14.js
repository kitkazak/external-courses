var randomInt = function(min, max) {
    var randomNum = min + Math.random() * (max - min + 1);
    return Math.floor(randomNum);
}

module.exports = randomInt; 