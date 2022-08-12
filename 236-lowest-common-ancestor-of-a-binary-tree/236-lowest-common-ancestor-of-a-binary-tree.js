/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    if(p === q) return p;
    
    const stackP = [root];
    const stackQ = [root];
    
    const dfs = (root,target, stack) => {        
        if(!root) return false;
        if(root === target) return true;
        
        for(const child of [root.left, root.right]){
            if(!child) continue;
            
            stack.push(child);
            if(dfs(child, target, stack)) return true;
            stack.pop()
        }
    } 
    

    dfs(root, p, stackP);
    dfs(root, q, stackQ);
    
    while(stackP.length !== stackQ.length){
        
        if(stackP.length > stackQ.length){
            stackP.pop();
        } else if(stackP.length < stackQ.length){
            stackQ.pop();
        }
    }
    
    while(stackP.at(-1) !== stackQ.at(-1)){
        stackP.pop();
        stackQ.pop();
    }
    
    return stackP.length === 0 ? null : stackP.at(-1); 
};

