/**
 * Check if all letters in the second string are present in the first string.
 * @param {string[]} arr - Array with two strings [target, test]
 * @returns {boolean} - True if all letters in test exist in target, false otherwise
 */

function mutation(arr) {
// Convert both strings to lowercase for case-insensitive comparison
const target = arr[0].toLowerCase();
const test = arr[1].toLowerCase();

// Loop through each character in the test string
for (let i = 0; i < test.length; i++) {
    const char = test[i];

    // If character is NOT found in target, return false
    if (target.indexOf(char) === -1){
        return false;
    }
}
// All characters were found in target
return true;
}