/**
 * @param {string} string
 * @return {string}
 */

function reverseString(string) {
    let stringArray = string.split('');
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join('');
    return reversedString;
}

console.log("'Hello'", reverseString('Hello')); // 'olleH'
console.log("'Howdy'", reverseString('Howdy'));   // 'ydwoH'
console.log("'Greetings from Earth!'", reverseString('Greetings from Earth!')); // '!htraE morf sgniteerG'
