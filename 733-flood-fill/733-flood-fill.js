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
    const isRange = (y,x) => 0 <= y && y < n & 0 <= x && x < m;
    const prevColor = image[sr][sc];
    
    const dfs = (y,x) => {
        visited[y][x] = true;
        image[y][x] = color;
        
        for(const [dy,dx] of dirs){
            const [ny,nx] = [y+dy, x+dx];
            if(isRange(ny,nx) && !visited[ny][nx] && prevColor === image[ny][nx]){
                dfs(ny,nx);
            }
        }
    }
    
    dfs(sr,sc);
    return image;
};


