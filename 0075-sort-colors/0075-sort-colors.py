class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        r,g,b = 0,0,0
        
        for num in nums:
            if num == 0: r += 1
            if num == 1: g += 1
            if num == 2: b += 1
            
        for i in range(len(nums)):
            if r > 0: 
                nums[i] = 0
                r -= 1
            elif g > 0: 
                nums[i] = 1
                g -= 1
            elif b > 0: 
                nums[i] = 2
                b -= 1
            
            
