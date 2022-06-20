const reverse = (text) => Array.from(text).reverse().join('');
const cmp = (a,b) => b.length - a.length;

var minimumLengthEncoding = function(words) {
    const sortedWords = Array.from(new Set(words)).sort(cmp);
    
    let cnt = 0;
    const trie = new Map();
    
    const addWord = (word) => {
        let curr = trie;
        
        for(const ch of reverse(word)){
            if(!curr.has(ch)) curr.set(ch, new Map());
            curr = curr.get(ch)
        }
        
        curr.set('*', true);
        return curr.size === 1 ? word.length + 1 : 0;
    }
    
    for(const word of sortedWords){
        cnt += addWord(word);
    }
    
    return cnt;
};