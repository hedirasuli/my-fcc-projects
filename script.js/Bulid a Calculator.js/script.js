// --- Your original logic functions ---

function calculateSum(num1, num2) { return num1 + num2; }
function calculateDifference(num1, num2) { return num1 - num2; }
function calculateProduct(num1, num2) { return num1 * num2; }
function calculateQuotient(num1, num2) { 
    return num2 === 0 ? "Error" : num1 / num2; 
}
function calculateSquare(num) { return num ** 2; }
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
        
        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
}