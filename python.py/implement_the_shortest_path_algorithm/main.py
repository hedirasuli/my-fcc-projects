# Standard infinity value for unreachable nodes
INF = float('inf')

def shortest_path(matrix, start_node, target_node=None):
    # Number of nodes in the graph
    n = len(matrix)
    
    # Initialize distances to infinity and start node to 0
    distances = [INF] * n
    distances[start_node] = 0
    
    # Track the path taken to reach each node
    paths = [[node_no] for node_no in range(n)]
    
    # Keep track of visited nodes to avoid processing twice
    visited = [False] * n
    
    # Main loop to process each node in the graph
    for _ in range(n):
        min_distance = INF
        current = -1
        
        # Select the unvisited node with the smallest distance
        for node_no in range(n):
            if not visited[node_no] and distances[node_no] < min_distance:
                min_distance = distances[node_no]
                current = node_no
        
        # Break the loop if no more reachable nodes are found
        if current == -1:
            break
            
        # Mark the selected node as visited
        visited[current] = True
        
        # Check all neighbors of the current node
        for node_no in range(n):
            distance = matrix[current][node_no]
            
            # Verify if neighbor is reachable and unvisited
            if distance != INF and not visited[node_no]:
                new_distance = distances[current] + distance
                
                # Update path and distance if a shorter route is found
                if new_distance < distances[node_no]:
                    distances[node_no] = new_distance
                    paths[node_no] = paths[current] + [node_no]

    # Determine which nodes to display (all or a specific target)
    targets = [target_node] if target_node is not None else range(n)
    
    for node_no in targets:
        # Skip start node and unreachable nodes in output
        if node_no == start_node or distances[node_no] == INF:
            continue
        
        # Format the path using a generator expression and join
        string_path = (str(n) for n in paths[node_no])
        path = ' -> '.join(string_path)
        
        # Print formatted results
        print(f'\n{start_node}-{node_no} distance: {distances[node_no]}\nPath: {path}')

    return distances, paths

# Example usage (Make sure adj_matrix is defined before calling)
# shortest_path(adj_matrix, 0, 5)