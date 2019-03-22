var checkProp = function(prop, obj) {
    var object = obj;
    var isPropInObj = false;

    for (var key in obj) {
        if (obj.hasOwnProperty(key) && key === prop) {
            isPropInObj = true;
        }
    }

    if (!isPropInObj) object[prop] = 'new';

    return object;
}

module.exports = checkProp;