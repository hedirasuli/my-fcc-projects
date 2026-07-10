function translatePigLatin(str) {
  
  const consonantRegex = /^[^aeiou]+/; 

 
  const consonantMatch = str.match(consonantRegex);

  if (consonantMatch === null) {
    
    
    if (/[aeiou]/.test(str)) {
       
        return str + "way";
     } else {
       
        return str + "ay";
     }

     } else {
  
    const firstConsonants = consonantMatch[0]; 

    const remainingPart = str.slice(firstConsonants.length);

    return remainingPart + firstConsonants + "ay";
  }
}