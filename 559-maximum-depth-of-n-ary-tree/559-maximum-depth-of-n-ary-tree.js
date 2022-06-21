/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    
    const findDepth = (node, depth) => {
        if(!node.children) return depth;
        let leafDepth = depth;
        
        for(const childNode of node.children){
            leafDepth = Math.max(leafDepth, findDepth(childNode, depth + 1));
        }
        
        return leafDepth;
    }
    
    
    return findDepth(root, 1);
};