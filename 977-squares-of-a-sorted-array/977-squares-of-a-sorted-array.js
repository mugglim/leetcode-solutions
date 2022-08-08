/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const maxNum = nums.reduce((acc,x) => Math.max(Math.abs(acc), Math.abs(x)), 0);
    const counts = new Array(maxNum + 1).fill(0);
    
    for(const num of nums){
        counts[Math.abs(num)] += 1;
    }
    
    return counts.reduce((acc, count, num) => {
        acc.push(...new Array(count).fill(num ** 2));
        return acc;
    } , [])
};
