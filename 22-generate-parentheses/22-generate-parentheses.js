/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const pairs = [];
    
    
    const dfs = (pair, l,r) => {
        if(l < 0 || r < 0) return;
        if(l === 0 && r === 0) {
            pairs.push(pair);
            return;
        }
        
        if(l > 0) dfs(pair + "(", l-1, r);
        if(r > l) dfs(pair + ")", l, r-1); 
    }
    
    dfs("", n, n);
    return pairs;
};