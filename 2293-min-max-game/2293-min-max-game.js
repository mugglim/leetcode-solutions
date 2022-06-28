/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    let newNums = [...nums];
    
    while(newNums.length > 1){
        const newNumsTmp = [];
        for(let i = 0; i < Math.floor(newNums.length / 2); i += 1){
            if(i % 2 === 0) newNumsTmp.push(Math.min(newNums[2*i], newNums[2*i+1]))
            else newNumsTmp.push(Math.max(newNums[2*i], newNums[2*i+1]))
        }
        newNums = newNumsTmp;
    }
    
    return newNums[0];
};