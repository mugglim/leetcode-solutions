/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const queue = [[original, cloned]];
    
    while(queue.length > 0){
        const [oNode, cNode] = queue.shift();
        
        if(oNode === target) return cNode
        
        if(oNode.left && cNode.left) queue.push([oNode.left, cNode.left])
        if(oNode.right && cNode.right) queue.push([oNode.right, cNode.right])
    }
    
    return null;
};
