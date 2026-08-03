/**
 * Sum all odd Fibonacci numbers up to and including the given number.
 * @param {number} num - Upper limit for Fibonacci numbers
 * @returns {number} - Sum of all odd Fibonacci numbers <= num
 */
function sumFibs(num) {

    // Initialize Fibonacci sequence variables
    let previousNum = 0;  // F(n-2)
    let currentNum = 1;   // F(n-1)
    let oddSum = 0;      // Running sum of odd Fibonacci numbers


    // Generate Fibonacci numbers while currentNum <= num
    while (currentNum <= num) {
       
        // If current Fibonacci number is odd, add to sum
        if (currentNum % 2 !== 0) {
            oddSum += currentNum; 
        }

        // Calculate next Fibonacci number
        const nextNum = previousNum + currentNum;
        
        // Shift variables forward for next iteration
        previousNum = currentNum;
        
        
        currentNum = nextNum;
    }

    return oddSum;
     }