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
    const strEnding = ending.length;

    const endOfStr = str.slice(-strEnding);

    return endOfStr === ending;
}
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("OpenAI", "AI")); // true
console.log(confirmEnding("Hello World", "world")); // false