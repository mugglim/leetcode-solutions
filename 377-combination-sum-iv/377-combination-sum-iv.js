/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
	const dp = new Array(target + 1).fill(-1);

	const backtrack = (x, depth = 1) => {
		if (x === 0) return 1;
		if (dp[x] >= 0) return dp[x];

		let count = 0;

		for (const num of nums) {
			if (x >= num) {
				count += backtrack(x - num, depth + 1);
			}
		}

		dp[x] = count;
		return dp[x];
	};

	backtrack(target);
	return dp[target];
};
