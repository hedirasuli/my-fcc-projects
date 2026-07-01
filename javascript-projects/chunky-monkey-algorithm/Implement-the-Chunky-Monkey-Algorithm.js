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

   const chunkArray = [];
   for (let i = 0; i < arr.length; i +=size) {
    chunkArray.push(arr.slice(i, i + size));
   }

return chunkArray;
}