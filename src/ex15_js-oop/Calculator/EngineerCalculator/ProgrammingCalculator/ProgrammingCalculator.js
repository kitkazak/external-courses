function ProgrammingCalculator() {
    EngineerCalculator.call(this);
}

ProgrammingCalculator.prototype = Object.create(EngineerCalculator.prototype);
ProgrammingCalculator.prototype.constructor = ProgrammingCalculator;

// Перевод из десяточной в двоичную   
ProgrammingCalculator.prototype.decToBin = function(dec) {
    if (this.__isNumeric(num)) {
        console.log(
            (dec >>> 0).toString(2)
        );
    }

    return this;
}

// Перевод из двоичной в десятичную
ProgrammingCalculator.prototype.binToDec = function(bin) {
   if (this.__isNumeric(parseInt(bin, 2))) {
       console.log(parseInt(bin, 2));
   }
   
   return this;
}

ProgrammingCalculator.prototype.abs = function(num) {
    if (this.__isNumeric(num)) {
        this.__state = Math.abs(num);
    }
    return this;
}

ProgrammingCalculator.prototype.log = function(num) {
    if (this.__isNumeric(num)) {
        this.__state = Math.log(num);
    }
    return this;
}