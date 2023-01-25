import heapq

def getCost(s, graph):
    queue = deque([s])
    n = len(graph)
    costs = [-1] * n
    costs[s] = 0
    visited = set([s])
    
    while queue:
        node = queue.popleft()
        
        for adj in graph[node]:
            if adj == -1: continue
            if adj in visited: continue
            
            costs[adj] = costs[node] + 1
            queue.append(adj)
            visited.add(adj)
            
    return costs
        

class Solution:
    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:
        n = len(edges)
        graph = [[] for _ in range(n)] 
        minCost = [-1, int(1e10) + 1]
        
        for a,b in enumerate(edges):
            graph[a].append(b)
        
        costs1 = getCost(node1, graph)
        costs2 = getCost(node2, graph)        
        
        for i, [cost1, cost2] in enumerate(zip(costs1, costs2)):
            if cost1 == -1 or cost2 == -1: continue
            
            if minCost[1] > max(cost1, cost2):
                minCost = [i, max(cost1, cost2)]
        
        return minCost[0]
    