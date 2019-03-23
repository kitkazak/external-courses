var searchAtProto = function(prop, obj) {
    for (var key in obj) {
        if (!obj.hasOwnProperty(key) && key === prop) {
            return obj[key];
        }
    }

    return undefined;
}

module.exports = searchAtProto; 