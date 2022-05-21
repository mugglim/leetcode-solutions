/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const invert = (node) => ([node.left, node.right] = [node.right, node.left]);
    
    const traverse = (node) => {
        if(!node) return;
        
        traverse(node.left);
        traverse(node.right);
        invert(node);
    }
    
    traverse(root);
    return root;
};