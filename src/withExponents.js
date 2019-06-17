var withExponents = function() {
    this.pow = function (a, b) {
        return Math.pow(a, b);
    };
    
    this.multiplyExp = function (a, b){
        return this.pow.apply(this, a) * this.pow.apply(this, b);
    };
    
    this.divideExp = function (a, b) {
        return this.pow.apply(this, a) / this.pow.apply(this, b);
    }; 
}

module.exports = withExponents;