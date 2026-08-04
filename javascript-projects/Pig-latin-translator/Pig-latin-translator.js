/**
 * Translate a word to Pig Latin.
 * @param {string} str - The word to translate
 * @returns {string} - The Pig Latin translation
 */
function translatePigLatin(str) {
  // Regex to match leading consonants (everything except vowels)
  const consonantRegex = /^[^aeiou]+/; 

  // Find the leading consonant cluster
  const consonantMatch = str.match(consonantRegex);
  // Case 1: No leading consonants (word starts with a vowel)
  if (consonantMatch === null) {
    
    // Check if word contains at least one vowel
    if (/[aeiou]/.test(str)) {
      // Starts with vowel → add "way" at the end
        return str + "way";
     } else {
      // No vowels at all → add "ay" at the end
        return str + "ay";
     }
     // Case 2: Has leading consonants
     } else {
    // Extract the leading consonant cluster
    const firstConsonants = consonantMatch[0]; 
    // Get the rest of the word (after the consonants)
    const remainingPart = str.slice(firstConsonants.length);
    // Move consonants to end and add "ay"
    return remainingPart + firstConsonants + "ay";
  }
}