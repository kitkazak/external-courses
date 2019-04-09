var cloneObj = function(obj) {
    var clonedObj = {};

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = obj[key];
        }
    }

    return clonedObj;

}

module.exports = clonedObj;