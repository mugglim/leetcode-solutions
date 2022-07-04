/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const positiveNums = nums.filter(x => x > 0);
    const negativeNums = nums.filter(x => x < 0);
    const result = [];
    
    positiveNums.forEach((num, idx) => {
        result.push(num, negativeNums[idx])
    })
        
    return result;
};