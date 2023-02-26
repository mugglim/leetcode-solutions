class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
    
        root = {}
        result = []
        
        for word in dictionary:
            curr = root
            
            for letter in word:
                if letter not in curr:
                    curr[letter] = {}
                curr = curr[letter]
            
            curr['*'] = True
        
        
        for word in sentence.split(" "):
            tmp = []
            hasLeaf = False
            curr = root
                
            for letter in word:
                
                if letter not in curr: break
                    
                curr = curr[letter]
                tmp.append(letter)
                
                if "*" in curr:
                    hasLeaf = True
                    break
                    
            if not tmp or not hasLeaf: 
                result.append(word)
            else:
                result.append(''.join(tmp))
        
        return ' '.join(result)
    
                    