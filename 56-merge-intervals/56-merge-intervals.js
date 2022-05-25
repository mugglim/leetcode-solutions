/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let interval = null;
    let answer = [];
    
    const compareInterval = (a,b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    }
    
    intervals.sort(compareInterval).forEach(([s,e]) => {
        if(!interval) {
            interval = [s,e];
            return;
        }
        
        if(interval[1] >= s){
            if(interval[1] < e) interval[1] = e;
        } else{
            answer.push(interval);
            interval = [s,e];
        }
    })
    
    answer.push(interval);
    return answer;
};