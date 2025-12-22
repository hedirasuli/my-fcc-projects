const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";

/**
 
 * @param {number} length 
 * @returns {string} 
 */


function generatePassword(length) {

    let password = "";

    if (length <= 0) {

        return "";
    }

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * characters.length);

         password += characters.charAt(randomIndex);
    }
     return password;
}

const password = generatePassword(12);
 console.log("Generated password: " + password);
