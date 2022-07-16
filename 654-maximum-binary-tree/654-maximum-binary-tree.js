/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let root;
    
    const build = (rest, curr, dir) => {    
        if(rest.length === 0) return;
        
        const max = Math.max(...rest);
        const maxIndex = rest.findIndex(value => value === max); 
        const [leftArray, rightArray] = [rest.slice(0,maxIndex), rest.slice(maxIndex+1)];
        
        if(!root) {
            root = new TreeNode(max);
            curr= root;
        }
        if(dir === "L"){
            curr.left = new TreeNode(max);
            curr = curr.left;
        }
        if(dir === "R") {
            curr.right = new TreeNode(max);
            curr = curr.right;
        }
        
        build(leftArray, curr, "L");
        build(rightArray, curr, "R");
    }
    
    build(nums, root, null)
    return root;
    
};
