/**
 * Function that receives an array of two numbers and returns the sum of
 * all the numbers between them (including the numbers themselves).
 * @param {number[]} arr - An array containing two numbers [n, m].
 * @returns {number} The sum of all numbers in the range.
 */
 function sumAll(arr) {
    // Step 1: Find the smallest number in the array
    // Math.min() returns the lowest value of the two numbers
    const min = Math.min(arr[0], arr[1]);
    // Step 2: Find the largest number in the array
    // Math.max() returns the highest value of the two numbers
    const max = Math.max(arr[0], arr[1]);

    let totalSum = 0;

    
    
    for (let i = min; i <= max; i++) {
      
      
        totalSum += i;
    }

   
    return totalSum;
}