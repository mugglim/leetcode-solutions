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
var increasingBST = function(root) {
    let newRoot;
    let curr;
    
    const inOrder = (node) => {
        if(!node) return;
        
        inOrder(node.left)
        
        if(!newRoot){
            newRoot = new TreeNode(node.val);
            curr = newRoot;
        } else{
            curr.right = new TreeNode(node.val);
            curr = curr.right;
        }
        
        inOrder(node.right);;
    }
    
    inOrder(root);
    
    return newRoot;
};
