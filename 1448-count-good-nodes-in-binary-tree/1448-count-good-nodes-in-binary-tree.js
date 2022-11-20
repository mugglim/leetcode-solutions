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
var goodNodes = function(root) {
    const MIN = -(10 ** 4 + 1);
    let count = 0;
    
    const dfs = (curr, max=MIN) => {
        if(!curr) return;
        
        if(curr.val >= max) {
            max = Math.max(curr.val, max)
            count += 1;
        }
        
        if(curr.left) dfs(curr.left, Math.max(curr.left.val, max))
        if(curr.right) dfs(curr.right, Math.max(curr.right.val, max))
    }
    
    dfs(root);
    return count;    
};
