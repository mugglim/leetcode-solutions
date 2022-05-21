/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const invert = (node) => ([node.left, node.right] = [node.right, node.left]);
    
    
    const queue = [root];
    
    while(queue.length > 0){
        const node = queue.shift();
        
        if(node){
            invert(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
    }
    
    return root;
};