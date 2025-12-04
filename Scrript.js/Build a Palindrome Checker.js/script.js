// DOM Element Selection
// Selects the input field where the user enters text.
const textInput = document.getElementById('text-input');
// Selects the button used to trigger the palindrome check.
const checkBtn = document.getElementById('check-btn');
// Selects the element where the result will be displayed.
const resultElement = document.getElementById('result');

/**
 * Checks if a given string is a palindrome after cleaning it.
 * A palindrome reads the same forwards and backwards, ignoring 
 * punctuation, case, and spacing.
 *
 * @param {string} inputStr - The raw string input from the user.
 */
const checkPalindrome = (inputStr) => {
    // 1. Cleanse the String
    // - Use a Regular Expression to remove all non-alphanumeric characters (punctuation, symbols, spaces).
    // - Convert the entire string to lowercase for case-insensitive comparison.
    const cleanedStr = inputStr.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // 2. Reverse the Cleaned String
    // - split(''): Converts the string into an array of characters.
    // - reverse(): Reverses the order of the elements in the array.
    // - join(''): Joins the characters back into a single string.
    const reversedStr = cleanedStr.split('').reverse().join('');

    // 3. Palindrome Check
    // If the cleaned string is equal to its reversed version, it is a palindrome.
    const isPalindrome = cleanedStr === reversedStr;

    // 4. Display the Result
    const originalInput = inputStr; // Keep the original input for the display message

    // Construct the result message based on the check
    if (isPalindrome) {
        // CORRECTED: Ensure template literal is used with backticks (`)
        resultElement.textContent = `${originalInput} is a palindrome.`;
    } else {
        // CORRECTED: Ensure template literal is used with backticks (`)
        resultElement.textContent = `${originalInput} is not a palindrome.`;
    }
};


// Event Listener for the Check Button
checkBtn.addEventListener('click', () => {
    // Get the current value from the text input field
    const inputValue = textInput.value;

    // Input Validation (User Story: Alert if input is empty)
    if (inputValue === '') {
        alert('Please input a value.');
        return; // Stops the execution of the function
    }

    // Clear any previous result text
    resultElement.textContent = '';
    
    // Call the main palindrome checking function with the user's input
    checkPalindrome(inputValue);
});