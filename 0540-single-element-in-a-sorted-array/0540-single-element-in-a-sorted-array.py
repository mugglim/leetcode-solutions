class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        if len(nums) == 1: return nums[0]
        
        lo, hi = 0, len(nums) - 1
        
        while lo < hi:
            mid = (lo + hi) // 2
            
            if nums[mid] != nums[mid-1] and nums[mid] != nums[mid+1]: return nums[mid]
            
            rightArraySize = hi - mid if nums[mid] == nums[mid-1] else hi - (mid + 1)
            
            if nums[mid] == nums[mid-1]:
                if rightArraySize % 2 == 0: hi = mid - 2
                else: lo = mid + 1
            else:
                if rightArraySize % 2 == 0: hi = mid - 1
                else: lo = mid + 2
        
        return nums[lo]