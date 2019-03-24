function myFilter(array, callback) {
    var filteredArr = [];
    
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArr.push(array[i]);
        }
    }

    return filteredArr;
}

module.exports = myFilter;