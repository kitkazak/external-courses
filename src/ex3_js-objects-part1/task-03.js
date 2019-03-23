var isPropInObj = function(prop, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && key === prop) {
            return true;
        }
    }

    return false;
}

module.exports = isPropInObj;