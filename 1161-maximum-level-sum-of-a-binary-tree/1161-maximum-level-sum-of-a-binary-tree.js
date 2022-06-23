
var maxLevelSum = function(root) {
    const queue = [[root, 1]];
    const levelSumMap = new Map();
    const childNodeProps = ['left', 'right'];
    
    const getMaxSumLevel = () => {
        const cmp = (prevNode, currNode) => {
            return prevNode[1] < currNode[1] ? currNode : prevNode;
        }
        
        return Array
                .from(levelSumMap)
                .reduce(cmp)[0]
    }
    
    while(queue.length > 0){
        const [node, level] = queue.shift();
        if(!levelSumMap.has(level)) levelSumMap.set(level, 0);
        
        levelSumMap.set(level, levelSumMap.get(level) + node.val);
        
        for(const prop of childNodeProps){
            const childNode = node[prop];
            if(childNode !== null) queue.push([childNode, level+1]);
        }
    }
    
    return getMaxSumLevel();
};