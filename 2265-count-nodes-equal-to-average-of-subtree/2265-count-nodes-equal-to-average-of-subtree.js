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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let avgEqaulCount = 0;
    
    const dfs = (node) => {
        if(!node) return [0,0];
        
        const subTree = [1, node.val];  // count, sum
        
        for(const childNode of [node.left, node.right]){
            const childSubTree = dfs(childNode);
            subTree[0] += childSubTree[0];
            subTree[1] += childSubTree[1];
        }
        
        const subTreeAverage = Math.floor(subTree[1] / subTree[0]);
        
        if(node.val === subTreeAverage) avgEqaulCount += 1; 
        
        return subTree;
    }
    
    dfs(root);
    return avgEqaulCount;
};
