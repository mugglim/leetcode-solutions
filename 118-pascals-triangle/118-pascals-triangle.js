/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const nums = Array.from(Array(numRows), (_ , i) => i);
    const dp = nums.map(num => Array(num+1).fill(0));
    
    
    for(const i of nums){
        [dp[i][0], dp[i][i]] = [1,1];
    }    
    
    for(const i of nums.slice(1, -1)){
        for(const j of nums.slice(0,i)){
            dp[i+1][j+1] = dp[i][j] + dp[i][j+1]; 
        }
    }
    
    
    return dp;
};