/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const dic = {
        'N' : [-1,0],
        'S' : [1,0],
        'E' : [0,1],
        'W' : [0,-1]
    }
    
    const visited = new Set(['(0,0)']);
    
    const [iy, ix] = [0,0];
    let [cy,cx] = [iy, ix];
    
    for(const dir of path){
        const [dy,dx] = dic[dir];
        [cy,cx] = [cy+dy, cx+dx];
        
        const curr = `(${cy},${cx})`;
        
        if(visited.has(curr)) return true;
        visited.add(curr);
    }
    
    return false;
};

