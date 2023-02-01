import heapq

class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
        return sorted(
            [[i,j] for i in range(rows) for j in range(cols)], 
            key=lambda x:(abs(rCenter-x[0]) + abs(cCenter-x[1]))
         )