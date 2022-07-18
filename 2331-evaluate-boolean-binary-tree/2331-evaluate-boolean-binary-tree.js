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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    const evaluate = (node) => {
        if(!node.left && !node.right) return node.val === 0 ? false : true;
        
        const leftSubTree = evaluate(node.left);
        const rightSubTree = evaluate(node.right);
        
        return node.val === 2 ? leftSubTree || rightSubTree : leftSubTree && rightSubTree;
    }
    
    return evaluate(root);
};
