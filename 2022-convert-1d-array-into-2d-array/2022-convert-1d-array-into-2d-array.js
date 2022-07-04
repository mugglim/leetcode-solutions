const range = (s=0,e,step=1) => {
    if(!e) [s,e] = [0,s] 
        
    const nums = [];
    
    for(let i=s; i<e; i+=step){
        nums.push(i);
    }
    
    return nums;
}

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(m*n < original.length || m*n > original.length) return []
    
    const result = [];
    
    for(const i of range(m)){
        result.push(original.slice(n*i, n*(i+1)));
    }
    
    return result;
};