/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const tileSet = new Set();
    const visited = new Array(tiles.lenth).fill(false);
    const tileArray = Array.from(tiles);
    const n = tiles.length;
    
    const backtrack = (picks, k) => {
        if(picks.length === k){
            const tile = picks.join('');
            
            if(!tileSet.has(tile)){
                tileSet.add(tile)
            }
            return;
        }
        
        tileArray.forEach((tile, index) => {
            if(visited[index]) return;
            
            visited[index] = true;
            picks.push(tile);
            backtrack(picks, k);
            visited[index] = false;
            picks.pop();
        })

    }
    
    for(let i = 1; i <= n; i+= 1){
        backtrack([],i);
    }
    
    return tileSet.size;
};