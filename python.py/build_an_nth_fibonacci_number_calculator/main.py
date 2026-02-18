def fibonacci(n):
    # Base case for n = 0
    if n == 0:
        return 0
    
    # Initialize the sequence with the first two Fibonacci numbers
    sequence = [0, 1]
    
    # Use dynamic programming to build the sequence up to n
    # Each number is the sum of the two preceding numbers
    for i in range(2, n + 1):
        # Calculate the next number in the sequence
        next_val = sequence[i - 1] + sequence[i - 2]
        # Append to the list to store it for future calculations
        sequence.append(next_val)
        
    # Return the n-th number from the sequence
    return sequence[n]