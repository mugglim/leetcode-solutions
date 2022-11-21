from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root: return []
        
        answer = []
        levels = {}
        queue = deque([(0,root)])
        
        while queue:
            level, node = queue.popleft()
                        
            if level not in levels: levels[level] = []
            
            levels[level].append(node.val)
            
            if node.left: queue.append([level+1,node.left])
            if node.right: queue.append([level+1,node.right])
        
        
        for [level, values] in levels.items():
            if values: answer.append(values[-1])
            
        return answer

