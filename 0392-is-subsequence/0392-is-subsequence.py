class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t): return False
        
        n,m = len(s), len(t)
        l,r = 0,0
        
        while l < n and r < m:
            if s[l] == t[r]:
                l += 1
                r += 1
            else:
                r += 1
        
        return l == n
