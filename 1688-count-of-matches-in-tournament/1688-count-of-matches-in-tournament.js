/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let cnt = 0 ;
    
    while(n > 1) {
        if(n % 2 === 0){
            cnt += n / 2;
            n /= 2;
        } else{
            cnt += (n-1) / 2;
            n = (n-1)/2 + 1;
        }
    }
    
    return cnt;
};