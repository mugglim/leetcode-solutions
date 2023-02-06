class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        l = 0
        r = len(nums) - 1
        zero_count = 0
        
        for i in range(len(nums)):
            if nums[i] == 0: 
                zero_count += 1
            else: 
                nums[l] = nums[i]
                l += 1
        
        while zero_count > 0:
            nums[r] = 0
            r -= 1
            zero_count -= 1
        
        