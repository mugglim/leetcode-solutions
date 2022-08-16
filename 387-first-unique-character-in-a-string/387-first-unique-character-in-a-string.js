/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charCounts = Array.from(new Array(26), () => [null, 0]);
    
    Array.from(s).forEach((ch, index) => {
        const chIndex = ch.charCodeAt(0) - 97;

        if(charCounts[chIndex][0] === null){
            charCounts[chIndex][0] = index;
        }
        
        charCounts[chIndex][1] += 1;
    })
    
    const uniqueChar = charCounts
        .filter(([_, count]) => count === 1)
        .sort((a,b) => a[0] - b[0])
    
    
    return uniqueChar.length > 0 ? uniqueChar[0][0] : -1;
};


