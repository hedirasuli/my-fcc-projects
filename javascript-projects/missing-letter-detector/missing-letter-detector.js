/**
 * Find the missing letter in a consecutive alphabetical sequence.
 * @param {string} str - A string of consecutive letters with one missing
 * @returns {string|undefined} - The missing letter, or undefined if none missing
 */
function fearNotLetter(str) {
  // Get the character code of the first letter
  // Example: "abce" → 97 ('a')
  let expectedCode = str.charCodeAt(0);

   // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const actualCode = str.charCodeAt(i);

    // If current letter doesn't match what's expected, missing letter found
    if (actualCode !== expectedCode) {

      // Return the missing letter by converting code back to character
      return String.fromCharCode(expectedCode);
    }

    // Increment expected code for the next letter
    expectedCode++;
  }

   // No missing letter found (e.g., "abcde")
  return undefined;
}