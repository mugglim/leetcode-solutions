class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        counts = [[0,0] for _ in range(n+1)]
        
        for a,b in trust:
            counts[a][1] += 1
            counts[b][0] += 1
        
        
        for i, [trustMe, trustOther] in enumerate(counts[1:]):
            if trustMe == n-1 and trustOther == 0:
                return i+1
        
        return -1