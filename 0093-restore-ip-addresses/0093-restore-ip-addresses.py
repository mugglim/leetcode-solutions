from collections import deque

class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        result = []
        queue = deque([])
        n = len(s)
        
        def check(s):
            decimal = int(s)
            return decimal >= 0 and decimal <= 255 and len(str(decimal)) == len(s)
        
        for i in range(3):
            segment = s[:i+1]
            if not check(segment): continue
            queue.append([i, [s[:i+1]]])
            
        while queue:
            i, segments = queue.popleft()
            
            if len(segments) >= 4:
                if i == n-1 : result.append(".".join(segments))
                continue
                
            for skip in range(1, 4):
                if i+skip >= n: continue
                newSegment = s[i+1: i+1+skip]
                
                if not check(newSegment): continue
                
                queue.append([
                    i+skip,
                    [*segments, newSegment]
                ])
        
        return result