const getMid = (x,y) => Math.floor((x+y) / 2);

const binarySearch = (nums, target) => {
    let [lo, hi] = [0, nums.length-1];
    
    while(lo <= hi){
        const mid = getMid(lo,hi);
        
        if(nums[mid] === target) return mid;
        
        if(nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
     }
    
    return -1;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const [m,n] = [matrix.length, matrix[0].length];
    
    for(const row of matrix){
        // (1) find target in row with binary search
        const targetIndex = binarySearch(row, target);
        
        // (2) validate targetIndex
        if(targetIndex !== -1) return true;
    }
    
    // (3) target not found
    return false;
};

