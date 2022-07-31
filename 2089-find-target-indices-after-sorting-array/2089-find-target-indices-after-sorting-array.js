function *range(s=0, e, step=1){
    if(!e) [s,e] = [0,s]
    
    while(s < e){
        yield s;
        s += step;
    }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const MAX_NUM = 100;
    
    const countingSort = (nums, maxNum) => {
        const counts = new Array(maxNum + 1).fill(0);
        nums.forEach(num => counts[num] += 1);
    
        return counts
            .reduce((acc, count, index) => {
                if(count > 0) acc.push(...new Array(count).fill(index));
                return acc;
            }, []);
    }
    
    const findLowerBound = (nums, target) => {
        let [lo, hi] = [-1, nums.length];
        
        while(lo + 1 < hi){
            const mid = Math.floor((lo + hi) / 2);
            
            if(nums[mid] < target){
                lo = mid;
            } else {
                hi = mid;
            }
        }
        
        return hi;
    }
    
    const findUpperBound = (nums, target) => {
        let [lo, hi] = [-1, nums.length];
        
        while(lo + 1 < hi){
            const mid = Math.floor((lo + hi) / 2);
            
            if(nums[mid] <= target){
                lo = mid;
            } else {
                hi = mid;
            }
        }
        
        return hi;
    }
    
    
    const sortedNums = countingSort(nums, MAX_NUM);
    
    const lowerBound = findLowerBound(sortedNums, target);
    const upperBound = findUpperBound(sortedNums, target);
    
    return Array
        .from(range(lowerBound, upperBound));
};

