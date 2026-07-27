
/**
 * Factorial Calculator - Calculates the factorial of a given positive integer.
 * 
 * Factorial definition: n! = n × (n-1) × (n-2) × ... × 1
 * Examples:
 *   5! = 5 × 4 × 3 × 2 × 1 = 120
 *   3! = 3 × 2 × 1 = 6
 *   0! = 1 (by definition)
 * 
 * @param {number} inputNumber - The number to calculate the factorial for (1-20).
 * @returns {number} The factorial result.
 * 
 * @example
 * // returns 120
 * factorialCalculator(5);
 * 
 * @example
 * // returns 1 (by definition)
 * factorialCalculator(0);
 */

// Step 1: Define the input number
// This is the number we want to calculate the factorial for
const num = 5;

/**
 * Calculates the factorial of a given positive integer.
 * @param {number} inputNumber - The number to calculate the factorial for (1-20).
 * @returns {number} The factorial result.
 */

function factorialCalculator(inputNumber) {
    // Initialize result to 1 (multiplicative identity)
    // This ensures correct multiplication even if the loop doesn't run (inputNumber = 0)
    let result = 1;

    // Loop from 1 to inputNumber (inclusive)
  // Each iteration multiplies result by the current number
  // Example for inputNumber = 5:
  //   i=1: result = 1 × 1 = 1
  //   i=2: result = 1 × 2 = 2
  //   i=3: result = 2 × 3 = 6
  //   i=4: result = 6 × 4 = 24
  //   i=5: result = 24 × 5 = 120
    for (let i = 1; i <= inputNumber; i++ ) {
        result = result * i;
    }
    // Return the final factorial result

 return result;
}
// Step 2: Calculate the factorial of the input number
// Calls the factorialCalculator function with the input number (5)
const factorial = factorialCalculator(num);

// Step 3: Create a formatted result message
// Uses template literal for string interpolation
const resultMsg = `Factorial of ${num} is ${factorial}`;
// Step 4: Output the result to the console
// Prints: "Factorial of 5 is 120"
console.log(resultMsg);