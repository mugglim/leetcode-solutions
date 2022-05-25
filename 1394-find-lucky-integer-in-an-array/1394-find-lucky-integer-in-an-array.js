/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const counts = new Array(501).fill(0);
    let answer = -1;
    
    arr.forEach(v => counts[v] += 1);
    
    counts.forEach((count,i) => {
        if(i > 0 && i === count) answer = Math.max(answer, count);
    })
    
    
    return answer;
};