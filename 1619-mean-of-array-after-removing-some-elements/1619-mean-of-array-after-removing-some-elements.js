/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const { length } = arr;
    const percentLength = Math.floor(length*0.05);
    const n = length - percentLength * 2;

    const sum = arr
            .sort((a,b) => a-b)
            .slice(percentLength, length - percentLength)   
            .reduce((a,b) => a+b, 0)
    
    const mean = sum / n
    
    return mean;
};