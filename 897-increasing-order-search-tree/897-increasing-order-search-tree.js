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
    const nums = [];
    
    const dfs = (node) => {
        if(!node) return;
        
        nums.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    
    const makeRightSkewedTree = () => {
        let newRoot;
        let curr = newRoot;
        
        for(const num of nums){
            if(!newRoot){
                newRoot = new TreeNode(num);
                curr = newRoot;
            } else{
                curr.right = new TreeNode(num);
                curr = curr.right;
            }
        }
        
        return newRoot;
    }
    
    
    dfs(root);
    nums.sort((a,b) => a-b);
    
    return makeRightSkewedTree();
};