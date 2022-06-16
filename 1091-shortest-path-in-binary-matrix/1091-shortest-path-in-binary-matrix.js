const INF = 10 ** 10;
const DIRS = [
    [-1,0],[1,0],[0,-1],[0,1],        
    [-1,-1], [-1,1], [1,1], [1,-1]
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1) return -1;
    
    const n = grid.length;
    
        
    const is_range = (y,x) => y >= 0 && y < n && x >= 0 && x < n
    
    const bfs = () => {
        const costs = Array.from({length : n}, () => new Array(n).fill(INF));
        const queue = [[0,0,1]];
        
        costs[0][0] = 1;
        
        while(queue.length > 0){
            const [y,x, cost] = queue.shift();   
            const newCost = cost + 1;
            
            
            for(const [dy, dx] of DIRS){
                const [ny,nx] = [y+dy, x+dx];
                
                if(!is_range(ny,nx) || grid[ny][nx] === 1 || newCost >= costs[ny][nx]) continue
                
                costs[ny][nx] = newCost;
                queue.push([ny,nx, newCost]);
            }
        }
        
        return costs[n-1][n-1] === INF ? -1 : costs[n-1][n-1];         
    }

    return bfs();
};



