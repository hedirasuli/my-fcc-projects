/**
 * Find the largest number in each sub-array.
 * @param {number[][]} arr - 2D array of numbers
 * @returns {number[]} - Array containing the largest number from each sub-array
 */
function largestOfAll(arr) {
     const largestNumbers = [];

     // Loop through each sub-array
    for (let i = 0; i < arr.length; i++) {
  
          const subArray = arr[i];

        // Start with the first element as the largest
        let largestNumInSub = subArray[0];

      
        // Loop through the rest of the sub-array
        for (let j = 1; j < subArray.length; j++) {

            // Update largest if current element is bigger
            if (subArray[j] > largestNumInSub) {
                largestNumInSub = subArray[j];
            }
        }
        // Add the largest number to result array
        largestNumbers.push(largestNumInSub);
    }
   
    return largestNumbers;
}