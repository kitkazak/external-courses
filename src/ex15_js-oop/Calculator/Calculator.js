function Calculator() {
    this.__state = 0;
}

Calculator.prototype = Object.create(Object.prototype);
Calculator.prototype.constructor = Calculator;

Calculator.prototype.__isNumeric = function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);   
}

Calculator.prototype.getState = function() {
    return this.__state;
}

Calculator.prototype.add = function(num) {
    if (this.__isNumeric(num)) {
        this.__state += num;
    }
    return this;
}

Calculator.prototype.subtract = function(num) {
    if (this.__isNumeric(num)) {
        this.__state -= num;
    }
    return this;
}

Calculator.prototype.multiply = function(num) {
    if (this.__isNumeric(num)) {
        this.__state *= num;
    }
    return this;
} 

Calculator.prototype.divide = function(num) {
    if (this.__isNumeric(num)) {
        this.__state /= num;
    }
    return this;
}

