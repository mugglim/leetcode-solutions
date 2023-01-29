MAX_SEGMENT = 10 ** 5

class Solution:
    def splitPainting(self, segments: List[List[int]]) -> List[List[int]]:
        dic = {}
        result = []
        
        for s,e, p in segments:
            if s not in dic: dic[s] = 0
            if e not in dic: dic[e] = 0
                
            dic[s] += p
            dic[e] -= p
        
        # sweep
        s = 0
        for e in sorted(dic.keys()):
            if s in dic and dic[s] > 0:
                result.append([s,e, dic[s]])
                dic[e] += dic[s]
            s = e
        
        return result
