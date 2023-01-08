/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const parents = new Set(descriptions.map(description => description[0]));
    const childs = new Set(descriptions.map(description => description[1]));
    const rootNodeValue = Array.from(parents).find(node => !childs.has(node));
    const rootNode = new TreeNode(rootNodeValue);
    const queue = []
    const adj = {};
    
    for(const [parent, child, isLeft] of descriptions){
        if (!Object.hasOwn(adj, parent)) {
            adj[parent] = [];
        }
         
        if(parent === rootNodeValue){
            queue.push([rootNode, child, isLeft])
        }
        
        adj[parent].push([child, isLeft]);
    }    
    
    while(queue.length > 0){
        const [parent, child, isLeft] = queue.shift();
        const childNode = new TreeNode(child);
        
        if(isLeft){
            parent.left = childNode;
        } else {
            parent.right = childNode;
        }
        
        if(!Object.hasOwn(adj, child)) continue
        
        for(const newChild of adj[child]){
            queue.push([childNode, ...newChild]);
        }
    }
    
    return rootNode;
};