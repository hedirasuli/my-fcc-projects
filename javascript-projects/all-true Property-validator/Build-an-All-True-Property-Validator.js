/**
 * truthCheck - Checks if a given property (pre) is truthy for every object in a collection.
 * 
 * @param {Array} collection - An array of objects to check.
 * @param {string} pre - The property key to evaluate on each object.
 * @returns {boolean} - Returns true if the property is truthy for all objects, false otherwise.
 * 
 * The every() method tests whether all elements in the array pass the test implemented
 * by the provided function. Here, each object's 'pre' property is evaluated for truthiness.
 */
function truthCheck(collection, pre) {
  
  return collection.every(function(obj) {
    
    return obj[pre];
  });
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false},
 {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");