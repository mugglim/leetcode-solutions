const DIRS = {
    0 : [0,1],
    1 : [1,0],
    2 : [0,-1],
    3 : [-1,0]
}

var spiralOrder = function(matrix) {
    const [n,m] = [matrix.length, matrix[0].length];
    const visited = Array.from(new Array(n), () => new Array(m).fill(false));
    const nums = [];    
    let point = [0,0,0];
    
    const getNewPoint = (y,x,dir) => {
        const [dy,dx] = DIRS[dir];
        return [y+dy, x+dx];
    }
    
    
    for(let i = 0; i < n*m; i++){
        let [y,x, dir] = point;
        let [ny,nx] = getNewPoint(y,x,dir);
        
        nums.push(matrix[y][x]);
        visited[y][x] = true;

        if(ny < 0 || ny >= n || nx < 0 || nx >= m || visited[ny][nx]){
            dir = (dir + 1) % 4;
            [ny,nx] = getNewPoint(y,x,dir);
        }
        point = [ny,nx,dir];
        
    }
    
    return nums;
};