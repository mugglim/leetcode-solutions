class Solution:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        ancestors = [set() for _ in range(n)]
        indegrees = [0] * n
        
        graph = [[] for _ in range(n)]
        queue = deque([])
        
        for a,b in edges:
            graph[a].append(b)
            indegrees[b] += 1
            
        for i in range(n):
            if indegrees[i] == 0:
                queue.append(i)
        
        while queue:
            node = queue.popleft()
            
            for nextNode in graph[node]:
                indegrees[nextNode] -= 1
                ancestors[nextNode].update([*ancestors[node], node])
                
                if indegrees[nextNode] == 0:
                    queue.append(nextNode)
        
        return [sorted(ancestor) for ancestor in ancestors]
        