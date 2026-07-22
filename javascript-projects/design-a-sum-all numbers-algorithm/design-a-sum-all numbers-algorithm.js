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
    // Step 3: Initialize a variable to store the cumulative sum
   // Starting from 0 ensures we don't have any leftover value
    let totalSum = 0;
     // Step 4: Loop through all numbers from min to max (inclusive)
    // For each iteration, add the current number to totalSum
    // Example: if min=1 and max=4, loop runs for i=1,2,3,4
    for (let i = min; i <= max; i++) {
    // Add the current number to the running total
    // totalSum = totalSum + i (shortened to totalSum += i)
    totalSum += i;
    }

    // Step 5: Return the final sum of all numbers in the range
    // After the loop completes, totalSum contains the answer
    return totalSum;
}