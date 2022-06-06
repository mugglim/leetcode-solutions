const lowerBound = (nums, target) => {
    let [lo, hi] = [-1, nums.length];
    
    while(lo + 1 < hi){
        const mid = Math.floor((lo + hi) / 2);
        
        if(nums[mid] < target) lo = mid
        else hi = mid
    }
    
    return hi;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = [nums[0]];
    
    for(const num of nums.slice(1)){
        if(dp[dp.length-1] < num){
            dp.push(num);
        } else{
            const idx = lowerBound(dp, num);
            dp[idx] = num;
        }
    }
    
    return dp.length;        
};