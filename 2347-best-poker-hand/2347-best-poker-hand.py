class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        if len(set(suits)) == 1: return "Flush"
        
        counter = Counter(ranks)
        
        isThreeOfAKind = False
        isPair = False
        
        for count in counter.values():
            if count >= 3: isThreeOfAKind = True
            if count >= 2: isPair = True
        
        if isThreeOfAKind: return "Three of a Kind"
        if isPair: return "Pair"
        
        return "High Card"
