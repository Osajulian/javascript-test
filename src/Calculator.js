function Calculator() {

   this.add = function (a, b) {
        return a + b;
   }

   this.subtract = function (a, b) {
        return a - b;
   }

   this.multiply = function (a, b) {
       return a * b;
   }

   this.divide = function (a, b) {
       if (b == 0) return Number.NaN;
       return a / b;
   }
}

module.exports = Calculator;