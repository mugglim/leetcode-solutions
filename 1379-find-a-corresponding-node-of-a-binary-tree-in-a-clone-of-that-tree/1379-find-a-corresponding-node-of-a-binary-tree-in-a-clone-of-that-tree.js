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
    const find = (oNode, cNode, target) => {
        if(!oNode || !cNode) return null;
        if(oNode === target) return cNode
        
        return find(oNode.left, cNode.left, target) || find(oNode.right, cNode.right, target);
    }
    
    return find(original,cloned,target)
};
