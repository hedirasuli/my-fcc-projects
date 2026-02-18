from abc import ABC, abstractmethod
from typing import List

# --- Data Model ---
class Product:
    def __init__(self, name: str, price: float) -> None:
        self.name = name
        self.price = price

# --- Abstract Base Class (Strategy Interface) ---
class DiscountStrategy(ABC):
    @abstractmethod
    def is_applicable(self, product: Product, user_tier: str) -> bool:
        """Check if the discount can be applied."""
        pass

    @abstractmethod
    def apply_discount(self, product: Product) -> float:
        """Calculate the price after applying the discount."""
        pass

# --- Concrete Strategy 1: Percentage Discount ---
class PercentageDiscount(DiscountStrategy):
    def __init__(self, percentage: int) -> None:
        self.percentage = percentage

    def is_applicable(self, product: Product, user_tier: str) -> bool:
        # This discount is always available regardless of user tier
        return True

    def apply_discount(self, product: Product) -> float:
        # Subtract the percentage amount from the price
        return product.price * (1 - self.percentage / 100)

# --- Concrete Strategy 2: Fixed Amount Discount ---
class FixedAmountDiscount(DiscountStrategy):
    def __init__(self, amount: int) -> None:
        self.amount = amount

    def is_applicable(self, product: Product, user_tier: str) -> bool:
        # Only apply if the discount is less than 90% of the price
        return product.price * 0.9 > self.amount

    def apply_discount(self, product: Product) -> float:
        # Subtract the fixed amount from the price
        return product.price - self.amount

# --- Concrete Strategy 3: Premium User Discount ---
class PremiumUserDiscount(DiscountStrategy):
    def is_applicable(self, product: Product, user_tier: str) -> bool:
        # Only apply if the user tier is 'premium' (case-insensitive)
        return user_tier.lower() == 'premium'

    def apply_discount(self, product: Product) -> float:
        # Apply a fixed 20% discount for premium members
        return product.price * 0.8

# --- The Context (Discount Engine) ---
class DiscountEngine:
    def __init__(self, strategies: List[DiscountStrategy]) -> None:
        # Store all available discount strategies
        self.strategies = strategies

    def calculate_best_price(self, product: Product, user_tier: str) -> float:
        # Initialize list with the original price as the default option
        prices = [product.price]
        
        # Check each strategy and collect discounted prices
        for strategy in self.strategies:
            if strategy.is_applicable(product, user_tier):
                discounted = strategy.apply_discount(product)
                prices.append(discounted)
        
        # Return the lowest price found
        return min(prices)

# --- Main Execution ---
if __name__ == '__main__':
    # Initialize objects
    product = Product('Wireless Mouse', 50.0)
    user_tier = 'Premium'
    
    # Define available discount options
    strategies = [
        PercentageDiscount(10),
        FixedAmountDiscount(5),
        PremiumUserDiscount()
    ]
    
    # Run the engine
    engine = DiscountEngine(strategies)
    best_price = engine.calculate_best_price(product, user_tier)
    
    # Output the result
    print(f"Best price for {product.name} for {user_tier} user: ${best_price:.2f}")