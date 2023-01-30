import math

def get_digit(n, k):
    return n // (10 ** k) % 10
    

class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        if x < 10: return True
            
        digits = int(math.log10(x))
        
        l = digits
        r = 0
        
        while l > r:
            if get_digit(x, l) != get_digit(x,r): return False
            
            l -= 1
            r += 1
        
        return True