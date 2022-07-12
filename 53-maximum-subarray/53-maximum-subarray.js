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
    let sum = nums[0];
    let maxSum = nums[0];
    
    for(const i of range(1,n)){
        sum = Math.max(nums[i], sum + nums[i]);
        maxSum = Math.max(sum, maxSum);
    }
    
    return maxSum;
};
