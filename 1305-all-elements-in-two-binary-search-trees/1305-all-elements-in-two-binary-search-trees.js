/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const nums = [];
    
    const search = (node) => {
        if(!node) return;
        search(node.left);
        nums.push(node.val)
        search(node.right);
    }
    
    search(root1);
    search(root2);

    
    return nums.sort((a,b) => a - b);
};
