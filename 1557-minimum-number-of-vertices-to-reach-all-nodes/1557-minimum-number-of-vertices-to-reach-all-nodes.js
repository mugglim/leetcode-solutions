/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const indegree = new Array(n).fill(0);
    const visited = new Array(n).fill(false);
    const answer = [];
    
    const findZeroIndegreeNode = () => {
        const nodes = [];
        indegree.forEach((count, node) => {
            if(count === 0) nodes.push(node); 
        })
        return nodes;
    }
    
    for(const [a,b] of edges){
        indegree[b] += 1;
    }
    
    answer.push(...findZeroIndegreeNode());
    
    return answer;
    
};