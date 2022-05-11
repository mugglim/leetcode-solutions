const sum = (arr) => arr.reduce((a,b) => a+b, 0);

var countVowelStrings = function(n) {

    const dp = Array.from(Array(51), () => Array(5).fill(0));    
    dp[1] = [1,1,1,1,1];

    for(let i = 2; i <= n ; i++){
        for(let j = 0; j < 5; j++){
            dp[i][j] = sum(dp[i-1].slice(j));
        }
    }
    
    return sum(dp[n]);
};