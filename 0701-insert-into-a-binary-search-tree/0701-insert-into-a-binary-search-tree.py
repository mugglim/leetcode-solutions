# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root: return TreeNode(val)
        
        def insert(treeNode, val):
            if val <= treeNode.val:
                if not treeNode.left: treeNode.left = TreeNode(val)
                else: insert(treeNode.left, val)
            else:
                if not treeNode.right: treeNode.right = TreeNode(val)
                else: insert(treeNode.right, val)
        
        insert(root, val)
        return root