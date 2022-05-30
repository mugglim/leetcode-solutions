/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let zeroCount = 0;
    
    while(n >= 5){
        zeroCount += Math.floor(n/5);
        n /= 5;
    }
    
    return zeroCount;
};