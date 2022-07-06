const DIRS = [[-1,0], [1,0], [0,-1],[0,1]];
const MAX_SIZE = 8;

const range = (s=0,e,step=1) => {
    if(!e) [s,e] = [0,s];
    
    const nums = [];
    
    for(let i=s; i<e; i+=step){
        nums.push(i);
    }
    
    return nums;
}

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let pawn = 0;
    
    const moveRock = (y,x, dir) => {
        if(y < 0 || y >= MAX_SIZE || x < 0 || x >= MAX_SIZE) return 0
        if(board[y][x] === "B") return 0;
        if(board[y][x] === "p") return 1;
        
        const [dy,dx] = DIRS[dir];
        const [ny,nx] = [y+dy, x+dx];
        return moveRock(ny,nx,dir);
    }
    
    for(const i of range(MAX_SIZE)){
        for(const j of range(MAX_SIZE)){
            if(board[i][j] !== "R") continue;
            
            for(const k of range(4)){
                pawn += moveRock(i,j,k);
            }
        }
    }
    
    return pawn;
};