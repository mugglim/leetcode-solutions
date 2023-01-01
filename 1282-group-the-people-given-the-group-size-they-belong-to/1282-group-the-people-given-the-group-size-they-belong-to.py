class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        n = len(groupSizes)
        groups = [[[]] for _ in range(n + 1)]
        
        for i, num in enumerate(groupSizes):
            group = groups[num]
            
            if len(group[-1]) >= num: group.append([])
            group[-1].append(i)
        
        groups = [l for group in groups for l in group if len(group[0])]
            
        return sorted(groups, key=lambda x:len(x))
