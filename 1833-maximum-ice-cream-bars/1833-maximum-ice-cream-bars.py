class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        count = 0
        
        for cost in sorted(costs):
            if coins < cost: break;
            
            coins -= cost
            count += 1
        
        return count;