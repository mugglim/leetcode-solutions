/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const rowSize = nums.length;
    const counts = new Array(1001).fill(0);
    
    for(const row of nums){
        for(const col of row){
            counts[col] += 1;
        }
    }
    
    return counts.reduce((acc, count, num) => {
        if(count === rowSize) acc.push(num)
        return acc;
    }, [])
};
