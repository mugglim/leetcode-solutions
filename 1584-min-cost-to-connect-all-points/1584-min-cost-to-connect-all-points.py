class Solution:
    def find(self, x):
        if x == self.parents[x]: return x
        
        self.parents[x] = self.find(self.parents[x])
        return self.parents[x]
        
    def union(self, x, y):
        if x < y: 
            self.parents[y] = self.parents[x]
        else:
            self.parents[x] = self.parents[y]
        
    
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        self.parents = [i for i in range(n)]
        
        heap = []
        costs = 0
        
        for i in range(n):
            for j in range(i+1, n):
                x1,y1 = points[i]
                x2,y2 = points[j]
                cost = abs(x1-x2) + abs(y1-y2) 
                
                heapq.heappush(
                    heap,
                    (cost, i,j)
                )        
        
        while heap:
            cost, i,j = heapq.heappop(heap)
            
            ri, rj = self.find(i), self.find(j)
            if ri == rj: continue
                
            self.union(ri,rj)
            costs += cost
        
        return costs            
            
        