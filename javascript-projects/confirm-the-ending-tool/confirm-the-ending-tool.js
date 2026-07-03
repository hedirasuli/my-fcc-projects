/**
 * confirmEnding - Checks if a string ends with a specified substring.
 * 
 * @param {string} str - The string to check.
 * @param {string} ending - The ending to confirm.
 * @returns {boolean} - True if str ends with ending, false otherwise.
 * 
 * Example: confirmEnding("Bastian", "n") → true
 * Example: confirmEnding("Hello World", "world") → false
 */
function confirmEnding(str, ending) {
    // Get the length of the ending substring
    const strEnding = ending.length;
    // Extract the portion of the string that is the same length as the ending
    // Using negative slicing (-strEnding) gets the last N characters
    const endOfStr = str.slice(-strEnding);
    // Compare the extracted portion with the ending substring
    // Return true if they match exactly, false otherwise
    return endOfStr === ending;
}
// Test cases - expected outputs are commented
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("OpenAI", "AI")); // true
console.log(confirmEnding("Hello World", "world")); // false