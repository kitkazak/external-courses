/**
 * Финансовый калькулятор
 * Наследует от бухгалтерского калькулятора
 */

function FinancialCalculator() {
    AccountantCalculator.call(this);
}

FinancialCalculator.prototype = Object.create(AccountantCalculator.prototype);
FinancialCalculator.prototype.constructor = FinancialCalculator;

/**
 * Расчёт аннуительного платежа
 * S — первоначальная сумма кредита
 * P — процентная ставка
 * N — количество месяца
 */
FinancialCalculator.prototype.annuity = function(S, P, N) {
    this.__state = 
    S * ((P / 12) + ((P / 12) / (Math.pow((1 + P), N) - 1)));
    return this;
}

/**
 * Расчёт дисконтиования
 * FV — будующая стоимость
 * R — ставка процента
 * N — число лет от даты в будущем до текущего момента
 */
FinancialCalculator.prototype.discounting = function(FV, R, N) {
    this._state = FV * (1 / Math.pow((1 + R), N));
    return this;
}