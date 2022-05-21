/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {    
    const n = nums.length;
    let hi = 0;
    
    const swap = (lo,hi) => ([nums[lo], nums[hi]] = [nums[hi], nums[lo]]);

    for(let lo=0; lo < n ; lo += 1){
        if(nums[hi] !== 0) {
            hi += 1;
            continue;
        }
        
        while(hi < n && nums[hi] == 0) hi += 1;        
        if(hi < n) swap(lo,hi);
        
        console.log(lo,hi);
    }
    
};