from collections import deque

DX = [-1,1,0,0]
DY = [0,0,-1,1]

class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        n,m = len(grid), len(grid[0])
        visited = [[False for _ in range(m)] for _ in range(n)]
        oneCount = 0
        
        def checkOverBoundary(y,x):
            return y < 0 or y >= n or x < 0 or x >= m
            
        
        def move(sy,sx):
            isOverBoundary = False
            visited[sy][sx] = True
            count = 1
            
            queue = deque([[sy,sx]])
            
            
            while queue:
                y,x = queue.popleft()
                
                for k in range(4):
                    ny,nx = y+DY[k], x+DX[k]
                    
                    if checkOverBoundary(ny,nx):
                        isOverBoundary = True
                        continue
                    
                    if not visited[ny][nx] and grid[ny][nx] == 1:
                        count += 1
                        visited[ny][nx] = True
                        queue.append([ny,nx])

            
            return [isOverBoundary, count]
                
    
        for y in range(n):
            for x in range(m):
                if grid[y][x] == 1 and not visited[y][x]:
                    isOver, count = move(y,x)
                    
                    if not isOver: oneCount += count
        
        
        return oneCount
        