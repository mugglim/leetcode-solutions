/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const [m,n] = [matrix.length, matrix[0].length];
    let [row, col] = [0, n -1];
    
    
    while(row < m && col >= 0){
        const num = matrix[row][col];
        
        if(num === target) return true;
        
        if(num > target) col -= 1
        if(num < target) row += 1
    }
        
    return false;
};

