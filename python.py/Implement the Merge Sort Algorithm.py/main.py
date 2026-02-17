def merge_sort(array):
    # Base case: if the array has 1 or 0 elements, it's already sorted
    if len(array) <= 1:
        return

    # Find the middle point and split the array into two halves
    middle_point = len(array) // 2
    left_part = array[:middle_point]
    right_part = array[middle_point:]

    # Recursively call merge_sort on both halves
    merge_sort(left_part)
    merge_sort(right_part)

    # Pointers for tracking indices in left, right and main array
    left_array_index = 0
    right_array_index = 0
    sorted_index = 0

    # Compare elements from both parts and merge them in sorted order
    while left_array_index < len(left_part) and right_array_index < len(right_part):
        if left_part[left_array_index] < right_part[right_array_index]:
            array[sorted_index] = left_part[left_array_index]
            left_array_index += 1
        else:
            array[sorted_index] = right_part[right_array_index]
            right_array_index += 1
        sorted_index += 1

    # Copy any remaining elements from the left_part
    while left_array_index < len(left_part):
        array[sorted_index] = left_part[left_array_index]
        left_array_index += 1
        sorted_index += 1

    # Copy any remaining elements from the right_part
    while right_array_index < len(right_part):
        array[sorted_index] = right_part[right_array_index]
        right_array_index += 1
        sorted_index += 1

if __name__ == '__main__':
    # Initialize a test list
    numbers = [4, 10, 6, 14, 2, 1, 8, 5]
    print('Unsorted array: ')
    print(numbers)
    
    # Execute the sorting algorithm
    merge_sort(numbers)
    
    print('Sorted array: ')
    print(numbers)