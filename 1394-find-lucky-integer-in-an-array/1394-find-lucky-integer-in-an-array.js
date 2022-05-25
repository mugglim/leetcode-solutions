/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const countMap = new Map();
    let answer = -1;
    
    arr.forEach(n => {
        if(!countMap.has(n)) countMap.set(n, 0);
        countMap.set(n, countMap.get(n) + 1)
    })
    
    countMap.forEach((count,key) => {
        if(count === key) answer = Math.max(answer, count);
    })
    
    return answer;
};