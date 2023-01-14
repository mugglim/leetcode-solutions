class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []
        
        for num in nums:
            if len(heap) < k:
                heapq.heappush(heap, num)
            else:
                peek = heap[0]
                if num > peek:
                    heapq.heappop(heap)
                    heapq.heappush(heap, num)
        
        return heap[0]
        