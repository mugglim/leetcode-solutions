const getMinAndMax = (nums) => {
    let [min,max] = [nums[0], nums[0]];
    
    for(const n of nums){
        min = Math.min(min, n);
        max = Math.max(max, n);
    }
    return [min, max];
}

const getGcd = (x,y) => {    
    if(x === y || y === 0) return x;
    
    return x > y 
        ? getGcd(y, x % y)
        : getGcd(x, y % x)
}

var findGCD = function(nums) {
    const [min, max] = getMinAndMax(nums);
    
    return getGcd(min, max);
};