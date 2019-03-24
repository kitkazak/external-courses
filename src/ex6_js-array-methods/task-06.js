function myReduce(array, callback, initialValue) {
    var reducedValue;

    if (initialValue === undefined) {
        reducedValue = array[0];
        var startIndex = 1;
    } else {
        reducedValue = initialValue;
        startIndex = 0;
    }
    
    for (var i = startIndex; i < array.length; i++) {
        reducedValue = callback(reducedValue, array[i], i, array);
    }

    return reducedValue;
}

module.exports = myReduce;