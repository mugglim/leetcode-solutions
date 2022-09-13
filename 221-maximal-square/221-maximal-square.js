/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const [m,n] = [matrix.length, matrix[0].length];
    const dp = Array.from(new Array(m), () => new Array(n).fill(0));

    const findLargestSquareSize = () => {
        return dp.reduce((largestSize, row) => Math.max(largestSize, Math.max(...row)),0);
    }
    
    
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(i === 0 || j === 0) {
                dp[i][j] = Number(matrix[i][j]);
                continue
            }
            if(matrix[i][j] === '0') continue
            
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
        }
    }
    
    const largestSquareSize = findLargestSquareSize();
    
    return largestSquareSize === 0 ? 0 : largestSquareSize ** 2;
};
