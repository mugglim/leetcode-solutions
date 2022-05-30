/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const n = s.length;
    const half = Math.floor(n / 2);
    
    for(let i = 0; i < half; i++){
        [s[i], s[n-i-1]] = [s[n-i-1], s[i]];
    }
    
};