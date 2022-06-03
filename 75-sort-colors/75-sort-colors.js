/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length;
    const counts = new Array(3).fill(0);
    let idx = 0;
    
    for(const num of nums){
        counts[num] += 1;
    }
    
    for(let i = 0; i < 3; i+= 1){
        for(let j = 0; j < counts[i]; j += 1){
            nums[idx++] = i;
        }
    }    
    
};