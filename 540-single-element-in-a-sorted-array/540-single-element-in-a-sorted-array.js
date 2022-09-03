/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
	if(nums.length === 1) return nums[0];

	let [lo, hi] = [0, nums.length -1];

	while(lo < hi){
		const mid = Math.floor((lo + hi) / 2);
		
		if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) return nums[mid]
	
		const rightSubarrySize = nums[mid] === nums[mid-1] ? (hi - mid) : (hi - mid - 1);
		const isEven = rightSubarrySize % 2 === 0; 
        
		if(nums[mid] === nums[mid-1]){
			if(isEven) hi = mid - 2 
			else lo = mid + 1
		} else{
			if(isEven) hi = mid - 1
			else lo = mid + 2
		}
	}

	return nums[lo];
}
