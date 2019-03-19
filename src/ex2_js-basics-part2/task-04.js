var areElemsTheSame = function(arr) {
    var result;
    
    for (var i = 1; i < arr.length; i++) {
        // result = (arr[i] === arr[i - 1]) ? true : false;
        
        if (arr[i] === arr[i - 1]) {
            result = true;
        } else {
            result = false;
        }
        
        if (result === false) break;
    }

    return result;
}

module.exports = areElemsTheSame;
