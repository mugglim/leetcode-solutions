class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1: return 0

        dp = [0] * n
        
        for i in range(n):
            for j in range(1, nums[i] + 1):
                if i + j >=n: continue
                if dp[i+j] == 0: dp[i+j] = dp[i] + 1
        
        return dp[n-1]
    