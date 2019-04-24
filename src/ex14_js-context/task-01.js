var Calculator = {
    state: 0,

    getResult: function() {
        return this.state;
    },

    setState: function(num) {
        if (num !== undefined) {
            this.state = num;    
        }
        return this;
    },

    add: function(num) {
        if (num !== undefined) {
            this.state += num;
        }
        return this;
    },

    subtract: function(num) {
        if (num !== undefined) {
            this.state -= num;
        }
        return this;
    },

    multiply: function(num) {
        if (num !== undefined) {
            this.state *= num;
        }
        return this;
    },

    divide: function(num) {
        if (num !== undefined) {
            this.state /= num;
        }
        return this;
    },

    reset: function() {
        this.state = 0;
        return this;
    },

    fetchData: function(callback) {
        if ( !isNaN(callback(500)) ) {
            this.state = 500;
        } 
        
        return this;
    }
};

module.exports = Calculator;