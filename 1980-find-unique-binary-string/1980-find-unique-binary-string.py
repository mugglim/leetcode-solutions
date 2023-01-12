class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        n = len(nums)
        decimals = set([int(num,2) for num in nums])
        
        
        for i in range(2 ** n):
            if i not in decimals:
                return bin(i)[2:].zfill(n)
        