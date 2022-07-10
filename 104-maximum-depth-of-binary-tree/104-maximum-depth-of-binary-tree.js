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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    
    let maxDepth = 1;
    
    const dfs = (node, depth) => {
        if(!node) {
            maxDepth = Math.max(maxDepth, depth-1);
            return;
        }
        
        dfs(node.left, depth+1);
        dfs(node.right, depth+1);
    }
    
    dfs(root, 1);
    
    return maxDepth;
};