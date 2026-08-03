/**
 * Add two numbers together. If only one argument is provided, return a function
 * that expects the second number and returns their sum.
 * @param {number} a - First number
 * @param {number} [b] - Second number (optional)
 * @returns {number|function|undefined} - Sum of two numbers, a function for partial application, or undefined for invalid input
 */

function addTogether(a, b) {
    // Helper function to check if a value is a number
    const isNumber = (val) => typeof val === 'number';
    // If first argument is not a number, return undefined
    if (!isNumber(a)) {
        return undefined;
    }
    // Case 1: Both arguments provided
    if (arguments.length === 2) {
        if (isNumber(b)) {
            return a + b;
        } else {
            return undefined;
        }
    }
    // Case 2: Only one argument provided → return a function
    if (arguments.length === 1) {
        return function(b2) {
            if (isNumber(b2)) {
                return a + b2;
            } else {
                return undefined;
            }
        };
    }
}