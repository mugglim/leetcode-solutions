const INF = 987654321;
const DIRS = [[-1,0], [1,0], [0,-1], [0,1]];

const range = (s=0,e=0,step=1) => {
    if(s > e) [s,e] = [e,s];
    
    const res = [];
    for(let i=s; i < e; i+=step){
        res.push(i);
    }
    return res;
}


var maxDistance = function(grid) {
    const n = grid.length;
    const visited = Array.from({length : n}, () => Array(n).fill(false));
    const queue = [];
    let waterCount = 0;
    let result = -1;
    
    const isOutPoint = (y,x) => y < 0 || y >= n || x < 0 || x >= n
    
    for(const i of range(n)){
        for(const j of range(n)){
            if(grid[i][j] === 1){
                queue.push([i,j,0, ++waterCount]);
            }
        }
    }    
    
    while(queue.length){
        const [y,x, cost, waterNum] = queue.shift();
        
        for(const [dy,dx] of DIRS){
            const [ny,nx] = [y+dy, x+dx];
            if(isOutPoint(ny, nx) || grid[ny][nx] === 1 || visited[ny][nx]) continue
            
            visited[ny][nx] = true;
            queue.push([ny,nx, cost+1, waterNum])
            result = Math.max(result, cost + 1);
        }        
    }
    
    return result;  
        
};