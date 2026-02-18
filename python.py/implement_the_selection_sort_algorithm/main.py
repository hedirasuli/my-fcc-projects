def selection_sort(lst):
    # Get the length of the list
    n = len(lst)
    
    # Traverse through all list elements
    for i in range(n):
        # Assume the current position is the minimum
        min_index = i
        
        # Iterate through the unsorted portion to find the actual minimum
        for j in range(i + 1, n):
            if lst[j] < lst[min_index]:
                # Update min_index if a smaller element is found
                min_index = j
        
        # Swap the found minimum element with the first unsorted element
        # This modification happens in-place
        lst[i], lst[min_index] = lst[min_index], lst[i]
        
    # Return the modified list as per the user stories
    return lst

# Testing the function
if __name__ == '__main__':
    numbers = [33, 1, 89, 2, 67, 245]
    print("Before:", numbers)
    selection_sort(numbers)
    print("After: ", numbers)