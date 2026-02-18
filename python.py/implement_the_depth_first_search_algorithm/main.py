def dfs(matrix, start_node):
    # Initialize the stack with the starting node
    stack = [start_node]
    # Keep track of visited nodes to avoid infinite loops
    visited = []
    
    # Continue as long as there are nodes to explore in the stack
    while stack:
        # Pop the last element added (LIFO)
        current = stack.pop()
        
        # If node hasn't been visited yet, process it
        if current not in visited:
            visited.append(current)
            
            # Find neighbors using the adjacency matrix
            # We iterate through the row of the current node
            for neighbor, has_edge in enumerate(matrix[current]):
                # If there is an edge and the neighbor hasn't been visited
                if has_edge == 1 and neighbor not in visited:
                    stack.append(neighbor)
                    
    return visited