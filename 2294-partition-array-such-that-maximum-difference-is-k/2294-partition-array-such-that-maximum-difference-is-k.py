class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        n = len(nums)
        cnt = 0
        
        l,r = 0, 0

        nums.sort(reverse=True)
        print(nums)

        while l < n:
            while(r < n and nums[l] - nums[r] <= k):
                r += 1
            
            l = r
            cnt += 1
            if r >= n: break    

        return cnt
        



