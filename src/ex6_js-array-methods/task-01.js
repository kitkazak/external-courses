function mySlice(array, begin, end) {
    var slicedArr = [],
        // lint: no-param-reassign
        start = begin ? begin : 0,
        finish = end ? end : array.length;

    if (start >= 0 && finish >= 0) {
        for (var i = start; i < finish; i++) {
            slicedArr.push(array[i]);
        }   
    } else if (start >= 0 && finish <= -1) {
        for (i = start; i < array.length + end; i++) {
            slicedArr.push(array[i]);
        }
    } else if (start <= -1 && finish >= 0 && (array.length + start < finish)) {
        for (i = array.length + start; i < finish; i++) {
            slicedArr.push(array[i]);
        }
    } else if (start <= -1 && finish <= -1 && (array.length + start < array.length + finish)) {
        for (i = array.length + start; i < array.length + finish; i++) {
            slicedArr.push(array[i]);
        }
    }

    return slicedArr;
}

module.exports = mySlice;