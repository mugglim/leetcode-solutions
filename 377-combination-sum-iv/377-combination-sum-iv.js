/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
	const dp = new Array(target + 1).fill(-1);

	const backtrack = x => {
		if (x === 0) return 1;
		if (dp[x] >= 0) return dp[x];

		const count = nums.reduce((acc,num) => acc + (x >= num ? backtrack(x-num) : 0), 0);
		dp[x] = count;
		
        return dp[x];
	};

	backtrack(target);
	return dp[target];
};
