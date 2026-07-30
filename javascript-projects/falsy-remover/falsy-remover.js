/**
 * Remove all falsy values from an array.
 * @param {Array} arr - The array to filter
 * @returns {Array} - New array with only truthy values
 */
function bouncer(arr) {

    // filter(Boolean) keeps only truthy values
   // Falsy values: false, null, 0, "", undefined, NaN
    return arr.filter(Boolean);
}