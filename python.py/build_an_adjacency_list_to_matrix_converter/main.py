def adjacency_list_to_matrix(adj_list):
    # Step 1: Determine the number of nodes
    # The number of nodes is equal to the number of keys in the dictionary
    n = len(adj_list)
    
    # Step 2: Initialize the matrix with zeros
    # Creating an n x n matrix filled with 0
    matrix = [[0 for _ in range(n)] for _ in range(n)]
    
    # Step 3: Populate the matrix with 1s for existing edges
    for node in adj_list:
        for neighbor in adj_list[node]:
            matrix[node][neighbor] = 1
            
    # Step 4: Print each row in the adjacency matrix
    for row in matrix:
        print(row)
        
    # Step 5: Return the completed matrix
    return matrix

# Example testing:
# adjacency_list_to_matrix({0: [1, 2], 1: [2], 2: [0, 3], 3: [2]})