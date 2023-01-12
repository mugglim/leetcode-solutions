# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        values = []
        minValue = int(1e10) + 1
        
        def traverse(node):
            if not node: return
            
            traverse(node.left)
            values.append(node.val)
            traverse(node.right)
        
        
        traverse(root)
        n = len(values)
        
        for i in range(n-1):
            minValue = min(minValue, abs(values[i] - values[i+1]))
        
        return minValue
                    