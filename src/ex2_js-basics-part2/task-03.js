var countOddEvenZeroElements = function(arr) {
    var result = [0, 0, 0];

    arr.forEach(element => {
        if (element == null) {
        // null isn't considered as a zero element
            return;
        } else if (element == 0) {
            result[2]++;
        } else if (element % 2 == 0) {
            result[0]++;
        } else if (element % 2 == 1) {
            result[1]++;
        }        
    });

    return result;
}

module.exports = countOddEvenZeroElements;