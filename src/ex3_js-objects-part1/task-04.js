var checkProp = function(prop, obj) {
    var object = obj;

    if (!object.hasOwnProperty(prop)) {
        object[prop] = 'new';
    }

    return object;
}

module.exports = checkProp;