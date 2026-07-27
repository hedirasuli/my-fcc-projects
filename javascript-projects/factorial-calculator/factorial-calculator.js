
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

    let result = 1;
    for (let i = 1; i <= inputNumber; i++ ) {
        result = result * i;
    }
 return result;
}
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);