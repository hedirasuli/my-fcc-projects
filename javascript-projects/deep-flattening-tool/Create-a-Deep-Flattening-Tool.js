/**
 * steamrollArray - Flattens a nested array structure into a single-level array.
 * 
 * @param {Array} arr - The nested array to flatten.
 * @returns {Array} - A new array with all elements flattened to a single level.
 * 
 * Example: steamrollArray([1, [2], [3, [[4]]]]) → [1, 2, 3, 4]
 * Example: steamrollArray([[["a"]], [["b"]]]) → ["a", "b"]
 * 
 * This function uses recursion to traverse deeply nested arrays
 * and collect all non-array elements in order.
 */
function steamrollArray(arr) {
  // Initialize an empty array to store flattened elements
  const flattened = [];
  /**
   * flattener - Recursive helper function that processes each element.
   * 
   * @param {*} element - The current element to process (could be array or primitive).
   * 
   * If the element is an array, recursively process each of its elements.
   * If the element is not an array, push it directly to the flattened array.
   */
  function flattener(element) {
    // Check if the current element is an array
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flattener(element[i]);
      }
    } else {
      flattened.push(element);
    }
  }
  // Iterate over the top-level elements of the input array
  for (let i = 0; i < arr.length; i++) {
    flattener(arr[i]);
  }

  return flattened;
}