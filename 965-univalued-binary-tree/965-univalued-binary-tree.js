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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    const traverse = (node) => {
        if(!node) return true;
        if(!node || node.val !== root.val) return false;
        
        return traverse(node.left) && traverse(node.right);
    }
    
    return traverse(root);
};