class BrowserHistory:

    def __init__(self, homepage: str):
        self.history = [homepage]
        self.historyIndex = 0

    def visit(self, url: str) -> None:
        self.history = self.history[:self.historyIndex + 1] 
        self.history.append(url)
        self.historyIndex = len(self.history) - 1
         
    def back(self, steps: int) -> str:
        self.historyIndex = max(0, self.historyIndex - steps)
        return self.history[self.historyIndex]

    def forward(self, steps: int) -> str:
        self.historyIndex = min(len(self.history) -1, self.historyIndex + steps)
        return self.history[self.historyIndex]
    

# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)