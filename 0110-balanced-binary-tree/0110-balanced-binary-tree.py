# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if not root: return True
        
        isBalanced = True
        
        def dfs(node):
            nonlocal isBalanced
            if not node: return 0
            
            leftSubTreeHeight = dfs(node.left)
            rightSubTreeHeight = dfs(node.right)
            
            if abs(leftSubTreeHeight - rightSubTreeHeight) > 1:
                isBalanced = False
            
            return max(leftSubTreeHeight,rightSubTreeHeight) + 1    
                
        dfs(root)
        return isBalanced