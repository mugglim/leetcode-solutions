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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    const levelNodes = [];
    const queue = [[root]];
    
    while(true){
        const nodes = queue.shift();
        const currNodes = [];
        const nextNodes = [];
        
        for(const node of nodes){
            currNodes.push(node.val);
            for(const nextNode of [node.left, node.right]){
                if(!nextNode) continue;
                nextNodes.push(nextNode);
            }
        }
        
        levelNodes.push(currNodes);
        if(nextNodes.length === 0) break;
        
        queue.push(nextNodes);
    }
    
    return levelNodes;
};
