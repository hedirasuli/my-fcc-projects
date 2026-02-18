class Category:
    def __init__(self, name):
        # Initialize the category with a name and an empty ledger
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        # Add a positive amount and description to the ledger
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        # Check if there are enough funds before withdrawing
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        # Calculate current balance by summing all amounts in ledger
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, category):
        # Transfer money between categories using withdraw and deposit methods
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        # Helper method to see if an amount can be covered by the balance
        return amount <= self.get_balance()

    def __str__(self):
        # Create a formatted string representation of the budget category
        title = f"{self.name:*^30}\n"
        items = ""
        for item in self.ledger:
            # Format description (23 chars) and amount (7 chars, 2 decimal places)
            desc = f"{item['description'][:23]:23}"
            amt = f"{item['amount']:>7.2f}"
            items += f"{desc}{amt}\n"
        
        total = f"Total: {self.get_balance():.2f}"
        return title + items + total

def create_spend_chart(categories):
    # Function to create a bar chart based on withdrawals
    title = "Percentage spent by category\n"
    
    # Calculate total spent (withdrawals only)
    spent_per_category = []
    for cat in categories:
        spending = sum(-item['amount'] for item in cat.ledger if item['amount'] < 0)
        spent_per_category.append(spending)
    
    total_spent = sum(spent_per_category)
    
    # Calculate percentages rounded down to the nearest 10
    percentages = [(s / total_spent * 100) // 10 * 10 for s in spent_per_category]
    
    chart = ""
    # Build the Y-axis and bars from 100 down to 0
    for i in range(100, -1, -10):
        chart += f"{str(i).rjust(3)}| "
        for p in percentages:
            chart += "o  " if p >= i else "   "
        chart += "\n"
        
    # Build the X-axis separator
    chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"
    
    # Build the vertical category names
    names = [cat.name for cat in categories]
    max_len = max(len(name) for name in names)
    names_padded = [name.ljust(max_len) for name in names]
    
    for i in range(max_len):
        chart += "     "
        for name in names_padded:
            chart += f"{name[i]}  "
        if i < max_len - 1:
            chart += "\n"
            
    return title + chart