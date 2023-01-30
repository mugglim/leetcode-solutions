class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = {}
        
        for word in strs:
            sortedWord = ''.join(sorted(word))
            if sortedWord not in dic: dic[sortedWord] = []
            
            dic[sortedWord].append(word)
        
        
        return dic.values()