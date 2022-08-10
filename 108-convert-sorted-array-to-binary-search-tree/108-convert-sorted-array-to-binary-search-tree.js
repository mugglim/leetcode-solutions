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
var sortedArrayToBST = function(nums) {
    if(nums.length === 1) return new TreeNode(nums[0]);

    let root;
    const half = Math.floor(nums.length / 2);

    const lookup = (root, value) => {
        if(!root.left && !root.right) return root;
        if(root.val > value && !root.left) return root;
        if(root.val < value && !root.right) return root;

        return root.val > value 
            ? lookup(root.left, value) 
            : lookup(root.right, value)
    }
    
    const addNode = value => {
        if(!root){
            root = new TreeNode(value);
            return;
        }
        
        const targetNode = lookup(root, value);
        
        if(targetNode.val > value) targetNode.left = new TreeNode(value);
        else targetNode.right = new TreeNode(value);
    }
    
    const search = (lo, hi) => {
        if(lo > hi) return;    
        
        const half = Math.floor((lo + hi) /2);

        addNode(nums[half]);
        
        search(lo, half-1);
        search(half+1, hi);
    }
    
    search(0, nums.length -1);    
    return root;
};

