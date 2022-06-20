const DIRS = [[-1,0], [1,0], [0,1], [0,-1]];
const range = (s=0,e,step=1) => {
    if(!e) [s,e] = [0,s]
    const nums = [];
    
    for(let i=s; i<e; i+= step) nums.push(i);

    return nums;
}

var countServers = function(grid) {
    const [n,m] = [grid.length, grid[0].length];
    const visited = Array.from({length : n}, () => new Array(m).fill(false));    
    let serverCount = 0;
    
    const isRangeOut = (y,x) => y < 0 || y >= n || x < 0 || x >=m;

    const countServer = (sy,sx) => {
        let count = 1;
        const queue = [[sy,sx, DIRS]];
        
        visited[sy][sx] = true;
        
        while(queue.length > 0){
            const [y,x, dirs] = queue.shift();
            
            for(const [dy,dx] of dirs){
                const [ny,nx] = [y+dy, x+dx];
                if(isRangeOut(ny,nx) || visited[ny][nx]) continue
            
                if(grid[ny][nx] === 0){
                    queue.push([ny,nx, [[dy,dx]]]);                    
                } else{
                    visited[ny][nx] = true;
                    queue.push([ny,nx, DIRS]);
                    count += 1;
                }
            }
        }
        
        return count;
    }
    
    
    for(const y of range(n)){
        for(const x of range(m)){
            if(!visited[y][x] && grid[y][x] === 1){
                const tmp = countServer(y,x);
                serverCount += tmp === 1 ? 0 : tmp;
            }
        }
    }
    
    return serverCount;
};

