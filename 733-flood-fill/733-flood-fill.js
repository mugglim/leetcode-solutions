/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const [n,m] = [image.length, image[0].length];
    const visited = Array.from({length : n}, () => Array.from(m).fill(false));
    const dirs = [[-1,0], [1,0], [0,1], [0,-1]];
    const queue = [[sr,sc, image[sr][sc]]];

    const isRange = (y,x) => 0 <= y && y < n & 0 <= x && x < m;
    
    visited[sr][sc] = true;
    image[sr][sc] = color;
    
    
    while(queue.length > 0) {
        const [y,x, prevColor] = queue.shift();
        
        for(const [dy,dx] of dirs){
            const [ny,nx] = [y+dy, x+dx];
            
            if(!isRange(ny,nx) || visited[ny][nx] || prevColor !== image[ny][nx]) continue
            
            visited[ny][nx] = true;
            image[ny][nx] = color;
            queue.push([ny,nx, prevColor]);
        }
    }
    
    return image;
};