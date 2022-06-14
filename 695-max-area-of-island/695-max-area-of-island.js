const range = (s=0,e,step=1) => {
    if(!e) [s,e] = [0, s]
    
    const nums = [];
    
    for(let i = s; i<e; i+= step){
        nums.push(i);
    }
    
    return nums;
}


var maxAreaOfIsland = function(grid) {
    const [n,m] = [grid.length, grid[0].length];
    const dirs = [[-1,0], [1,0], [0,-1], [0,1]];
    const visited = Array.from(new Array(n), () => new Array(m).fill(false));
    let maxArea = 0;

    const isNotRange = (y,x) => {
        return y < 0 || y >= n || x < 0 || x >= m;
    }
    
    const dfs = (y,x) => {        
        if(isNotRange(y,x)) return 0;
        if(visited[y][x]) return 0;
        if(grid[y][x] === 0) return 0;
            
        let mapArea = 1;
        visited[y][x] = true;
        
        for(const [dy,dx] of dirs){
            const [ny,nx] = [y+dy, x+dx];
            mapArea += dfs(ny,nx);
        }
        
        return mapArea;
    }
    
 
    for(const y of range(n)){
        for(const x of range(m)){
            if(!visited[y][x] && grid[y][x] === 1){
                maxArea = Math.max(maxArea, dfs(y,x));
            }
        }
    }
    
    return maxArea;
};

