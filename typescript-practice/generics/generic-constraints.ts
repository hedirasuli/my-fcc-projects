// Define an interface for anything that has a length property
interface Lengthy{
    length: number;
}
// T extends Lengthy means: "T can be anything, as long as it has .length"
function logLength<T extends Lengthy>(item: T): void {
    console.log(`The length is: ${item.length}`);
}
// Testing
logLength("Hello TS");       // Works (String has length)
logLength([1, 2, 3, 4, 5]);  // Works (Array has length)
logLength({ length: 10, name: "Object" }); // Works (Object has length)

// logLength(100); // ERROR: Number doesn't have .length!