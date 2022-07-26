const DIRS = [[-1,0],[1,0],[0,-1],[0,1]];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const [m,n] = [grid.length, grid[0].length];
    let maxElapse = 0;

    const isOut = (y,x) => y < 0 || y >= m || x < 0 || x >= n;

    const isExistFreshOrange = grid => grid.some(row => row.some(val => val === 1));
    
    const rottenOranges = grid.reduce((acc,row,i) => {
        row.forEach((val, j) => {
            if(val === 2) acc.push([i,j,0]);
        })
        return acc;
    }, [])
    
    
    while(rottenOranges.length > 0){
        const [y,x, elapse] = rottenOranges.shift();
        maxElapse = Math.max(maxElapse, elapse); 
        
        for(const [dy,dx] of DIRS){
            const [ny,nx] = [y+dy, x+dx];
            if(isOut(ny,nx) || grid[ny][nx] !== 1) continue
            grid[ny][nx] = 2
            rottenOranges.push([ny,nx,elapse + 1]);
        }
    }
    
    
    return isExistFreshOrange(grid) ? -1 : maxElapse;      
};
