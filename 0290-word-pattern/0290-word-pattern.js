/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const dic = new Map();
    const visited = new Set();
    const words = s.split(" ");
    
    if(words.length !== pattern.length) return false;
    
    return words.every((word, i) => {        
        const ch = pattern.at(i);

        if(!dic.has(ch) && visited.has(word)) return false;
        
        if(!dic.has(ch)) {
            dic.set(ch, word);
            visited.add(word);
        }
        
        return dic.get(ch) === word;
    })
};