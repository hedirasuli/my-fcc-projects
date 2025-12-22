/**
 * Function that receives an array of two numbers and returns the sum of
 * all the numbers between them (including the numbers themselves).
 * @param {number[]} arr - An array containing two numbers [n, m].
 * @returns {number} The sum of all numbers in the range.
 */
 function sumAll(arr) {
  

    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);

    let totalSum = 0;

    
    
    for (let i = min; i <= max; i++) {
      
      
        totalSum += i;
    }

   
    return totalSum;
}