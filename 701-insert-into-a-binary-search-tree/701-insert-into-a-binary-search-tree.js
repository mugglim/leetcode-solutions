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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);
    
    const lookup = (curr, val) => {
        if(curr.val > val && !curr.left) return curr;
        if(curr.val < val && !curr.right) return curr;
        
        const nextCurr = curr.val > val ? curr.left : curr.right;

        return lookup(nextCurr, val);
    }
    
    const insert = (target, val) => {
        if(target.val > val) target.left = new TreeNode(val)
        else target.right = new TreeNode(val);
    }
    
    
    const target = lookup(root,val);
    insert(target,val);
    
    return root;
};
