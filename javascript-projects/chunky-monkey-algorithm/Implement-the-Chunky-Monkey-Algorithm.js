/**
 * chunkArrayInGroups - Splits an array into groups of a specified size.
 * 
 * @param {Array} arr - The array to be split into chunks.
 * @param {number} size - The size of each chunk/group.
 * @returns {Array} - A new array containing sub-arrays (chunks) of the specified size.
 * 
 * Example: chunkArrayInGroups([1, 2, 3, 4, 5, 6], 2) → [[1, 2], [3, 4], [5, 6]]
 * Example: chunkArrayInGroups([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]
 */
function chunkArrayInGroups(arr, size) {
   // Initialize an empty array to store the resulting chunks
   const chunkArray = [];

   // Loop through the array, incrementing by the chunk size each iteration
   for (let i = 0; i < arr.length; i +=size) {
      // Use slice() to extract a chunk starting at i and ending at i + size
      // If i + size exceeds the array length, slice() will go to the end
    chunkArray.push(arr.slice(i, i + size));
   }
   // Return the array containing all chunks
return chunkArray;
}