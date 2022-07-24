/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const prefixSumMap = new Map();
    let prefixSum = 0;
    let count = 0;
    
    for(let i = 0; i < nums.length; i += 1){
        const num = nums[i];
        prefixSum += num;
        
        // (1-1) check full prefix sum block
        if(prefixSum === k){
            count += 1;
        }
        
        // (1-2) check sub prefix sum block
        if(prefixSumMap.has(prefixSum - k)){
            count += prefixSumMap.get(prefixSum - k);
        }
        
        // (2) store prefix sum 
        if(!prefixSumMap.has(prefixSum)){
            prefixSumMap.set(prefixSum, 1);
        } else{
            prefixSumMap.set(prefixSum, prefixSumMap.get(prefixSum) + 1);
        }
    }
    
    return count;
};
