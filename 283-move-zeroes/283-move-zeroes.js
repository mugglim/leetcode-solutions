/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {    
    const n = nums.length;
    let hi = 0;

    for(let lo=0; lo < n ; lo += 1){
        if(nums[hi] !== 0) hi = lo;
        
        while(hi < n && nums[hi] == 0) hi += 1;        
        
        if(hi < n) {
            [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
        }
        
        console.log(lo,hi);
    }
    
};



