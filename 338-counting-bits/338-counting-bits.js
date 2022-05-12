/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = [0];
    
    for(let i=1; i<=n; i++){
        const exponent = Math.floor(Math.log2(i));
        const mod = 2 ** exponent;
        dp.push(dp[i % mod] + 1);
    }
    
    return dp;
};