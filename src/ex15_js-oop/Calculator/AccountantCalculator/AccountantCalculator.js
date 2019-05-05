/**
 * Бухгалтерский калькулятор
 * Наследует от Calculator
 */

function AccountantCalculator() {
    Calculator.call(this);
}

AccountantCalculator.prototype = Object.create(Calculator.prototype);
AccountantCalculator.prototype.constuctor = AccountantCalculator;

AccountantCalculator.prototype.round = function() {
    this.__state = Math.round(this.__state);
    return this;
}

AccountantCalculator.prototype.rubToUsd = function(rub) {
    if (this.__isNumeric(rub)) {
        console.log( `${parseFloat((rub / 60).toFixed(2))}$` );
    } else {
        console.log('Input value must be a number!');
    }

    return this;
}

AccountantCalculator.prototype.usdToRub = function(usd) {
    if (this.__isNumeric(usd)) {
        console.log( `${parseFloat((usd * 60).toFixed(2))}₽`);
    } else {
        console.log('Input value must be a number!');
    }

    return this;
}