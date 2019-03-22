var deepClone = function(obj) {
    var clonedObj = {};

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (Array.isArray(obj[key])) {
                var clonedArr = [];

                for (var i = 0; i < obj[key].length; i++) {
                    if (typeof obj[key][i] === 'object') {
                        clonedArr.push(deepClone(obj[key][i]));
                    } else {
                        clonedArr.push(obj[key][i]);
                    }
                }

                clonedObj[key] = clonedArr;

            } else if (typeof obj[key] === 'object') {
                clonedObj[key] = deepClone(obj[key]);
            } else {
                clonedObj[key] = obj[key];
            }
        }
    }

    return clonedObj;
}

module.exports = deepClone; 