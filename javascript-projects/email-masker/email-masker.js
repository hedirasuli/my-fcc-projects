/**
 * maskEmail - Masks the username portion of an email address.
 * 
 * This function takes an email address and replaces the middle characters
 * of the username with asterisks (*) for privacy/security purposes.
 * 
 * Rules:
 * - If username length <= 2, no masking is applied
 * - Otherwise, keep the first and last character, mask the middle
 * 
 * @param {string} email - The email address to mask (e.g., "john.doe@example.com")
 * @returns {string} - The masked email address
 * 
 * @example
 * // returns "m****e@email.com" (username: "myEmail" -> m****e)
 * maskEmail("myEmail@email.com");
 * 
 * @example
 * // returns "jo@email.com" (username length <= 2, no masking)
 * maskEmail("jo@email.com");
 * 
 * @example
 * // returns "j***n@email.com" (username: "john" -> j***n)
 * maskEmail("john@email.com");
 */
function maskEmail(email) {
    // Step 1: Find the position of the '@' symbol
    // This separates the username from the domain
    const atIndex = email.indexOf('@');

   
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    
    const len = username.length;

   
    if (len <= 2) {
        return username + domain;
    }

    
    const firstChar = username[0];
    const lastChar = username[len - 1];

    
    const asteriskCount = len - 2;
    
    
    const mask = '*'.repeat(asteriskCount);

    
    return firstChar + mask + lastChar + domain;
}


const email = "myEmail@email.com";


console.log(maskEmail(email));
