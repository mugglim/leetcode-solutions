/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dirs = [[1,0], [0,1]];
    const dp = Array.from(new Array(m+1), () => new Array(n+1).fill(0));

    for(let i = 1; i <= m; i += 1){
        for(let j = 1; j <= n; j += 1){
            dp[i][j] = i === 1 || j === 1
                ? 1
                : dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m][n];
};
