var isPropInObj = function(prop, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === prop) return true;
        }
    }

    return false;
}

module.exports = isPropInObj;