const range = (s=0,e,step=1) => {
    if(!e) [s,e] = [0,s]
    const nums = [];
    let i = s;
    
    while(i < e){
        nums.push(i);
        i += step;
    }
    
    return nums;
};

var shiftGrid = function(grid, k) {
    const [n,m] = [grid.length, grid[0].length];
    const newGrid = Array.from({length : n }, () => new Array(m).fill(0));
    
    const getNewPos = (i,j,k) => {
        const sum = Math.floor((i*m + j + k) % (n*m));
        return [Math.floor(sum/m), sum % m]
    }
    
    for(const i of range(n)){
        for(const j of range(m)){
            const [ni,nj] = getNewPos(i,j,k);
            newGrid[ni][nj] = grid[i][j];
        }
    }
        
    return newGrid;
};