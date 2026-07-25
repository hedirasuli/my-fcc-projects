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

    // Step 2: Split the email into username and domain parts
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    // Step 3: Get the length of the username
    const len = username.length;

    // Step 4: If username is 2 characters or fewer, return it unmasked
    // Reason: With 1 or 2 chars, masking would hide all or most of it
    if (len <= 2) {
        return username + domain;
    }

     // Step 5: Extract the first character of the username
    // This will be visible (not masked)
    const firstChar = username[0];
    // Step 6: Extract the last character of the username
   // This will also be visible (not masked)
    const lastChar = username[len - 1];

    // Step 7: Calculate how many asterisks are needed
    // We need to mask all characters except the first and last
    // Example: "myEmail" (7 chars) -> keep 'm' and 'l', mask 5 chars
    const asteriskCount = len - 2;
    
    // Step 8: Generate the mask string
    // repeat() creates a string with the specified number of asterisks
    // Example: '*'.repeat(5) -> "*****"
    const mask = '*'.repeat(asteriskCount);

    // Step 9: Construct the final masked email
    // Format: [firstChar] + [mask] + [lastChar] + [domain]
    // Example: "m" + "*****" + "e" + "@email.com" = "m****e@email.com"
    return firstChar + mask + lastChar + domain;
}

// Test the function with an example email
const email = "myEmail@email.com";

// Log the result to the console
console.log(maskEmail(email)); // Output: "m****e@email.com"