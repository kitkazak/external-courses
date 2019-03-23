var checkProp = function(prop, obj) {
    // linter doesn't allow to create new properties at object-argument 
    var object = obj;  

    for (var key in object) {
        if (object.hasOwnProperty(key) && key === prop) {
            return object;
        }
    }
    
    object[prop] = 'new';
    return object;
}

module.exports = checkProp;