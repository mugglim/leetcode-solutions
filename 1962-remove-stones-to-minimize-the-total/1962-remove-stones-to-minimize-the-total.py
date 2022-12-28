class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        heap = []
        
        for pile in piles:
            heapq.heappush(heap, -pile);
        
        for _ in range(k):
            peek = -heapq.heappop(heap)
            remove = peek // 2
            heapq.heappush(heap, -(peek - remove))
        
        
        return -(sum(heap))
            