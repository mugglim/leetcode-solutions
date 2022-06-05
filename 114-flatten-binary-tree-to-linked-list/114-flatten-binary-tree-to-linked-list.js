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
 * @return {void} Do not return anything, modify root in-place instead.
 */0
var flatten = function(root) {
    if(!root) return null;
    
    const merge = (root) => {
        if(!root || !root.left) return;
        if(!root.right){
            root.right = root.left;
            root.left = null;
            return;
        }
        
        
        let curr = root.left;
        while(curr.right) curr = curr.right;
        
        curr.right = root.right
        root.right = root.left;
        root.left = null;
    }
    
    if(root.left) flatten(root.left)
    if(root.right) flatten(root.right)
    
    merge(root);
};