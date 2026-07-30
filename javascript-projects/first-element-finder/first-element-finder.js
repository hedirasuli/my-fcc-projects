/**
 * Find the first element in an array that passes a test function.
 * @param {Array} arr - The array to search
 * @param {Function} func - Test function that returns true/false
 * @returns {*} - First element that passes the test, or undefined if none found
 */

function findElement(arr, func) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If current element passes the test
        if (func(arr[i])) { 
            // Return that element immediately
            return arr[i];
        }
    }
    // If no element passes, return undefined
    return undefined;
}