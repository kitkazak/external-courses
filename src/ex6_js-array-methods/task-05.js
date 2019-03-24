function myMap(array, callback) {
    var mappedArr = [];

    for (var i = 0; i < array.length; i++) {
        mappedArr.push(callback(array[i], i, array));
    }

    return mappedArr;
}

module.exports = myMap;