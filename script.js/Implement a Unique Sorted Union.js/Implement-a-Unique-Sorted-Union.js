/**
 * uniteUnique
 * Returns a new array containing unique values from all input arrays,
 * maintaining the order in which the values were first encountered.
 *
 * @param {...Array<number>} arrs - Two or more input arrays (gathered using the Rest Parameter).
 * @returns {Array<number>} The final array with unique elements in order.
 */
function uniteUnique(...arrs) {
  
  const flatArray = arrs.flat();

 
  return flatArray.reduce((uniqueArray, currentElement) => {
    
   
    if (!uniqueArray.includes(currentElement)) {
      
      uniqueArray.push(currentElement);
    }
    
  
    return uniqueArray;
  }, []); 
}

