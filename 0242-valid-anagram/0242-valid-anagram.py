class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        
        s_letters = [0] * 26
        t_letters = [0] * 26
        
        for i in range(len(s)):
            s_letters[ord(s[i]) - 97] += 1
            t_letters[ord(t[i]) - 97] += 1
        
        return s_letters == t_letters              
        