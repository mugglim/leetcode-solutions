/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let [lo, hi] = [0, numbers.length -1];
    
    while(lo < hi){
        const sum = numbers[lo] + numbers[hi];
        
        if(sum === target) return [lo+1, hi+1]
        else if(sum < target) lo += 1
        else hi -= 1
    }
    
};