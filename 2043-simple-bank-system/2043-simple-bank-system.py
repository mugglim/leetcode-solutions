class Bank:

    def __init__(self, balance: List[int]):
        self.balance = [-1] + balance
        self.size = len(balance)

    def checkAcountNumber(self, account: int) -> bool:
        return account >= 1 and account <= self.size
        
    def hasMoney(self, account, money):        
        return self.balance[account] >= money
        
    def transfer(self, account1: int, account2: int, money: int) -> bool:
        if not self.checkAcountNumber(account1): return False
        if not self.checkAcountNumber(account2): return False
        if not self.hasMoney(account1, money): return False
        
        self.balance[account1] -= money
        self.balance[account2] += money

        return True
        

    def deposit(self, account: int, money: int) -> bool:
        if not self.checkAcountNumber(account): return False
        
        self.balance[account] += money
        return True
    

    def withdraw(self, account: int, money: int) -> bool:
        if not self.checkAcountNumber(account): return False
        if not self.hasMoney(account, money): return False
        
        self.balance[account] -= money
        return True

# Your Bank object will be instantiated and called as such:
# obj = Bank(balance)
# param_1 = obj.transfer(account1,account2,money)
# param_2 = obj.deposit(account,money)
# param_3 = obj.withdraw(account,money)