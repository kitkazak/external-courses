var isItNumberOrIsItString = function(it) {
    if (isNaN(it)) return undefined;

    if (typeof it === 'number' || typeof it === 'string') {
        return typeof it;    
    }

    return undefined;
}

module.exports = isItNumberOrIsItString;