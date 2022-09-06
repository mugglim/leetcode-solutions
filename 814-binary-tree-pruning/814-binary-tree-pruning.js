/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    const backtrack = (root) => {
        if(!root) return false;

        const leftSubTreeHasOne = backtrack(root.left);
        const rightSubTreeHasOne = backtrack(root.right);
        
        if(!leftSubTreeHasOne) root.left = null;
        if(!rightSubTreeHasOne) root.right = null;

        return root.val === 1 || leftSubTreeHasOne || rightSubTreeHasOne;
    }
    
    backtrack(root);
    
    
    if(root.val === 0 && !root.left && !root.right) return null;
    
    return root;
};
