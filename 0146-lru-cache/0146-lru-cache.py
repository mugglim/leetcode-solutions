class LRUCache:

    def __init__(self, capacity: int):
        self.keys = {}
        self.capacity = capacity
        

    def get(self, key: int) -> int:
        if key not in self.keys: return -1
        
        value = self.keys[key]
        del self.keys[key]
        self.keys[key] = value
        
        return value
        

    def put(self, key: int, value: int) -> None:
        if key in self.keys:
            del self.keys[key]
            self.keys[key] = value
        else:
            if len(self.keys) == self.capacity:
                lruKey = next(iter(self.keys))
                del self.keys[lruKey]
                
            self.keys[key] = value
                        

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)