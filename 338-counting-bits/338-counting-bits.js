/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dic = new Map([[0,0]]);
    
    const countBit = (n) => {
        if(dic.has(n)) return dic.get(n);
            
        let cnt = 0
        let tmp = n;
        
        while(tmp > 0){
            tmp = tmp & tmp-1
            
            if(dic.has(tmp)) {
                dic.set(n, dic.get(tmp) + cnt + 1);
                return dic.get(n);
            }
        
            cnt += 1
        }
        
        dic.set(n, cnt);
        return dic.get(n);
    }
    
    for(let i = 1; i <= n; i++){
        countBit(i);
    }
    
    return Array.from(dic.values());
};