import heapq

INF = int(1e10)

class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        costs = [[INF] * (k+1) for _ in range(n)]
        graph = [[] for _ in range(n)]
        
        for [a,b,c] in flights:
            graph[a].append([b,c])
        
        costs[src][0] = 0
        heap = [[0, src, 0]]  # cost, node, stop
        
        while heap:
            cost, node, stop = heapq.heappop(heap)
                      
            if costs[node][stop] < cost: continue
            
            for [adjNode, adjCost] in graph[node]:
                newCost = cost + adjCost
                newStop = stop + 1
                
                if adjNode == dst: costs[adjNode][stop] = min(costs[adjNode][stop], newCost)
                
                if adjNode != dst and newStop <= k and newCost < costs[adjNode][newStop]:
                    costs[adjNode][newStop] = newCost
                    heapq.heappush(heap, (newCost, adjNode, newStop))
        
        minCost = min(costs[dst])
        
        return minCost if minCost != INF else -1
    