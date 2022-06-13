const range = (s=0,e,step=1) => {
    if(!e) [s,e] = [0,s]
    
    const nums = [];
    for(let i = s; i < e; i += step){
        nums.push(i);
    } 
    
    return nums;
}

var minimumTotal = function(triangle) {
    const n = triangle.length;
    const dp = range(1,n+1).map(x => new Array(x).fill(0));
    
    dp[0][0] = triangle[0][0]
    
    
    for(const i of range(1,n)) dp[i][0] = dp[i-1][0] + triangle[i][0] 
    for(const i of range(1,n)) dp[i][i] = dp[i-1][i-1] + triangle[i][i] 
    
    for(const i of range(1, n)){
        for(const j of range(1, i)){
            dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j];
        }
    }
    
    return Math.min(...dp[n-1]);
};