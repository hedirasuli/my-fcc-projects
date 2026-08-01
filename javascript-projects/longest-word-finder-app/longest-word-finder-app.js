/**
 * Find the length of the longest word in a sentence.
 * @param {string} sentence - The input sentence
 * @returns {number} - Length of the longest word
 */

function findLongestWordLength(sentence) {
    // Split sentence into an array of words
    const words = sentence.split(' ');
    let maxLength = 0;
    // Loop through each word and track the maximum length
     for (let i = 0; i < words.length; i++) {
        
        if (words[i].length > maxLength) {
        
            maxLength = words[i].length;
        }
    }
    
    
    return maxLength;
}

// Test cases with outputs
console.log(typeof findLongestWordLength("The quick brown fox jumped over the lazy dog")); // number


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));  // 6


console.log(findLongestWordLength("May the force be with you"));  // 5


console.log(findLongestWordLength("Google do a barrel roll")); // 6


console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8


console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19