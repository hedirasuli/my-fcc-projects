// Define the type for a Laptop
interface Laptop {
    brand: string;
    ram: number;
    hasSSD: boolean;
}

const myLaptop: Laptop = {
    brand: "MacBook",
    ram: 16,
    hasSSD: true
};

console.log(`My ${myLaptop.brand} has ${myLaptop.ram}GB RAM.`);