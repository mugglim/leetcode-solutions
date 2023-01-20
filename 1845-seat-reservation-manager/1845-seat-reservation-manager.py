import heapq

class SeatManager:

    def __init__(self, n: int):
        self.seats = []
        
        for i in range(1, n+1):
            heapq.heappush(self.seats, i)
        

    def reserve(self) -> int:
        seat = heapq.heappop(self.seats)
        return seat

    def unreserve(self, seatNumber: int) -> None:
        heapq.heappush(self.seats, seatNumber)
        
