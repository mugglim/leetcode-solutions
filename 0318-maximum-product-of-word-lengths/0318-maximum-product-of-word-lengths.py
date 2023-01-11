def wordToBits(word:str) -> int:
    bits = 0
    
    for ch in word:
        bit = ord(ch) - 97;
        bits |= 1 << bit
        
    return bits
    

class Solution:
    def maxProduct(self, words: List[str]) -> int:
        result = 0
        words = [[len(word), wordToBits(word)] for word in words]
        
        for i in range(len(words)):
            for j in range(i+1, len(words)):
                if words[i][1] & words[j][1] == 0:
                    result = max(result, words[i][0] * words[j][0])
            
        return result