Calculator = {
    __state__: 0,

    add: function(num) {
        // to check if argument is a number
        if (!isNaN(parseFloat(num)) && isFinite(num)) {
            Calculator.__state__ += num;
        }

        return this.add;
    },

    subtract: function(num) {
        if (!isNaN(parseFloat(num)) && isFinite(num)) {
            Calculator.__state__ -= num;
        }
        
        return this.subtract;
    },

    divide: function(num) {
        if (!isNaN(parseFloat(num)) && isFinite(num)) {
            Calculator.__state__ /= num;
        }
        
        return this.divide;
    },

    multiply: function(num) {
        if (!isNaN(parseFloat(num)) && isFinite(num)) {
            Calculator.__state__ *= num;
        }
        
        return this.multiply;
    },

    getResult: function() {
        return this.__state__;
    },

    reset: function() {
        this.__state__ = 0;
    }
}

module.exports = Calculator;