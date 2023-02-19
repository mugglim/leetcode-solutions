from collections import deque

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root: return []
        
        queue = deque([[root, 0]])
        dic = {}
        result = []
        
        while queue:
            node, level = queue.popleft()
            
            if level not in dic:
                dic[level] = []
            
            dic[level].append(node.val)
            
            if node.left: queue.append([node.left, level + 1])
            if node.right: queue.append([node.right, level + 1])
        
        for level, values in dic.items():
            if level % 2 == 0:
                result.append([*values])
            else:
                result.append([*values[::-1]])
        
        return result
            
                
            
        
        
        