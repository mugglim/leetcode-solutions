const INF = 10 ** 10;

var calcEquation = function(equations, values, queries) {
    const nodes = Array.from(equations.reduce((set, node) => new Set([...set, ...node]), new Set()));
    const costs = new Map(nodes.map(keyNode => [keyNode, new Map(nodes.map(adjNode => [adjNode, INF]))]));
    
    const hasNode = (a,b) => costs.get(a).has(b);
    const getCost = (a,b) => costs.get(a).get(b);
    const setCost = (a,b,c) => costs.get(a).set(b,c);
    
    
    for(let [i, [a,b]] of equations.entries()){
        setCost(a,b, 1/ values[i]);
        setCost(b,a, values[i]);
    }
    
    for(const k of costs.keys()){
        for(const a of costs.keys()){
            for(const b of costs.keys()){
                if(getCost(a,k) === INF || getCost(k,b) === INF) continue
                const minCost = Math.min(getCost(a,b), getCost(a,k) * getCost(k,b));
                setCost(a,b, minCost)                
            }
        }
    }
    
    return queries.map(([a,b]) => {
        if(!costs.has(a) || !hasNode(a,b) || getCost(b,a) === INF) return -1.0
        return getCost(b,a);
    })
};