const getCounter = (s) => {
    return Array
            .from(s)
            .reduce((acc, ch) => {
                if(!acc.has(ch)) acc.set(ch, 0);
                acc.set(ch, acc.get(ch) + 1);
                return acc;
            }, new Map())
}
    
const addCount = (dic, key) => {
    if(!dic.has(key)) dic.set(key, 0);
    dic.set(key, dic.get(key) + 1);
}

const removeCount = (dic, key) => {
    if(dic.get(key) === 1) {
        dic.delete(key);
    } else {
        dic.set(key, dic.get(key) - 1);
    }
}
    

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const counterS = new Map();
    const counterT = getCounter(t);
    let result = "";
    let r = 0;
    
    const check = () => {
        const keys = Array.from(counterT.keys());
        
        return keys.length === 0 
            ? false 
            : keys.every(key => counterS.has(key) && counterS.get(key) >= counterT.get(key));
    }

    
    for(let l = 0; l < s.length; l += 1){
        while(r < s.length && !check()){
            addCount(counterS, s.at(r));
            r += 1;
        }
    
        if(check()){
            if(!result || r - l < result.length) {
                result = s.slice(l,r);
            }
        }
        removeCount(counterS, s.at(l));      
    
    }
    
    return result;
};