var Calculator = {
    state: 0,

    __isNumeric: function(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    },

    getResult: function() {
        return this.state;
    },

    setState: function(num) {
        if (this.__isNumeric(num)) {
            this.state = num;    
        }
        return this;
    },

    add: function(num) {
        if (this.__isNumeric(num)) {
            this.state += num;
        }
        return this;
    },

    subtract: function(num) {
        if (this.__isNumeric(num)) {
            this.state -= num;
        }
        return this;
    },

    multiply: function(num) {
        if (this.__isNumeric(num)) {
            this.state *= num;
        }
        return this;
    },

    divide: function(num) {
        if (this.__isNumeric(num)) {
            this.state /= num;
        }
        return this;
    },

    reset: function() {
        this.state = 0;
        return this;
    },

    fetchData: function(callback) {
        setTimeout(function() {
            callback(500);
        }, 1000);
        
        return this;
    }
};

module.exports = Calculator;