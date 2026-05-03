/**
 * Generates all unique permutations of a given string.
 * @param {string} str - The remaining characters to permute.
 * @param {string} prefix - The characters already picked for the current permutation.
 * @param {string[]} results - The array to store unique permutations.
 * @returns {string[]} The final list of unique permutations.
 */
function permuteString(str, prefix = "", results = []) {
  // Base Case: If the string is empty, the current prefix is a complete permutation
  if (str.length === 0) {
    // Check for uniqueness before pushing
    if (!results.includes(prefix)) {
      results.push(prefix);
    }
    return results;
  }

  // Recursive Step: Iterate through the string
  for (let i = 0; i < str.length; i++) {
    // Pick the character at index i
    let char = str[i];
    
    // Remaining characters after removing the current one
    let remainingChars = str.slice(0, i) + str.slice(i + 1);
    
    // Recursive call: add picked char to prefix and continue with remaining
    permuteString(remainingChars, prefix + char, results);
  }

  return results;
}