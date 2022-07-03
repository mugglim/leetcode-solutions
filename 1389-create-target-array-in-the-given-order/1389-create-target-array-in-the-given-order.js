/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];
    
    const zip = (arrA, arrB) => arrA.reduce((acc,val, idx) => acc.concat([[val, arrB[idx]]]),[]);

    // !NOT pure
    const insert = (idx,val) => target.splice(idx, 0, val)
    
    for(const [val, idx] of zip(nums,index)){
        insert(idx, val);
    }
    
    return target;
};