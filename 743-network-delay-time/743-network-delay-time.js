const INF = 987654321

function dijkstra(graph, s){
    const n = graph.length;
    const costs = new Array(n).fill(INF);
    const visited = new Array(n).fill(false);
    
    const getSmallestNode = () => {
        let [idx, minCost] = [0, INF];
        
        for(let i = 1; i<=n; i++){
            if(!visited[i] && costs[i] < minCost){
                [idx, minCost] = [i, costs[i]];
            }
        }
        
        return idx;
    }
    
    
    visited[s] = true;    
    costs[s] = 0;
 
    for(const [adjNode, adjCost] of graph[s]){
        costs[adjNode] = adjCost;
    }
    
    
    for(let i=1; i < n; i++){
        const node = getSmallestNode();
        visited[node] = true;
        
        for(const [adjNode, adjCost] of graph[node]){
            
            const newCost = costs[node] + adjCost;
            if(newCost < costs[adjNode]){
                costs[adjNode] = newCost;
            }
        }
    }
    
    return costs.slice(1);
}

var networkDelayTime = function(times, n, k) {
    const graph = Array.from(Array(n+1), () => []);
    times.forEach(([a,b,c]) => graph[a].push([b,c]))
    
    const costs = dijkstra(graph, k);
    const isFindAllNode = costs.every(cost => cost !== INF);

    return isFindAllNode ? Math.max(...costs) : -1;    
    
};