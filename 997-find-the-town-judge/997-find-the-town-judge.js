/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n === 1) return 1
    
    
    const trustCount = Array.from({length: n+1}, () => [0,0]);
     
    const isTonwJudge = (count) => count[0] === 0 && count[1] === n-1
    
    for(const [a,b] of trust){
        trustCount[a][0] += 1;
        trustCount[b][1] += 1;
    }
    
    const townJudge = trustCount.findIndex(isTonwJudge);
        
    return townJudge;
    
};