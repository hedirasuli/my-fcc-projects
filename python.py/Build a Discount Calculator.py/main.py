def apply_discount(price, discount):
    # Check if price is a number (int or float)
    if not isinstance(price, (int, float)):
        return "The price should be a number"
    
    # Check if discount is a number (int or float)
    if not isinstance(discount, (int, float)):
        return "The discount should be a number"
    
    # Check if price is greater than 0
    if price <= 0:
        return "The price should be greater than 0"
    
    # Check if discount is within the valid range [0, 100]
    if discount < 0 or discount > 100:
        return "The discount should be between 0 and 100"
    
    # Calculate the discount amount
    # Formula: amount = price * (discount / 100)
    discount_amount = price * (discount / 100)
    
    # Calculate and return the final price
    return price - discount_amount

# Example usage for testing:
# print(apply_discount(100, 20)) # Should return 80.0