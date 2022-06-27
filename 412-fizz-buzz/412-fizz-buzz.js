/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const mapX = (x) => {
        if(x % 3 === 0 && x % 5 === 0) return "FizzBuzz"
        if(x % 3 === 0) return "Fizz"
        if(x % 5 === 0) return "Buzz"
        return x.toString();
    }
    
    return Array.from({length :n}, (_, idx) => mapX(idx+1))
};