/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charCounts = new Array(26).fill(0);
    
    for(let i = 0; i < s.length; i += 1){
        charCounts[s.at(i).charCodeAt(0) - 97] += 1;
    }
    
    for(let i = 0; i < s.length; i += 1){
        if(charCounts[s.at(i).charCodeAt(0) - 97] === 1) return i;
    }
    
    return - 1;
};
