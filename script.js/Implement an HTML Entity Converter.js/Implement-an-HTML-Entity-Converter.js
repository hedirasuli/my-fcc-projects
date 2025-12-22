/**
 * @param {string} str - رشته ورودی حاوی کاراکترهای خاص.
 * @returns {string} رشته جدید با Entityهای HTML.
 */

function convertHTML(str) {
    
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    };

   
    return str.replace(/[&<>"']/g, (match) => htmlEntities[match]);
}