/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const maxPile = Math.max(...piles);
    let [lo, hi] = [1, maxPile];
    let k = 0;
    
    const canEatAllBanana = (piles, k, h) => {
        let count = 0;
        
        for(const pile of piles){
            count += Math.ceil(pile / k);
            
            if(count > h) return false;
        }
        
        return true;
    }
    
    
    while(lo <= hi){
        const mid = Math.floor((lo + hi) / 2); 
        
        if(canEatAllBanana(piles, mid, h)){
            hi = mid - 1;
            k = mid;
        } else{
            lo = mid + 1;
        }
    }
    
    return k;
};
