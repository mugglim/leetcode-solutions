function *range(s=0, e, step=1){
    if(!e) [s,e] = [0,s]
    
    while(s < e){
        yield s;
        s += step;
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // @Kadane's algorithm
    const n = nums.length;
    const sums = new Array(n).fill(0);
    
    sums[0] = nums[0];
    
    for(const i of range(1,n)){
        sums[i] = Math.max(nums[i], nums[i] + sums[i-1]);
    }
    
    return Math.max(...sums);
};
