/**
 * calculateSum - Adds two numbers together.
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {number} - The sum of num1 and num2.
 */

function calculateSum(num1, num2) { return num1 + num2; }
/**
 * calculateDifference - Subtracts num2 from num1.
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {number} - The difference of num1 minus num2.
 */

function calculateDifference(num1, num2) { return num1 - num2; }
/**
 * calculateProduct - Multiplies two numbers.
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {number} - The product of num1 and num2.
 */

function calculateProduct(num1, num2) { return num1 * num2; }
/**
 * calculateQuotient - Divides num1 by num2.
 * @param {number} num1 - Numerator.
 * @param {number} num2 - Denominator.
 * @returns {number|string} - The quotient, or "Error" if denominator is 0.
 */
function calculateQuotient(num1, num2) { 
    return num2 === 0 ? "Error" : num1 / num2; 
}
/**
 * calculateSquare - Squares a number.
 * @param {number} num - The number to square.
 * @returns {number} - The squared value.
 */

function calculateSquare(num) { return num ** 2; }
/**
 * calculateSquareRoot - Returns the square root of a number.
 * @param {number} num - The number to find the square root of.
 * @returns {number} - The square root of num.
 */
function calculateSquareRoot(num) { return Math.sqrt(num); }

// --- UI Logic ---

let display = document.getElementById('result');

// Add numbers or operators to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Perform square or square root immediately
function performSpecial(type) {
    let currentVal = parseFloat(display.value);
    if (isNaN(currentVal)) return;

    if (type === 'sqr') {
        display.value = calculateSquare(currentVal);
    } else if (type === 'sqrt') {
        display.value = calculateSquareRoot(currentVal);
    }
}

// Main calculation logic using your functions
function calculate() {
    let input = display.value;
    let result;

    try {
        // Splitting the input to identify numbers and operator
        // This is a simple parser for basic operations
        if (input.includes('+')) {
            let parts = input.split('+');
            result = calculateSum(parseFloat(parts[0]), parseFloat(parts[1]));
        } else if (input.includes('-')) {
            let parts = input.split('-');
            result = calculateDifference(parseFloat(parts[0]), parseFloat(parts[1]));
        } else if (input.includes('*')) {
            let parts = input.split('*');
            result = calculateProduct(parseFloat(parts[0]), parseFloat(parts[1]));
        } else if (input.includes('/')) {
            let parts = input.split('/');
            result = calculateQuotient(parseFloat(parts[0]), parseFloat(parts[1]));
        } else {
            result = input; // No operation found
        }
        // Update the display with the calculated result
        display.value = result;
    } catch (e) {
        // If any error occurs (e.g., malformed input), show "Error"
        display.value = "Error";
    }
}