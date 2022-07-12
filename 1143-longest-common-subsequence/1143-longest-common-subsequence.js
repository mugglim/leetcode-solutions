function *range(s=0,e,step=1){
    if(!e) [s,e] = [0,s]
    
    while(s < e){
        yield s;
        s += step;
    }
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const [n,m] = [text1.length, text2.length];
    const dp = Array.from(new Array(n+1), () => new Array(m+1).fill(0));
    
    for(const i of range(1,n+1)){
        for(const j of range(1,m+1)){
            const xi = text1.at(i-1);
            const yj = text2.at(j-1);
            
            dp[i][j] = xi === yj 
                ? dp[i-1][j-1] + 1 
                : Math.max(dp[i-1][j], dp[i][j-1])
        }
    }
    
    return dp[n][m];
};
