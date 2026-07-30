/**
 * Convert special characters in a string to their HTML entities.
 * @param {string} str - String containing special characters
 * @returns {string} - New string with HTML entities
 */
function convertHTML(str) {
    // Mapping of special characters to their HTML entity equivalents
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    };

    // Replace all occurrences of &, <, >, ", ' with their HTML entities
    return str.replace(/[&<>"']/g, (match) => htmlEntities[match]);
}