// All possible characters for password generation
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";

/**
 * Generate a random password of specified length
 * @param {number} length - Desired password length
 * @returns {string} - Randomly generated password
 */
function generatePassword(length) {

    let password = "";
    // Return empty string if length is invalid
    if (length <= 0) {

        return "";
    }
    // Build password one character at a time
    for (let i = 0; i < length; i++) {
        // Pick a random character from the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);

         password += characters.charAt(randomIndex);
    }
     return password;
}
// Generate a 12-character password
const password = generatePassword(12);
 console.log("Generated password: " + password);