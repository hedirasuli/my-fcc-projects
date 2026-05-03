function titleCase(str) {

    let lowerCaseSTR  = str.toLowerCase();
   
    let words = lowerCaseSTR.split(' ');

    let titleCaseWords = words.map(word => {

    if (word.length === 0) {

        return word;
    }

    let firstWord = word.charAt(0).toUpperCase();

    let restOfWord = word.slice(1);

    return firstWord + restOfWord;

    });

    return titleCaseWords.join(' ');
}