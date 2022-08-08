const MAX = 2 ** 31 - 1;
const MIN = - (2 ** 31);

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0) return 0;
    
    let isMinus = x < 0;
    let result = 0;
    
    if(isMinus){
        x = Math.abs(x);
    }

    
    while(x > 0){
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    if(isMinus){
        result = -result;        
    }
    
    
    return result < MIN || result > MAX ? 0 : result;
};
