/**

 * @param {Array<any>} arr
 * @param {Function} func 
 * @returns {Array<any>}
 */


function dropElements(arr, func) {
   

    for (let i = 0; i < arr.length; i++) {
        
    
        if (func(arr[i])) {
           
            return arr.slice(i);
        }
    }

 
    return [];
}