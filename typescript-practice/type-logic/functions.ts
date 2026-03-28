// 1. A function with typed parameters and a return type
function  addNumbers(a: number , b: number): number {
    return a+b;
}

// 2. A function with a Union Type in parameters
function formatDisplay(value: string | number): void {
    console.log("The display value is " + value);
}

// Testing the functions
let result = addNumbers(5, 10);
console.log("Result of Additon:", result);

formatDisplay(200);
formatDisplay("Success");