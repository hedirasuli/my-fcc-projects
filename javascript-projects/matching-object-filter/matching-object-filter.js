/**
 * Find objects in a collection that match all key-value pairs from a source object.
 * @param {Array} collection - Array of objects to search through
 * @param {Object} source - Object containing the key-value pairs to match
 * @returns {Array} - Filtered array of matching objects
 */
function whatIsInAName(collection, source) {
  // Get all keys from the source object
  const sourceKeys = Object.keys(source);

  // Filter the collection: keep only objects that match ALL source keys
  return collection.filter(obj => {
    // Check if every key exists in obj AND has the same value
    return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });
}