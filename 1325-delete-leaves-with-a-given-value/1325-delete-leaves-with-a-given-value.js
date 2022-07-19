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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {    
    if(!root) return null;
    
    const isTargetLeaf = (node, target) => {
        if(!node) return false;
        return !node.left && !node.right && node.val === target;
    }
    
    const dfs = (node, target) => {
        if(!node) return false;
        if(isTargetLeaf(node,target)) return true;

        if(dfs(node.left, target)){
            node.left = null;
        }
        
        if(dfs(node.right, target)){
            node.right = null;
        }
        
        return isTargetLeaf(node, target) ? true : false;
    }

    dfs(root, target);
    return isTargetLeaf(root, target) ? null : root;
};

