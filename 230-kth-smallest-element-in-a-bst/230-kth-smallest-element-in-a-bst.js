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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const inorder = (node) => {
        if(!node) return []
        return [...inorder(node.left), node.val, ...inorder(node.right)]
    }
    
    const nums = inorder(root);
    return nums[k-1];
};