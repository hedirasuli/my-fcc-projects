def quick_sort(lst):
    # Base case: if the list is empty or has only one element, it's already sorted
    if len(lst) <= 1:
        return lst
    
    # Choose the first element as the pivot
    pivot = lst[0]
    
    # Partition the list into three sublists
    # Elements less than the pivot
    less_than_pivot = [x for x in lst if x < pivot]
    
    # Elements equal to the pivot
    equal_to_pivot = [x for x in lst if x == pivot]
    
    # Elements greater than the pivot
    greater_than_pivot = [x for x in lst if x > pivot]
    
    # Recursively sort the sublists and concatenate them
    return quick_sort(less_than_pivot) + equal_to_pivot + quick_sort(greater_than_pivot)

# Testing the function
if __name__ == '__main__':
    test_list = [87, 11, 23, 18, 18, 23, 11, 56, 87, 56]
    print("Original:", test_list)
    sorted_list = quick_sort(test_list)
    print("Sorted:  ", sorted_list)