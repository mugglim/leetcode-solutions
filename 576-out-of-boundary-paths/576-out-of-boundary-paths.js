const MOD = 10 ** 9 + 7;
const DIRS = [[-1,0], [1,0], [0,-1], [0,1]];

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    if(maxMove === 0) return 0;
    
    const dp = Array.from(new Array(m), () => Array.from(new Array(n), () => new Array(maxMove+1).fill(-1)));
    const isWithinRange = (y,x) => 0 <= y && y < m && 0 <= x && x < n;
    
    const move = (y,x, moveCount) => {
        if(moveCount < 0) return 0;
        if(!isWithinRange(y,x)) return 1;
        if(dp[y][x][moveCount] !== -1) return dp[y][x][moveCount];
        
        let balls = 0;
        
        for(const [dy,dx] of DIRS){
            const [ny,nx] = [y+dy, x+dx];
            balls += move(ny,nx,moveCount-1) % MOD;
        }
        
        dp[y][x][moveCount] = balls % MOD;
        return dp[y][x][moveCount];
    }
    
    move(startRow,startColumn, maxMove);
    return dp[startRow][startColumn][maxMove];
};
