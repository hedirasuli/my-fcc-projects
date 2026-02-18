def dfs_n_queens(n):
    # If n is less than 1, return an empty list
    if n < 1:
        return []
    
    solutions = []
    # Start with an empty board state
    stack = [[]]
    
    while stack:
        current_solution = stack.pop()
        
        # If all queens are placed, we found a solution
        if len(current_solution) == n:
            solutions.append(current_solution)
            continue
            
        row = len(current_solution)
        # To match the expected test order, we iterate backwards 
        # so that column 0 is popped from the stack first.
        for col in range(n - 1, -1, -1):
            is_valid = True
            for r, c in enumerate(current_solution):
                # Column and diagonal conflict check
                if c == col or abs(r - row) == abs(c - col):
                    is_valid = False
                    break
            
            if is_valid:
                # Add new state to explore
                stack.append(current_solution + [col])
                
    return solutions