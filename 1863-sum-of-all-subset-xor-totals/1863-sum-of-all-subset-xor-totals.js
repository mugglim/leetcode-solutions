function range(s=0,e,step=1){
    if(!e) [s,e] = [0,s]
    const nums = [];
    
    for(let i=s; i<e; i+= step){
        nums.push(i);
    }
    
    return nums;
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let xorSum = 0;
    const combination = (nums, k) => {
        const result = [];
        const backtrack = (picks, rest) => {
            if(picks.length === k) {
                result.push([...picks]);
                return;
            }
            
            rest.forEach((num, idx) => backtrack([...picks, num], rest.slice(idx+1)));
            
        }
        
        backtrack([], nums);
        return result;
    }
    
    return range(1, nums.length + 1)
            .flatMap(k => combination(nums,k))
            .map(nums => nums.reduce((a,b) => a ^ b))
            .reduce((a,b) => a+b)
    
};