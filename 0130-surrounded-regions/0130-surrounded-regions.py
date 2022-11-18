from collections import deque

DIRS = [
    [-1,1,0,0],
    [0,0,-1,1]
]

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        n,m = len(board), len(board[0])
        
        visited = [[False] * m for _ in range(n)]
        
        def bfs(sy,sx):
            isSurrounded = True
            
            queue = deque([[sy,sx]])
            paths = [[sy,sx]]
            visited[sy][sx] = True
            
            while queue:
                y,x = queue.popleft()
                
                for k in range(4):
                    dy,dx = DIRS[0][k], DIRS[1][k]
                    ny,nx = y+dy, x+dx
                    
                    if ny < 0 or ny >= n or nx < 0 or nx >= m:
                        isSurrounded = False
                        continue
                    
                    if not visited[ny][nx] and board[ny][nx] == "O":
                        visited[ny][nx] = True
                        queue.append([ny,nx])
                        paths.append([ny,nx])
            
            
            if isSurrounded:
                for y,x in paths:
                    board[y][x] = "X"
                        
        
        
        
        for y in range(n):
            for x in range(m):
                if not visited[y][x] and board[y][x] == 'O':
                    bfs(y,x)
    
