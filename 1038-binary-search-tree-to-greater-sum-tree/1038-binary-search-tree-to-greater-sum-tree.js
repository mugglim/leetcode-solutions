var bstToGst = function(root) {
    if(!root) return null;
    let sum = 0;
    
    const makeGreaterTree = (curr) => {  
        if(!curr) return;
        
        makeGreaterTree(curr.right);
        sum += curr.val;
        curr.val = sum;
        makeGreaterTree(curr.left);
    }     
    
    makeGreaterTree(root)
    return root;
};