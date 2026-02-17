def binary_search(search_list, value):
    path_to_target = []
    low = 0
    high = len(search_list) - 1

    while low <= high:
        # Calculate the midpoint of the current range
        mid = (low + high) // 2
        value_at_middle = search_list[mid]
        
        # Record the path taken
        path_to_target.append(value_at_middle)

        # Check if the target is found
        if value == value_at_middle:
            return path_to_target, f"Value found at index {mid}"
        # If value is greater, ignore the left half
        elif value > value_at_middle:
            low = mid + 1
        # If value is smaller, ignore the right half
        else:
            high = mid - 1
            
    # Return empty list and failure message if not found
    return [], "Value not found"

# Testing the function
print(binary_search([1, 2, 3, 4, 5, 9], 4))