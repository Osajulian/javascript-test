var Calculator = require('./Calculator.js');


function ScientificCalculator() {
    Calculator.call(this);

    this.tan = function(x) {
        return Math.tan(x);
    }
    this.cos = function(x) {
        return Math.cos(x);
    }
    this.sin = function(x) {
        return Math.sin(x);
    }
    this.log = function(x) {
        return Math.log(x);
    }
}

ScientificCalculator.prototype = Object.create(Calculator.prototype);

module.exports = ScientificCalculator;