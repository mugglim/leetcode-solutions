const range = (s=1, e, step=1) => {
    if(!e) [s,e] = [0,s]
    
    const nums = [];
    
    for(let i=s; i<e; i+=step){
        nums.push(i);
    }
    
    return nums;
}


var islandPerimeter = function(grid) {  
    const [n,m] = [grid.length, grid[0].length];
    const visited = Array.from({length : n}, () => new Array(m).fill(false));
    const dirs = [[-1,0], [1,0], [0,-1], [0,1]];
    let perimeter = 0;
    
    const isRangeOut = (y,x) => y < 0 || y >= n || x < 0 || x >= m
    
    const countPerimeter = (sy,sx) => {
        const queue = [[sy,sx]];
        let perimeter = 0;
        
        visited[sy][sx] = true;
        
        while(queue.length > 0){
            const [y,x] = queue.shift();
            
            for(const [dy,dx] of dirs){
                const [ny,nx] = [y+dy, x+dx];
                
                if(isRangeOut(ny,nx) || grid[ny][nx] === 0){
                    perimeter += 1;
                    continue;
                }

                if(visited[ny][nx]) continue

                
                visited[ny][nx] = true;
                queue.push([ny,nx]);
            }
            
        }
        
        return perimeter;
        
    }
    
    for(const i of range(n)){
        for(const j of range(m)){
            if(grid[i][j] === 1 && !visited[i][j]) {
                perimeter += countPerimeter(i,j); 
            }
        }
    }
    
    return perimeter;
};