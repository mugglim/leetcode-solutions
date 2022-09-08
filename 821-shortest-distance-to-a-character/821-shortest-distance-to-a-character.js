/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const INF = 10 ** 9 + 1;
 
    const answer = [];    
    let [l,r] = [0,0];
    let boundary = [INF, INF];
    
    const getMinDistance = i => Math.min(...boundary.map(bound => Math.abs(i - bound)))
    
    let cnt = 0;
    
    while(l < s.length){
        while(r < s.length && s.at(r) !== c){
            r += 1;
        }

        boundary[1] = r < s.length ? r : INF;
        
        while(l <= Math.min(r, s.length-1)) {
            answer.push(getMinDistance(l));
            l += 1;
        }
        
        boundary[0] = r;
        r = l;
    }    
    
    return answer;
};

