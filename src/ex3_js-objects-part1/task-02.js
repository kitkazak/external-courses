var logKeysAndValues = function(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ': ' + obj[key]);
        }
    }
}

module.exports = logKeysAndValues;