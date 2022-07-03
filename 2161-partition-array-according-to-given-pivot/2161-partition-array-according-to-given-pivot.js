/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let pivotCount = 0;
    
    const leftArr = [];
    const rightArr = [];
    
    for(const n of nums){
        if(n < pivot) leftArr.push(n)
        if(n === pivot) pivotCount += 1
        if(n > pivot) rightArr.push(n);
    }
    
    return [
        ...leftArr,
        ...new Array(pivotCount).fill(pivot),
        ...rightArr
    ]
};