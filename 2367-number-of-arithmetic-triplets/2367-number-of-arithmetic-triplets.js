function *range(e, step = 1){
    let s = 0;
    
    while(s < e){
        yield s;
        s += step;
    }
}

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    
    for(let i = 0; i < nums.length -2; i++){
        for(let j = i+1; j < nums.length -1; j++){
            const diff1 = nums[j] - nums[i];
            if(diff1 !== diff) continue;
            
            for(let k = i+2; k < nums.length; k++){
                const diff2 = nums[k] - nums[j];
                if(diff2 === diff) count += 1;
                if(diff2 > diff) break;
            }
        }
    }
    
    return count;    
};
