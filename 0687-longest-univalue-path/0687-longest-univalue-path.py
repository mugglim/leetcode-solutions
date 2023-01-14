# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        maxLength = 0
        
        def dfs(node, parent = -1):
            if not node: return 0
            nonlocal maxLength
            
            left = dfs(node.left, node.val)
            right = dfs(node.right, node.val)
            
            maxLength = max(maxLength, left + right)
            return max(left, right) + 1 if node.val == parent else 0 
    
        dfs(root)
        return maxLength
        