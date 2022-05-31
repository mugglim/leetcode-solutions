/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    const isPrime = (x) => {
        const sqrtX = Math.floor(Math.sqrt(x));
        console.log(sqrtX);
        
        for(let i = 2; i <= sqrtX; i+= 1){
            if(x % i === 0) return false;
        }
        return true;
    }
        
    // // (1) O(nloglogn)
    const prime = new Array(n).fill(true);
        
    [prime[0], prime[1]] = [false, false];
        
    for(let i = 2; i < n; i += 1){
        if(prime[i]){
            for(let j = i * 2; j < n; j += i){
                prime[j] = false;
            }
        }
    }
    
    return prime.filter(isPrime => isPrime === true).length;

    
    // // (2) O(n * sqrt(n))
    // let cnt = 0;
    // for(let i = 2; i < n; i += 1){
    //     if(isPrime(i)) cnt += 1;
    // }
    // return cnt;
};