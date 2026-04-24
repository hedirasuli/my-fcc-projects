// The <T> is a placeholder for any type
function wrapInArray<T>(value: T): T[] {
    return [value];
}

// Case 1: Using it with numbers
const numberArray = wrapInArray<number>(10);
// Case 2: Using it with strings
const stringArray = wrapInArray<string>("FreeCodeCamp");

console.log(numberArray); // [10]
console.log(stringArray); // ["FreeCodeCamp"]