// T for the first type, U for the second type
function createPair<T, U>(first : T, second: U): [T, U] {
    return [first, second];
}
// Example 1: string and number
const result1 = createPair<string, number>("Age", 25);

// Example 2: boolean and string
const result2 = createPair<boolean, string>(true, "Success");

console.log(result1); // ["Age", 25]
console.log(result2); // [true, "Success"]

