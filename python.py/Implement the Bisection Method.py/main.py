def square_root_bisection(number, tolerance=1e-7, max_iterations=100):
    # Raise error for negative numbers
    if number < 0:
        raise ValueError("Square root of negative number is not defined in real numbers")
    
    # Handle special cases for 0 and 1
    if number == 0 or number == 1:
        print(f"The square root of {number} is {number}")
        return number

    # Initialize boundaries
    low = 0
    high = max(1, number)
    root = None

    for i in range(max_iterations):
        mid = (low + high) / 2
        square_mid = mid * mid

        # Check for convergence based on the difference between high and low
        # This is a more robust way for Bisection to meet specific test ranges
        if abs(high - low) < tolerance:
            root = mid
            break
        
        # Binary search logic
        if square_mid < number:
            low = mid
        else:
            high = mid
            
    # One last check: if root wasn't set by the tolerance, 
    # use the last mid value found before iterations ran out (unless it's a fail case)
    if root is None:
        # Check if the last mid is close enough (for specific test requirements)
        mid = (low + high) / 2
        if abs(mid * mid - number) <= tolerance:
            root = mid

    if root is None:
        print(f"Failed to converge within {max_iterations} iterations")
        return None
    else:
        print(f"The square root of {number} is approximately {root}")
        return root