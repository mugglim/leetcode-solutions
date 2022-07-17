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
    const MAX = 10 ** 5;
    const counts = new Array(MAX * 2 + 2).fill(0);
    const nums = [];
    
    const search = (node) => {
        if(!node) return;
        search(node.left);
        counts[node.val + MAX] += 1;
        search(node.right);
    }
    
    search(root1);
    search(root2);

    counts.forEach((count, idx) => {
        if(count === 0) return;
        nums.push(...new Array(count).fill(idx - MAX));
    })
    
    return nums;
};