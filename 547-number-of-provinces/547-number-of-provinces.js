/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let count = 0;

    const bfs = (node) => {
        const queue = [node];
        visited[node] = true;
        
        while(queue.length){
            const curr = queue.shift();
            isConnected[curr].forEach((isConnect, adjNode) => {
                if(isConnect && !visited[adjNode]){
                    visited[adjNode] = true;
                    queue.push(adjNode);  
                }
            })
        }
    }
    
    for(let node = 0; node < n ; node++){
        if(!visited[node]){
            bfs(node);
            count += 1;
        }
    }
    
    return count;
};