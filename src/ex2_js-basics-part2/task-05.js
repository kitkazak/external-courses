var maxValue = function(arr) {
    return arr.reduce(function(previousValue, currentItem) {
        if (currentItem > previousValue) {
            return currentItem;
        }

        return previousValue;
    });
}

module.exports = maxValue;