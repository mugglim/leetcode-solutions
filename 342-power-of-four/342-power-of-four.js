/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;
    
    return Math.log2(n) % 2 === 0;
};
