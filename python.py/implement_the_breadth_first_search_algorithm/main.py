def gen_parentheses(pairs):
    # Validate that input is an integer
    if not isinstance(pairs, int):
        return 'The number of pairs should be an integer'
    
    # Ensure the number of pairs is at least 1
    if pairs < 1:
        return 'The number of pairs should be at least 1'

    result = []
    # Initialize queue with (current_string, open_count, close_count)
    queue = [('', 0, 0)]
    
    while queue:
        # Pop the first element to achieve BFS (FIFO)
        current, opens_used, closes_used = queue.pop(0)
        
        # If the string reached the maximum length, add to results
        if len(current) == 2 * pairs:
            result.append(current)
        else:
            # If we can still add an opening parenthesis, do it
            if opens_used < pairs:
                queue.append((current + '(', opens_used + 1, closes_used))
            
            # If balance allows, add a closing parenthesis
            if closes_used < opens_used:
                queue.append((current + ')', opens_used, closes_used + 1))
    
    return result

# Test the function with 3 pairs
print(gen_parentheses(3))