/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    const nums = Array.from(n.toString());
    const { length } = nums;
    
    for(let i = length-3 ; i > 0; i -= 3){
        nums[i] = `.${nums[i]}`;
    }
    
    return nums.join('');
};