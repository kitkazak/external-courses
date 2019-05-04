/**
 * Инженерный калькулятор
 */

function EngineerCalculator() {
    Calculator.call(this);
}

EngineerCalculator.prototype = Object.create(Calculator.prototype);
EngineerCalculator.prototype.constructor = EngineerCalculator;

EngineerCalculator.prototype.sin = function() {
    this.__state = Math.sin(this.__state);
    return this;
}

EngineerCalculator.prototype.cos = function() {
    this.__state = Math.cos(this.__state);
    return this;
}

EngineerCalculator.prototype.pow = function(num) {
    if (this.__isNumeric(num)) {
        this.__state = Math.pow(this.__state, num);
    }
    return this;
}