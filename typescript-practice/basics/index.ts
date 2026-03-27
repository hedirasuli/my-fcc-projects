export {};
// Define a variable that ONLY accepts numbers
let score: number = 100;

// Try to assign a string to it (This is the WRONG part)
score = 95; 

console.log("The score is: " + score);

let skils: string[] = ["JavaScript", "TypeScript", "Python"];

skils.push("2026"); // This is correct

// (Interface)
interface Laptop{
    brand: string;
    ram: number;
    isSSD: boolean;
}

let myLaptop: Laptop = {
    brand:"Asus",
    ram:16,
    isSSD: true
};
myLaptop.ram = 16; // This is the WRONG part