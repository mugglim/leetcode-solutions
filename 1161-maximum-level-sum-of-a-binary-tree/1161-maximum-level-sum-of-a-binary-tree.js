var maxLevelSum = function(root) {
    const queue = [[[root],1]];
    const childNodeProps = ['left', 'right'];
    let maxLevel = 1;
    let maxSum = root.val;
    
    while(true){
        const [rootNodes, level] = queue.shift();
        const childNodes = [];
        let childNodeSum = 0;
        
        for(const rootNode of rootNodes){
            for(const prop of childNodeProps){
                const childNode = rootNode[prop];
                if(childNode !== null) {
                    childNodes.push(childNode);
                    childNodeSum += childNode.val;
                }
            }
        }
        
        if(childNodes.length === 0) break;

        if(maxSum < childNodeSum) [maxLevel, maxSum] = [level+1, childNodeSum]
        queue.push([childNodes, level+1])
    }
    
    return maxLevel;
};