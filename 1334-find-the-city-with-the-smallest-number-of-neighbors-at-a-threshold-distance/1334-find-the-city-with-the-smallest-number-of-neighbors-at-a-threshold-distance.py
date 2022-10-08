import heapq
INF = int(1e10)

class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        graph = [[] for _ in range(n)]  
        res = [0, INF]
        
        for [a,b,c] in edges:
            graph[a].append([b,c])
            graph[b].append([a,c])
        
        
        for i in range(n):
            costs = [INF] * n
            
            costs[i] = 0
            heap = [(0, i)]
            
            while heap:
                cost, node = heapq.heappop(heap)
                
                if costs[node] < cost: continue
                    
                for [adj_node, adj_cost] in graph[node]:
                    new_cost = adj_cost + cost
                    
                    if new_cost >= costs[adj_node] or new_cost > distanceThreshold: continue
        
                    costs[adj_node] = new_cost
                    heapq.heappush(heap, (new_cost, adj_node))
            
            cnt = len([cost for cost in costs if cost > 0 and cost <= distanceThreshold])
            
            if cnt <= res[1]:
                res = [i, cnt]
        
        return res[0]