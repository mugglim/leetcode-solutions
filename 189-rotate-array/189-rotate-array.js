/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    
    const swap = (i,j) => ([nums[i], nums[j]] = [nums[j], nums[i]])
    
    const reverse = (lo, hi) => {
        while(lo < hi){
            swap(lo, hi);
            lo += 1;
            hi -= 1;
        }
    }

    k %= n;
    reverse(0, n-1); 
    reverse(0, k-1);
    reverse(k, n-1);
};

