class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        counts = {}
        frequents = {i : set() for i in range(1,n+1)}
        result = []
        
        for num in nums:
            if num not in counts: 
                counts[num] = 0
                        
            prevFrequent = counts[num]
            newFrequent = counts[num] + 1
            
            if prevFrequent > 0 and num in frequents[prevFrequent]:
                frequents[prevFrequent].remove(num)
            
            counts[num] = newFrequent
            frequents[newFrequent].add(num)
        
        
        for i in range(n, 0, -1):
            for num in frequents[i]:
                result.append(num)
                
                if len(result) == k: return result
        
    