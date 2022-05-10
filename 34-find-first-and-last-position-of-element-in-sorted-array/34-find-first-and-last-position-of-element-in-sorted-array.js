const getMid = (x,y) => Math.floor((x+y) / 2);

function lowerBound(nums, target){
    let [lo, hi] = [-1, nums.length];
    
    
    while(lo + 1 < hi){
        const mid = getMid(lo,hi);
        
        if(nums[mid] < target) lo = mid
        else hi = mid;
    }
    
    return hi;
}

function upperBound(nums, target){
    let [lo, hi] = [-1, nums.length];
    
    
    while(lo + 1 < hi){
        const mid = getMid(lo,hi);
        
        if(nums[mid] <= target) lo = mid
        else hi = mid;
    }
    
    return hi;
}


var searchRange = function(nums, target) {
    const n = nums.length;
    let mostLeftIdx = lowerBound(nums, target);
    let mostRightIdx = upperBound(nums, target) - 1;
    
    const isExist = (idx) => idx >= 0 && idx < n && nums[idx] === target;
    
    return [mostLeftIdx, mostRightIdx].map(idx => isExist(idx) ? idx : -1);
    
};