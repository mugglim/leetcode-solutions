INF = int(1e10)

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if amount == 0: return 0
        
        dp = [INF for i in range(amount+1)]
        
        for coin in coins:
            if coin <= amount: dp[coin] = 1
        
        for i in range(1, amount + 1):
            for coin in coins:
                if i >= coin and dp[i-coin] >= 1: 
                    dp[i] = min(dp[i], dp[i-coin] + 1)
        
        
        return dp[amount] if dp[amount] != INF else -1 