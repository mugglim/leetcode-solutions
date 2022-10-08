INF = int(1e10)

class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        costs = [[INF] * n for _ in range(n)]
        res = [0, INF] # node, count
        
        for i in range(n): 
            costs[i][i] = 0
        
        for [a,b,c] in edges:
            costs[a][b] = c
            costs[b][a] = c
        
        for k in range(n):
            for i in range(n):
                for j in range(n):
                    costs[i][j] = min(costs[i][j], costs[i][k] + costs[k][j])
        
        
        for i in range(n):
            cnt = len([cost for cost in costs[i] if cost > 0 and cost <= distanceThreshold])
            
            if cnt <= res[1]:
                res = [i, cnt]
        
        
        return res[0]
        