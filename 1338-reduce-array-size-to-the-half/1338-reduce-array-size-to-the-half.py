from heapq import heappush, heappop

class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        half = len(arr) / 2

        count_dic = {}
        heap = []
        choose = 0
        deleted = 0
        
        # (1) count elements
        for num in arr:
            if num not in count_dic: count_dic[num] = 0
            count_dic[num] += 1
        
        # (2) input element to maxHeap e.g) {-count,num}
        for num,count in count_dic.items():
            heappush(heap, (-count, num))
        
        # (3) pop element in maxHeap
        while heap and deleted < half:
            count, _ = heappop(heap)
            
            choose += 1
            deleted += -count
            
        
        return choose
