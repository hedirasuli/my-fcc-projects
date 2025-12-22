/**
 * param {string} str - The string to check.
 * param {string} ending - The ending to confirm.
 * return {boolean} - True if str ends with ending, false otherwise.
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