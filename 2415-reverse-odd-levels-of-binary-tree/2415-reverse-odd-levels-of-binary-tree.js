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
var reverseOddLevels = function(root) {
    const reverse = (l,r, level) => {
        if(!l || !r) return;
        
        reverse(l.left, r.right, level + 1);
        reverse(l.right, r.left, level + 1)
        
        if(level % 2 == 1){
            [l.val, r.val] = [r.val, l.val];
        }
    }
    
    reverse(root.left, root.right, 1);
    return root;
};
