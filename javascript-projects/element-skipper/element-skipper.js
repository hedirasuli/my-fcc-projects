/**

 * @param {Array<any>} arr
 * @param {Function} func 
 * @returns {Array<any>}
 */

function dropElements(arr, func) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        
        // If current element passes the test function
        if (func(arr[i])) {

            // Return array from current index to end
            return arr.slice(i);
        }
    }

    // If no element passes, return empty array
    return [];
}